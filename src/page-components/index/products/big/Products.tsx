import React from 'react'
import Box from '@mui/material/Box'
import Title from '@/components/UI/text/Title'
import Slider from './Slider'
import data from '@/../data/data.json' assert {type: 'json'}
import { TProduct } from '@/globalTypes'
import Link from 'next/link'
import { Typography } from '@mui/material'
import { ArrowForwardIos } from '@mui/icons-material'

const Products = async () => {
    const products = data.products as TProduct[]

    const arr = products.slice(-2).concat(products.slice(0, 3))

    return (
        <Box
            className='w-screen relative z-10'
        >
            <Title centered >
                Продукция и услуги
            </Title>
            <Slider products={arr} />
            <Box className='flex justify-center mt-4' data-aos='fade-up'>
                <Link href='/products'>
                    <Typography textAlign='center' className='animUnderline w-fit' variant='h6'>
                        Весь асортимент продукции
                        <ArrowForwardIos fontSize='small' />
                    </Typography>
                </Link>
            </Box>
        </Box >
    )
}

export default Products