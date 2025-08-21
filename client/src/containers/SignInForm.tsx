'use client';
import { SignInFormSchema } from '@/schema/SignInSchema';
import { SignInFormData } from '@/types/SignInFormData';
import { FortyTwo } from '@components/icons/FortyTwo';
import { Google } from '@components/icons/Google';
import { AuthCard } from '@components/ui/AuthCard';
import { Button } from '@components/ui/Button';
import { ControlledInput } from '@components/ui/Input';
import TextLink from '@components/ui/TextLink';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

type SignUpSchemaType = z.infer<typeof SignInFormSchema>;

export default function SignInForm() {
  const handleGoogleLogin = useCallback(
    () => (window.location.href = 'http://localhost:3000/auth/google_oauth2'),
    [],
  );

  const handleFortyTwoLogin = useCallback(
    () => (window.location.href = 'http://localhost:3000/auth/google_oauth2'),
    [],
  );

  const { handleSubmit, control } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignInFormSchema),
  });

  const handleOnSignIn = useCallback((data: SignInFormData) => {
    console.log('Sign Up Form Submitted', data);
  }, []);

  return (
    <AuthCard className='px-'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row items-center justify-between gap-20'>
          <h1 className='font-raleway text-2xl font-bold text-white md:text-3xl'>
            <span className='block md:hidden'>Welcome Back!</span>
            <span className='hidden md:block'>Welcome Back to Torrento!</span>
          </h1>
          <TextLink text='SIGN UP' onClick={() => {}} href='/sign-up' />
        </div>
        <p className='font-rubik text-sm font-light text-white md:text-base'>
          The show's about to start. Log in to continue watching
        </p>
      </div>

      <div className='flex flex-col gap-8 pb-2'>
        <ControlledInput
          control={control}
          name='username'
          label='Username'
          placeholder='Enter your username'
        />
        <div>
          <ControlledInput
            name='password'
            control={control}
            label='Password'
            placeholder='Enter your password'
            type='password'
          />
          <TextLink
            className='flex flex-row justify-end pt-4  text-sm font-normal text-primary-100 no-underline'
            text='Forgot password ?'
            href={'/forgot-password'}
          />
        </div>
      </div>
      <div className='flex flex-col gap-8'>
        <Button
          // disabled={isLoding} disable the button on isLoading
          variant='Primary'
          label='Sign In'
          onClick={handleSubmit(handleOnSignIn)}
        />
        <div className='h-[1px] bg-primary-50' />
        <div className='font- flex flex-row items-center justify-center gap-3 sm:gap-5'>
          <Button
            icon={FortyTwo}
            variant='Secondary'
            label='FortyTwo'
            onClick={handleFortyTwoLogin}
          />
          <Button
            icon={Google}
            variant='Secondary'
            label='Google'
            onClick={handleGoogleLogin}
          />
        </div>
      </div>
    </AuthCard>
  );
}
