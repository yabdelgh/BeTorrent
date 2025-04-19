'use client'

import { useEffect, useState } from 'react'
import Loading from '../components/loading'
import Login from '../components/login'

export default function AuthWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [ready, setReady] = useState(false)
  const [hasToken, setHasToken] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    setHasToken(!!token)
    setReady(true)
  }, [])

  if (!ready) return <Loading />

  if (!hasToken) return <Login />

  return <>{children}</>
}
