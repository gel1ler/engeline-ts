'use client'
import React, { ReactNode } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import { Metadata } from "next";
import Title from '@/components/UI/text/Title';
import RHookFormTextField from '@/components/UI/forms/RHookFormTextField';
import { FormProvider, useForm } from 'react-hook-form';
import { usePathname, useRouter } from 'next/navigation';
import MuiPhone from '@/components/UI/forms/PhoneNumber';
import Image from 'next/image';
import RHFCheckboxStack from '@/components/UI/forms/RHFCheckboxStack';

// export const metadata: Metadata = {
//     title: 'Опросный лист для заказа секционных сварных отводов',
// }

const docs = [
    'ОСТ 36-21-77 Детали трубопроводов Dу 500-1400 мм сварные из углеродистой стали на Py< 2.5 МПа',
    'ОСТ 34 10.752-97 Детали трубопроводов ТЭС на Pраб<2,2 МПа t<425°C. Колена секторные сварные (для трубопроводов воды и пара)',
    'ТС 583 серия 5.903-13 Изделия и детали трубопроводов для тепловых сетей. Колена сварные',
    'СК 2109-92 Детали и конструкции водопроводных сетей',
    'Другое:'
]

const angles = [
    {
        angle: 90,
        photo: ''
    },
    {
        angle: 60,
        photo: ''
    },
    {
        angle: 45,
        photo: ''
    },
    {
        angle: 30,
        photo: ''
    },
]

type TInputs = {
    orgName: string,
    name: string,
    phone: string,
    email: string,
    docs: string[]
}

const Item = ({ children, label }: { children: ReactNode, label: string }) =>
    <Box>
        <Typography>
            {label}
        </Typography>
        {children}
    </Box>

export default function Home() {
    const methods = useForm<TInputs>()
    const router = useRouter()
    const path = usePathname()

    const phone = methods.watch('phone')

    const onSubmit = async (data: TInputs) => {
        router.push('?loading=true')

        console.log(data)

        router.replace(path)
    }

    return (
        <AOSProvider>
            <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2, my: 5 }}>
                <Title centered>
                    Опросный лист для заказа секционных сварных отводов
                </Title>
                <FormProvider {...methods}>
                    <form className='flex flex-col gap-8 w-full' onSubmit={methods.handleSubmit(onSubmit)}>

                        <Box className='flex flex-col gap-4 w-fit' sx={{ minWidth: '400px' }}>
                            <Typography variant='h5'>
                                Данные для связи
                            </Typography>
                            <RHookFormTextField
                                label='Заказчик'
                                name='orgName'
                            />
                            <RHookFormTextField
                                label='Контактное лицо'
                                name='name'
                            />
                            <MuiPhone value={phone} onChange={value => methods.setValue('phone', value)} />
                        </Box>
                        <Box className='flex flex-col gap-4 w-full'>
                            <Typography variant='h5'>
                                1. Нормативный документ на отвод
                            </Typography>
                            <RHFCheckboxStack
                                options={docs}
                                state={methods.getValues('docs')}
                                setState={value => methods.setValue('docs', value)}
                            />
                        </Box>

                        <Box className='flex flex-col gap-4 w-full'>
                            <Typography variant='h5'>
                                2. Угол отвода
                            </Typography>
                            <Box className='flex justify-between gap-4 w-full'>
                                {docs.map((doc, key) =>
                                    <Box
                                        key={key}
                                        className='relative aspect-square w-full'
                                        sx={{

                                        }}
                                    >
                                        <Image
                                            src='/gen2.jpg'
                                            alt='Угол отвода'
                                            fill
                                            className='object-cover'
                                        />
                                    </Box>
                                )}
                            </Box>
                        </Box>

                        <Button className='mt-4 mx-auto w-fit' color='secondary' disabled={Object.keys(methods.formState.errors).length ? true : false} variant='contained' type='submit'>
                            Оставить заявку
                        </Button>
                    </form>
                </FormProvider>
            </Container>
        </AOSProvider >
    )
}
