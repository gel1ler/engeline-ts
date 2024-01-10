'use client'
import React, { useState } from 'react'
import Sticker from '@/components/icons/sticker'
import { Typography, Button, Box } from '@mui/material'
import MuiPhone from '../PhoneNumber'
import RHookFormTextField from '../RHookFormTextField'
import { FormProvider, useForm } from 'react-hook-form'
import { usePathname } from 'next/navigation'
import AlertDialog from './Alert'
import { useRouter } from 'next/navigation'
import RHookFormSelect from '../RHookFormSelect'
import emailjs from 'emailjs-com'
import Link from 'next/link'
import RHookFormCheckbox from '../RHookFormCheckbox'

type TInputs = {
    name: string;
    phoneNumber: string;
    type: string;
    agreement: boolean;
}

const questionnaire = [
    'Соединительные детали трубопроводов',
]

const directions = [
    'Механическая обработка',
    'Емкостное химическое и машинное оборудование',
    'Муфты ремонтные стальные',
    'Соединительные детали трубопроводов',
    'Трубы обечаечные, корпуса, бандажи',
    'Трубы восстановленные',
    'Антикоррозийное покрытие'
]

const Form = () => {
    const [open, setOpen] = useState(false)
    const [phone, setPhone] = useState('')
    const methods = useForm<TInputs>()

    const router = useRouter()
    const path = usePathname()

    const onSubmit = async (data: TInputs) => {
        router.push('?loading=true')

        const message = `${data.name} заказал обратный звонок на номер ${phone} по поводу ${data.type}.`
        try {
            const form = document.createElement('form');
            form.innerHTML = `<input type="hidden" name="message" value="${message}">`;
            await emailjs.sendForm('service_87l4lm9', 'template_5lt5tfc', form, 'orI8OxXQKj9YCadsc');
            setOpen(true)
        } catch (error) {
            console.error("Error:", error)
        }
        router.replace(path)
    }

    const product = methods.watch('type')



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
                        <RHookFormTextField label='Ваше имя' name='name' fullWidth />
                        <MuiPhone value={phone} onChange={setPhone} />
                        <RHookFormSelect
                            label='Тип продукции'
                            fullwidth
                            name='type'
                            valuesArr={directions}
                            defaultValue={directions[0]}
                        />
                        <RHookFormCheckbox name='agreement'>
                            <Typography variant='body2'>
                                Я соглашаюсь с <Link href='/privacy' style={{ color: 'orange' }}>политикой обработки персональных данных</Link>*
                            </Typography>
                        </RHookFormCheckbox>
                        <Box className='flex justify-around gap-2'>
                            <Button className='mt-4 w-fit' color='secondary' disabled={Object.keys(methods.formState.errors).length ? true : false} variant='contained' type='submit'>
                                Оставить заявку
                            </Button>
                            {questionnaire.includes(product) ?
                                <Button className='mt-4 w-fit' color='secondary' disabled={Object.keys(methods.formState.errors).length ? true : false} variant='outlined' type='submit'>
                                    Заполнить опросник
                                </Button>
                                : null
                            }
                        </Box>
                    </form>
                </FormProvider>
            </Box >
        </>
    )
}

export default Form