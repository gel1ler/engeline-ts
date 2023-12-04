import React, { ReactNode } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import Phone from '@/services/phone'
import Email from '@/services/email'

const Text = ({ href, children }: { href: string, children: ReactNode }) =>
    <Link href={href}>
        <Typography sx={{ transition: 'all .15s ease-out', ':hover': { color: 'secondary.main' } }}>
            {children}
        </Typography>
    </Link>

const Footer = () => {
    return (
        <Box
            className='py-4 flex flex-col gap-2 justify-between bg-stone-100 h-80'
        >
            <Container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
                    mb: 4,
                    gap: 5,
                    mx: 'auto',
                    pt: 6
                }}
            >
                <Box className='flex flex-col gap-4 w-64 mx-auto'>
                    <Image
                        src='/logo/logo-horizontal.svg'
                        width={250}
                        height={70}
                        alt='logo'
                    />
                    <Phone />
                    <Email />
                    <Typography variant='body2'>
                        ©2023 ООО «Инжелайн». Все права защищены
                    </Typography>
                </Box>
                <Box className='flex flex-col gap-4'>
                    <Typography variant='h6' fontWeight='bold'>
                        Сайт
                    </Typography>
                    <Text href='/'>Главная</Text>
                    <Text href='/agreement'>Продукция</Text>
                    <Text href='/agreement'>Производсвто</Text>
                    <Text href='/agreement'>Пользовательское соглашение</Text>
                    <Text href='/privacy'>Персональные данные</Text>
                </Box>
                <Box className='flex-col gap-2' sx={{ display: ['none', 'none', 'flex'] }}>
                    <Typography variant='h6' fontWeight='bold'>
                        Информация
                    </Typography>
                    <Typography lineHeight={2}>
                        140090, МО, г.о. Дзержинский, г. Дзержинский, ул. Угрешская, д. 32<br />
                        <b>ИНН/КПП</b> - 5027189930/502701001<br />
                        <b>ОГРН</b> - 1125027012692
                    </Typography>
                </Box>
            </Container >
        </Box>
    )
}

export default Footer