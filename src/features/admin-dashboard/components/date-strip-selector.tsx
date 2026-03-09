'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { addDays, isSameDay, isToday, startOfWeek } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

const DAY_BUTTON_WIDTH = 72; // 64px min-w + 8px gap

interface DateStripSelectorProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
  className?: string;
}

export const DateStripSelector = ({
  selectedDate,
  onSelectDate,
  className,
}: DateStripSelectorProps): React.ReactElement => {
  const [startDate, setStartDate] = useState<Date>(() =>
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [visibleCount, setVisibleCount] = useState(7);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      const count = Math.max(1, Math.min(7, Math.floor(width / DAY_BUTTON_WIDTH)));
      setVisibleCount(count);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const days = Array.from({ length: visibleCount }, (_, i) => addDays(startDate, i));

  const goBack = (): void => setStartDate((prev) => addDays(prev, -1));
  const goForward = (): void => setStartDate((prev) => addDays(prev, 1));

  return (
    <div className={cn('flex w-full items-center gap-2', className)}>
      <button
        type="button"
        onClick={goBack}
        className="flex shrink-0 items-center justify-center rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-200 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:outline-none"
        aria-label="Dia anterior"
      >
        <ChevronLeft className="size-5" />
      </button>

      <div ref={containerRef} className="flex min-w-0 flex-1 gap-2">
        {days.map((date) => {
          const isSelected = selectedDate ? isSameDay(selectedDate, date) : false;
          const today = isToday(date);

          const weekDay = date.toLocaleDateString('pt-BR', { weekday: 'short' }).toUpperCase();
          const dayNumber = date.getDate();
          const monthShort = date
            .toLocaleDateString('pt-BR', { month: 'short' })
            .replace('.', '');

          return (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => onSelectDate(date)}
              className={cn(
                'relative flex min-w-16 flex-1 flex-col items-center justify-center rounded-lg border p-2 transition-colors focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:outline-none',
                isSelected
                  ? 'border-transparent bg-[#a3e635] text-black'
                  : 'border-neutral-800 bg-transparent text-neutral-400 hover:bg-neutral-800'
              )}
              aria-pressed={isSelected}
            >
              <span className="text-xs">{weekDay}</span>
              <span className="text-md font-bold">
                {dayNumber}/{monthShort}
              </span>
              {today && !isSelected && (
                <span className="absolute bottom-1 size-1.5 rounded-full bg-[#a3e635]" />
              )}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={goForward}
        className="flex shrink-0 items-center justify-center rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-200 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:outline-none"
        aria-label="Próximo dia"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
};
