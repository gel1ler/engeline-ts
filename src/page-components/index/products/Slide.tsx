import { TProduct } from '@/globalTypes'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Subtitle from '@/components/UI/text/Subtitle'
import MoreButton from '@/components/UI/buttons/MoreButton'
import Link from 'next/link'

const Slide = ({ product }: { product: TProduct }) => {
    return (
        <Box
            className='h-full p-10 relative overflow-hidden flex gap-5 rounded-xl'
            sx={{
                width: '60vw',
                boxShadow: '0 0 10px 5px rgba(0,0,0,.1)',
            }}
            data-aos='fade-up'
        >
            <Box className='w-1/2 flex flex-col justify-between flex-grow '>
                <Box>
                    <Link href={'/products/' + product.id} className='w-fit'>
                        <Subtitle>
                            {product.name}
                        </Subtitle>
                    </Link>
                    <Typography data-aos='fade-up' sx={{ mt: 2 }}>
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