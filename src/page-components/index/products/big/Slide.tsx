import { TProduct } from '@/globalTypes'
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Card from './Card'

const Slide = ({ product }: { product: TProduct }) => {
    return (
        <Box
            sx={{
                width: '70vw',
                px: 2,
                height: '100%'
            }}
            data-aos='fade-up'
        >
            <Box
                className='w-full h-full grid grid-cols-2 grid-rows-2 overflow-hidden gap-2 relative'
                sx={{
                    // boxShadow: '0 0 10px 5px rgba(0,0,0,.2)'
                    filter: 'drop-shadow(0 0 4px rgba(0,0,0, 0.5))',
                }}
            >
                <Box className='relative col-span-1 row-span-2'>
                    <Image
                        src={product?.additionalImgs[0]}
                        alt='Image'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </Box>
                <Box className='relative'>
                    <Image
                        src={product.mainImg}
                        alt='Image'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </Box>
                <Box className='relative'>
                    <Image
                        src={product.additionalImgs[1]}
                        alt='Image'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </Box>
                <Card product={product} />
            </Box>

        </Box>
    )
}

export default Slide