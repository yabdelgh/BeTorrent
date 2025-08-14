'use client';

import { Input } from '@/components/ui/Input';

export default function LoginForm() {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google_oauth2';
  };

  return (
    <div className='flex-1 flex-col gap-8 rounded-lg border border-primary-100 bg-glass-overlay px-8 py-6'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-row items-center justify-between'>
          <text className='font-raleway text-xl font-bold text-white'>
            Welcome to Torrento!{' '}
          </text>
          <text className='font-raleway text-sm text-white underline'>
            Login{' '}
          </text>
        </div>
        <text className='font-rubik text-xs font-light text-white'>
          Create an account to save your favorite movies, build watchlists, and
          get personalized recommendations.
        </text>
      </div>
      <div className='flex flex-row flex-wrap gap-5 pb-10'>
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
      <button
        onClick={handleGoogleLogin}
        className='font- flex w-full items-center justify-center gap-2 rounded bg-primary-100 p-4 font-rubik font-extralight text-white'
      >
        {/* Google Icon */}
        SIGN UP
      </button>
    </div>
  );
}
