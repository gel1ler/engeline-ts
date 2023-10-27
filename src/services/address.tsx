import React from 'react'
import { useSnackbar } from 'notistack'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import { mainInfo } from '@/content/content'
import { Typography } from '@mui/material'

const Address = ({ linear, office }: { linear?: boolean, office?: boolean }) => {
    const name = office ? 'Раменское, Северное ш. 10' : 'п. Первомайский, ул. Школьная 9'
    return (
        linear ?
            <a className='underline' target="_blank" href={mainInfo.map}>
                <span>{name}</span>
            </a>
            :
            <Typography className='underline flex items-center gap-1'>
                <a href={mainInfo.map} target="_blank" >
                    <PlaceOutlinedIcon fontSize="small" />
                    {name}
                </a>
            </Typography>
    )
}

export default Address