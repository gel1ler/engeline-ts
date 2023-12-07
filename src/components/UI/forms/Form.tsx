'use client'
import React, { useState } from 'react'
import Sticker from '@/components/icons/sticker'
import { Typography, Button, Box, Snackbar } from '@mui/material'
import MuiPhone from './PhoneNumber'
import RHookFormTextField from './RHookFormTextField'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

type TInputs = {
    name: string
    phoneNumber: string
}

const Form = () => {
    const [open, setOpen] = useState(false)
    const [phone, setPhone] = useState('')
    const methods = useForm<TInputs>()

    const onSubmit: SubmitHandler<TInputs> = async (data) => {
        try {
            console.log(phone, data)
            setOpen(true)
        } catch (error) {
            console.error("Error:", error)
        }
    }

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
            >
                <Box className='p-3 rounded-md bg-white' sx={{ boxShadow: '0 0 6px 3px rgba(0,0,0,.1)' }}>
                    Вы успешно оставили заявку
                </Box>
            </Snackbar >
            <Box
                className="shadow rounded-md p-8 relative"
                sx={{
                    width: ['350px', '400px', '500px'],
                    bgcolor: 'primary.main'
                }}
                data-aos='fade-left'
            >
                <Sticker />
                <FormProvider {...methods}>
                    <form className='flex flex-col gap-4 items-center' onSubmit={methods.handleSubmit(onSubmit)}>
                        <Typography variant='h5' textAlign='center' >
                            Обратный звонок
                        </Typography>
                        <RHookFormTextField label='Наименование организации' name='name' fullWidth />
                        <MuiPhone value={phone} onChange={setPhone} />
                        <Button className='mt-4 w-fit' color='secondary' variant='contained' type='submit'>
                            Оставить заявку
                        </Button>
                    </form>
                </FormProvider>
            </Box >
        </>
    )
}

export default Form