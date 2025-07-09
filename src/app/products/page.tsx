import React from 'react'
import { Container, Grid } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import ProductCard from '@/page-components/products/ProductCard'
import Title from '@/components/UI/text/Title'
import { getProducts } from '../../firebase/clientApp'
import { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Инжелайн - продукция',
  description: `Компания Инжелайн предлагает широкий спектр оборудования и услуг для
  различных отраслей промышленности. Мы гарантируем высокое качество и
  надежность нашей продукции, а также индивидуальный подход к каждому клиенту.`,
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
