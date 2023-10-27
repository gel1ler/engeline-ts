'use client'
import { Box } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'
import React from 'react'

function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

const Fill = ({
    anchor, type, prc
}: {
    anchor: 'to bottom' | 'to top' | 'to left' | 'to right',
    type: 'centered' | 'to anchor',
    prc?: number
}) => {
    const theme = useTheme()
    const rgb = hexToRgb(theme.palette.background.default)

    let bg = ''
    switch (type) {
        case 'centered':
            bg = `linear-gradient(${anchor},${theme.palette.primary.main}, rgba(${rgb?.r},${rgb?.g},${rgb?.b},.4), ${theme.palette.background.default})`
            break
        case 'to anchor':
            bg = `linear-gradient(${anchor},${theme.palette.primary.main} ${prc ? prc + '%' : ''}, transparent)`
    }

    return (
        <Box
            className='w-full h-full absolute left-0 top-0 -z-40'
            sx={{
                background: bg,
            }}
        />
    )
}

export default Fill