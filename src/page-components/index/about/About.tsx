import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
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
                    maxHeight: '100vh'
                }}
            >
                <Box className='grid grid-cols-2'>
                    <Box className='flex flex-col justify-between h-full'>
                        <Typography
                            variant="h5"
                            sx={{ mt: 2, mr: 1, lineHeight: '35px' }}
                            data-aos='fade-right'
                        >
                            <Typography variant="h2" component='span' className='mr-2 underline'>
                                Продукция
                            </Typography>
                            нашей компании проходит множество этапов контроля и проверок. Таким образом Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, repellat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aut nihil necessitatibus id tempore iusto quo corrupti quibusdam rem eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </Typography>
                        <Box
                            className='cursor-pointer w-min text-center transition-all duration-300 mx-auto'
                            sx={{
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
                    <Box className='flex flex-col gap-2'>
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