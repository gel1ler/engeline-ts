import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Title from '@/components/UI/text/Title'
import Advantage from './Advantage'
import wave from 'public/wave.svg'
import HelperText from '@/components/UI/text/HelperText'
import Images from './Images'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@mui/material'

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
            sx={{
                bgcolor: 'white',
                pt: [5, 5, 10],
            }}
        >
            <Title centered>
                О компании
            </Title>
            <Box className='flex flex-col items-center mt-10' sx={{ mt: 5 }}>
                <Typography
                    variant='h5'
                    data-aos='fade-up'
                    textAlign='center'
                    sx={{
                        width: ['90%', '90%', '66%']
                    }}
                >
                    Производственная компания ООО «ИНЖЕЛАЙН» расположена на одном из крупнейших машиностроительных
                    заводов страны, имеющем ряд технологических преимуществ:
                </Typography>
                <Box
                    className='grid grid-cols-3 grid-rows-2 mt-10 justify-items-center w-5/6 gap-6'
                >
                    {advantages.map((i, key) =>
                        <Advantage key={key} num={key} title={i.title} text={i.text} />
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default About