'use client'
import React, { useState } from 'react';
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
    mainImg: string
    props: TProp[]
    descriptions: TDescription[]
    // additionalImgs: string[]
}

const MyModal = ({ setOpen, open, folders, change, product }: Props) => {
    const methods = useForm<TInputs>({})
    const [additionalImgs, setAdditionalImgs] = useState([])
    const [isMain, setIsMain] = useState(true)

    const imgOpenHandler = (main?: boolean) => {
        setIsMain(main ? true : false)
        setOpenImg(true)
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
                        
                        <Box>
                            <ChooseImg
                                folders={folders}
                                openImg={openImg}
                                setOpenImg={setOpenImg}
                                img={isMain ? mainImg : additionalImgs}
                                setImg={isMain ? setMainImg : setAdditionalImgs}
                            />
                            <Button variant='outlined' color='secondary' onClick={() => imgOpenHandler(false)}>
                                {additionalImgs.length ? 'Изменить' : 'Выбрать'} доп картинки
                            </Button>
                            {additionalImgs.length ?
                                <Button color='error' onClick={() => setAdditionalImgs([])}>
                                    Очистить
                                </Button>
                                : null
                            }
                            {additionalImgs.length ? additionalImgs.map((i, key) => (
                                <Link href={i} target='_blank' key={key}>
                                    <Typography sx={{ my: 1, textDecoration: 'underline' }}>
                                        Доп картинкa {key} - {i}
                                    </Typography>
                                </Link>
                            )) : null}
                        </Box>



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