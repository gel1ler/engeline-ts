import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import StaticHeader from '@/components/layout/header/types/StaticHeader'
import data from '@/../data/data.json' assert {type: 'json'}
import { TProduct } from '@/globalTypes'
import ProductCard from '@/page-components/products/ProductCard'
import Title from '@/components/UI/text/Title'
import { getProducts } from '../../../firebase/clientApp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Инжелайн - продукция',
  description: 'Инжелайн - производственное предприятие',
}

export default async function Home() {
  const products = await getProducts()

  return (
    <AOSProvider>
      <Container className='my-16'>
        <Title>
          Продукция и услуги
        </Title>
        <Grid container spacing={2}>
          {products.map(product =>
            <Grid
              xs={12}
              md={6}
              item
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          )}
        </Grid>
      </Container>
    </AOSProvider >
  )
}
