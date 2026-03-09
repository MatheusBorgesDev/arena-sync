'use client';

import * as React from 'react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';
import type { BookingStatus } from '@/core/types';
import { BookingCard } from './booking-card';
import { BookingEmptyState } from './booking-empty-state';
import { MOCK_BOOKINGS, BOOKING_STATUS_FILTERS } from '../mocks/booking-mocks';

export const MyBookingsView = (): React.ReactElement => {
  const [activeTab, setActiveTab] = useState<BookingStatus | 'all'>('all');

  const filteredBookings =
    activeTab === 'all'
      ? MOCK_BOOKINGS
      : MOCK_BOOKINGS.filter((b) => b.status === activeTab);

  return (
    <div className="mx-auto w-full max-w-5xl p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Meus Agendamentos</h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Histórico e agendamentos ativos.
        </p>
      </header>

      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as BookingStatus | 'all')}
      >
        <TabsList className="mb-6 w-full justify-start overflow-x-auto">
          {BOOKING_STATUS_FILTERS.map((filter) => (
            <TabsTrigger key={filter.value} value={filter.value}>
              {filter.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {BOOKING_STATUS_FILTERS.map((filter) => (
          <TabsContent key={filter.value} value={filter.value}>
            {filteredBookings.length === 0 ? (
              <BookingEmptyState />
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {filteredBookings.map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
