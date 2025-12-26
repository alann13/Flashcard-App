export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string;
  knownCount: number;
}

export interface FlashcardData {
  flashcards: Flashcard[];
}

export const MASTERED_THRESHOLD = 5;

export function isMastered(card: Flashcard): boolean {
  return card.knownCount >= MASTERED_THRESHOLD;
}

export function getCategories(flashcards: Flashcard[]): string[] {
  const categories = new Set(flashcards.map(card => card.category));
  return Array.from(categories).sort();
}

export function getStatistics(flashcards: Flashcard[]) {
  const total = flashcards.length;
  const mastered = flashcards.filter(isMastered).length;
  const inProgress = flashcards.filter(card => card.knownCount > 0 && !isMastered(card)).length;
  const notStarted = flashcards.filter(card => card.knownCount === 0).length;

  return {
    total,
    mastered,
    inProgress,
    notStarted,
    masteredPercentage: total > 0 ? Math.round((mastered / total) * 100) : 0,
  };
}
