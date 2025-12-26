'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { Flashcard } from '@/types/flashcard'
import { Save } from 'lucide-react'
import { useEffect, useState } from 'react'

interface EditCardDialogProps {
  card: Flashcard | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (card: Flashcard) => void
}

export function EditCardDialog({ card, open, onOpenChange, onSave }: EditCardDialogProps) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    if (card) {
      setQuestion(card.question)
      setAnswer(card.answer)
      setCategory(card.category)
    }
  }, [card])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (card && question.trim() && answer.trim() && category.trim()) {
      onSave({
        ...card,
        question: question.trim(),
        answer: answer.trim(),
        category: category.trim(),
      })
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Card</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="edit-question" className="text-sm font-medium text-neutral-900">
              Question
            </label>
            <Input
              id="edit-question"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="rounded-xl border-neutral-900 bg-neutral-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="edit-answer" className="text-sm font-medium text-neutral-900">
              Answer
            </label>
            <Textarea
              id="edit-answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="min-h-[100px] rounded-xl border-neutral-900 bg-neutral-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="edit-category" className="text-sm font-medium text-neutral-900">
              Category
            </label>
            <Input
              id="edit-category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border-neutral-900 bg-neutral-0"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="neo" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="gap-2 rounded-full border border-neutral-900 bg-yellow-500 px-5 py-3 text-base font-medium text-neutral-900 shadow-[2px_2px_0px_0px_#2e1401] hover:bg-yellow-500/90"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
