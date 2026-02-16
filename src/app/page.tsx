import { Button } from "@/shared/components/ui/button";
import { Ghost, LayoutDashboard, CalendarDays } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-zinc-50 p-8 dark:bg-zinc-950">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 lg:text-5xl dark:text-zinc-50">
          ArenaSync
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          Ambiente de Desenvolvimento Configurado.
        </p>
      </div>

      <div className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <Button variant="default">
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
            </Button>
        
        <Button variant="secondary">
          <CalendarDays className="mr-2 h-4 w-4" />
          Agendamentos
        </Button>

        <Button variant="destructive">
          <Ghost className="mr-2 h-4 w-4" />
          Limpar Cache
        </Button>
      </div>

      <div className="text-sm text-muted-foreground">
        Status: <span className="font-medium text-emerald-600">Online 🟢</span>
      </div>
    </div>
  );
}