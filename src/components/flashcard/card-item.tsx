'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { Flashcard } from '@/types/flashcard'
import { isMastered } from '@/types/flashcard'
import { Brain, MoreVertical, Pencil, Trash2 } from 'lucide-react'

interface CardItemProps {
  card: Flashcard
  onEdit: (card: Flashcard) => void
  onDelete: (id: string) => void
}

export function CardItem({ card, onEdit, onDelete }: CardItemProps) {
  const mastered = isMastered(card)

  return (
    <div className="flex h-full min-h-[240px] flex-col justify-between rounded-2xl border-[1px_2px_2px_1px] border-neutral-900 bg-neutral-0 p-5">
      {/* Header with title and menu */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="flex-1 text-lg font-semibold leading-[1.2] text-neutral-900">{card.question}</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="h-8 w-8 shrink-0 hover:bg-neutral-100"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(card)} className="gap-2">
              <Pencil className="h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDelete(card.id)}
              className="gap-2 text-red-600 focus:text-red-600"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Answer */}
      <div className="mt-3 flex-1">
        <p className="text-sm font-medium text-neutral-600">Answer:</p>
        <p className="mt-1 text-base leading-[1.4] text-neutral-900">{card.answer}</p>
      </div>

      {/* Footer with category and progress */}
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="rounded-full border border-neutral-900 bg-neutral-0 px-3 py-1 text-xs font-medium text-neutral-900 shadow-[1px_1px_0px_0px_black]">
            {card.category}
          </div>
          {mastered && (
            <div className="flex items-center gap-1.5 rounded-full border border-neutral-900 bg-teal-400 px-3 py-1 text-xs font-medium text-neutral-900 shadow-[1px_1px_0px_0px_black]">
              <Brain className="h-3 w-3" />
              Mastered
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-2">
          <div className="flex h-2 flex-1 overflow-hidden rounded-full border border-neutral-900 bg-neutral-0">
            <div
              className="h-full rounded-full bg-neutral-900 transition-all duration-300"
              style={{ width: `${(card.knownCount / 5) * 100}%` }}
            />
          </div>
          <p className="text-xs font-medium text-neutral-900">
            {card.knownCount}/5
          </p>
        </div>
      </div>
    </div>
  )
}
