'use client'
import { Box } from '@mui/material'
import React from 'react'
import Advantage from './Advantage'
import SmAdvantage from './SmAdvantage'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
}

const Advantages = () => {
    return (
        // <Box
        //     className='grid grid-cols-3 grid-rows-2 mt-10 justify-items-center gap-6 overflow-hidden mx-auto'
        //     sx={{
        //         maxWidth: '100vw',
        //         width: ['100vw', '100vw', '95%', '84%']
        //     }}
        // >
        //     {advantages.map((i, key) =>
        //         <Advantage key={key} num={key} title={i.title} text={i.text} />
        //     )}
        // </Box>
        <Box className='w-screen h-1/2'>
            <Slider {...settings}>
                {advantages.map((i, key) =>
                    <SmAdvantage key={key} num={key} title={i.title} text={i.text} />
                )}
            </Slider>
        </Box>

    )
}

export default Advantages