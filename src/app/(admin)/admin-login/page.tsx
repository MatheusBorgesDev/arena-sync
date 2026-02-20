import { AdminLoginForm } from '@/features/auth/components/admin-login-form';

export default function AdminLoginPage() {
  return (
    <div className="bg-background from-background to-background relative flex min-h-screen items-center justify-center via-zinc-800 px-4 dark:bg-linear-to-br">
      <AdminLoginForm />
    </div>
  );
}
