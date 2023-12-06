import React from 'react'
import Box from '@mui/material/Box'
import Title from '@/components/UI/text/Title'
import Slider from './Slider'
import data from '@/../data/data.json' assert {type: 'json'}
import { TProduct } from '@/globalTypes'
import { getProducts } from '../../../../firebase/clientApp'
import ArrowTextLink from '@/components/UI/text/ArrowTextLink'

const Products = async () => {
    // const products = data.products as TProduct[]
    const products = await getProducts()

    const arr = products.slice(-2).reverse().concat(products.slice(0, 3))

    return (
        <Box
            className='w-screen relative z-10'
        >
            <Title centered >
                Продукция и услуги
            </Title>
            <Slider products={arr} />
            <Box className='flex justify-center mt-4'>
                <ArrowTextLink href='/products' dataAos='fade-right'>
                    Весь перечень услуг и продукции
                </ArrowTextLink>
            </Box>
        </Box >
    )
}

export default Products