import DescriptionList from '@/components/UI/text/DescriptionList'
import Subtitle from '@/components/UI/text/Subtitle'
import Sticker from '@/components/icons/sticker'
import { TProduct } from '@/globalTypes'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Card = ({ product }: { product: TProduct }) => {
    return (
        <Box
            data-aos='fade-up'
            className="shadow rounded-md p-8 absolute bottom-5 left-5"
            sx={{
                width: '40%',
                bgcolor: 'primary.main',
                minWidth: ['450px']
            }}
        >
            <Sticker />
            <Box className='flex flex-col w-full gap-4'>
                <Subtitle>{product.name}</Subtitle>
                <DescriptionList fade props={product.props} />
                <Link href={`/products/${product.id}`} data-aos='fade-up'>
                    <Button color='secondary' variant='outlined' sx={{ mt: 1 }} data-aos='fade-up'>
                        Подробнее
                    </Button>
                </Link>
            </Box>
        </Box >
    )
}

export default Card