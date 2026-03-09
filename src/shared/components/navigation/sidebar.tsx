'use client';

interface SidebarProps {
  children?: React.ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="w-56 border-r border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
      {children ?? (
        <nav className="space-y-2 text-sm">
          <a href="/dashboard" className="block rounded-md px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800">
            Dashboard
          </a>
          <a href="/agenda" className="block rounded-md px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800">
            Agenda
          </a>
        </nav>
      )}
    </aside>
  );
}
