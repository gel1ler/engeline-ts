import { ArrowBack, ArrowBackIos } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Страница не найдена',
}


export default function Custom404() {
    return (
        <Box className='w-screen h-96 flex flex-col gap-2 items-center justify-center'>
            <Typography variant='h5'>
                Страница не найдена
            </Typography>
            <Link href='/'>
                <Typography>
                    <ArrowBack fontSize='small' />
                    Вернуться на главную
                </Typography>
            </Link>
        </Box>
    )
}