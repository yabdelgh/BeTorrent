import z from 'zod';
import { LoginCredentialsSchema } from './LoginCredentialsSchema';
import { AccountRecoverySchema } from './ForgotPasswordSchema';
import { PasswordCreationSchema } from './PasswordCreationSchema';

export const AccountCreationSchema = LoginCredentialsSchema
  .extend(AccountRecoverySchema.shape)   // e.g., email
  .extend(PasswordCreationSchema.shape)    // password + confirmPassword + refine
  .extend({
    firstName: z.string().min(3, 'First name must be at least 3 characters'),
    lastName: z.string().min(3, 'Last name must be at least 2 characters'),
  });
