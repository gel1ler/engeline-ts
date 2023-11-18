import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import StaticHeader from '@/components/layout/header/types/StaticHeader'
import data from '@/../data/data.json' assert {type: 'json'}
import { TProduct } from '@/globalTypes'
import ProductCard from '@/page-components/products/ProductCard'
import Title from '@/components/UI/text/Title'

export default function Home() {
  const products = data.products as TProduct[]

  return (
    <AOSProvider>
      <Box className='relative'>
        <StaticHeader />
        <Container className='my-16'>
          <Title>
            Продукция и услуги
          </Title>
          <Grid container spacing={2}>
            {products.map(product =>
              <Grid
                xs={4}
                item
                key={product.id}
              >
                <ProductCard product={product} />
              </Grid>
            )}
          </Grid>
        </Container>
      </Box >
    </AOSProvider >
  )
}
