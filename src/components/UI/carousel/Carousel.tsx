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
    let slicedImages = images.slice(0, 4)

    useEffect(() => {
        if (!autoplay) {
            return
        }

        const timer = setInterval(() => {
            setCurrent((prevCurrent) => (prevCurrent + 1) % slicedImages.length)
        }, time ? time : 5000)

        return () => {
            clearInterval(timer)
        }
    }, [autoplay, time])

    const next = useCallback(() => {
        setCurrent((current + 1) % slicedImages.length);
    }, [current])

    const prev = useCallback(() => {
        setCurrent(current === 0 ? slicedImages.length - 1 : current - 1);
    }, [current])

    const imageStyles = useMemo(
        () => ({
            transform: `translateX(${-current * 100 / 4}%)`,
            width: '400%',
        }),
        [current]
    )


    return (
        <Box className='relative h-min'>
            <Box className=' w-full overflow-hidden relative rounded-lg' sx={{ height: '50vh' }}>
                <Box
                    className='flex h-full transition duration-300'
                    sx={imageStyles}
                >
                    {slicedImages.map((image, key) =>
                        <Box
                            className='cursor-pointer relative w-full h-full'
                            key={key}
                        >
                            <Image
                                className=' rounded-lg overflow-hidden object-cover drop-shadow-xl'
                                src={image}
                                alt='Станок фото'
                                fill
                                style={{
                                    filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))',
                                }}
                                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 40vw"
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
                {dots ? <Dots current={current} length={slicedImages.length} setCurrent={setCurrent} /> : null}
            </Box>
            {thumbnails ? <Thumbnails images={slicedImages} current={current} setCurrent={setCurrent} /> : null}
        </Box>
    )
}

export default Carousel