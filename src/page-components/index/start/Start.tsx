import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { links, mainInfo } from '@/content/content'
import Fill from '@/components/UI/Fill'
import Link from 'next/link'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import Form from '@/components/UI/forms/getCall/Form'
import ArrowTextLink from '@/components/UI/text/ArrowTextLink'

const Start = () => {
    return (
        <Box
            className='flex mx-auto'
            sx={{
                height: '100svh',
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
                    {links.slice(0, 5).map((i, key) =>
                        <Link href={i.href} key={key} className='w-fit'>
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
            <video
                className='absolute left-0 top-0 h-full w-full object-cover pointer-events-none -z-50 bgvideo'
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