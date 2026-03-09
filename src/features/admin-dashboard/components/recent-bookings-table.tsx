import * as React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table';
import { BookingStatusBadge } from '@/features/booking/components/booking-status-badge';
import { MOCK_BOOKINGS } from '@/features/booking/mocks/booking-mocks';

const formatPrice = (cents: number): string => {
  return (cents / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const recentBookings = MOCK_BOOKINGS.slice(0, 5);

export const RecentBookingsTable = (): React.ReactElement => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Quadra</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Horário</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentBookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.courtName}</TableCell>
              <TableCell>{booking.customerName}</TableCell>
              <TableCell>
                {format(booking.startsAt, "dd/MM 'às' HH:mm", { locale: ptBR })}
              </TableCell>
              <TableCell>
                <BookingStatusBadge status={booking.status} />
              </TableCell>
              <TableCell className="text-right">{formatPrice(booking.priceCents)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
