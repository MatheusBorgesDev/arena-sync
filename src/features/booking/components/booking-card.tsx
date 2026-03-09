import * as React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from '@/shared/components/ui/card';
import { BookingStatusBadge } from './booking-status-badge';
import type { BookingViewModel } from '../mocks/booking-mocks';

interface BookingCardProps {
  booking: BookingViewModel;
}

const formatPrice = (cents: number): string => {
  return (cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const BookingCard = ({ booking }: BookingCardProps): React.ReactElement => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3 p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="text-muted-foreground h-4 w-4" />
            <span className="font-semibold">{booking.courtName}</span>
          </div>
          <BookingStatusBadge status={booking.status} />
        </div>

        <div className="text-muted-foreground flex flex-col gap-1 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{format(booking.startsAt, "EEEE, dd 'de' MMMM", { locale: ptBR })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>
              {format(booking.startsAt, 'HH:mm')} - {format(booking.endsAt, 'HH:mm')}
            </span>
          </div>
        </div>

        <div className="text-right text-sm font-semibold">{formatPrice(booking.priceCents)}</div>
      </CardContent>
    </Card>
  );
};
