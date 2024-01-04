import React from 'react'
import Box from '@mui/material/Box'
import Title from '@/components/UI/text/Title'
import Carousel from './Carousel'
import { getProducts } from '../../../../firebase/clientApp'
import ArrowTextLink from '@/components/UI/text/ArrowTextLink'

const Products = async () => {
    const products = await getProducts()

    return (
        <Box
            className='w-screen relative z-10'
            sx={{ pt: [2, 0] }}
        >
            <Title centered >
                Продукция и услуги
            </Title>
            <Carousel products={products} />
            <Box className='flex justify-center mt-4'>
                <ArrowTextLink href='/products' dataAos='fade-right'>
                    Весь перечень услуг и продукции
                </ArrowTextLink>
            </Box>
        </Box >
    )
}

export default Products