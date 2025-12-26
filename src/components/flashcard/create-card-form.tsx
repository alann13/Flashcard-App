'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus } from 'lucide-react'
import { useState } from 'react'

interface CreateCardFormProps {
  onCreateCard: (question: string, answer: string, category: string) => void
}

export function CreateCardForm({ onCreateCard }: CreateCardFormProps) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (question.trim() && answer.trim() && category.trim()) {
      onCreateCard(question, answer, category)
      setQuestion('')
      setAnswer('')
      setCategory('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 rounded-2xl border-[1px_3px_3px_1px] border-neutral-900 bg-neutral-0 p-6"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="question" className="text-sm font-medium text-neutral-900">
          Question
        </label>
        <Input
          id="question"
          type="text"
          placeholder="e.g., What is the capital of France?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="rounded-xl border-neutral-900 bg-neutral-0"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="answer" className="text-sm font-medium text-neutral-900">
          Answer
        </label>
        <Textarea
          id="answer"
          placeholder="e.g., Paris"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="min-h-[100px] rounded-xl border-neutral-900 bg-neutral-0"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-sm font-medium text-neutral-900">
          Category
        </label>
        <Input
          id="category"
          type="text"
          placeholder="e.g., Geography"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border-neutral-900 bg-neutral-0"
        />
      </div>

      <Button type="submit" className="gap-2 rounded-full border border-neutral-900 bg-yellow-500 px-5 py-3 text-base font-medium text-neutral-900 shadow-[2px_2px_0px_0px_#2e1401] hover:bg-yellow-500/90">
        <Plus className="h-4 w-4" />
        Create Card
      </Button>
    </form>
  )
}
