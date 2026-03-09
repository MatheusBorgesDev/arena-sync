import type { BookingStatus } from '@/core/types/booking-status';

export interface Booking {
  id: string;
  courtId: string;
  userId: string;
  startsAt: Date;
  endsAt: Date;
  status: BookingStatus;
  createdAt: Date;
}
