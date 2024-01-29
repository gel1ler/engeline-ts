import Title from '@/components/UI/text/Title'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const AW = () => {
    return (
        <Box className='my-20'>
            <Title variant='h3'>Cборочно-сварочное производство</Title>
            <Box className='flex gap-8'>
                <Box>
                    <Typography variant='h5' data-aos='fade-up' sx={{ mt: 2 }} data-aos-offset='20'>
                        <ul className='aw'>
                            <li>Сборочные плазы для изделий цилиндрической формы диаметром до 5000 мм и длинной до 34000 м3</li>
                            <li>Стенды гидравлических испытаний объемом 300 м3 на максимальное давление до 200 кг/см2</li>
                            <li>Стенда гидравлического испытания нефтепромыслового оборудования на давление до 1000 кг/см2</li>
                            <li>Автоматическая сварка под слоем флюса для толщин до 90 мм</li>
                            <li>Сварочная колонна №1 для автоматической сварки под слоем флюса габариты: 5х5</li>
                            <li>Сварочная колонна №2 для автоматической сварки под слоем флюса габариты: 3х3</li>
                            <li>Сварочная колонна №3 для автоматической сварки под слоем флюса габариты: 4х6</li>
                            <li>Максимальный диаметр обечайки до 5000 мм</li>
                            <li>Максимальная толщина свариваемой стенки до 90 мм</li>
                            <li>Полуавтоматическая сварка в среде защитных газов</li>
                            <li>Сварка алюминиевых сплавов и нержавеющих сталей с применением сварки не плавящимся электродом в среде аргона</li>
                        </ul>
                    </Typography>
                </Box>
                <Image
                    data-aos='fade-up'
                    src='/prod/val.jpg'
                    className='rounded-xl object-contain h-fit'
                    height={600}
                    width={300}
                    alt='Заготовительное производство'
                />
            </Box>
        </Box >
    )
}

export default AW