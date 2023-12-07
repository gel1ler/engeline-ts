'use client'
import { Box, Button, Dialog, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    const [hover, setHover] = useState(false)
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => setOpen(true)}
                style={{ backgroundColor: 'transparent' }}
            >
                <svg className='transition-all' width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: hover ? '#E5A019' : '#000' }}>
                    <path d="M20 12C20 7.58172 16.4183 4 12 4M12 20C14.5264 20 16.7792 18.8289 18.2454 17" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M4 12H14M14 12L11 9M14 12L11 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <Box
                    sx={{
                        bgcolor: 'white',
                        borderRadius: '10px',
                        p: 6,
                        gap: 3
                    }}
                    className='column-centered'
                >
                    <Typography textAlign='center' variant='h6'>
                        Раздел находится в разработке
                    </Typography>
                </Box>
            </Dialog>
        </>
    )
}

export default Login