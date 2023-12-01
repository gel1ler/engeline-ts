'use client'
import ImageViewer from '@/components/UI/imageViewer'
import Title from '@/components/UI/text/Title'
import { TSetBool, TSetNumber } from '@/globalTypes'
import { Box, Container, Grid } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

const Photo = ({ src, num, setCurrent, setOpen }: { src: string, num: number, setCurrent: TSetNumber, setOpen: TSetBool }) =>
  <Grid item xs={6} data-aos='fade-up'>
    <Box
      className='relative overflow-hidden w-full h-full cursor-pointer'
      onClick={() => {
        setOpen(true)
        setCurrent(num)
      }}>
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
  const [current, setCurrent] = useState(0)
  const [open, setOpen] = useState(false)

  return (
    <Box sx={{ pt: 10 }}>
      <Title centered>
        Галерея
      </Title>
      <Container>
        <ImageViewer
          images={images}
          current={current}
          setCurrent={setCurrent}
          open={open}
          setOpen={setOpen}
        />
        <Grid container spacing={1} sx={{ height: '70vh' }}>
          <Photo src={images[0]} num={0} setCurrent={setCurrent} setOpen={setOpen} />
          <Grid item container xs={6} spacing={1}>
            {images.slice(1).map((i, key) =>
              <Photo
                key={key}
                src={i}
                num={key + 1}
                setCurrent={setCurrent}
                setOpen={setOpen}
              />
            )}
          </Grid>
        </Grid >
      </Container >
    </Box >
  )
}

export default Gallery