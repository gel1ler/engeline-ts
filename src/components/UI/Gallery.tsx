'use client'
import ImageViewer from '@/components/UI/imageViewer'
import Title from '@/components/UI/text/Title'
import { TSetBool, TSetNumber } from '@/globalTypes'
import { Box, Container, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'

const Photo = ({ src, num, setCurrent, setOpen, isMd }: { src: string, num: number, setCurrent: TSetNumber, setOpen: TSetBool, isMd?: boolean }) =>
  <Box
    className='relative overflow-hidden w-full h-full cursor-pointer aspect-square'
    data-aos='fade-up'
    sx={{
      gridColumn: num === 1 && !isMd ? '1/2' : '',
      gridRow: num === 1 && !isMd ? '1/3' : '',
    }}
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

const Gallery = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0)
  const [open, setOpen] = useState(false)

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down('lg'))
  const length = isMd ? 1 : 0


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
        <Box
          className='grid gap-2'
          sx={{
            width: ['90%', '80%', '80%', '100%'],
            mx: 'auto',
            gridTemplate: ['1fr 1fr / 1fr 1fr', '1fr 1fr / 1fr 1fr', '1fr 1fr / 1fr 1fr', '1fr 1fr / 2fr 1fr 1fr'],
          }}
        >
          {images.slice(length).map((i, key) =>
            <Photo
              isMd={isMd}
              key={key}
              src={i}
              num={key}
              setCurrent={setCurrent}
              setOpen={setOpen}
            />
          )}
        </Box >
      </Container >
    </Box >
  )
}

export default Gallery