import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { mainInfo } from '@/content/content'
import Fill from '@/components/UI/Fill'
import { headerProps } from '@/customization/customization'
import Link from 'next/link'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Form from '@/components/UI/forms/Form'
import Menu from './Menu'

const direcrions: { id: number, text: string, link: string }[] = [
    {
        id: 0,
        text: 'Механическая обработка',
        link: '/'
    },
    {
        id: 1,
        text: 'Трубы обечаечные, корпуса, бандажи',
        link: '/'
    },
    {
        id: 2,
        text: 'Изготовление отводов различных диаметров и углов',
        link: '/'
    },
    {
        id: 3,
        text: 'Емкостное оборудование',
        link: '/'
    }
]


const Start = () => {
    return (
        <Box
            className='flex items-center justify-around'
            sx={{
                height: headerProps.type === 'scrolled' ? '100vh' : 'calc(100vh - 7rem)'
            }}
        >
            <Fill anchor='to top' type='to anchor' />
            <Fill anchor='to right' prc={40} type='to anchor' />
            <Box className='flex flex-col gap-12 justify-center my-auto'>
                <Image
                    data-aos='fade-right'
                    src={mainInfo.logoHorizontal}
                    alt='Logo'
                    width="0"
                    height="0"
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        height: 'min-content'
                    }}
                    sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 20vw"
                />
                <Box className='flex flex-col gap-10' data-aos='fade-right'>
                    {direcrions.map((i, key) =>
                        <Typography variant='h5' className='trans' key={key}>
                            <ArrowRightIcon fontSize='large' />
                            {i.text}
                        </Typography>

                    )}
                </Box>
                <Link href='/products' data-aos='fade-right'>
                    <Typography variant='h5' className='flex items-center trans'>
                        Весь перечень услуг
                        <ArrowCircleRightOutlinedIcon sx={{ mt: '4px' }} />
                    </Typography>
                </Link>
            </Box>
            <Box
                sx={{
                    height: '85vh',
                    alignItems: 'flex-end',
                    display: 'flex'
                }}
            >
                <Form />
            </Box>
            <video
                className='absolute left-0 top-0 h-full w-full object-cover -z-50 pointer-events-none'
                autoPlay
                loop
                muted
            >
                <source src='/bgVideo.mp4' type="video/mp4" />
            </video>
            <Menu />
        </Box>
    )
}

export default Start