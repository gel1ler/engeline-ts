'use client'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import { Arrow } from '@/components/icons/UI'
import Dots from './Dots'
import Thumbnails from './Thumbnails'

type CarouselProps = {
    dots?: boolean;
    thumbnails?: boolean;
    infinite?: boolean;
    arrows?: boolean;
    autoplay?: boolean;
    time?: number;
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ dots, thumbnails, infinite, arrows, autoplay, time, images }) => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!autoplay) {
            return
        }

        const timer = setInterval(() => {
            setCurrent((prevCurrent) => (prevCurrent + 1) % images.length)
        }, time ? time : 5000)

        return () => {
            clearInterval(timer)
        }
    }, [autoplay, time])

    const next = useCallback(() => {
        setCurrent((current + 1) % images.length);
    }, [current])

    const prev = useCallback(() => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }, [current])

    const imageStyles = useMemo(
        () => ({
            transform: `translateX(${-current * 100}%)`,
        }),
        [current]
    )


    return (
        <Box className='w-1/2 h-1/2 mx-auto my-20'>
            <Box className='overflow-hidden relative rounded-lg'>
                <Box
                    className='flex h-full'
                    sx={{ width: '300%' }}
                >
                    {images.map((image, key) =>
                        <Box
                            key={key}
                            className=' object-cover transition-transform duration-500'
                            sx={imageStyles}
                        >
                            <Image
                                alt='Слайд'
                                src={image}
                                width={1600}
                                height={800}

                            />
                        </Box>
                    )}
                </Box>
                {arrows ?
                    <>
                        <Arrow anchor='left' f={prev} />
                        <Arrow anchor='right' f={next} />
                    </>
                    :
                    null}
                {dots ? <Dots current={current} length={images.length} setCurrent={setCurrent} /> : null}
            </Box>
            {thumbnails ? <Thumbnails images={images} current={current} setCurrent={setCurrent} /> : null}
        </Box>
    )
}

export default Carousel