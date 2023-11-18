'use client'
// import { Typography, useTheme, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import React, { ReactNode } from 'react'

const Title = ({
    children, centered, right
}:
    {
        children: ReactNode, centered?: boolean, right?: boolean
    }) => {
    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.down('md'))
    return (
        isSm && children!.toString.length > 10 ?
            <Box
                className='w-min mb-6 mx-auto'
                data-aos='fade-up'
            >
                <Typography variant='h3' textAlign='center'>
                    {children}
                </Typography>
                <Box className='w-full h-1' sx={{ bgcolor: 'secondary.main' }} />
            </Box >
            :
            <Box
                className='w-max mb-6'
                sx={{
                    mx: right ? null : centered ? 'auto' : ['auto', 'auto', 0],
                    ml: 'auto',
                }}
                data-aos='fade-up'
            >
                <Typography variant='h2'>
                    {children}
                </Typography>
                <Box className='w-full h-1' sx={{ bgcolor: 'secondary.main' }} />
            </Box >
    )
}

export default Title