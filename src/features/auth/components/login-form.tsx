"use client";

import Link from "next/link";
import { Trophy, Loader2 } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";

import { businessName } from "@/shared/constants/business";
import { useLoginForm } from "../hooks/use-login-form";

export const LoginForm = () => {
  const { register, handleSubmit, errors, handleLogin, isSubmitting } = useLoginForm();

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex items-center gap-2 text-primary">
        <Trophy size={30} strokeWidth={3} />
        <div className="text-4xl font-bold">
          <span className="text-foreground">{businessName[0]}</span>
          <span>{businessName[1]}</span>
        </div>
      </div>

      <Card className="w-full max-w-md min-w-[350px]">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-3xl">Acesso administrativo</CardTitle>
          <CardDescription>
            Insira suas credenciais para gerenciar seu negócio
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-6">          
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="admin@arenasync.com"
                {...register("email")}
                className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
              />
              {errors.email && (
                <p className="text-[0.8rem] font-medium text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Campo de Senha */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Senha
              </label>
              <Input
                id="password"
                type="password"
                placeholder="******"
                {...register("password")}
                className={errors.password ? "border-destructive focus-visible:ring-destructive" : ""}
              />
              {errors.password && (
                <p className="text-[0.8rem] font-medium text-destructive">
                  {errors.password.message}
                </p>
              )}
             
              <div className="flex justify-end mt-1">
                <Link
                  href="/forgot-password"
                  className="text-xs text-muted-foreground hover:text-primary"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Entrando...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};