'use client'
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, FormProvider, useFieldArray } from "react-hook-form"
import { Box, Typography, Modal, Button, Divider } from '@mui/material'
import Link from 'next/link'
import ChooseImg from './images/ChooseImg'
import RHookFormTextField from '@/components/UI/forms/RHookFormTextField'
import { TDescription, TProduct, TProp } from '@/globalTypes'
import PropsList from './PropsList'
import DescriptionsList from './DescriptionsList'

interface Props {
    setOpen: (value: boolean) => void;
    open: boolean;
    folders: string[];
    change?: any;
    product?: TProduct;
}

type TInputs = {
    name: string
    shortDescription: string
    props: TProp[]
    descriptions: TDescription[]
    // additionalImgs: string[]
}

const MyModal = ({ setOpen, open, folders, change, product }: Props) => {
    const methods = useForm<TInputs>({})

    if (change && product) {
        useEffect(() => {
            methods.setValue('name', product.name)
            methods.setValue('shortDescription', product.shortDescription)
            methods.setValue('props', product.props)
            methods.setValue('descriptions', product.descriptions)
        }, [open])
    }

    const onSubmit: SubmitHandler<TInputs> = (data) => {
        console.log({ ...data })
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl p-10 overflow-y-scroll bg-white'
                sx={{
                    width: '90vw',
                    height: '80vh',
                }}
            >
                <Typography variant='h6'>
                    {change ? 'Изменение' : 'Создание'} продукта
                </Typography>
                <FormProvider {...methods}>
                    <form className='flex flex-col gap-4 my-6' onSubmit={methods.handleSubmit(onSubmit)}>
                        <RHookFormTextField label='Наименование' name='name' />
                        <Divider />
                        <PropsList />
                        <Divider />
                        <RHookFormTextField label='Короткое описание' name='shortDescription' />
                        <DescriptionsList />
                        < Divider />
                        <Typography variant='h5'>
                            {change ? 'Изменение' : 'Создание'} продукта
                        </Typography>
                        <Button
                            className='w-min'
                            variant="contained"
                            type="submit"
                            color='secondary'
                        >
                            {change ? 'Изменить' : 'Создать'}
                        </Button>
                    </form>
                </FormProvider>
            </Box>
        </Modal>
    );
};

export default MyModal;