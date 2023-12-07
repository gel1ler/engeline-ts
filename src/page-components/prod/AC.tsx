import Title from '@/components/UI/text/Title'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const AC = () => {
    return (
        <Box className='my-20'>
            <Title centered>Антикоррозийное покрытие</Title>

            <Typography variant='h6' textAlign='center' data-aos='fade-up'>
                Все виды изделий могут проходить антикоррозийную обработку методом безвоздушной
                окраски в покрасочной камере, в том числе изоляцией типа «Карбофлекс»
                (рекомендована к применению в ПАО «Транснефть» и ПАО «Газпром»), используемой
                для наружной антикоррозийной защиты труб, соединительных деталей трубопроводов,
                технологического оборудования и строительных конструкций в подземном исполнении с
                предварительной подготовкой поверхности в пескоструйной или дробеструйной камерах.
            </Typography>
            <Grid container sx={{ mt: 1 }} spacing={4} data-aos='fade-up'>
                <Grid item md={4}>
                    <Image
                        className='rounded-xl object-cover h-full'
                        src='/prod/AC1.jpeg'
                        width={500}
                        height={350}
                        alt='Антикор'
                    />
                </Grid>
                <Grid item md={4}>
                    <Image
                        className='rounded-xl object-cover h-full'
                        src='/prod/AC2.jpg'
                        width={500}
                        height={350}
                        alt='Антикор'
                    />
                </Grid>
                <Grid item md={4}>
                    <Image
                        className='rounded-xl object-cover h-full'
                        src='/prod/AC3.jpg'
                        width={500}
                        height={350}
                        alt='Антикор'
                    />
                </Grid>
            </Grid>
        </Box >
    )
}

export default AC