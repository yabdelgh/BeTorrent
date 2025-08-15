'use client';

import { FortyTwo } from '@/components/icons/FortyTwo';
import { Google } from '@/components/icons/Google';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import TextLink from '@/components/ui/TextLink';
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
    <div className='flex max-w-[700px] flex-col gap-8 rounded-lg border border-primary-100 bg-glass-overlay px-8 py-10'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row items-center justify-between'>
          <text className='font-raleway text-3xl font-bold text-white'>
            Welcome to Torrento!{' '}
          </text>
          <TextLink text='Login' onClick={() => {}} href={'/'} />
        </div>
        <text className='font-rubik text-base font-light text-white'>
          Create an account to save your favorite movies, build watchlists, and
          get personalized recommendations.
        </text>
      </div>
      <div className='flex flex-row flex-wrap gap-5 pb-4'>
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
      <div className='flex flex-col gap-5'>
        <Button
          disabled
          variant='Primary'
          label='Sign Up'
          onClick={handleGoogleLogin}
        />
        <div className='h-[1px] bg-primary-100' />
        <div className='flex flex-row items-center justify-center gap-5'>
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
    </div>
  );
}
