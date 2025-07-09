// pages/login.tsx
'use client'
import React, { useState } from 'react'
import {
    Container,
    Box,
    Typography,
    Button,
    Alert,
} from '@mui/material'
import { useForm, FormProvider } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/clientApp'
import { useRouter } from 'next/navigation'

// Ваш кастомный TextField
import RHookFormTextField from '@/components/UI/forms/RHookFormTextField'

const LoginPage = () => {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const methods = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const { handleSubmit } = methods

    const onSubmit = async (data: { email: string; password: string }) => {
        const { email, password } = data
        setLoading(true)
        setError(null)

        try {
            await signInWithEmailAndPassword(auth, email, password)
            router.push('/admin')
        } catch (err: any) {
            setError('Неверный email или пароль')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2
                }}
            >
                <Typography component="h1" variant="h5">
                    Вход в систему
                </Typography>

                <FormProvider {...methods}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        {error && (
                            <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
                                {error}
                            </Alert>
                        )}

                        <RHookFormTextField
                            label="Email"
                            name="email"
                            fullWidth
                            type="email"
                            notReq={false}
                        />
                        <RHookFormTextField
                            label="Пароль"
                            name="password"
                            fullWidth
                            type="password"
                            notReq={false}
                        />
                        <Button
                            type="submit"
                            color='secondary'

                            variant="contained"
                            disabled={loading}
                        >
                            {loading ? 'Загрузка...' : 'Войти'}
                        </Button>
                    </form>
                </FormProvider>
            </Box>
        </Container>
    )
}

export default LoginPage