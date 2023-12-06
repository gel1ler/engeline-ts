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
import ArrowTextLink from '@/components/UI/text/ArrowTextLink'
import GetCall from '@/components/UI/forms/GetCall'

const direcrions: { text: string, link: string }[] = [
    {
        text: 'Механическая обработка',
        link: '/products/0'
    },
    {
        text: 'Емкостное оборудование',
        link: '/products/1'
    },
    {
        text: 'Изготовление отводов различных диаметров и углов',
        link: '/products/2'
    },
    {
        text: 'Трубы обечаечные, корпуса, бандажи',
        link: '/products/3'
    }
]


const Start = () => {
    return (
        <Box
            className='flex items-center justify-around mx-auto'
            sx={{
                height: 'calc(100vh - 7rem)',
                maxWidth: '1400px',
                p: [3, 3, 10, 4]
            }}
        >
            <Fill anchor='to top' type='to anchor' />
            <Fill anchor='to right' prc={40} type='to anchor' />
            <Box className='flex flex-col gap-12 justify-center my-auto' sx={{ width: ['90%', '100%'] }}>
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
                        <Link href={i.link} key={key} className='w-fit'>
                            <Typography variant='h5' className='trans'>
                                <ArrowRightIcon fontSize='large' />
                                {i.text}
                            </Typography>
                        </Link>

                    )}
                </Box>
                <ArrowTextLink href='/products' dataAos='fade-right'>
                    Весь перечень услуг и продукции
                </ArrowTextLink>
            </Box>
            <Box
                sx={{
                    height: '75vh',
                    alignItems: 'flex-end',
                    display: ['none', 'none', 'none', 'flex'],
                    p: 2
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
        </Box>
    )
}

export default Start