/**
 * Enums e tipos compartilhados de status de agendamento.
 */

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export const BOOKING_STATUS_LABEL: Record<BookingStatus, string> = {
  pending: 'Pendente',
  confirmed: 'Confirmado',
  cancelled: 'Cancelado',
  completed: 'Concluído',
};
