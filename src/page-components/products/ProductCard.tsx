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
      data-aos-offset="20"
      className='w-full h-full rounded-lg overflow-hidden flex p-5 gap-2'
      sx={{
        boxShadow: '0 0 10px 5px rgba(0,0,0,.1)',
      }}
    >
      <Box className='w-1/2 flex flex-col justify-between flex-grow gap-2'>
        <Box>
          <Typography fontWeight={600} variant='h5'>
            {product.name}
          </Typography>
          <Typography data-aos='fade-up' data-aos-offset="20">
            {product.shortDescription.split(' ').slice(0, 15).join(" ") + " ..."}
          </Typography>
        </Box>
        <MoreButton href={'/products/' + product.id} dataAos='fade-up' />
      </Box>
      <Box className='w-1/2 rounded-lg overflow-hidden relative  drop-shadow-md'>
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