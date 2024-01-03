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
                style={{
                    left: isMd ? '' : '15%',
                }}
            />
            {!isMd ?
                <>
                    <Fill type='to anchor' anchor='to right' prc={40} />
                    <Fill type='to anchor' anchor='to top' />
                </>
                :
                <>
                    <Box className='absolute top-0 left-0 w-screen h-screen -z-10' sx={{ background: 'radial-gradient(white, transparent)' }} />
                    <Box className='absolute top-0 left-0 w-screen h-screen bg-white opacity-80 -z-10' />
                </>
            }
            <Container
                sx={{
                    maxWidth: ['98vw', '98vw', '98vw', '1600px'],
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 10
                }}
                maxWidth={false}
            >
                <Box className='flex flex-col items-center lg:items-start'>
                    <Title variant='h2'>Производство</Title>
                    <Typography
                        variant='h6'
                        className='w-full md:w-1/2 text-center lg:text-left'
                        data-aos='fade-up'
                    >
                        Компания Инжелайн предлагает широкий спектр оборудования и услуг для
                        различных отраслей промышленности. Мы гарантируем высокое качество и
                        надежность нашей продукции, а также индивидуальный подход к каждому клиенту.
                    </Typography>
                    <MoreButton
                        sx={{ mt: 2 }}
                        href='#about_anchor'
                    />
                </Box>
            </Container >
        </Box>
    )
}

export default Start