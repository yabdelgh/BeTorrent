'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@ui/Loading';

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('token');

    if (!token) {
      router.replace('/login');
      return;
    }

    setReady(true);
  }, [router]);

  if (!ready) return <Loading />;

  return <>{children}</>;
}
