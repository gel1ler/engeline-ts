'use client'
import React, { useEffect, useMemo, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { Box, Typography, Modal, Button, Divider } from '@mui/material'
import RHookFormTextField from '@/components/UI/forms/RHookFormTextField'
import { TProduct } from '@/globalTypes'
import PropsList from './PropsList'
import DescriptionsList from './DescriptionsList'
import { useRouter } from 'next/navigation';
import { changeProduct, createProduct } from '@/../firebase/clientApp'
import ImageInput from './images/selectOneImage/ImageInput'
import ImagesInput from './images/selectImages/ImagesInput';
import { useAuth } from '@clerk/nextjs';

interface Props {
    setOpen: (value: boolean) => void;
    open: boolean;
    folders: string[][];
    change?: any;
    product?: TProduct;
    token: string;
}

type TInputs = Omit<TProduct, 'id'>

const MyModal = ({ setOpen, open, folders, change, product, token }: Props) => {
    const [mainImg, setMainImg] = useState<string>('')
    const [additionalImgs, setAdditionalImgs] = useState<string[]>([])

    const router = useRouter()
    

    const methods = useForm<TInputs>({
        defaultValues: useMemo(() => {
            return product
        }, [product])
    })
    
    useEffect(() => {
        methods.reset(product)
        typeof product?.mainImg === 'string' && setMainImg(product.mainImg)
        product?.additionalImgs && setAdditionalImgs(product.additionalImgs)
    }, [product, methods])

    const onSubmit: SubmitHandler<TInputs> = async (data) => {
        try {
            if (change && product) {
                await changeProduct(product.id, { ...data, mainImg, additionalImgs }, token)
            } else {
                await createProduct({ ...data }, token)
            }

            setTimeout(() => {
                router.refresh()
                setOpen(false)
            }, 1000)
        } catch (error) {
            console.error("Error:", error)
        }
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
                        <RHookFormTextField multiline label='Короткое описание' name='shortDescription' />
                        <DescriptionsList />
                        < Divider />
                        <ImageInput
                            state={mainImg}
                            setState={setMainImg}
                            folders={folders}
                        />
                        <ImagesInput
                            state={additionalImgs}
                            setState={setAdditionalImgs}
                            folders={folders}
                        />
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