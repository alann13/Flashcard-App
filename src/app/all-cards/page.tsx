'use client'

import { Shuffle } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { CardItem } from '@/components/flashcard/card-item'
import { CreateCardForm } from '@/components/flashcard/create-card-form'
import { EditCardDialog } from '@/components/flashcard/edit-card-dialog'
import { Logo } from '@/components/flashcard/logo'
import { TabButton, TabGroup } from '@/components/flashcard/tab-button'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import flashcardData from '@/data.json'
import { Flashcard, getCategories, isMastered } from '@/types/flashcard'
import Link from 'next/link'

const STORAGE_KEY = 'flashcard-progress'

export default function AllCardsPage() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [hideMastered, setHideMastered] = useState(false)
  const [editingCard, setEditingCard] = useState<Flashcard | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [displayCount, setDisplayCount] = useState(9)

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

  // Shuffle flashcards
  const handleShuffle = () => {
    const shuffled = [...flashcards]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setFlashcards(shuffled)
  }

  // Create new card
  const handleCreateCard = (question: string, answer: string, category: string) => {
    const newCard: Flashcard = {
      id: `card-${Date.now()}`,
      question,
      answer,
      category,
      knownCount: 0,
    }
    setFlashcards([newCard, ...flashcards])
  }

  // Edit card
  const handleEditCard = (card: Flashcard) => {
    setEditingCard(card)
    setIsEditDialogOpen(true)
  }

  // Save edited card
  const handleSaveCard = (updatedCard: Flashcard) => {
    setFlashcards(flashcards.map((card) => (card.id === updatedCard.id ? updatedCard : card)))
  }

  // Delete card
  const handleDeleteCard = (id: string) => {
    if (confirm('Are you sure you want to delete this card?')) {
      setFlashcards(flashcards.filter((card) => card.id !== id))
    }
  }

  // Load more cards
  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 9)
  }

  return (
    <div className="min-h-screen bg-neutral-100 py-6 max-[599px]:py-4 flex flex-col items-center">
      <div className="w-full max-w-[77.5rem] px-6 max-[1239px]:px-8 max-[599px]:px-4">
        {/* Header */}
        <header className="mb-8 flex w-full items-center justify-between">
          <Logo />
          <TabGroup>
            <Link href="/study">
              <TabButton active={false}>Study Mode</TabButton>
            </Link>
            <Link href="/all-cards">
              <TabButton active={true}>All Cards</TabButton>
            </Link>
          </TabGroup>
        </header>

        {/* Main Content */}
        <div className="flex flex-col gap-6">
          {/* Create Card Form */}
          <CreateCardForm onCreateCard={handleCreateCard} />

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
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

            <div className="flex items-center gap-2">
              <Checkbox
                id="hide-mastered-all"
                checked={hideMastered}
                onCheckedChange={(checked) => setHideMastered(checked as boolean)}
              />
              <label
                htmlFor="hide-mastered-all"
                className="cursor-pointer text-base font-medium leading-[1.2] text-neutral-900"
              >
                Hide Mastered
              </label>
            </div>

            <Button variant="neo" className="gap-2 ml-auto" onClick={handleShuffle}>
              <Shuffle className="h-4 w-4" />
              Shuffle
            </Button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredCards.slice(0, displayCount).map((card) => (
              <CardItem key={card.id} card={card} onEdit={handleEditCard} onDelete={handleDeleteCard} />
            ))}
          </div>

          {/* Load More Button */}
          {filteredCards.length > displayCount && (
            <div className="flex justify-center">
              <Button variant="neo" onClick={handleLoadMore} className="px-8">
                Load More
              </Button>
            </div>
          )}

          {/* Edit Dialog */}
          <EditCardDialog
            card={editingCard}
            open={isEditDialogOpen}
            onOpenChange={setIsEditDialogOpen}
            onSave={handleSaveCard}
          />
        </div>
      </div>
    </div>
  )
}
