'use client'
import React, { useState } from 'react'
import { Box } from '@mui/material'
import Arrow from '@/components/icons/UI'
import { TProduct } from '@/globalTypes'
import Dots from '@/components/UI/carousel/Dots'
import Slide from './Slide'

const Slider = ({ products }: { products: TProduct[] }) => {
    const [current, setCurrent] = useState(2)

    const next = () => setCurrent(prev => (prev + 1 + products.length) % products.length)
    const prev = () => setCurrent(prev => (prev - 1 + products.length) % products.length)

    const keyboardHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        e.code === 'ArrowRight' && next()
        e.code === 'ArrowLeft' && prev()
    }

    return (
        <Box
            className='w-screen relative py-5 outline-none overflow-hidden'
            tabIndex={0}
            onKeyDown={(e) => keyboardHandler(e)}
        >
            <Box
                className='flex justify-center relative'
                sx={{
                    height: '60vh',
                    width: `${products.length * 60}vw`,
                    transition: 'all .3s ease-in-out',
                    transform: `translateX(-${current * 60}vw)`,
                    ml: '20vw'
                }}
            >
                {products.map((product, index) => (
                    <Box
                        key={product.id}
                        sx={{
                            height: '100%',
                            transition: 'all .3s ease-in-out',
                            opacity: index === current ? 1 : 0.3,
                            transform: index === current ? 'scale(1)' : 'scale(.95)',
                            filter: index === current ? 'blur(0)' : 'blur(2px)'
                        }}
                    >
                        <Slide product={product} />
                    </Box>
                ))}
            </Box>
            <Arrow
                anchor='left'
                f={prev}
            />
            <Arrow
                anchor='right'
                f={next}
            />
            <Box className='mt-3'>
                <Dots
                    current={current}
                    length={products.length}
                />
            </Box>
        </Box >
    )
}

export default Slider