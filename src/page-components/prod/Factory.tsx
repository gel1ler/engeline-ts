import Title from '@/components/UI/text/Title'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Item = ({ year, title, text }: { year: string, title: string, text: string }) =>
    <Box className='flex gap-6 items-center' data-aos='fade-up'>
        <Image
            className='w-48 h-48 aspect-square rounded-full shadow-lg object-cover'
            src='/general.jpg'
            alt='Общее фото завода'
            width={700}
            height={500}
        />
        <Box>
            <Box className='flex items-center gap-4'>
                <Title noAos>
                    {year}
                </Title>
                <Typography variant='h4'>
                    {title}
                </Typography>
            </Box>
            <Typography variant='h6'>
                {text}
            </Typography>
        </Box>
    </Box>

const Factory = () => {
    return (
        <Box className='flex flex-col'>
            <Title variant='h2' centered>Первомайскхиммаш</Title>
            <Box
                className='w-full flex'
                sx={{
                    flexDirection: ['column', 'column'],
                    gap: [4, 4, 5]
                }}
            >
                <Item
                    year='1947'
                    title='Начало истории'
                    text='История предприятия началась 10 июня 1947 года. В
                    этот день из ворот паровозоремонтного завода вышел
                    первый отремонтированный паровоз.'
                />
                <Item
                    year='1964'
                    title='«Химмаш»'
                    text='В мае 1964 года завод по своему статусу становится
                    предприятием химического машиностроения, основной
                    номенклатурой которого была ёмкостная стальная
                    сварная химическая аппаратура. Завод получил
                    название «Химмаш».'
                />
                <Item
                    year='1982'
                    title='Новые горизонты'
                    text='В 1982 году завод перешел на выпуск новой продукции -
                    нефтепромыслового оборудования.'
                />
                <Box className='flex gap-4 mt-4'>
                    <Box className='flex flex-col'>
                        <Box className='flex gap-4 items-center' data-aos='fade-up'>
                            <Title noAos>
                                2018
                            </Title>
                            <Typography variant='h4' textAlign='center'>
                                ООО "ИНЖЕЛАЙН"
                            </Typography>
                        </Box>
                        <Typography sx={{ mt: 1 }} variant='h6' data-aos='fade-up'>
                            Начало производственной деятельности ООО
                            “ИНЖЕЛАЙН” на территории завода.<br />

                            Задача компании - <b>сохранение компетенций завода </b> 
                            Первомайскхиммаш и <b>дальнейшее развитие </b>
                            востребованных направлений. Мы стремимся
                            сохранять и укреплять накопленные за много лет
                            традиции и навыки.
                        </Typography>
                    </Box>
                    <Image
                        data-aos='fade-up'
                        className='w-1/2 object-cover aspect-video rounded-lg shadow-lg'
                        src='/general.jpg'
                        alt='Общее фото завода'
                        width={700}
                        height={500}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Factory