import Fill from '@/components/UI/Fill'
import MoreButton from '@/components/UI/buttons/MoreButton'
import Subtitle from '@/components/UI/text/Subtitle'
import { TProduct } from '@/globalTypes'
import compressText from '@/services/compressText'
import { Box, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <Box
      data-aos='fade-up'
      data-aos-offset="20"
      className='w-full h-full rounded-lg overflow-hidden flex flex-col-reverse sm:flex-row p-5 gap-2'
      sx={{
        boxShadow: '0 0 10px 5px rgba(0,0,0,.1)',
        alignItems: ['center', 'stretch']
      }}
    >
      <Box className='w-full sm:w-1/2 items-center sm:items-start flex flex-col justify-between flex-grow gap-2'>
        <Box>
          <Typography fontWeight={600} variant='h5' sx={{ textAlign: ['center', 'left'] }}>
            {product.name}
          </Typography>
          <Typography data-aos-offset="20" sx={{ mt: 1, textAlign: ['center', 'left'] }}>
            {product.shortDescription ? compressText(product.shortDescription, 15) :product.description}
          </Typography>
        </Box>
        <MoreButton href={'/products/' + product.id} sx={{ mx: ['auto', 0] }} />
      </Box>
      <Box className='w-full sm:w-1/2 rounded-lg overflow-hidden relative drop-shadow-md'>
        <Image
          alt='Product photo'
          src={product.mainImg}
          width={500}
          height={500}
          className='object-cover w-full h-full'
        />
      </Box>
    </Box>
  )
}

export default ProductCard