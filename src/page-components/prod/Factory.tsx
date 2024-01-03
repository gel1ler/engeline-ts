import Title from '@/components/UI/text/Title'
import { Box, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Item = ({ year, title, text, src }: { year: string, title: string, text: string, src: string }) =>
    <Box className='flex gap-6 flex-col items-center sm:flex-row' data-aos='fade-up'>
        <Image
            className='w-48 h-48 aspect-square rounded-full shadow-lg object-cover'
            src={src}
            alt='Общее фото завода'
            width={700}
            height={500}
        />
        <Box>
            <Box className='flex items-center justify-center flex-col sm:flex-row sm:justify-start gap-4'>
                <Typography
                    variant='h3'
                    sx={{
                        width: 'fit-content',
                        textDecoration: 'underline',
                        textDecorationColor: '#E5A019',
                        textUnderlineOffset: '10px',
                        textDecorationThickness: '3px',
                        maxWidth: ['90vw', '700px']
                    }}
                >
                    {year}
                </Typography>
                <Typography variant='h4'>
                    {title}
                </Typography>
            </Box>
            <Typography variant='h6' sx={{ mt: '10px', textAlign: ['center', 'left'] }}>
                {text}
            </Typography>
        </Box>
    </Box>

const Factory = () => {
    return (
        <Box className='flex flex-col anchor' id='factory_anchor'>
            <Title centered>Первомайскхиммаш</Title>
            <Box
                className='w-full flex gap-6 sm:gap-10'
                sx={{
                    flexDirection: ['column', 'column'],
                }}
            >
                <Item
                    year='1947'
                    title='Начало истории'
                    text='История предприятия началась 10 июня 1947 года. В
                    этот день из ворот паровозоремонтного завода вышел
                    первый отремонтированный паровоз.'
                    src='/history/1.jpg'
                />
                <Divider sx={{ display: ['block', 'none'] }} />
                <Item
                    year='1964'
                    title='«Химмаш»'
                    text='В мае 1964 года завод по своему статусу становится
                    предприятием химического машиностроения, основной
                    номенклатурой которого была ёмкостная стальная
                    сварная химическая аппаратура. Завод получил
                    название «Химмаш».'
                    src='/history/2.jpg'
                />
                <Divider sx={{ display: ['block', 'none'] }} />
                <Item
                    year='1982'
                    title='Новые горизонты'
                    text='В 1982 году завод перешел на выпуск новой продукции -
                    нефтепромыслового оборудования.'
                    src='/history/3.jpg'
                />
                <Divider sx={{ display: ['block', 'none'] }} />
                <Box className='flex gap-4 mt-4'>
                    <Box className='flex flex-col items-center sm:items-start gap-4'>
                        <Box className='flex gap-4 items-center flex-col sm:flex-row' data-aos='fade-up'>
                            <Typography
                                variant='h3'
                                sx={{
                                    width: 'fit-content',
                                    textDecoration: 'underline',
                                    textDecorationColor: '#E5A019',
                                    textUnderlineOffset: '10px',
                                    textDecorationThickness: '3px',
                                    maxWidth: ['90vw', '700px']
                                }}
                            >
                                2018
                            </Typography>
                            <Typography variant='h4' textAlign='center'>
                                ООО {'"'}ИНЖЕЛАЙН{'"'}
                            </Typography>
                            <Image
                                data-aos='fade-up'
                                className='w-full object-cover aspect-video rounded-lg shadow-lg sm:hidden'
                                src='/general.jpg'
                                alt='Общее фото завода'
                                width={700}
                                height={500}
                            />
                        </Box>
                        <Typography variant='h6' data-aos='fade-up' sx={{ textAlign: ['center', 'left'] }}>
                            Начало производственной деятельности ООО
                            “ИНЖЕЛАЙН” на территории завода.<br />

                            Задача компании - <b>сохранение компетенций завода</b>{' '}
                            Первомайскхиммаш и <b>дальнейшее развитие</b>{' '}
                            востребованных направлений. Мы стремимся
                            сохранять и укреплять накопленные за много лет
                            традиции и навыки.
                        </Typography>
                    </Box>
                    <Image
                        data-aos='fade-up'
                        className='w-1/2 object-cover aspect-video rounded-lg shadow-lg hidden sm:block'
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