import type { Booking } from '@/core/entities';
import type { BookingStatus } from '@/core/types';

export interface BookingViewModel extends Booking {
  courtName: string;
  customerName: string;
  priceCents: number;
}

const today = new Date();

const makeDate = (daysOffset: number, hour: number): Date => {
  const date = new Date(today);
  date.setDate(date.getDate() + daysOffset);
  date.setHours(hour, 0, 0, 0);
  return date;
};

export const MOCK_BOOKINGS: BookingViewModel[] = [
  {
    id: 'b1',
    courtId: 'c1',
    userId: 'u1',
    startsAt: makeDate(0, 18),
    endsAt: makeDate(0, 19),
    status: 'confirmed',
    createdAt: makeDate(-1, 10),
    courtName: 'Quadra A - Society',
    customerName: 'João Silva',
    priceCents: 15000,
  },
  {
    id: 'b2',
    courtId: 'c2',
    userId: 'u1',
    startsAt: makeDate(1, 20),
    endsAt: makeDate(1, 21),
    status: 'pending',
    createdAt: makeDate(0, 8),
    courtName: 'Quadra B - Vôlei',
    customerName: 'João Silva',
    priceCents: 12000,
  },
  {
    id: 'b3',
    courtId: 'c1',
    userId: 'u2',
    startsAt: makeDate(-2, 17),
    endsAt: makeDate(-2, 18),
    status: 'completed',
    createdAt: makeDate(-3, 14),
    courtName: 'Quadra A - Society',
    customerName: 'Maria Oliveira',
    priceCents: 15000,
  },
  {
    id: 'b4',
    courtId: 'c3',
    userId: 'u1',
    startsAt: makeDate(-1, 19),
    endsAt: makeDate(-1, 20),
    status: 'cancelled',
    createdAt: makeDate(-2, 9),
    courtName: 'Quadra C - Tênis',
    customerName: 'João Silva',
    priceCents: 18000,
  },
  {
    id: 'b5',
    courtId: 'c4',
    userId: 'u3',
    startsAt: makeDate(2, 16),
    endsAt: makeDate(2, 17),
    status: 'confirmed',
    createdAt: makeDate(0, 12),
    courtName: 'Quadra D - Beach Tennis',
    customerName: 'Carlos Santos',
    priceCents: 20000,
  },
  {
    id: 'b6',
    courtId: 'c2',
    userId: 'u4',
    startsAt: makeDate(0, 20),
    endsAt: makeDate(0, 21),
    status: 'pending',
    createdAt: makeDate(0, 7),
    courtName: 'Quadra B - Vôlei',
    customerName: 'Ana Costa',
    priceCents: 12000,
  },
  {
    id: 'b7',
    courtId: 'c3',
    userId: 'u2',
    startsAt: makeDate(-3, 18),
    endsAt: makeDate(-3, 19),
    status: 'completed',
    createdAt: makeDate(-4, 11),
    courtName: 'Quadra C - Tênis',
    customerName: 'Maria Oliveira',
    priceCents: 18000,
  },
  {
    id: 'b8',
    courtId: 'c1',
    userId: 'u3',
    startsAt: makeDate(3, 17),
    endsAt: makeDate(3, 18),
    status: 'pending',
    createdAt: makeDate(0, 15),
    courtName: 'Quadra A - Society',
    customerName: 'Carlos Santos',
    priceCents: 15000,
  },
];

export const BOOKING_STATUS_FILTERS: Array<{ value: BookingStatus | 'all'; label: string }> = [
  { value: 'all', label: 'Todos' },
  { value: 'pending', label: 'Pendentes' },
  { value: 'confirmed', label: 'Confirmados' },
  { value: 'completed', label: 'Concluídos' },
  { value: 'cancelled', label: 'Cancelados' },
];
