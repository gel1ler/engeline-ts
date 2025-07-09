
'use client'
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { useUser } from '@/hooks/useUser'

const AuthButton = () => {
  const { user, loading } = useUser()

  if (loading) {
    return null // или спиннер
  }

  if (!user) {
    return (
      <Link href='/login'>
        <Button style={{ backgroundColor: 'transparent' }}>
          <svg className='transition-all stroke-black hover:stroke-engeline' width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12C20 7.58172 16.4183 4 12 4M12 20C14.5264 20 16.7792 18.8289 18.2454 17" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 12H14M14 12L11 9M14 12L11 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </Link>
    )
  }

  return (
    <Link href='/profile'>
      <Button style={{ backgroundColor: 'transparent' }}>
        <svg className='transition-all stroke-black hover:stroke-engeline' width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.3 21C19.3 17.8 16.3 15.2 12 15.2C7.7 15.2 4.7 17.8 4.7 21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
    </Link>
  )
}

export default AuthButton