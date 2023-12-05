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
                flexDirection: ['column', 'column', 'row'],
                alignItems: ['center', 'center', 'initial']
            }}
            data-aos='fade-up'
        >
            <Box className='flex flex-col justify-between' sx={{ width: ['100%', '100%', '50%'] }}>
                <Box>
                    <Link href={'/products/' + product.id} className='w-fit'>
                        <Subtitle>
                            {product.name}
                        </Subtitle>
                    </Link>
                    <Typography data-aos='fade-up' sx={{ mt: 2, display: ['none', 'none', 'block'] }}>
                        {product.shortDescription}
                    </Typography>
                </Box>
                <MoreButton href={'/products/' + product.id} dataAos='fade-up' sx={{ display: ['none', 'none', 'block'] }} />
            </Box>
            <Box className='rounded-xl overflow-hidden relative drop-shadow-md' data-aos='fade-left' sx={{ width: ['100%', '100%', '50%'] }}>
                <Image
                    alt='Product png photo'
                    src={product.mainImg}
                    width={500}
                    height={500}
                    className='object-cover w-full h-full'
                />
            </Box>
            <MoreButton href={'/products/' + product.id} dataAos='fade-up' sx={{ display: ['block', 'block', 'none'] }} />
        </Box>

    )
}

export default Slide