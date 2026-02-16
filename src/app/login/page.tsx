import { LoginForm } from "@/features/auth/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 relative dark:bg-linear-to-br from-background via-zinc-800 to-background">
      <LoginForm />
    </div>
  );
}