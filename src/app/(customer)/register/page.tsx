import { RegisterForm } from '@/features/auth/components/register-form';

export default function RegisterPage() {
  return (
    <div className="grid grid-cols-[1fr_500px]">
      <div className="bg-[url('/register-img.jpg')] bg-cover bg-center" />
      <div className="bg-background from-background to-background relative flex min-h-screen items-center justify-center via-zinc-800 px-4 dark:bg-linear-to-br">
        <RegisterForm />
      </div>
    </div>
  );
}
