'use client';

import Link from 'next/link';
import { Trophy, Loader2 } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';

import { businessName } from '@/shared/constants/business';
import { useRegisterForm } from '../hooks/use-register-form';

export const RegisterForm = () => {
  const { register, handleSubmit, errors, handleRegister, isSubmitting } = useRegisterForm();

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-primary flex items-center gap-2">
        <Trophy size={30} strokeWidth={3} />
        <div className="text-4xl font-bold">
          <span className="text-foreground">{businessName[0]}</span>
          <span>{businessName[1]}</span>
        </div>
      </div>

      <Card className="w-full max-w-md min-w-[350px]">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-3xl">Criar conta</CardTitle>
          <CardDescription>Preencha os dados para criar sua conta</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Nome
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                {...register('name')}
                className={errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}
              />
              {errors.name && (
                <p className="text-destructive text-[0.8rem] font-medium">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                {...register('email')}
                className={errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}
              />
              {errors.email && (
                <p className="text-destructive text-[0.8rem] font-medium">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Senha
              </label>
              <Input
                id="password"
                type="password"
                placeholder="******"
                {...register('password')}
                className={
                  errors.password ? 'border-destructive focus-visible:ring-destructive' : ''
                }
              />
              {errors.password && (
                <p className="text-destructive text-[0.8rem] font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Confirmar senha
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="******"
                {...register('confirmPassword')}
                className={
                  errors.confirmPassword
                    ? 'border-destructive focus-visible:ring-destructive'
                    : ''
                }
              />
              {errors.confirmPassword && (
                <p className="text-destructive text-[0.8rem] font-medium">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Criando conta...
                </>
              ) : (
                'Criar conta'
              )}
            </Button>

            <p className="text-muted-foreground text-center text-sm">
              Já tem uma conta?{' '}
              <Link href="/login" className="text-primary font-medium hover:underline">
                Entrar
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
