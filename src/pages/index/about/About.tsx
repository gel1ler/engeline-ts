import React from 'react'
import { Box, Typography, Divider, useTheme, useMediaQuery } from '@mui/material'
import Subtitle from '@/components/UI/text/Subtitle'
import Advantage from './Advantage'
import wave from 'public/wave.svg'
import HelperText from '@/components/UI/text/HelperText'
import Images from './Images'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Link from 'next/link'

const advantages = [
    {
        title: 'Удобное расположение',
        text: 'Завод располагается в центральной части России'
    },
    {
        title: 'Разнообразие продукции',
        text: 'Металлоконструкции различной сложности'
    },
    {
        title: 'Опыт и квалификация',
        text: 'Многолетний опыт в своей отрасли и высококвалифицированный персонал'
    },
    {
        title: 'Соблюдение стандартов',
        text: 'Соответствие высоким стандартам качества ведущих компаний страны'
    },
    {
        title: 'Индивидуальный подход',
        text: 'Изготовление уникальных изделий нестандартных типоразмеров'
    },
    {
        title: 'Технические возможности',
        text: 'Оборудование, обеспечивающее высокое качество продукции'
    }
]

const About = () => {
    return (
        <Box
            id='about_anchor'
            sx={{
                bgcolor: 'white',
                pt: [5, 5, 10],
            }}
        >
            <Subtitle centered>
                О компании
            </Subtitle>
            <Box className='flex flex-col items-center mt-10' sx={{ mt: 5 }}>
                <Typography
                    variant='h5'
                    data-aos='fade-up'
                    textAlign='center'
                    sx={{
                        width: ['90%', '90%', '66%']
                    }}
                >
                    Производтсвенная компания ООО "Инжелайн" использует мощности завода Первомайскхиммаш по договору аренды, заключённому до 2029 года.
                    Один из крупнейших металлургических заводов страны предоставляет целый ряд преимуществ.
                </Typography>
                <Box
                    className='grid grid-cols-3 grid-rows-2 mt-10 justify-items-center w-5/6 gap-6'
                >
                    {advantages.map((i, key) =>
                        <Advantage key={key} num={key} title={i.title} text={i.text} />
                    )}
                </Box>
            </Box>
            <Box
                sx={{
                    color: 'white',
                    background: `url(${wave.src})`,
                    backgroundSize: 'cover',
                    p: '10%',
                    pt: '15%',
                    filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.4))',
                }}
            >
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                }}
                >
                    <Box sx={{ height: '100%' }} className='column-between'>
                        <Typography
                            variant="h5"
                            sx={{ mt: 2, mr: 1, lineHeight: '35px' }}
                            data-aos='fade-right'
                        >
                            <Typography variant="h2" component='span' sx={{ mr: 1, textDecoration: 'underline' }}>
                                Продукция
                            </Typography>
                            нашей компании проходит множество этапов контроля и проверок. Таким образом Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repellat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aut nihil necessitatibus id tempore iusto quo corrupti quibusdam rem eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </Typography>
                        <Box
                            sx={{
                                cursor: 'pointer',
                                width: 'min-content',
                                textAlign: 'center',
                                transition: 'all .3s ease',
                                m: '10px auto',
                                ':hover': {
                                    transform: 'translateY(10px)'
                                }
                            }}

                        >
                            <Link href='#about' data-aos='fade-up'>
                                <Typography variant='h4'>
                                    Подробнее
                                </Typography>
                                <ExpandMoreIcon sx={{ fontSize: 40, mt: -1 }} />
                            </Link>
                        </Box>
                    </Box>
                    <Box className='c-gap2'>
                        <HelperText white>
                            Нажимайте на картинки для просмотра
                        </HelperText>
                        <Images />
                    </Box>
                </Box>
            </Box >
        </Box>
    )
}

export default About