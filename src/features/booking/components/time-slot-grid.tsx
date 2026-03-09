import * as React from 'react';
import { TimeSlotButton } from './time-slot-button';
import { cn } from '@/shared/lib/utils';

// Tipagem baseada em union types para garantir previsibilidade e evitar strings soltas
export type SlotStatus = 'available' | 'selected' | 'booked';

// Usamos interface pois este objeto mapeia a entidade visual de um horário
export interface TimeSlotData {
  id: string;
  time: string;
  status: SlotStatus;
  label?: string; // Ex: "17:00 - Selecionado" ou "11:00 - Reservado" conforme o design desktop
}

export interface TimeSlotGridProps extends React.HTMLAttributes<HTMLDivElement> {
  slots: TimeSlotData[];
  onSelectSlot: (id: string) => void;
}

export const TimeSlotGrid = ({
  slots,
  onSelectSlot,
  className,
  ...props
}: TimeSlotGridProps): React.ReactElement => {
  return (
    <div
      className={cn(
        // Responsividade via Tailwind:
        // Padrão (Mobile): grid de 1 coluna com espaçamento menor
        // md (Tablet/Desktop): grid de 3 colunas
        'grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4',
        className
      )}
      {...props}
    >
      {slots.map((slot) => (
        <TimeSlotButton
          key={slot.id}
          status={slot.status}
          onClick={() => onSelectSlot(slot.id)}
          // Acessibilidade é inegociável em sistemas bem estruturados
          aria-label={`Horário ${slot.time}, Status: ${slot.status}`}
        >
          {slot.label ? slot.label : slot.time}
        </TimeSlotButton>
      ))}
    </div>
  );
};
