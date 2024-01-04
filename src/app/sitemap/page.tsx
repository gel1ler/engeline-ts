import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import ProductCard from '@/page-components/products/ProductCard'
import Title from '@/components/UI/text/Title'
import { getProducts } from '../../../firebase/clientApp'
import { Metadata } from 'next'
import Link from 'next/link'
import { links } from '@/content/content'

export const metadata: Metadata = {
  title: 'Карта сайта engeline.ru',
  description: 'Инжелайн - производственное предприятие',
}

const Text = ({ children, href }: any) =>
  <Link href={href}>
    <Typography
      variant='h6'
      className='transition-colors'
      sx={{
        ':hover': {
          color: 'secondary.main'
        }
      }}
    >
      {children}
    </Typography>
  </Link >

export default async function Home() {
  return (
    <AOSProvider>
      <Container className='my-16'>
        <Title >
          Карта сайта
        </Title>
        <Box className='flex flex-col gap-2'>
          <Text href='/'>Главная</Text>
          <Text href='/prod'>Производство</Text>
          <Box>
            <Text href='/products'>Продукция</Text>
            <ul>
              {links.map((i, key) =>
                <li key={key} style={{ marginTop: '4px' }}>
                  <Text href={i.href}>{i.text}</Text>
                </li>
              )}
            </ul>
          </Box>
          <Text href='/sitemap'>Карта сайта</Text>
          <Text href='/agreement'>Пользовательское соглашение</Text>
          <Text href='/privacy'>Персональные данные</Text>
        </Box>
      </Container>
    </AOSProvider >
  )
}
