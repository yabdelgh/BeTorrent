'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const fragment = window.location.hash.substring(1);
    const params = new URLSearchParams(fragment);
    const token = params.get('token');

    if (token) {
      sessionStorage.setItem('token', token);
      window.history.replaceState({}, document.title, window.location.pathname);
      router.push('/home');
    } else {
      router.push('/login?error=missing_token');
    }
  }, []);

  return <div>Loading...</div>;
};

export default AuthCallback;