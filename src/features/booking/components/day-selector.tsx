import * as React from 'react';
import { cn } from '@/shared/lib/utils';
import { Calendar } from '@/shared/components/ui/calendar';

export interface DaySelectorProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
  mobileAvailableDays: Date[];
  className?: string;
}

export const DaySelector = ({
  selectedDate,
  onSelectDate,
  mobileAvailableDays,
  className,
}: DaySelectorProps): React.ReactElement => {
  return (
    <div className={cn('w-full', className)}>
      <div className="block md:hidden">
        <div className="scrollbar-hide flex w-full gap-2 overflow-x-auto pb-4">
          {mobileAvailableDays.map((date) => {
            const isSelected = selectedDate?.toDateString() === date.toDateString();
            const weekDay = date.toLocaleDateString('pt-BR', { weekday: 'short' }).toUpperCase();
            const dayNumber = date.getDate();

            return (
              <button
                key={date.toISOString()}
                onClick={() => onSelectDate(date)}
                className={cn(
                  'flex min-w-[64px] flex-col items-center justify-center rounded-lg border p-2 transition-colors focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:outline-none',
                  isSelected
                    ? 'border-transparent bg-[#a3e635] text-black'
                    : 'border-neutral-800 bg-transparent text-neutral-400 hover:bg-neutral-800'
                )}
                aria-pressed={isSelected}
              >
                <span className="text-xs">{weekDay}</span>
                <span className="text-lg font-bold">{dayNumber}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden rounded-lg border border-neutral-800 bg-neutral-900 p-4 md:block">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onSelectDate}
          className="mx-auto"
        />
      </div>
    </div>
  );
};
