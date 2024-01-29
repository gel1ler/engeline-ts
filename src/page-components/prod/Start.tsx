'use client'
import React from 'react'
import Fill from '@/components/UI/Fill'
import { TProduct } from '@/globalTypes'
import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import Title from '@/components/UI/text/Title'
import Link from 'next/link'
import MoreButton from '@/components/UI/buttons/MoreButton'
import { useTheme } from '@mui/material/styles'

const Start = () => {
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Box className='relative flex items-center h-screen'>
            <Image
                fill
                src='/general.jpg'
                sizes="(max-width: 768px) 100vw"
                alt={`Картинка общая`}
                className='-z-40 object-cover h-full'
            />
            <Box className='absolute top-0 left-0 w-screen h-screen -z-10' sx={{ background: 'radial-gradient(white, transparent)' }} />
            <Box className='absolute top-0 left-0 w-screen h-screen bg-white opacity-75 -z-10' />
            <Fill type='to anchor' anchor='to top' />
            <Box className='flex flex-col items-center mx-auto mb-20 overflow-hidden'>
                <Title>Производство</Title>
                <Typography
                    variant='h6'
                    textAlign='center'
                    data-aos='fade-up'
                    sx={{
                        width: '700px',
                        maxWidth: '90vw'
                    }}
                >
                    Компания Инжелайн предлагает широкий спектр оборудования и услуг для
                    различных отраслей промышленности. Мы гарантируем высокое качество и
                    надежность нашей продукции, а также индивидуальный подход к каждому клиенту.
                </Typography>
                <MoreButton
                    dataAos='fade-up'
                    sx={{ mt: 2 }}
                    href='#factory_anchor'
                />
            </Box>
        </Box>
    )
}

export default Start