import React, { ReactNode } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Title from '@/components/UI/text/Title'
import Image from 'next/image'
import { ArrowDropUp } from '@mui/icons-material'

type CardProps = {
    name: string;
    children: ReactNode;
    icon: string;
    image: string;
}

const Card = (props: CardProps) =>
    <Grid item lg={4} md={6} xs={12}>
        <Box
            data-aos='fade-up'
            className='relative shadow-xl overflow-hidden'
            sx={{
                height: '50vh',
                minHeight: '400px',
                ':hover': {
                    '.bg-white': {
                        transform: 'translateY(0)'
                    },
                    '.arrow-top': {
                        transform: 'rotate(180deg)'
                    }
                }
            }}
        >
            <Image
                className='object-cover -z-10'
                src={props.image}
                alt='Лаборатория'
                fill
            />
            <Box
                className='w-full h-full bg-white transition-transform duration-300 bg-opacity-90'
                sx={{
                    transform: 'translateY(80%)',
                }}
            >
                <Box className='flex items-center gap-4 justify-between p-6' sx={{ height: '20%' }}>
                    <Box className='flex items-center'>
                        <ArrowDropUp className='arrow-top mr-1' />
                        <Typography variant='h6' >
                            {props.name}
                        </Typography>
                    </Box>
                    <Image
                        src={props.icon}
                        width={30}
                        height={30}
                        alt='Icon'
                    />
                </Box>
                <Box className='h-full flex items-center justify-center p-6' sx={{ pb: '35%' }}>
                    <Typography variant='h6' textAlign='center'>
                        {props.children}
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Grid>

export default function Lab() {
    return (
        <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', gap: 10, mt: 4 }}>
            <Box className='flex flex-col anchor' id='lab_anchor'>
                <Title centered>Собственная лаборатория</Title>
                <Grid container sx={{ mt: 2 }} spacing={2}>
                    <Card
                        name='Радиографический метод'
                        icon='/icons/lab/radio.png'
                        image='/prod/lab/radio.jpg'
                    >
                        Радиографический метод контроля – на основе рентгеновских аппаратов для толщин до 70 мм
                    </Card>
                    <Card
                        name='Ультразвуковой метод'
                        icon='/icons/lab/ultra.png'
                        image='/prod/lab/ultra.jpeg'
                    >
                        Ультразвуковой метод – на основе дефектоскопов и толщиномеров, для контроля поковок, листов и сварных соединений
                    </Card>
                    <Card
                        name='Масспектрометрический метод'
                        icon='/icons/lab/mass.png'
                        image='/prod/lab/mass.webp'
                    >
                        Масспектрометрический метод – для выявления негерметичности соединений
                    </Card>
                    <Card
                        name='Капиллярный метод'
                        icon='/icons/lab/kapil.png'
                        image='/prod/lab/kapil.jpg'
                    >
                        Капиллярный метод – для выявления дефектов пористости
                    </Card>
                    <Card
                        name='Электроискровой метод'
                        icon='/icons/lab/electro.png'
                        image='/prod/lab/electro.jpeg'
                    >
                        Электроискровой метод – для выявления дефектов покрытий поверхности
                    </Card>
                    <Card
                        name='Эмиссионный спектрометр'
                        icon='/icons/lab/emis.png'
                        image='/prod/lab/emis.jpg'
                    >
                        Для проведения анализа химического состава литья используется оптический эмиссионный спектрометр
                    </Card>
                </Grid>
            </Box>
        </Container>
    )
}
