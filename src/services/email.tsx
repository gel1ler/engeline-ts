import React from 'react'
import { useSnackbar } from 'notistack'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { mainInfo } from '@/content/content'
import { Typography } from '@mui/material'

const Email = ({ linear }: { linear?: boolean }) => {
    const { enqueueSnackbar } = useSnackbar()

    const copyLink = (text: string, msg: string) => {
        navigator.clipboard.writeText(text)
        enqueueSnackbar(msg)
    }

    return (
        linear ?
            <span className='underline' onClick={() => copyLink('info@engeline.com', 'Почта скопирована')} >
                {mainInfo.email}
            </span>
            :
            <Typography className='underline flex items-center gap-1 cursor-pointer' onClick={() => copyLink('info@engeline.com', 'Почта скопирована')}>
                <EmailOutlinedIcon fontSize='small' />
                {mainInfo.email}
            </Typography>
    )
}

export default Email