'use client'
import { Phone } from '@mui/icons-material'
import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import Form from './Form'

const GetCall = () => {
    const [open, setOpen] = useState(false)
    return (
        <Box
            className='w-16 h-16 rounded-full bottom-8 
            right-8 justify-center items-center cursor-pointer fixed
            z-50
            opacity-70 duration-200 transition-opacity hover:opacity-100'
            sx={{ display: ['flex', 'flex', 'flex', 'none'] }}
            bgcolor='secondary.main'
            onClick={() => setOpen(true)}
        >
            <Phone color='primary' />
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Form />
            </Modal>
        </Box>
    )
}

export default GetCall