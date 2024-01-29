'use client'
import React, { ReactNode, useState } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import { Metadata } from "next";
import Title from '@/components/UI/text/Title';
import RHookFormTextField from '@/components/UI/forms/RHookFormTextField';
import { FormProvider, useForm } from 'react-hook-form';
import { usePathname, useRouter } from 'next/navigation';
import MuiPhone from '@/components/UI/forms/PhoneNumber';
import Image from 'next/image';
import RHFCheckboxStack from '@/components/UI/forms/RHFCheckboxStack'

// export const metadata: Metadata = {
//     title: 'Опросный лист для заказа секционных сварных отводов',
// }

const docs = [
    'ОСТ 36-21-77 Детали трубопроводов Dу 500-1400 мм сварные из углеродистой стали на Py< 2.5 МПа',
    'ОСТ 34 10.752-97 Детали трубопроводов ТЭС на P раб<2,2 МПа t<425°C. Колена секторные сварные (для трубопроводов воды и пара)',
    'ТС 583 серия 5.903-13 Изделия и детали трубопроводов для тепловых сетей. Колена сварные',
    'СК 2109-92 Детали и конструкции водопроводных сетей',
]

const angles = [90, 60, 45, 30]
const climates = ['У1', 'ХЛ1']

type TInputs = {
    orgName: string,
    name: string,
    phone: string,
    email: string,
    docs: string[],
    angle: number,
    diametr: number,
    thickness: number,
    pressure: number,
    environment: string,
    temperature: number,
    climates: string[],
    material: string,
    outCover: string,
    innerCover: string,
    number: number,
    additional: string
}

const Item = ({ children, label, fullwidth }: { children: ReactNode, label: string, fullwidth?: boolean }) =>
    <Box className={`flex flex-col gap-4 ${fullwidth ? 'w-full' : 'w-fit'}`} sx={{ minWidth: '400px' }}>
        <Typography variant='h5'>
            {label}
        </Typography>
        {children}
    </Box>

export default function Home() {
    const methods = useForm<TInputs>()
    const router = useRouter()
    const path = usePathname()

    const phone = methods.watch('phone')
    const angle = methods.watch('angle')


    const onSubmit = async (data: TInputs) => {
        router.push('?loading=true')
        console.log(methods.getValues('docs'))
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
                        <Item label='Данные для связи'>
                            <>
                                <RHookFormTextField
                                    label='Заказчик'
                                    name='orgName'
                                />
                                <RHookFormTextField
                                    label='Контактное лицо'
                                    name='name'
                                />
                                <MuiPhone value={phone} onChange={value => methods.setValue('phone', value)} />
                            </>
                        </Item>
                        <Item label='1. Нормативный документ на отвод'>
                            <RHFCheckboxStack
                                options={docs}
                                state={methods.watch('docs')}
                                setState={value => methods.setValue('docs', value)}
                            />
                        </Item>
                        <Item label='2. Угол отвода' fullwidth>
                            <Box className='flex justify-between gap-4 w-full'>
                                {angles.map((i, key) =>
                                    <Box
                                        key={key}
                                        className={`relative aspect-square w-full cursor-pointer border-2 transition-colors ${angle === i ? 'border-engeline' : ''} hover:border-engeline`}
                                        onClick={() => methods.setValue('angle', i)}
                                    >
                                        <Image
                                            src={'/surveys/taps/' + i + '.png'}
                                            alt='Угол отвода'
                                            fill
                                            className='object-contain'
                                        />
                                        <Box className='absolute w-4 h-4 rounded-3xl bg' />
                                    </Box>
                                )}
                            </Box>
                        </Item>
                        <Item label='3. Наружный диаметр Dн, мм'>
                            <RHookFormTextField
                                label='Наружный диаметр'
                                name='diametr'
                            />
                        </Item>
                        <Item label='4. Толщина стенки, s, мм'>
                            <RHookFormTextField
                                label='Толщина стенки'
                                name='thickness'
                            />
                        </Item>
                        <Item label='5. Номинальное давление, PN, МПа'>
                            <RHookFormTextField
                                label='Номинальное давление'
                                name='pressure'
                            />
                        </Item>
                        <Item label='6. Рабочая среда'>
                            <RHookFormTextField
                                label='Рабочая среда'
                                name='environment'
                            />
                        </Item>
                        <Item label='7. Температура рабочей среды, °С '>
                            <RHookFormTextField
                                label='Температура рабочей среды'
                                name='temperature'
                            />
                        </Item>
                        <Item label='8. Климатическое исполнение по ГОСТ 15150-69 '>
                            <RHFCheckboxStack
                                options={climates}
                                state={methods.watch('climates')}
                                setState={value => methods.setValue('climates', value)}
                            />
                        </Item>
                        <Item label='9. Материал отвода'>
                            <RHookFormTextField
                                label='Материал'
                                name='material'
                            />
                        </Item>
                        <Item label='10. Наружное покрытие (материал/толщина)'>
                            <RHookFormTextField
                                label='Наружное покрытие'
                                name='outCover'
                            />
                        </Item>
                        <Item label='11. Внутренее покрытие (материал/толщина)'>
                            <RHookFormTextField
                                label='Наружное покрытие'
                                name='innerCover'
                            />
                        </Item>
                        <Item label='12. Количество, шт'>
                            <RHookFormTextField
                                label='Количество'
                                name='number'
                            />
                        </Item>
                        <Item label='13. Дополнительные требования'>
                            <RHookFormTextField
                                label='Дополнительные требования'
                                name='additional'
                            />
                        </Item>
                        <Button className='mt-4 mx-auto w-fit' color='secondary' disabled={Object.keys(methods.formState.errors).length ? true : false} variant='contained' type='submit'>
                            Оставить заявку
                        </Button>
                    </form>
                </FormProvider>
            </Container>
        </AOSProvider >
    )
}
