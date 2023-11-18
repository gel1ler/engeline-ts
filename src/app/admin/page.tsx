import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Title from '@/components/UI/text/Title'
import Link from 'next/link'

const Index = () => {
  return (
    <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw', mt: '70px' }} maxWidth={false}>
      <Title>Админ панель</Title>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Link href='/admin/products'>
          <Typography variant='h5' sx={{ textDecoration: 'underline' }}>
            Продукция
          </Typography>
        </Link>
      </Box>
    </Container>
  )
}

export default Index