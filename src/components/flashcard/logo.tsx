export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2.5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 border-2 border-neutral-900 shadow-[1px_2px_0px_0px_#2e1401]">
        <span className="text-xl">🃏</span>
      </div>
      <div className="flex items-center max-[599px]:hidden">
        <span className="text-xl font-bold text-neutral-900">Flashcard</span>
      </div>
    </div>
  );
}
