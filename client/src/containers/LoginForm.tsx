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
    // <div className='flex w-1/2 flex-col gap-14 rounded-lg border border-primary-100 bg-glass-overlay px-12 py-10'>
    //   <div className='flex flex-col gap-5'>
    //     <div className='flex flex-row items-center justify-between'>
    //       <text className='font-raleway text-3xl font-bold text-white'>
    //         Welcome to Torrento!{' '}
    //       </text>
    //       <TextLink text='Login' onClick={() => {}} href={'/'} />
    //     </div>
    //     <text className='font-rubik text-base font-light text-white'>
    //       Create an account to save your favorite movies, build watchlists, and
    //       get personalized recommendations.
    //     </text>
    //   </div>
    //   <div className='flex flex-row flex-wrap gap-5 pb-4'>
    //     <Input label='First Name' placeholder='Enter your first name' />
    //     <Input label='Last Name' placeholder='Enter your last name' />
    //     <Input label='Username' placeholder='Enter your username' />
    //     <Input label='Email' placeholder='Enter your email' />
    //     <Input
    //       label='Password'
    //       placeholder='Enter your password'
    //       type='password'
    //     />
    //     <Input
    //       label='Confirm Password'
    //       placeholder='Enter your password'
    //       type='password'
    //     />
    //   </div>
    //   <div className='flex flex-col gap-5'>
    //     <Button
    //       disabled
    //       variant='Primary'
    //       label='Sign Up'
    //       onClick={handleGoogleLogin}
    //     />
    //     <div className='h-[1px] bg-primary-100' />
    //     <div className='flex flex-row items-center justify-center gap-5'>
    //       <Button
    //         icon={FortyTwo}
    //         variant='Secondary'
    //         label='FortyTwo'
    //         onClick={handleFortyTwoLogin}
    //       />
    //       <Button
    //         icon={Google}
    //         variant='Secondary'
    //         label='Google'
    //         onClick={handleGoogleLogin}
    //       />
    //     </div>

    //   </div>
    // </div>
    <div className='flex  md:backdrop-blur-xl flex-col gap-12 rounded-lg md:bg-glass-overlay px-6 py-8 md:border md:border-primary-50 md:px-8 md:py-10'>
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
        <Button  variant='Primary' label='Sign Up' />
        <div className='h-[1px] bg-primary-50 ' />
        <div className='flex  items-center justify-center gap-3 flex-row sm:gap-5'>
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
