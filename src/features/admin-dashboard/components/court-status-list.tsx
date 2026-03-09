import * as React from 'react';
import { cn } from '@/shared/lib/utils';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';
import type { Court } from '@/core/entities';
import { MOCK_COURTS } from '../mocks/dashboard-mocks';

const statusConfig: Record<Court['status'], { label: string; className: string }> = {
  active: {
    label: 'Ativa',
    className: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
  },
  maintenance: {
    label: 'Manutenção',
    className: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
  },
  inactive: {
    label: 'Inativa',
    className: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400',
  },
};

export const CourtStatusList = (): React.ReactElement => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {MOCK_COURTS.map((court) => {
        const config = statusConfig[court.status];
        return (
          <Card key={court.id}>
            <CardContent className="flex items-center justify-between p-4">
              <span className="font-medium">{court.name}</span>
              <Badge className={cn('border-transparent', config.className)}>
                {config.label}
              </Badge>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
