'use client'
import { Box } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import p1 from 'public/products/1.jpg'
import p2 from 'public/products/2.jpg'
import p3 from 'public/products/3.jpg'
import ImageViewer from '@/components/UI/imageViewer'

const photos = [p1, p2, p3]

const Images = () => {
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState(0)

    return (
        <>
            <ImageViewer
                photos={photos}
                open={open}
                setOpen={setOpen}
                current={current}
                setCurrent={setCurrent}
            />
            <Box className='grid grid-cols-2 grid-rows-2 gap-2'>
                {photos.map((i, key) =>
                    <Image
                        alt='Продукция'
                        key={key}
                        data-aos='fade-up'
                        onClick={() => {
                            setOpen(true)
                            setCurrent(key)
                        }}
                        className=' cursor-pointer object-cover w-full h-full rounded-xl'
                        style={{
                            gridRow: key === 0 ? '1/3' : '',
                            boxShadow: '0 0 10px 2px rgba(0,0,0,.2)'
                        }}
                        src={i}
                    />
                )}
            </Box>
        </>
    )
}

export default Images