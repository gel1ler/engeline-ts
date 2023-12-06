'use client'
import React, { useState } from 'react'
import Sticker from '@/components/icons/sticker'
import { Typography, TextField, Button, Box } from '@mui/material'
import Field from './Field'
import MuiPhone from './PhoneNumber'
import SureModal from './SureModal'

const Form = () => {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')


    return (
        <Box
            className="shadow rounded-md p-8 relative"
            sx={{
                width: ['350px', '400px', '500px'],
                bgcolor: 'primary.main'
            }}
            data-aos='fade-left'
        >
            <SureModal open={open} setOpen={setOpen} />
            <Sticker />
            <Box className='flex flex-col justify-center items-center gap-4 w-full'>
                <Typography variant='h5' textAlign='center' >
                    Обратный звонок
                </Typography>
                < Field
                    label="Наименование орагнизации"
                    value={name}
                    setValue={setName}
                />
                <MuiPhone value={phone} onChange={setPhone} />
                <Button className='mt-4' color='secondary' variant='contained' onClick={() => setOpen(true)}>
                    Оставить заявку
                </Button>
            </Box>
        </Box >
    )
}

export default Form