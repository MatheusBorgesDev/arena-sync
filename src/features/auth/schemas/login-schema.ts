import {z} from "zod";

const passwordMinLength = 6;

export const loginSchema = z.object({
  email: z.string()
    .min(1, "E-mail é obrigatório")
    .email("E-mail inválido"),

  password: z.string()
    .min(1, "Senha é obrigatória")
    .min(passwordMinLength, `Senha deve ter pelo menos ${passwordMinLength} caracteres`),
});

export type LoginFormValues = z.infer<typeof loginSchema>;