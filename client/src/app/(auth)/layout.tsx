import { type ReactNode } from 'react';
import bgImage from '@public/backgrounds/image.svg';
import Image from 'next/image';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative min-h-screen flex-col gap-10'>
      <Image
        src={bgImage.src}
        alt=''
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='-z-10'
      />
      {/* <div className='absolute left-1/2 top-4 -translate-x-1/2'>
        <Image
          src={Logo.src}
          alt=''
          width={70}
          height={55}
          objectFit='cover'
          className='z-10'
        />
      </div> */}

      {children}
    </div>
  );
}
