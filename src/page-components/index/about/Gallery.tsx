import Title from '@/components/UI/text/Title'
import { Box, Container, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Photo = ({ src }: { src: string }) =>
  <Grid item xs={6} data-aos='fade-up'>
    <Box className='relative overflow-hidden w-full h-full'>
      <Image
        fill
        alt='Photo'
        src={src}
        style={{
          objectFit: 'cover'
        }}
      />
    </Box>
  </Grid>

const Gallery = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <Title centered>
        Галерея
      </Title>
      <Container>
        <Grid container spacing={1} sx={{ height: '70vh' }}>
          <Photo src='/advantages/lab.webp' />
          <Grid item container xs={6} spacing={1}>
            <Photo src='/advantages/plazma.jpg' />
            <Photo src='/advantages/plazma.jpg' />
            <Photo src='/advantages/plazma.jpg' />
            <Photo src='/advantages/plazma.jpg' />
          </Grid>
        </Grid >
      </Container >
    </Box >
  )
}

export default Gallery