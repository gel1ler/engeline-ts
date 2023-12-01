import { TProduct } from '@/globalTypes'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Subtitle from '@/components/UI/text/Subtitle'
import MoreButton from '@/components/UI/buttons/MoreButton'

const Slide = ({ product }: { product: TProduct }) => {
    return (
        <Box
            className='h-full p-10 relative overflow-hidden flex gap-5 rounded-xl transition-all duration-300 cursor-pointer'
            sx={{
                width: '60vw',
                boxShadow: '0 0 10px 5px rgba(0,0,0,.1)',
                ':hover': {
                    transform: 'scale(1.01)',
                    boxShadow: '0 0 10px 5px rgba(0,0,0,.2)',
                }
            }}
            data-aos='fade-up'
        >
            <Box className='w-1/2 flex flex-col justify-between flex-grow '>
                <Box>
                    <Subtitle>
                        {product.name}
                    </Subtitle>
                    <Typography data-aos='fade-up' sx={{ mt: 1 }}>
                        {product.shortDescription}
                    </Typography>
                </Box>
                <MoreButton href={'/products/' + product.id} dataAos='fade-up' />
            </Box>
            <Box className='w-1/2 rounded-xl overflow-hidden relative drop-shadow-md' data-aos='fade-left'>
                <Image
                    alt='Product png photo'
                    src={product.mainImg}
                    width={500}
                    height={500}
                    className='object-cover w-full h-full'
                />
            </Box>
        </Box>
    )
}

export default Slide