import * as React from 'react';
import { Separator } from '@/shared/components/ui/separator';
import { StatCard } from './stat-card';
import { RecentBookingsTable } from './recent-bookings-table';
import { CourtStatusList } from './court-status-list';
import { MOCK_STATS } from '../mocks/dashboard-mocks';

export const DashboardView = (): React.ReactElement => {
  return (
    <div className="mx-auto w-full max-w-6xl p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Dashboard</h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Visão geral do seu negócio.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {MOCK_STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>

      <Separator className="my-8" />

      <section>
        <h2 className="mb-4 text-lg font-semibold">Agendamentos Recentes</h2>
        <RecentBookingsTable />
      </section>

      <Separator className="my-8" />

      <section>
        <h2 className="mb-4 text-lg font-semibold">Status das Quadras</h2>
        <CourtStatusList />
      </section>
    </div>
  );
};
