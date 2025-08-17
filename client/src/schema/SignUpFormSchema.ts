import z from "zod";
import { SignInFormSchema } from "./SignInSchema";


export const SignUpFormSchema = SignInFormSchema.extend({
  firstName: z.string().min(3, 'First name must be at least 3 characters'),
  lastName: z.string().min(3, 'Last name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  confirmPassword: z.string().min(8, 'Confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords do not match',
});