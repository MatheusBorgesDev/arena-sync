import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormValues } from '../schemas/login-schema';

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async (data: LoginFormValues) => {
    // Simulação de chamada de API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Login realizado:', data);
  };

  return {
    register,
    handleSubmit,
    errors,
    handleLogin,
    isSubmitting,
  };
};
