'use client';

import * as React from 'react';
import { useState } from 'react';
import { isSameDay } from 'date-fns';
import { MOCK_BOOKINGS } from '@/features/booking/mocks/booking-mocks';
import type { BookingViewModel } from '@/features/booking/mocks/booking-mocks';
import { AgendaBookingRow } from './agenda-booking-row';
import { AgendaEmptyState } from './agenda-empty-state';
import { DateStripSelector } from './date-strip-selector';

const groupByCourt = (bookings: BookingViewModel[]): Record<string, BookingViewModel[]> => {
  const groups: Record<string, BookingViewModel[]> = {};
  for (const booking of bookings) {
    const key = booking.courtName;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(booking);
  }
  return groups;
};

export const AgendaView = (): React.ReactElement => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const dayBookings = selectedDate
    ? MOCK_BOOKINGS.filter((b) => isSameDay(b.startsAt, selectedDate))
    : [];

  const grouped = groupByCourt(dayBookings);
  const courtNames = Object.keys(grouped).sort();

  return (
    <div className="mx-auto w-full max-w-5xl p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Agenda</h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Gestão de agendamentos por dia.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        <section aria-label="Seleção de Data">
          <DateStripSelector selectedDate={selectedDate} onSelectDate={setSelectedDate} />
        </section>

        <section aria-label="Agendamentos do Dia">
          {courtNames.length === 0 ? (
            <AgendaEmptyState />
          ) : (
            <div className="flex flex-col gap-6">
              {courtNames.map((courtName) => (
                <div key={courtName}>
                  <h2 className="mb-3 text-lg font-semibold">{courtName}</h2>
                  <div className="flex flex-col gap-2">
                    {grouped[courtName].map((booking) => (
                      <AgendaBookingRow key={booking.id} booking={booking} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
