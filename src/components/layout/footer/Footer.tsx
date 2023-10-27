import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box
            className='py-4 flex flex-col gap-2 justify-between'
            sx={{ bgcolor: 'primary.main' }}
        >
            <Typography variant='h6' textAlign='center'>
                
            </Typography>
            <Typography textAlign='center'>
                Раменское, ул. Свободы, 6А
            </Typography>
            <Typography variant='body2' textAlign='center'>
                2023. Все права защищены
            </Typography>
        </Box>
    )
}

export default Footer