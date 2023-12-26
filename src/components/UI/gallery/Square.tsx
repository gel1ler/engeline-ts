import React from 'react'
import { TSetBool, TSetNumber } from '@/globalTypes'
import { Box } from '@mui/material'
import Image from 'next/image'

const Photo = ({ src, num, setCurrent, setOpen }: { src: string, num: number, setCurrent: TSetNumber, setOpen: TSetBool }) =>
    <Box
        className='relative overflow-hidden w-full h-full cursor-pointer aspect-square'
        data-aos='fade-up'
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

const Square = ({ images, setCurrent, setOpen }: { images: string[], setOpen: TSetBool, setCurrent: TSetNumber }) => {
    return (
        <Box className='grid gap-2 grid-cols-2 grid-rows-2 mx-auto'>
            {images.slice(0, 4).map((i, key) =>
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

export default Square