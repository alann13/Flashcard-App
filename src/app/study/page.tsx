'use client'

import { BookOpen, Box, Brain, CheckCircle, ChevronLeft, ChevronRight, Layers, RotateCcw, Shuffle } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { FlashcardDisplay } from '@/components/flashcard/flashcard-display'
import { Logo } from '@/components/flashcard/logo'
import { StatisticCard } from '@/components/flashcard/statistic-card'
import { TabButton, TabGroup } from '@/components/flashcard/tab-button'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import flashcardData from '@/data.json'
import { Flashcard, getCategories, getStatistics, isMastered } from '@/types/flashcard'

const STORAGE_KEY = 'flashcard-progress'

export default function StudyPage() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [hideMastered, setHideMastered] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Load flashcards from data.json and localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY)
    if (savedProgress) {
      try {
        const savedData = JSON.parse(savedProgress)
        setFlashcards(savedData)
      } catch (error) {
        console.error('Error loading saved progress:', error)
        setFlashcards(flashcardData.flashcards)
      }
    } else {
      setFlashcards(flashcardData.flashcards)
    }
  }, [])

  // Save progress to localStorage whenever flashcards change
  useEffect(() => {
    if (flashcards.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(flashcards))
    }
  }, [flashcards])

  // Get unique categories
  const categories = useMemo(() => getCategories(flashcards), [flashcards])

  // Filter flashcards based on category and hide mastered
  const filteredCards = useMemo(() => {
    let cards = flashcards

    // Filter by category
    if (selectedCategory !== 'all') {
      cards = cards.filter((card) => card.category === selectedCategory)
    }

    // Hide mastered cards if checkbox is checked
    if (hideMastered) {
      cards = cards.filter((card) => !isMastered(card))
    }

    return cards
  }, [flashcards, selectedCategory, hideMastered])

  // Get statistics
  const stats = useMemo(() => getStatistics(flashcards), [flashcards])

  // Current card
  const currentCard = filteredCards[currentIndex] || null

  // Shuffle to random question
  const handleShuffle = () => {
    if (filteredCards.length <= 1) return

    // Pick a random index different from current
    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * filteredCards.length)
    } while (randomIndex === currentIndex && filteredCards.length > 1)

    setCurrentIndex(randomIndex)
  }

  // Mark card as known
  const handleKnowThis = () => {
    if (!currentCard) return

    const updatedFlashcards = flashcards.map((card) =>
      card.id === currentCard.id ? { ...card, knownCount: card.knownCount + 1 } : card,
    )

    setFlashcards(updatedFlashcards)

    // Move to next card or show completion message
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  // Navigation
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  // Reset progress
  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      const resetFlashcards = flashcards.map((card) => ({
        ...card,
        knownCount: 0,
      }))
      setFlashcards(resetFlashcards)
      setCurrentIndex(0)
    }
  }

  // Reset index when filters change
  useEffect(() => {
    setCurrentIndex(0)
  }, [selectedCategory, hideMastered])

  return (
    <div className="min-h-screen bg-neutral-100 py-6 max-[599px]:py-4 flex flex-col items-center">
      <div className="w-full max-w-[77.5rem] px-6 max-[1239px]:px-8 max-[599px]:px-4">
        {/* Header */}
        <header className="mb-8 flex w-full items-center justify-between">
          <Logo />
          <TabGroup>
            <Link href="/study">
              <TabButton active={true}>Study Mode</TabButton>
            </Link>
            <Link href="/all-cards">
              <TabButton active={false}>All Cards</TabButton>
            </Link>
          </TabGroup>
        </header>

        {/* Main Content */}
        <div className="flex flex-col gap-8 max-[1239px]:gap-6 min-[1240px]:flex-row">
            {/* Flashcard Section */}
            <div className="w-full min-[1240px]:w-[51rem] overflow-hidden rounded-2xl border-[1px_3px_3px_1px] border-neutral-900 bg-neutral-0">
            {/* Flashcard Header */}
            <div className="flex w-full flex-col gap-0 p-5 max-[599px]:px-4 max-[599px]:py-3">
              <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between max-[599px]:items-start">
                {/* Category Filter */}
                <div className="flex flex-wrap items-center gap-4 max-[599px]:flex-col max-[599px]:items-start max-[599px]:gap-2.5">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-[200px] rounded-full border-neutral-900 bg-neutral-0 text-base font-medium">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Hide Mastered Filter */}
                  <div className="flex items-center gap-2 px-0 py-0">
                    <Checkbox
                      id="hide-mastered"
                      checked={hideMastered}
                      onCheckedChange={(checked) => setHideMastered(checked as boolean)}
                    />
                    <label
                      htmlFor="hide-mastered"
                      className="cursor-pointer text-base font-medium leading-[1.2] text-neutral-900"
                    >
                      Hide Mastered
                    </label>
                  </div>
                </div>

                {/* Shuffle Button */}
                <Button variant="neo" className="gap-2" onClick={handleShuffle}>
                  <Shuffle className="h-4 w-4" />
                  Shuffle
                </Button>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-neutral-900" />

            {/* Flashcard Container */}
            <div className="flex w-full flex-col items-center gap-5 p-5 max-[599px]:px-4 max-[599px]:py-6">
              <FlashcardDisplay card={currentCard} onKnowThis={handleKnowThis} />

              {/* Action Buttons - Below Flashcard */}
              <div className="flex flex-wrap justify-center gap-5 max-[599px]:w-full max-[599px]:flex-col max-[599px]:gap-2.5">
                <Button
                  onClick={handleKnowThis}
                  disabled={!currentCard || (currentCard && isMastered(currentCard))}
                  className="gap-2 rounded-full border border-neutral-900 bg-yellow-500 px-5 py-3 text-base font-medium text-neutral-900 shadow-[2px_2px_0px_0px_#2e1401] hover:bg-yellow-500/90 disabled:opacity-50 max-[599px]:w-full"
                >
                  <CheckCircle className="h-4 w-4" />
                  {currentCard && isMastered(currentCard) ? 'Already Mastered' : 'I Know This'}
                </Button>
                <Button variant="neo" className="gap-2 shadow-[2px_2px_0px_0px_#2e1401] max-[599px]:w-full" onClick={handleResetProgress}>
                  <RotateCcw className="h-4 w-4" />
                  Reset Progress
                </Button>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-neutral-900" />

            {/* Navigation Controls - At Bottom */}
            <div className="flex w-full items-center justify-between p-5 max-[599px]:p-4">
              <Button variant="neo" onClick={handlePrevious} disabled={currentIndex === 0} className="gap-2 max-[599px]:p-3">
                <ChevronLeft className="h-4 w-4" />
                <span className="max-[599px]:hidden">Previous</span>
              </Button>

              <p className="text-sm font-medium leading-[1.4] text-neutral-600">
                Card {currentIndex + 1} of {filteredCards.length}
              </p>

              <Button
                variant="neo"
                onClick={handleNext}
                disabled={currentIndex === filteredCards.length - 1}
                className="gap-2 max-[599px]:p-3"
              >
                <span className="max-[599px]:hidden">Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="flex w-full min-[1240px]:w-[24.5rem] flex-col gap-4 rounded-2xl border-[1px_3px_3px_1px] border-neutral-900 bg-neutral-0 p-6 max-[1239px]:px-5 max-[1239px]:py-4 max-[599px]:px-4 max-[599px]:py-5">
            <h2 className="text-2xl max-[1239px]:text-[24px] font-semibold leading-[1.2] text-neutral-900">Study Statistics</h2>

            <div className="grid flex-1 grid-cols-2 min-[1240px]:grid-cols-1 gap-5 max-[599px]:grid-cols-1 max-[599px]:gap-4">
              <StatisticCard title="Total Cards" value={stats.total} icon={Layers} iconBgColor="bg-blue-400" />
              <StatisticCard title="Mastered" value={stats.mastered} icon={Brain} iconBgColor="bg-teal-400" />
              <StatisticCard title="In Progress" value={stats.inProgress} icon={BookOpen} iconBgColor="bg-pink-500" />
              <StatisticCard title="Not Started" value={stats.notStarted} icon={Box} iconBgColor="bg-pink-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
