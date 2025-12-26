import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatisticCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  iconBgColor: string;
}

export function StatisticCard({ title, value, icon: Icon, iconBgColor }: StatisticCardProps) {
  return (
    <div className="flex h-[120px] w-full items-start justify-between overflow-hidden rounded-xl border-[1px_2px_2px_1px] border-neutral-900 bg-neutral-0">
      <div className="flex h-full flex-1 flex-col items-start justify-between gap-2 p-5 leading-[1.2]">
        <p className="text-base font-medium text-neutral-900">{title}</p>
        <p className="text-center text-[40px] max-[1239px]:text-[32px] max-[599px]:text-[24px] font-bold leading-[1.2] text-neutral-900">{value}</p>
      </div>
      <div
        className={cn(
          'flex h-full w-[100px] flex-col items-center justify-center border-l border-neutral-900',
          iconBgColor
        )}
      >
        <Icon className="h-6 w-6 text-neutral-900" />
      </div>
    </div>
  );
}
