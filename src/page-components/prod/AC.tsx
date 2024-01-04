import MoreButton from '@/components/UI/buttons/MoreButton'
import Title from '@/components/UI/text/Title'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const AC = () => {
    return (
        <Box className='anchor my-5 flex flex-col items-center' id='ac_anchor'>
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
                        className='rounded-xl object-cover shadow-xl h-64'
                        src='https://firebasestorage.googleapis.com/v0/b/engeline-708d1.appspot.com/o/Антикорр%2Ff136175e-3996-470b-b3a9-26c4bbe32f3d.jpeg?alt=media&token=3571d23b-b861-4b27-a4bb-c3a4d334321b'
                        width={500}
                        height={350}
                        alt='Антикор'
                    />
                </Grid>
                <Grid item md={4}>
                    <Image
                        className='rounded-xl object-cover shadow-xl h-64'
                        src='/prod/AC/AC2.jpg'
                        width={500}
                        height={350}
                        alt='Антикор'
                    />
                </Grid>
                <Grid item md={4}>
                    <Image
                        className='rounded-xl object-cover shadow-xl h-64'
                        src='https://firebasestorage.googleapis.com/v0/b/engeline-708d1.appspot.com/o/Антикорр%2F53411249-123f-4199-b62e-b82c2405ec78.jpeg?alt=media&token=49c5f43d-354b-4918-aafc-c8ffd855ad53'
                        width={500}
                        height={350}
                        alt='Антикор'
                    />
                </Grid>
            </Grid>
            <MoreButton dataAos='fade-up' href='/products/6' sx={{ mt: 3, }} />
        </Box >
    )
}

export default AC