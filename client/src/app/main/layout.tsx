'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    
    if (!token) {
      router.replace('/')
    } else {
      setIsValid(true)
    }
  }, [])

  if (!isValid) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}