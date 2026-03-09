import * as React from 'react';
import { CalendarX2 } from 'lucide-react';

export const AgendaEmptyState = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <CalendarX2 className="h-12 w-12 text-muted-foreground" />
      <p className="text-lg font-medium">Nenhum agendamento para este dia</p>
      <p className="text-sm text-muted-foreground">
        Selecione outra data para ver os agendamentos.
      </p>
    </div>
  );
};
