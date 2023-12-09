'use client'
import React, { useState } from 'react'
import Sticker from '@/components/icons/sticker'
import { Typography, Button, Box, Snackbar } from '@mui/material'
import MuiPhone from '../PhoneNumber'
import RHookFormTextField from '../RHookFormTextField'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import AlertDialog from './Alert'
import { useRouter } from 'next/navigation'

type TInputs = {
    orgName: string
    phoneNumber: string
}

const Form = () => {
    const [open, setOpen] = useState(false)
    const [phone, setPhone] = useState('')
    const methods = useForm<TInputs>()

    const router = useRouter()

    const onSubmit: SubmitHandler<TInputs> = async (data) => {
        router.push('/?loading=true')
        setTimeout(() => {
            try {
                router.push('/')
                setTimeout(() => {
                    setOpen(true)
                }, 100)
            } catch (error) {
                console.error("Error:", error)
            }
        }, 2500)
    }

    return (
        <>
            <AlertDialog open={open} setOpen={setOpen} />
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
                        <RHookFormTextField label='Наименование организации' name='orgName' fullWidth />
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