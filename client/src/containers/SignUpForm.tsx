'use client';

import { AccountCreationSchema } from '@/schema/AccountCreationSchema';
import { SignUpFormInitValues } from '@/types/SignInFormData';
import { SignUpFormData } from '@/types/SignUpFormData';
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

type SignUpSchemaType = z.infer<typeof AccountCreationSchema>;

export default function SignUpForm() {

  const handleGoogleLogin = useCallback(
    () => (window.location.href = 'http://localhost:3000/auth/google_oauth2'),
    [],
  );

  const handleFortyTwoLogin = useCallback(
    () => (window.location.href = 'http://localhost:3000/auth/google_oauth2'),
    [],
  );

  const { handleSubmit, control } = useForm<SignUpSchemaType>({
    resolver: zodResolver(AccountCreationSchema),
  });

  const handleOnSignUp = useCallback((data: SignUpFormData) => {
    console.log('Sign Up Form Submitted', data);
  }, []);

  return (
    <AuthCard>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row items-center justify-between'>
          <h1 className='font-raleway text-2xl font-bold text-white md:text-3xl'>
            <span className='block md:hidden'>Welcome</span>
            <span className='hidden md:block'>Welcome to Torrento!</span>
          </h1>
          <TextLink text='LOG IN' onClick={() => {}} href='/sign-in' />
        </div>
        <p className='font-rubik text-sm  font-light text-white md:text-base'>
          Create an account to save your favorite movies, build watchlists, and
          get personalized recommendations.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-8 pb-2 sm:grid-cols-2'>
        <ControlledInput
          control={control}
          name='firstName'
          label='First name'
          placeholder='Enter your first name'
        />
        <ControlledInput
          control={control}
          name='lastName'
          label='Last name'
          placeholder='Enter your last name'
        />
        <ControlledInput
          control={control}
          name='username'
          label='Username'
          placeholder='Enter your username'
        />
        <ControlledInput
          control={control}
          name='email'
          label='Email'
          placeholder='Enter your email'
        />
        <ControlledInput
          name='password'
          control={control}
          label='Password'
          placeholder='Enter your password'
          type='password'
        />
        <ControlledInput
          name='confirmPassword'
          control={control}
          label='Confirm password'
          placeholder='Enter your password'
          type='password'
        />
      </div>
      <div className='flex flex-col gap-8'>
        <Button
          // disabled={isLoding} disable the button on isLoading
          label='Sign Up'
          onClick={handleSubmit(handleOnSignUp)}
        />
        <div className='h-[1px] bg-primary-50' />
        <div className='flex flex-row font- items-center justify-center gap-3 sm:gap-5'>
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
