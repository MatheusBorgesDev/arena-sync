import { UserLoginForm } from '@/features/auth/components/user-login-form';

export default function LoginPage() {
  return (
    <div className="grid grid-cols-[1fr_500px]">
      <div className="bg-[url('/login-img.jpg')] bg-cover bg-center" />

      <div className="bg-background from-background to-background relative flex min-h-screen items-center justify-center via-zinc-800 px-4 dark:bg-linear-to-br">
        <UserLoginForm />
      </div>
    </div>
  );
}
