interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-neutral-900">Progress</span>
        <span className="text-neutral-600">
          {current} / {total} mastered ({Math.round(percentage)}%)
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100 border border-neutral-900">
        <div
          className="h-full bg-yellow-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
