import React, { useState, useEffect } from 'react'
import { createProduct, changeProduct } from '@/../firebase/database'
import {
    Box,
    Typography,
    Modal,
    Button,
    TextField,
    Divider
} from '@mui/material'
import ChooseImg from './chooseImg'
import Link from 'next/link'
import IconInputList from '@/components/UI/text/iconInputList'
import PhotoInputList from '@/components/UI/text/photoInputList'
import { TProduct, TSetBool } from '@/globalTypes'
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    example: string
    exampleRequired: string
}


const MyModal = ({
    setOpen, open, folders, change, product
}: {
    setOpen: TSetBool, open: boolean, folders: string[], change?: boolean, product: TProduct
}

) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl p-10 overflow-y-scroll bg-white'
                sx={{
                    width: '90vw',
                    height: '80vh',
                }}
            >
                <form
                    className='flex flex-col gap-4 '
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Typography variant='h6'>
                        Изменение продукта
                    </Typography>
                    <TextField
                        color='secondary'
                        variant="outlined"
                        inputRef={register('email', {
                            required: 'Email is req'
                        })}
                    />
                </form>
            </Box>
        </Modal>
    )
}

export default MyModal