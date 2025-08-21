import { type ReactNode } from 'react';
import bgImage from '@public/backgrounds/image.svg';
import Image from 'next/image';
import Logo from '@public/BeTorrent.svg';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center gap-10'>
      <Image
        src={bgImage.src}
        alt=''
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='-z-10'
      />
      <div className='absolute left-1/2 top-12 -translate-x-1/2'>
        <Image
          src={Logo.src}
          alt=''
          width={70}
          height={55}
          objectFit='cover'
          className='z-10'
        />
      </div>
      <div className='flex min-h-screen items-center justify-center px-4 py-20'>
        {children}
      </div>
    </div>
  );
}
