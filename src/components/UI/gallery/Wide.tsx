import React from 'react'
import { TSetBool, TSetNumber } from '@/globalTypes'
import { Box } from '@mui/material'
import Image from 'next/image'

const Photo = ({ src, num, setCurrent, setOpen }: { src: string, num: number, setCurrent: TSetNumber, setOpen: TSetBool }) =>
    <Box
        className='relative overflow-hidden w-full h-full cursor-pointer aspect-square'
        data-aos='fade-up'
        sx={{
            gridColumn: num === 1 ? '1/2' : '',
            gridRow: num === 1 ? '1/3' : '',
        }}
        onClick={() => {
            setOpen(true)
            setCurrent(num)
        }}>
        <Image
            fill
            alt='Photo'
            src={src}
            className='object-cover'
        />
    </Box>

const Wide = ({ images, setCurrent, setOpen }: { images: string[], setOpen: TSetBool, setCurrent: TSetNumber }) => {
    return (
        <Box
            className='grid gap-2 w-full mx-auto'
            sx={{
                gridTemplate: '1fr 1fr / 2fr 1fr 1fr',
            }}
        >
            {images.map((i, key) =>
                <Photo
                    key={key}
                    src={i}
                    num={key}
                    setCurrent={setCurrent}
                    setOpen={setOpen}
                />
            )}
        </Box >
    )
}

export default Wide