'use client'

import { useState } from 'react'
import type { Flashcard } from '@/types/flashcard'

interface FlashcardDisplayProps {
  card: Flashcard | null
  onKnowThis: () => void
}

export function FlashcardDisplay({ card, onKnowThis }: FlashcardDisplayProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  if (!card) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-5 text-center">
        <p className="w-full text-2xl font-semibold leading-[1.2] text-neutral-900">You're all caught up!</p>
        <p className="w-full text-base font-normal leading-[1.4] text-neutral-600">
          All your cards are mastered. Turn off "Hide mastered" to see them again.
        </p>
      </div>
    )
  }

  const handleKnowThis = () => {
    onKnowThis()
    setIsRevealed(false)
  }

  return (
    <button
      onClick={() => !isRevealed && setIsRevealed(true)}
      className="relative flex h-[22.5rem] w-full cursor-pointer flex-col items-center gap-4 overflow-hidden rounded-2xl border-2 border-neutral-900 bg-pink-400 p-6 max-[599px]:px-4 max-[599px]:py-5 shadow-[2px_2px_0px_0px_#2e1401]"
    >
      {/* Background Pattern - positioned absolutely */}
      <div className="pointer-events-none absolute left-1/2 top-[-0.75rem] h-[32.9375rem] w-[48.5rem] -translate-x-1/2 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 776 527" fill="none" aria-hidden="true">
          <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="2" fill="#2e1401" opacity="0.1" />
          </pattern>
          <rect width="776" height="527" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Category Badge - at top */}
      <div className="relative z-10 rounded-full border border-neutral-900 bg-neutral-0 px-3 py-1.5 text-xs font-medium leading-[1.3] tracking-tight text-neutral-900 shadow-[1px_1px_0px_0px_black]">
        {card.category}
      </div>

      {/* Star decoration - top right */}
      <div className="absolute right-7 top-10 z-10 text-2xl">💎</div>

      {/* Star decoration - bottom left */}
      <div className="absolute bottom-16 left-7 z-10 rotate-[-25deg] text-3xl">⭐</div>

      {/* Question/Answer Container */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-4 text-center">
        {!isRevealed ? (
          <>
            <p className="text-[40px] max-[1239px]:text-[32px] max-[599px]:text-[24px] font-bold leading-[1.2] text-neutral-900">
              {card.question}
            </p>
            <p className="text-base font-medium leading-[1.2] text-neutral-900 opacity-80">Click to reveal answer</p>
          </>
        ) : (
          <>
            <p className="text-[40px] max-[1239px]:text-[32px] max-[599px]:text-[24px] font-bold leading-[1.2] text-neutral-900">
              {card.question}
            </p>
            <div className="mt-4 w-full rounded-xl bg-yellow-500 p-6">
              <p className="text-lg font-medium leading-[1.4] text-neutral-900">{card.answer}</p>
            </div>
          </>
        )}
      </div>

      {/* Progress Container - at bottom */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        <div className="flex w-[3.75rem] items-center overflow-hidden rounded-full border border-neutral-900 bg-neutral-0">
          <div
            className="h-[0.5rem] rounded-full bg-neutral-900 transition-all duration-300"
            style={{ width: `${(card.knownCount / 5) * 100}%` }}
          />
        </div>
        <p className="text-xs font-medium leading-[1.3] tracking-tight text-neutral-900">{card.knownCount}/5</p>
      </div>
    </button>
  )
}
