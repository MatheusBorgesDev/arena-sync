/**
 * Layout do módulo Cliente.
 * Navbar simplificada + Guard de cliente.
 */
export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Guard de autenticação cliente (opcional, conforme rota)
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950">
        <nav className="flex items-center gap-4 text-sm">
          <a href="/explorer" className="hover:underline">Explorar</a>
          <a href="/login" className="hover:underline">Entrar</a>
          <a href="/register" className="hover:underline">Criar conta</a>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
