import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fill from '@/components/UI/Fill'


const Advantage = ({
    text, title, num
}: {
    text: string, title: string, num: number
}) => {
    return (
        <Box
            className='flex flex-col items-center justify-center relative w-5/6 gap-2'
        // data-aos='fade-up'
        >
            <Box className='relative h-20 translate-y-6'>
                <Typography textAlign='center' sx={{ fontSize: '96px', color: 'secondary.main', fontWeight: 300, zIndex: 0, transform: 'translateY(-45px)' }}>
                    0{num + 1}
                </Typography>
                <Box
                    className='w-full h-full absolute left-0 top-0'
                    sx={{
                        background: 'linear-gradient(to bottom, transparent, white 60%)'
                    }}
                />
                <Box
                    className='w-full absolute bottom-1/3 opacity-75'
                    sx={{
                        height: '5px',
                        background: 'linear-gradient(to bottom, transparent, #E5A019, transparent)'
                    }}
                />
            </Box>
            <Typography variant='h5' className='z-20' textAlign='center'>
                {title}
            </Typography>
            <Typography textAlign='center'>
                {text}
            </Typography>
        </Box >
    )
}

export default Advantage