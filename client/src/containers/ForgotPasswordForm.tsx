'use client';

import { AccountRecoverySchema } from '@schema/ForgotPasswordSchema';
import { AuthCard } from '@components/ui/AuthCard';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
// import { useForm } from 'react-hook-form';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Shield } from 'lucide-react';
import colors from '@utils/Colors';
import { Button } from '@/components/ui/Button';
import { ControlledInput } from '@/components/ui/Input';
import { FeedbackNotice } from '@/components/FeedbackNotice';

interface ForgotPasswordFromProps {}

type ForgotPasswordSchemaType = z.infer<typeof AccountRecoverySchema>;

export const ForgotPasswordFrom = ({}: ForgotPasswordFromProps) => {
    
  const { handleSubmit, control } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(AccountRecoverySchema),
  });

  const handleOnPasswordRecoverySubmit = useCallback(
    (data: ForgotPasswordSchemaType) =>
      console.log('Forgot Password Form Submitted', data),
    [],
  );
  //TODO: TO remove the width from the AuthCard

  return (
    <AuthCard className='w-[70%]'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row items-center justify-start gap-4'>
          <ArrowLeft height={25} width={25} color={colors.primary[100]} />
          <h1 className='font-raleway text-2xl font-bold text-white'>
            Forgot password
          </h1>
        </div>
        <p className='font-rubik text-sm font-light text-white md:text-base'>
          Don't worry, it happens to the best of us. Enter your email and we'll
          send you a link to create a new password.
        </p>
      </div>
      <ControlledInput
        control={control}
        name='email'
        label='Email'
        placeholder='Enter your email'
      />
      <Button
        onClick={handleSubmit(handleOnPasswordRecoverySubmit)}
        label='Send Link'
      />
      {/* <FeedbackNotice
        variant='SUCCESS'
        icon={Shield}
        message={
           "We've sent a password reset link to your email address 'osama@gmail.com'.\n\nIt might take a minute to arrive, so keep an eye on your inbox (and maybe your spam folder, just in case!)."
        }
      /> */}
    </AuthCard>
  );
};
