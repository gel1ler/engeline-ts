import Title from '@/components/UI/text/Title'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Zag = () => {
    return (
        <Box className='my-20'>
            <Title variant='h3'>Заготовительное производство</Title>
            <Box className='flex gap-8'>
                <Image
                    data-aos='fade-up'
                    src='/prod/val.jpg'
                    className='rounded-xl object-contain h-fit'
                    height={600}
                    width={300}
                    alt='Заготовительное производство'
                />
                <Box>
                    <Typography variant='h5' data-aos='fade-up' data-aos-offset='20' sx={{ mt: 2 }}>
                        <b>Гильотинные ножницы</b> для раскроя металла толщиной до 25 мм при ширине 3100 мм.
                    </Typography>
                    <Typography variant='h5' data-aos='fade-up' sx={{ mt: 2 }} data-aos-offset='20'>
                        <b>Оборудование для гибки сортамента:</b>
                        <ul>
                            <li>Уголок 125х125</li>
                            <li>Тавр 220х98</li>
                            <li>Швеллер 220х80</li>
                            <li>Полоса 100х30</li>
                        </ul>
                    </Typography>
                    <Typography variant='h5' data-aos='fade-up' sx={{ mt: 2 }} data-aos-offset='20'>
                        <b>Пресса для холодной штамповки</b> с усилием до 400 тонн, при габарите 1500х2100 мм.
                    </Typography>
                    <Typography variant='h5' data-aos='fade-up' sx={{ mt: 2 }} data-aos-offset='20'>
                        <b>Листогибочные вальцы для толщин</b>
                        <ul>
                            <li>4 до 50 мм при ширине до 3000мм</li>
                            <li>4 до 90 мм при ширине 1500мм(с подогревом)</li>
                        </ul>
                    </Typography>
                    <Typography variant='h5' data-aos='fade-up' sx={{ mt: 2 }} data-aos-offset='20'>
                        <b>Установка газо-плазменной резки с ЧПУ</b> для резки листа толщиной:
                        <ul>
                            <li>газ до 240 мм;</li>
                            <li>плазма до 50 мм.</li>
                        </ul>
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default Zag