import { TProduct } from '@/globalTypes'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Subtitle from '@/components/UI/text/Subtitle'
import MoreButton from '@/components/UI/buttons/MoreButton'
import Link from 'next/link'

const generateUl = (string: string) => {
    const arr = string.split('/n').slice(1)
    return arr
}

const Slide = ({ product }: { product: TProduct }) => {
    return (
        <Box
            className='p-10 relative overflow-hidden flex gap-5 rounded-xl mx-auto'
            sx={{
                width: ['90vw', '70vw', '60vw'],
                height: ['70vh', '60vh'],
                boxShadow: '0 0 10px 5px rgba(0,0,0,.1)',
                flexDirection: ['column', 'column', 'row'],
                alignItems: ['center', 'center', 'start']
            }}
            data-aos='fade-up'
        >
            <Box
                className='flex flex-col lg:h-full'
                sx={{
                    width: ['100%', '100%', '50%'],
                    alignItems: ['center', 'center', 'start']
                }}
            >
                <Link href={'/products/' + product.id} className='w-fit'>
                    <Subtitle noAos>
                        {product.name}
                    </Subtitle>
                </Link>
                <Box
                    className='relative flex-grow overflow-hidden mt-4'
                    sx={{
                        display: ['none', 'none', 'block'],
                    }}
                >

                    {product.description ?
                        product.description.includes('/n') ?
                            generateUl(product.description).map((i, key) =>
                                <Typography key={key} sx={{ mb: 1 }}>{i}</Typography>
                            )
                            :
                            <Typography>{product.description}</Typography>
                        :
                        <Typography>
                            {product.shortDescription}
                        </Typography>
                    }
                    <Box className=' bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 h-1/2 w-full' />
                </Box>
                <MoreButton href={'/products/' + product.id} sx={{ display: ['none', 'none', 'block'] }} />
            </Box>
            <Box className='rounded-xl overflow-hidden relative drop-shadow-md flex-grow h-full' sx={{ width: ['100%', '100%', '50%'] }}>
                <Image
                    alt='Product png photo'
                    src={product.mainImg}
                    fill
                    className='object-cover w-full h-full'
                />
            </Box>
            <MoreButton href={'/products/' + product.id} dataAos='fade-up' sx={{ display: ['block', 'block', 'none'] }} />
        </Box >

    )
}

export default Slide