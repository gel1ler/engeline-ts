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
                width: ['80vw', '60vw'],
                boxShadow: '0 0 10px 5px rgba(0,0,0,.1)',
                flexDirection: ['column', 'column', 'row'],
                alignItems: ['center', 'center', 'initial']
            }}
            data-aos='fade-up'
        >
            <Box className='flex flex-col' sx={{ width: ['100%', '100%', '50%'] }}>
                <Link href={'/products/' + product.id} className='w-fit'>
                    <Subtitle noAos>
                        {product.name}
                    </Subtitle>
                </Link>
                <Box
                    className='relative'
                    sx={{
                        mt: 2,
                        display: ['none', 'none', 'block'],
                        flexGrow: 1,
                        overflow: 'hidden'
                    }}
                >
                    <Typography>
                        {product.description ? product.description : product.shortDescription}
                    </Typography>
                    <Box className=' bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 h-1/2 w-full' />
                </Box>
                <MoreButton href={'/products/' + product.id} sx={{ display: ['none', 'none', 'block'] }} />
            </Box>
            <Box className='rounded-xl overflow-hidden relative drop-shadow-md' sx={{ width: ['100%', '100%', '50%'] }}>
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