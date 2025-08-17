import z from "zod";

export const SignInFormSchema = z.object({
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters')
      .regex(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers and underscores'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Za-z]/, 'Must include a letter')
      .regex(/[0-9]/, 'Must include a number'),
  });
  