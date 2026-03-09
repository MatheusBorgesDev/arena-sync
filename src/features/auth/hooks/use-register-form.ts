import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormValues } from '../schemas/register-schema';

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleRegister = async (data: RegisterFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Registro realizado:', data);
  };

  return {
    register,
    handleSubmit,
    errors,
    handleRegister,
    isSubmitting,
  };
};
