'use client';

import { cn } from '@/lib/utils';

interface TabButtonProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function TabButton({ active = false, children, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex h-11 items-center justify-center gap-0 rounded-full px-4 py-3 transition-all cursor-pointer',
        'text-base font-semibold leading-[1.2]',
        active
          ? 'bg-yellow-500 border border-neutral-900 text-neutral-900'
          : 'bg-neutral-0 text-neutral-900 hover:bg-neutral-100'
      )}
    >
      {children}
    </button>
  );
}

interface TabGroupProps {
  children: React.ReactNode;
}

export function TabGroup({ children }: TabGroupProps) {
  return (
    <div className="flex h-[52px] items-center gap-1 rounded-full border border-neutral-900 bg-neutral-0 p-1 shadow-[1px_2px_0px_0px_#2e1401]">
      {children}
    </div>
  );
}
