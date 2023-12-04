'use client'
import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/navigation'
import { Typography } from '@mui/material'
import { mainInfo } from '@/content/content'

const Phone = ({ linear, bold }: { linear?: boolean, bold?: boolean }) => {
    const { enqueueSnackbar } = useSnackbar()
    const router = useRouter()

    const copyLink = (text: string, msg: string) => {
        navigator.clipboard.writeText(text)
        enqueueSnackbar(msg)
    }

    const phoneClick = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            router.push(`tel:${mainInfo.phone}`)
        }
        else {
            copyLink(mainInfo.phone, 'Номер телефона скопирован')
        }
    }

    return (
        linear ?
            <span className="underline" onClick={phoneClick}>{mainInfo.phone}</span>
            :
            <Typography
                className='underline flex items-center gap-1 cursor-pointer'
                fontWeight={bold ? 800 : 500}
                onClick={phoneClick}
            >
                <PhoneIcon fontSize='small' />
                {mainInfo.phone}
            </Typography>

    )
}

export default Phone