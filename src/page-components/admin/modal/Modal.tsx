'use client'
import React, { useEffect, useMemo, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { Box, Typography, Modal, Button, Divider, Select, MenuItem } from '@mui/material'
import RHookFormTextField from '@/components/UI/forms/RHookFormTextField'
import { TProduct } from '@/globalTypes'
import PropsList from './PropsList'
import DescriptionsList from './DescriptionsList'
import { useRouter } from 'next/navigation';
import { InsertProduct, changeProduct, createProduct } from '@/../firebase/clientApp'
import ImagesInput from './images/selectImages/ImagesInput'
import Docs from './Docs';
import ImageInput from './images/selectOneImage/ImageInput';
import RHookFormSelect from '@/components/UI/forms/RHookFormSelect';

interface Props {
    setOpen: (value: boolean) => void;
    open: boolean;
    folders: string[][];
    change?: any;
    product?: TProduct;
    token: string;
    productNames: string[]
}

interface TInputs extends Omit<TProduct, 'id'> {
    addAfter: string;
}

const MyModal = ({ setOpen, open, folders, change, product, token, productNames }: Props) => {
    const router = useRouter()
    const [place, setPlace] = useState()

    const methods = useForm<TInputs>({
        defaultValues: useMemo(() => {
            return product
        }, [product])
    })

    useEffect(() => {
        methods.reset(product)
    }, [product, methods])

    const onSubmit: SubmitHandler<TInputs> = async (data) => {
        try {
            if (change && product) {
                await changeProduct(product.id, { ...data }, token)
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
                {product && change ?
                    <Box className='flex items-center gap-6'>
                        <Select color='secondary' onChange={(e: any) => setPlace(e.target.value)}>
                            {productNames.map((i, key) =>
                                <MenuItem value={key}>{i}</MenuItem>
                            )}
                        </Select>
                        <Button
                            color='secondary'
                            onClick={() => InsertProduct(product.id, place, token)}
                        >
                            Вставить перед
                        </Button>
                    </Box> : null}
                < FormProvider {...methods}>
                    <form className='flex flex-col gap-4 my-6' onSubmit={methods.handleSubmit(onSubmit)}>
                        <Divider />
                        <RHookFormTextField label='Наименование' name='name' />
                        <Divider />
                        <PropsList />
                        <Divider />
                        <RHookFormTextField multiline label='Короткое описание' name='shortDescription' />
                        <RHookFormTextField notReq multiline label='Описание' name='description' />
                        <Divider />
                        <DescriptionsList folders={folders} />
                        <Divider />
                        <Docs folders={folders} />
                        <Divider />
                        <ImageInput
                            name='mainImg'
                            folders={folders}
                        />
                        <ImagesInput
                            name='additionalImgs'
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
        </Modal >
    );
};

export default MyModal;