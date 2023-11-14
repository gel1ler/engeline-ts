import React from 'react'
import Box from '@mui/material/Box'
import { getProducts } from '@/../firebase/clientApp'
import Subtitle from '@/components/UI/text/Subtitle'
import Slider from './Slider'

const Products = async () => {
    // const products = await getProducts()

    return (
        <Box
            id='products_anchor'
            className='w-screen relative z-10 overflow-hidden pt-10 bg-stone-100'
            sx={{
                height: 'calc(100vh - 7rem)',
            }}
        >
            <Subtitle centered>
                Продукция
            </Subtitle>
            <Slider />
        </Box >
    )
}

export default Products