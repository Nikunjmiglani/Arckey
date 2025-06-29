'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/') // 👈 Redirect to home
  }, [router])

  return null // or show a message/loading if you want
}
