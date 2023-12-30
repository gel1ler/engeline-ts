import React from 'react'
import Box from '@mui/material/Box'
import Title from '@/components/UI/text/Title'
import Image from 'next/image'
import { Container, Typography } from '@mui/material'
import MoreButton from '@/components/UI/buttons/MoreButton'
import { WaveDown, WaveUp } from '@/components/layout/bgelements/Waves'

const Fabric = async () => {
    return (
        <Box
            className='w-screen relative bg-stone-100'
        >
            <WaveDown />

            <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], p: 0, pt: 4 }} maxWidth={false}>
                <Title mdCenter>
                    Первомайскхиммаш
                </Title>
                <Box
                    className='w-full flex'
                    sx={{
                        flexDirection: ['column', 'column', 'column', 'row'],
                        alignItems: ['center', 'center', 'center', 'start'],
                        gap: [4, 4, 4, 10]
                    }}
                >
                    <Box className='mx-auto' sx={{ width: ['100%', '100%', '70%', '50%'], textAlign: ['center', 'center', 'center', 'left'] }}>
                        <Typography
                            sx={{
                                fontSize: ['15px', '15px', '17px']
                            }}
                            data-aos='fade-up'
                        >
                            Первомайский завод химического машиностроения является ведущим производителем нефтепромыслового и емкостного оборудования и оборудования для химической промышленности.
                            Завод географически расположен в центре России - в 350 км к югу от Москвы, что позволяет производить отгрузку железнодорожным и автомобильным транспортом в любой регион. Промышленная площадка предприятия занимает 74,36 га. Завод располагает сварочным, механообрабатывающим и сборочным производствами.
                        </Typography>
                        <MoreButton
                            href='/prod#factory_anchor'
                            dataAos='fade-up'
                            sx={{
                                mt: 3,
                                px: 2,
                                py: 1,
                                display: ['none', 'none', 'none', 'block']
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: ['90%', '90%', '70%', '50%'],
                            mx: 'auto'
                        }}
                    >
                        <iframe
                            data-aos='fade-up'
                            style={{
                                width: '100%',
                                aspectRatio: '16/9'
                            }}
                            src="https://www.youtube.com/embed/1NLpfDSZfbs"
                            title="Презентация завода Первомайскхиммаш"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        />
                    </Box>
                    <MoreButton
                        href='/'
                        dataAos='fade-up'
                        sx={{
                            mt: 1,
                            px: 2,
                            py: 1,
                            display: ['block', 'block', 'block', 'none'],
                            mx: ['auto', 'auto', 'auto', 'none'],
                            width: 'fit-content'
                        }}
                    />
                </Box>
            </Container>
            <WaveUp />
        </Box >
    )
}

export default Fabric