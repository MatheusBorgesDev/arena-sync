import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/shared/components/ui/card';
import type { DashboardStat } from '../mocks/dashboard-mocks';

interface StatCardProps {
  stat: DashboardStat;
}

export const StatCard = ({ stat }: StatCardProps): React.ReactElement => {
  const Icon = stat.icon;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{stat.value}</p>
        <p className="text-xs text-muted-foreground">{stat.description}</p>
      </CardContent>
    </Card>
  );
};
