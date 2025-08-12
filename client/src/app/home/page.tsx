'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

async function validateToken(token: string): Promise<boolean> {
  try {
    const response = await fetch('http://localhost:5000/verify', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return !!response.ok;
  } catch {
    console.log('error');
    return false;
  }
}

const fetchData = async (router: any) => {
  const token = sessionStorage.getItem('token');
  if (!!token) {
    const valid = await validateToken(token);
    if (!valid) {
      sessionStorage.removeItem('token');
      router.replace('/login');
    }
  }
};

function Home() {
  const router = useRouter();

  useEffect(() => {
    fetchData(router);
  }, [router]);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4'>
      <h1 className='mb-4 text-4xl font-bold text-gray-800'>
        Welcome to My protected Site
      </h1>
      <p className='text-lg text-gray-600'>
        This is a simple Next.js page styled with Tailwind CSS.
      </p>
    </div>
  );
}

export default Home;
