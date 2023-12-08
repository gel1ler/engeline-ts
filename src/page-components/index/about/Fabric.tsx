import React from 'react'
import Box from '@mui/material/Box'
import Title from '@/components/UI/text/Title'
import Image from 'next/image'
import { Container, Typography } from '@mui/material'
import MoreButton from '@/components/UI/buttons/MoreButton'

const Fabric = async () => {
    return (
        <Box
            className='w-screen relative bg-stone-100'
        >
            <Image
                alt='Bg element'
                className='w-full drop-shadow-md mb-20'
                src='/bgelements/wave.svg'
                width={1920}
                height={100}
            />

            <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw' }} maxWidth={false}>
                <Title mdCenter>
                    Первомайскхиммаш
                </Title>
                <Box
                    className='w-full flex items-center'
                    sx={{
                        flexDirection: ['column', 'column', 'column', 'row'],
                        gap: [4, 4, 4, 10]
                    }}
                >
                    <Box sx={{ width: ['100%', '100%', '70%', '50%'], textAlign: ['center', 'center','center', 'left'] }}>
                        <Typography variant='h6' data-aos='fade-up'>
                            Первомайский завод химического машиностроения является ведущим производителем нефтепромыслового и емкостного оборудования и оборудования для химической промышленности.
                            Завод географически расположен в центре России - в 350 км к югу от Москвы, что позволяет производить отгрузку железнодорожным и автомобильным транспортом в любой регион. Промышленная площадка предприятия занимает 74,36 га. Завод располагает сварочным, механообрабатывающим и сборочным производствами.
                        </Typography>
                        <MoreButton
                            href='/prod#factory_anchor'
                            dataAos='fade-up'
                            sx={{
                                mt: 3,
                                mx: ['auto', 'auto', '0'],
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
                            data-aos='fade-left'
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
                        dataAos='fade-right'
                        sx={{
                            mt: 1,
                            px: 2,
                            py: 1,
                            display: ['block', 'block', 'block', 'none']
                        }}
                    />
                </Box>
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
        </Box >
    )
}

export default Fabric