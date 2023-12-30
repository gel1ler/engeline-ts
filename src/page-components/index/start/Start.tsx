import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { mainInfo } from '@/content/content'
import Fill from '@/components/UI/Fill'
import { headerProps } from '@/customization/customization'
import Link from 'next/link'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Form from '@/components/UI/forms/getCall/Form'
import Menu from './Menu'
import ArrowTextLink from '@/components/UI/text/ArrowTextLink'
import GetCall from '@/components/UI/forms/getCall/GetCall'

const direcrions: { text: string, link: string }[] = [
    {
        text: 'Механическая обработка',
        link: '/products/0'
    },
    {
        text: 'Емкостное химическое и машинное оборудование',
        link: '/products/1'
    },
    {
        text: 'Муфты ремонтные стальные',
        link: '/products/2'
    },
    {
        text: 'Соединительные детали трубопроводов',
        link: '/products/3'
    },
    {
        text: 'Трубы обечаечные, корпуса, бандажи',
        link: '/products/4'
    }
]


const Start = () => {
    return (
        <Box
            className='flex mx-auto h-screen'
            sx={{
                maxWidth: '1400px',
                p: [1, 3, 10, 4],
                mt: 3
            }}
        >
            <Fill anchor='to top' type='centered' />
            <Box
                className='w-full h-full absolute left-0 top-0 -z-40'
                sx={{
                    background: `linear-gradient(to right, white 30%, rgba(255,255,255, .8) 50%, transparent)`,
                    justifyContent: 'start',
                }}
            />
            <Box
                className='flex flex-col gap-10'
                sx={{
                    width: ['90%', '100%'],
                    my: ['auto', 'auto'],
                    textAlign: ['center', 'center', 'start'],
                    mx: ['auto', 0],
                    alignItems: ['center', 'center', 'start']
                }}
            >
                <Image
                    data-aos='fade-right'
                    src={mainInfo.logoHorizontal}
                    alt='Logo'
                    width={300}
                    height={43}
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        height: 'min-content'
                    }}
                    sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 20vw"
                />
                <Box
                    className='flex flex-col gap-4 md:gap-7 '
                    data-aos='fade-right'
                    sx={{ alignItems: ['center', 'center', 'start'] }}
                >
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
                    alignSelf: 'flex-end',
                    display: ['none', 'none', 'none', 'flex'],
                    p: 2,
                    pb: 10
                }}
            >
                <Form />
            </Box>
            <Box sx={{ display: ['none', 'block'] }}>
                <video
                    className='absolute left-0 top-0 h-full w-full object-cover pointer-events-none -z-50'
                    autoPlay
                    loop
                    muted
                >
                    <source src='/bgVideo.mp4' type="video/mp4" />
                </video>
            </Box>
        </Box>
    )
}

export default Start