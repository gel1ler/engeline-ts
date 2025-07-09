// pages/profile/index.tsx
'use client'
import React from 'react'
import { useUser } from '@/hooks/useUser'
import { Container, Typography, Box, Button } from '@mui/material'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/clientApp'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ProfilePage = () => {
    const { user, loading } = useUser()
    const router = useRouter()

    const handleLogout = async () => {
        await signOut(auth)
        router.push('/')
    }

    if (loading) {
        return <Typography>Загрузка...</Typography>
    }

    if (!user) {
        router.push('/login')
        return null
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Box textAlign="center" className='flex flex-col items-center gap-4'>
                <Typography variant="h4" gutterBottom>
                    Профиль
                </Typography>
                <Typography>Email: {user.email}</Typography>
                <Link href='/admin'>
                    <Button color='secondary' variant='outlined'>Админ панель</Button>
                </Link>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={handleLogout}
                    sx={{ width: 'fit-content' }}
                >
                    Выйти
                </Button>
            </Box>
        </Container>
    )
}

export default ProfilePage