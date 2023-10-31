'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import {
    Box,
    Typography,
    Modal,
    Button,
    TextField,
    Divider
} from '@mui/material';
import IconInputList from '@/components/UI/text/iconInputList';
import PhotoInputList from '@/components/UI/text/PhotoInputList';
import Link from 'next/link';
import ChooseImg from './ChooseImg'
import RHookFormTextField from '@/components/UI/text/RHookFormTextField';

type TInputs = {
    name: string
    shortDescription: string
    mainImg: string
    // additionalImgs: string[]
}

const MyModal = ({
    setOpen,
    open,
    folders,
    change,
    product
}: {
    setOpen: (value: boolean) => void;
    open: boolean;
    folders: string[];
    change: any;
    product: any;
}) => {
    const methods = useForm<TInputs>({})

    const [props, setProps] = useState([{ text: '', icon: '' }])
    const [descriptions, setDescriptions] = useState([{ name: '', photo: '', align: 'left', text: '' }])
    const [mainImg, setMainImg] = useState('')
    const [additionalImgs, setAdditionalImgs] = useState([])
    const [openImg, setOpenImg] = useState(false)

    const [isMain, setIsMain] = useState(true)

    const imgOpenHandler = (main?: boolean) => {
        setIsMain(main ? true : false)
        setOpenImg(true)
    }

    const onSubmit: SubmitHandler<TInputs> = (data) => {
        console.log({ ...data, props, descriptions, mainImg, additionalImgs })
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            {/* <ChooseImg
                folders={folders}
                openImg={openImg}
                setOpenImg={setOpenImg}
                img={isMain ? mainImg : additionalImgs}
                setImg={isMain ? setMainImg : setAdditionalImgs}
            /> */}
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
                        <IconInputList
                            state={props}
                            setState={setProps}
                            title='dfsd'
                        />
                        <Divider />
                        <RHookFormTextField label='Короткое описание' name='shortDescription' />
                        {/* <PhotoInputList
                            title='Описания'
                            setState={setDescriptions}
                            state={descriptions}
                        /> */}
                        <Divider />
                        <Typography variant='h5'>
                            {change ? 'Изменение' : 'Создание'} продукта
                        </Typography>
                        <Box>
                            <Box className='r-gap1'>
                                <Button variant='outlined' onClick={() => imgOpenHandler(true)}>
                                    {mainImg ? 'Изменить' : 'Выбрать'} главную картинку
                                </Button>
                                {mainImg ?
                                    <Button color='error' onClick={() => setMainImg('')}>
                                        Очистить
                                    </Button>
                                    : null
                                }
                            </Box>
                            {mainImg ?
                                <Link href={mainImg} target='_blank'>
                                    <Typography sx={{ my: 1, textDecoration: 'underline' }}>
                                        Главная картинка - {mainImg}
                                    </Typography>
                                </Link>
                                : null}
                        </Box>
                        <Box>
                            <Button variant='outlined' onClick={() => imgOpenHandler(false)}>
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