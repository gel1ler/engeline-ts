import React from 'react'
import { Container, Grid, Typography } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import ProductCard from '@/page-components/products/ProductCard'
import Title from '@/components/UI/text/Title'
import { getProducts } from '../../../firebase/clientApp'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Карта сайта engeline.ru',
  description: 'Инжелайн - производственное предприятие',
}

export default async function Home() {
  const products = await getProducts()

  return (
    <AOSProvider>
      <Container className='my-16'>
        <Title>
          Карта сайта
        </Title>
        <Link href='/'>
          <Typography variant='h6'>
            Главная
          </Typography>
        </Link>
        <Link href='/prod'>
          <Typography variant='h6'>
            Производство
          </Typography>
        </Link>
      </Container>
    </AOSProvider >
  )
}
