'use client'
import React, { useState } from 'react'
import { Instagram, WhatsApp, Telegram, Phone, Menu } from '@mui/icons-material'
import IB from './IB'
import { SvgIcon, Dialog, Typography, Box, Button } from '@mui/material/'
import Link from 'next/link'
import { mainInfo, socialMedia } from '@/content/content'
import { TSetBool } from '@/globalTypes'

const style = { fontSize: 30 }

export const TelegramIcon = () => <IB href={socialMedia.telegram}><Telegram sx={style} /></IB>

export const VkIcon = () => (
    <IB href={socialMedia.vk}>
        <SvgIcon sx={{ fontSize: 26 }}>
            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.217 22.402h-2.179c-0.825 0-1.080-0.656-2.562-2.158-1.291-1.25-1.862-1.418-2.179-1.418-0.445 0-0.572 0.127-0.572 0.741v1.968c0 0.53-0.169 0.847-1.566 0.847-2.818-0.189-5.24-1.726-6.646-3.966l-0.021-0.035c-1.632-2.027-2.835-4.47-3.43-7.142l-0.022-0.117c0-0.317 0.127-0.614 0.741-0.614h2.179c0.55 0 0.762 0.254 0.975 0.846 1.078 3.112 2.878 5.842 3.619 5.842 0.275 0 0.402-0.127 0.402-0.825v-3.219c-0.085-1.482-0.868-1.608-0.868-2.137 0.009-0.283 0.241-0.509 0.525-0.509 0.009 0 0.017 0 0.026 0.001l-0.001-0h3.429c0.466 0 0.635 0.254 0.635 0.804v4.34c0 0.465 0.212 0.635 0.339 0.635 0.275 0 0.509-0.17 1.016-0.677 1.054-1.287 1.955-2.759 2.642-4.346l0.046-0.12c0.145-0.363 0.493-0.615 0.9-0.615 0.019 0 0.037 0.001 0.056 0.002l-0.003-0h2.179c0.656 0 0.805 0.337 0.656 0.804-0.874 1.925-1.856 3.579-2.994 5.111l0.052-0.074c-0.232 0.381-0.317 0.55 0 0.975 0.232 0.317 0.995 0.973 1.503 1.566 0.735 0.727 1.351 1.573 1.816 2.507l0.025 0.055c0.212 0.612-0.106 0.93-0.72 0.93zM20.604 1.004h-9.207c-8.403 0-10.392 1.989-10.392 10.392v9.207c0 8.403 1.989 10.392 10.392 10.392h9.207c8.403 0 10.392-1.989 10.392-10.392v-9.207c0-8.403-2.011-10.392-10.392-10.392z"></path>
            </svg>
        </SvgIcon>
    </IB>
)

const MyDialog = ({
    open, setOpen, children
}: {
    open: boolean, setOpen: TSetBool, children: React.ReactNode
}) => (
    <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className='w-1/4 mx-auto'
    >
        <Box
            className='flex flex-col items-center p-6 gap-5'
        >
            {children}
        </Box>
    </Dialog>
)

export const InstagramIcon = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <MyDialog open={open} setOpen={setOpen}>
                <Typography variant='h6' textAlign='center'>
                    Для перехода в инстаграм профиль необходимо VPN подключение.
                </Typography>
                <Button color='primary' variant='contained' onClick={() => setOpen(false)}>
                    <Link href={socialMedia.instagram || '#'} target='_blank'>
                        VPN включен
                    </Link>
                </Button>
            </MyDialog>
            <IB
                f={() => setOpen(true)}
            >
                <Instagram sx={style} />
            </IB>
        </>
    )
}

export const PhoneCall = (
    {
        icon
    }: {
        icon?: boolean
    }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <MyDialog open={open} setOpen={setOpen}>
                <Link href={'tel:' + mainInfo.phone} target='_blank'>
                    <Typography variant='h6' sx={{ textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Phone fontSize='large' />
                        Вызов на мобильный
                    </Typography>
                </Link>
                <Link href={"https://wa.me/" + mainInfo.phone} target="_blank">
                    <Typography variant='h6' sx={{ textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: 1 }}>
                        <WhatsApp fontSize='large' />
                        WhatsApp чат
                    </Typography>
                </Link>
            </MyDialog >
            {
                icon ?
                    <IB f={() => setOpen(true)}>< Phone sx={style} /></IB >
                    :
                    <Typography
                        onClick={() => setOpen(true)}
                        color='black'
                        sx={{
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                            cursor: 'pointer'
                        }}
                    >
                        {mainInfo.phone}
                    </Typography>

            }
        </>
    )
}

