import * as React from 'react';
import Link from 'next/link';
import { CalendarX2 } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';

interface BookingEmptyStateProps {
  message?: string;
}

export const BookingEmptyState = ({
  message = 'Nenhum agendamento encontrado.',
}: BookingEmptyStateProps): React.ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <CalendarX2 className="h-12 w-12 text-muted-foreground" />
      <div className="space-y-1">
        <p className="text-lg font-medium">{message}</p>
        <p className="text-sm text-muted-foreground">
          Que tal agendar um horário para jogar?
        </p>
      </div>
      <Button asChild>
        <Link href="/home">Agendar agora</Link>
      </Button>
    </div>
  );
};
