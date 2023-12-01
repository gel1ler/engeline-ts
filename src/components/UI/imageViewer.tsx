import { Modal, Box, IconButton } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Arrow } from '@/components/icons/UI'
import { TSetBool, TSetNumber } from '@/globalTypes'
import Dots from './carousel/Dots'

const ImageViewer = ({
    images, open, setOpen, current, setCurrent
}: {
    images: string[], open: boolean, setOpen: TSetBool, current: number, setCurrent: TSetNumber
}
) => {
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box className=' outline-none w-screen h-screen absolute grid gap-4 bg-white p-20'>
                <IconButton
                    onClick={() => setOpen(false)}
                    size='large'
                    sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        zIndex: 999,
                    }}
                // data-aos='fade-up'
                >
                    <CloseIcon sx={{ fontSize: 35 }} color='action' />
                </IconButton>
                <Arrow anchor='left' f={() => setCurrent((current - 1 + images.length) % images.length)} />
                <Arrow anchor='right' f={() => setCurrent((current + 1) % images.length)} />
                <Box className='flex flex-col gap-4'>
                    <Box className='relative' sx={{ height: '75vh' }}>
                        {images.map((image, index) =>
                            <Image
                                key={index}
                                alt='Фото в слайдере'
                                src={image}
                                fill
                                className='flex-grow object-contain transition-all absolute top-0 left-0 w-full duration-300'
                                style={{
                                    minHeight: '75vh',
                                    opacity: index === current ? 1 : 0,
                                    zIndex: index === current ? 1 : -1,

                                }}
                            />
                        )}
                    </Box>
                    <Dots current={current} length={images.length} />
                </Box>
            </Box>
        </Modal >
    )
}

export default ImageViewer