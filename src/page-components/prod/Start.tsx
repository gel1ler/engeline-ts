import React from 'react'
import Fill from '@/components/UI/Fill'
import { TProduct } from '@/globalTypes'
import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Title from '@/components/UI/text/Title'
import Link from 'next/link'
import MoreButton from '@/components/UI/buttons/MoreButton'

const Start = () => {
    return (
        <Box className='relative flex items-center h-screen'>
            <Image
                fill
                src='/general.jpg'
                sizes="(max-width: 768px) 100vw"
                alt={`Картинка общая`}
                className='-z-40 object-cover h-full'
                style={{
                    left: '15%',
                }}
            />
            <Fill type='to anchor' anchor='to right' prc={40} />
            <Fill type='to anchor' anchor='to top' />
            <Container
                sx={{
                    maxWidth: ['98vw', '98vw', '98vw', '1600px'],
                    width: '90vw',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 10
                }}
                maxWidth={false}
            >
                <Box className=' flex flex-col'>
                    <Title variant='h2'>Производство</Title>
                    <Typography variant='h6' className='w-1/2' data-aos='fade-up'>
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