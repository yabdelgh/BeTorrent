'use client';

import { FortyTwo } from '@components/icons/FortyTwo';
import { Google } from '@components/icons/Google';
import { AuthCard } from '@components/ui/AuthCard';
import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';
import TextLink from '@components/ui/TextLink';
import { useCallback } from 'react';

export default function LoginForm() {
  const handleGoogleLogin = useCallback(
    () => (window.location.href = 'http://localhost:3000/auth/google_oauth2'),
    [],
  );
  const handleFortyTwoLogin = useCallback(
    () => (window.location.href = 'http://localhost:3000/auth/google_oauth2'),
    [],
  );

  return (
    <AuthCard>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row items-center justify-between'>
          <h1 className='font-raleway text-2xl font-bold text-white md:text-3xl'>
            <span className='block md:hidden'>Welcome</span>
            <span className='hidden md:block'>Welcome to Torrento!</span>
          </h1>
          <TextLink text='Login' onClick={() => {}} href='/' />
        </div>
        <p className='font-rubik text-sm font-light text-white md:text-base'>
          Create an account to save your favorite movies, build watchlists, and
          get personalized recommendations.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-8 pb-2 sm:grid-cols-2'>
        <Input label='First Name' placeholder='Enter your first name' />
        <Input label='Last Name' placeholder='Enter your last name' />
        <Input label='Username' placeholder='Enter your username' />
        <Input label='Email' placeholder='Enter your email' />
        <Input
          label='Password'
          placeholder='Enter your password'
          type='password'
        />
        <Input
          label='Confirm Password'
          placeholder='Enter your password'
          type='password'
        />
      </div>
      <div className='flex flex-col gap-8'>
        <Button variant='Primary' label='Sign Up' />
        <div className='h-[1px] bg-primary-50' />
        <div className='flex flex-row items-center justify-center gap-3 sm:gap-5'>
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
