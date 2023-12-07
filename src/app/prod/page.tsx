import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import Start from '@/page-components/prod/Start'
import Plx from '@/services/Plx'
import Title from '@/components/UI/text/Title'
import data from '@/../data/data.json'
import File from '@/page-components/product/File'
import Contacts from '@/page-components/index/Contacts'

const startParallax = [
    {
        start: 0,
        end: '50vh',
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: "opacity",
            }
        ]
    },
    {
        start: 0,
        end: '100vh',
        properties: [
            {
                startValue: 0,
                endValue: -400,
                property: "translateY",
            },
        ]
    }
]

import { Metadata } from "next";
import Image from 'next/image'
import Advantages from '@/page-components/prod/Advantages'
import Zag from '@/page-components/prod/Zag'
import AW from '@/page-components/prod/AW'
import AC from '@/page-components/prod/AC'

export default async function Home() {
    return (
        <AOSProvider>
            <Box position='relative'>
                <Plx parallaxData={startParallax}>
                    <Start />
                </Plx>
                <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <Box className='flex flex-col'>
                        <Title>Первомайскхиммаш</Title>
                        <Box
                            className='w-full flex'
                            sx={{
                                flexDirection: ['column', 'column', 'row'],
                                gap: [4, 4, 5]
                            }}
                        >
                            <Typography variant='h6' data-aos='fade-up'>
                                Первомайский завод химического машиностроения является ведущим производителем нефтепромыслового и емкостного оборудования и оборудования для химической промышленности.
                                Завод географически расположен в центре России - в 350 км к югу от Москвы, что позволяет производить отгрузку железнодорожным и автомобильным транспортом в любой регион. Промышленная площадка предприятия занимает 74,36 га. Завод располагает сварочным, механообрабатывающим и сборочным производствами.
                            </Typography>
                            <Image
                                data-aos='fade-up'
                                className='w-1/2 rounded-lg'
                                src='/general.jpg'
                                alt='Общее фото завода'
                                width={700}
                                height={500}
                            />
                        </Box>
                    </Box>
                    <Advantages />
                    <Zag />
                    <AW />
                </Container>
                <Box className='flex flex-col gap-8 bg-stone-100'>
                    <Image
                        alt='Bg element'
                        className='w-full drop-shadow-md mb-20'
                        src='/bgelements/wave.svg'
                        width={1920}
                        height={100}
                    />
                    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <AC />
                    </Container>
                    <Image
                        alt='Bg element'
                        className='w-full mt-20'
                        style={{
                            filter: 'drop-shadow(0 -4px 2px rgba(0, 0, 0, 0.1))',
                        }}
                        src='/bgelements/wave2.svg'
                        width={1920}
                        height={100}
                    />
                </Box>

                <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw' }} maxWidth={false}>
                    <Contacts />
                </Container>
            </Box >
        </AOSProvider >
    )
}
