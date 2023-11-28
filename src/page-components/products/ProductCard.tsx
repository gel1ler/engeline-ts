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
      className='w-full h-full rounded-lg overflow-hidden flex flex-col'
      sx={{
        boxShadow: '0 0 10px 5px rgba(0,0,0,.2)',
      }}
    >
      <Image
        alt='Product png photo'
        src={product.mainImg}
        width={300}
        height={200}
        className='object-cover flex-grow w-full -z-10 relative'
      />
      <Box className='flex flex-col items-center gap-4 pt-4 pb-6 px-2' sx={{ boxShadow: '0 0 10px 5px rgba(0,0,0,.3)' }}>
        <Subtitle variant='h5' centered>
          {product.name}
        </Subtitle>
        <Typography textAlign='center' data-aos='fade-up'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <MoreButton href={'/products/' + product.id} dataAos='fade-up' />
      </Box>
    </Box>
  )
}

export default ProductCard