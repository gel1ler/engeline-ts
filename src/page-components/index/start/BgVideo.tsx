'use client'
import { useMediaQuery } from '@mui/material'
import React from 'react'

const BgVideo = () => {
    const isMobile = useMediaQuery('(max-width:900px)')

    console.log(isMobile)
    if (!isMobile) {
        return (
            <video
                className='absolute left-0 top-0 h-full w-full object-cover pointer-events-none -z-50 bgvideo'
                autoPlay
                loop
                muted
            >
                <source src='/bgVideo.mp4' type="video/mp4" />
            </video>
        )
    }
}

export default BgVideo