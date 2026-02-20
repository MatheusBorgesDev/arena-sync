'use client';

import { cn } from '@/shared/lib/utils';
import { BOOKING_STATUS_LABEL, type BookingStatus } from '@/core/types';

interface BookingStatusBadgeProps {
  status: BookingStatus;
  className?: string;
}

const variantMap: Record<BookingStatus, string> = {
  pending: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
  confirmed: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
  cancelled: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
  completed: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
};

export function BookingStatusBadge({ status, className }: BookingStatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full px-2 py-0.5 text-xs font-medium',
        variantMap[status],
        className
      )}
    >
      {BOOKING_STATUS_LABEL[status]}
    </span>
  );
}
