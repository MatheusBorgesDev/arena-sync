/**
 * Shell Administrativo (com sidebar).
 * Guard de rota admin.
 */
export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Guard de autenticação admin (redirect se não autenticado)
  return (
    <div className="flex min-h-screen">
      <aside className="w-56 border-r border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <nav className="space-y-2 text-sm">
          <a href="/dashboard" className="block rounded-md px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800">
            Dashboard
          </a>
          <a href="/agenda" className="block rounded-md px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800">
            Agenda
          </a>
          <a href="/admin-login" className="block rounded-md px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-800">
            Login Admin
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
