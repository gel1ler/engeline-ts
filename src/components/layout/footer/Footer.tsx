import React, { ReactNode } from 'react'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import Phone from '@/services/phone'
import Email from '@/services/email'
import { LanguageOutlined } from '@mui/icons-material'

const Text = ({ href, children }: { href: string, children: ReactNode }) =>
    <Link href={href}>
        <Typography sx={{ transition: 'all .15s ease-out', ':hover': { color: 'secondary.main' } }}>
            {children}
        </Typography>
    </Link>

const Footer = () => {
    return (
        <Box
            className='py-8 flex flex-col gap-2 justify-between bg-stone-100'
        >
            <Container
                sx={{
                    gap: 5,
                    mx: 'auto',
                    pt: 6
                }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Box className='flex flex-col gap-4 w-64 mx-auto' sx={{ alignItems: ['center', 'start'] }}>
                            <Image
                                src='/logo/logo-horizontal.svg'
                                width={250}
                                height={70}
                                alt='logo'
                            />
                            <Phone />
                            <Email />
                            <Link href='/'>
                                <Typography sx={{ textDecoration: 'underline' }} className='flex items-center gap-1'>
                                    <LanguageOutlined />
                                    engeline.ru
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Box className='flex flex-col gap-4' sx={{ alignItems: ['center', 'start'] }}>
                            <Typography variant='h6' fontWeight='bold'>
                                Информация
                            </Typography>
                            <Text href='/sitemap'>Карта сайта</Text>
                            <Text href='/agreement'>Пользовательское соглашение</Text>
                            <Text href='/privacy'>Персональные данные</Text>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={6} lg={4} sx={{ display: ['none', 'none', 'flex'] }}>
                        <Box className='flex-col gap-2'>
                            <Typography variant='h6' fontWeight='bold'>
                                Компания
                            </Typography>
                            <Typography lineHeight={2}>

                                140090, МО, г.о. Дзержинский, г. Дзержинский, ул. Угрешская, д. 32<br />
                                <b>ИНН/КПП</b> - 5027189930/502701001<br />
                                <b>ОГРН</b> - 1125027012692
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ gridColumn: '1/4' }}>
                            <Divider />
                            <Typography variant='body2' textAlign='center' className='pt-2'>
                                © Любое использование либо копирование материалов или подборки материалов сайта, элементов дизайна и оформления допускается лишь с разрешения правообладателя и только со ссылкой на источник: engeline.ru
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    )
}

export default Footer