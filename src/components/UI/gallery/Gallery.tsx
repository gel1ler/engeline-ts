'use client'
import ImageViewer from '@/components/UI/imageViewer'
import Title from '@/components/UI/text/Title'
import { TSetBool, TSetNumber } from '@/globalTypes'
import { Box, Container, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import Wide from './Wide'
import Square from './Square'

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

const Gallery = ({ images, type }: { images: string[], type: 'wide' | 'square' }) => {
  const [current, setCurrent] = useState(0)
  const [open, setOpen] = useState(false)

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Container>
      <ImageViewer
        images={images}
        current={current}
        open={open}
        setOpen={setOpen}
      />
      {type === 'wide' && !isMd ?
        <Wide
          images={images}
          setCurrent={setCurrent}
          setOpen={setOpen}
        />
        :
        <Square
          images={images}
          setCurrent={setCurrent}
          setOpen={setOpen}
        />
      }
    </Container >
  )
}

export default Gallery