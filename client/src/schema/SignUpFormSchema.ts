import z from 'zod';

export const SignUpFormSchema = z
  .object({
    username: z
      .string()
      .min(3, {message:'Username must be at least 3 characters'})
      .regex(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers and underscores'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Za-z]/, 'Must include a letter')
      .regex(/[0-9]/, 'Must include a number'),
    firstName: z.string().min(3, 'First name must be at least 3 characters'),
    lastName: z.string().min(3, 'Last name must be at least 2 characters'),
    email: z.string().email('Enter a valid email'),
    confirmPassword: z.string().min(8, 'Confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });
