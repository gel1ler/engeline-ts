import Fill from '@/components/UI/Fill'
import MoreButton from '@/components/UI/buttons/MoreButton'
import Subtitle from '@/components/UI/text/Subtitle'
import { TProduct } from '@/globalTypes'
import { Box, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <Box
      data-aos='fade-up'
      className='w-full h-full pt-10 pb-6 px-2 flex flex-col items-center justify-between gap-10 rounded-lg'
      sx={{
        boxShadow: '0 0 10px 5px rgba(0,0,0,.2)',
      }}
    >
      <Image
        alt='Product png photo'
        src='/products/pipes.png'
        width={300}
        height={200}
        className='object-contain flex-grow w-full h-full'
      />
      <Box className='flex flex-col items-center gap-2'>
        <Typography variant='h5' textAlign='center'>
          {product.name}
        </Typography>
        <Typography textAlign='center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <MoreButton href='/' />
      </Box>
    </Box>
  )
}

export default ProductCard