import Title from '@/components/UI/text/Title'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Docs = () => {
    return (
        <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', my: 15 }} className='anchor' id='docs_anchor'>
            <Title>Разработка документаций</Title>
            <Box className='flex flex-col items-center md:items-start md:flex-row gap-4 mt-4'>
                <Typography variant='h6' data-aos='fade-up' sx={{ textAlign: ['center', 'left'] }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odit officiis, nostrum necessitatibus sequi, provident doloribus illum ea possimus omnis libero iure maiores expedita harum sed totam iste magnam illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odit officiis, nostrum necessitatibus sequi, provident doloribus illum ea possimus omnis libero iure maiores expedita harum sed totam iste magnam illo.
                </Typography>
                <Image
                    data-aos='fade-up'
                    className='w-full md:w-1/2 object-cover aspect-video rounded-lg shadow-lg'
                    src='/advantages/docs.jpeg'
                    alt='Общее фото завода'
                    width={700}
                    height={500}
                />
            </Box>
        </Container>
    )
}

export default Docs