import ImageViewer from '@/components/UI/imageViewer'
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

const Gallery = ({ images }: { images: string[] }) => {
  return (
    <Box sx={{ pt: 10 }}>
      <Title centered>
        Галерея
      </Title>
      <Container>
        <ImageViewer 
        
        />
        <Grid container spacing={1} sx={{ height: '70vh' }}>
          <Photo src={images[0]} />
          <Grid item container xs={6} spacing={1}>
            <Photo src={images[1]} />
            <Photo src={images[2]} />
            <Photo src={images[3]} />
            <Photo src={images[4]} />
          </Grid>
        </Grid >
      </Container >
    </Box >
  )
}

export default Gallery