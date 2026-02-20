import { UserLoginForm } from '@/features/auth/components/user-login-form';

export default function LoginPage() {
  return (
    <div className="bg-background from-background to-background relative flex min-h-screen items-center justify-center via-zinc-800 px-4 dark:bg-linear-to-br">
      <UserLoginForm />
    </div>
  );
}
