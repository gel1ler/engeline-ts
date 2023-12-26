'use client'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'

const DropDown = ({ name, list }: { name: string, list: string[] }) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box className='flex flex-col gap-1'>
            <Typography onClick={handleClick} variant='h6' fontWeight='bold' className='flex items-center cursor-pointer'>
                {name}
                <ArrowDropDown
                    className='transition-all'
                    sx={{
                        transform: open ? `rotate(-180deg)` : '',
                        transition: 'all .1s ease-out'
                    }}
                />
            </Typography>
            <Box
                sx={{
                    height: open ? 32 * list.length + 'px' : 0,
                    overflow: 'hidden',
                    transition: 'all .2s ease-out'
                }}
            >
                {list.map((item, index) => (
                    <Typography variant='h6' sx={{ mt: '4px' }} key={index}>
                        {item}
                    </Typography>
                ))}
            </Box>
        </Box>
    )
}

export default DropDown