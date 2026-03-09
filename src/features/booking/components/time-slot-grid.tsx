import * as React from 'react';
import { TimeSlotButton } from './time-slot-button';
import { cn } from '@/shared/lib/utils';

export type SlotStatus = 'available' | 'selected' | 'booked';

export interface TimeSlotData {
  id: string;
  time: string;
  status: SlotStatus;
  label?: string;
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
          aria-label={`Horário ${slot.time}, Status: ${slot.status}`}
        >
          {slot.label ? slot.label : slot.time}
        </TimeSlotButton>
      ))}
    </div>
  );
};
