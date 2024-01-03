import React from 'react'
import { TSetBool, TSetNumber } from '@/globalTypes'
import { Box } from '@mui/material'
import Image from 'next/image'

const Photo = ({ src, num, setCurrent, setOpen }: { src: string, num: number, setCurrent: TSetNumber, setOpen: TSetBool }) =>
    <Box
        className='relative overflow-hidden w-full h-full cursor-pointer aspect-square'
        data-aos='fade-up'
        sx={{
            gridColumn: num === 0 ? '1/3' : '',
            gridRow: num === 0 ? '1/3' : '',
        }}
        onClick={() => {
            setOpen(true)
            setCurrent(num)
        }}>
        <Image
            fill
            sizes="(max-width: 1200px) 45vw, 33vw"
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
                gridTemplate: '1fr 1fr / 1fr 1fr 1fr 1fr',
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