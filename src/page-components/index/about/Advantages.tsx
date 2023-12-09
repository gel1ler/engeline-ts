import { Box } from '@mui/material'
import React from 'react'
import Advantage from './Advantage'

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
        <Box
            className='grid grid-cols-3 grid-rows-2 mt-10 justify-items-center gap-6 overflow-hidden mx-auto'
            sx={{
                maxWidth: '100vw',
                width: ['100vw', '100vw', '95%', '84%']
            }}
        >
            {advantages.map((i, key) =>
                <Advantage key={key} num={key} title={i.title} text={i.text} />
            )}
        </Box>

    )
}

export default Advantages