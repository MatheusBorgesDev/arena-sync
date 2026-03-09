import * as React from 'react';
import { format } from 'date-fns';
import { BookingStatusBadge } from '@/features/booking/components/booking-status-badge';
import type { BookingViewModel } from '@/features/booking/mocks/booking-mocks';

interface AgendaBookingRowProps {
  booking: BookingViewModel;
}

export const AgendaBookingRow = ({ booking }: AgendaBookingRowProps): React.ReactElement => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border px-4 py-3">
      <div className="flex min-w-0 items-center gap-4">
        <span className="shrink-0 text-sm font-medium">
          {format(booking.startsAt, 'HH:mm')} - {format(booking.endsAt, 'HH:mm')}
        </span>
        <span className="text-muted-foreground truncate text-sm">{booking.customerName}</span>
      </div>
      <BookingStatusBadge status={booking.status} />
    </div>
  );
};
