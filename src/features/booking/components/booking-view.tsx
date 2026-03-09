'use client';

import * as React from 'react';
import { useState } from 'react';
import { cn } from '@/shared/lib/utils';
import { DaySelector } from './day-selector';
import { TimeSlotGrid, type TimeSlotData } from './time-slot-grid';

const MOCK_MOBILE_DAYS = Array.from({ length: 7 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return d;
});

const MOCK_SLOTS: TimeSlotData[] = [
  { id: '1', time: '17:00', status: 'booked' },
  { id: '2', time: '18:00', status: 'available' },
  { id: '3', time: '19:00', status: 'selected', label: '19:00 - Selecionado' },
  { id: '4', time: '20:00', status: 'available' },
  { id: '5', time: '21:00', status: 'available' },
];

export interface BookingViewProps {
  className?: string;
}

export const BookingView = ({ className }: BookingViewProps): React.ReactElement => {
  // TODO (Bloco 2): Extrair para `useBooking()`
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // TODO (Bloco 2): A lógica de seleção múltipla/única irá para a camada de domínio
  const handleSlotSelect = (id: string) => {
    console.log('Horário selecionado:', id);
  };

  return (
    <div className={cn('mx-auto w-full max-w-5xl p-4 md:p-8', className)}>
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-white md:text-3xl">Agendar</h1>
        <p className="text-sm text-neutral-400 md:text-base">Escolha seu horário</p>
      </header>

      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[350px_1fr] lg:items-start lg:gap-12">
        <section aria-label="Seleção de Data">
          <DaySelector
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            mobileAvailableDays={MOCK_MOBILE_DAYS}
          />
        </section>

        <section aria-label="Seleção de Horário">
          <TimeSlotGrid slots={MOCK_SLOTS} onSelectSlot={handleSlotSelect} />
        </section>
      </div>
    </div>
  );
};
