'use client'
import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import Arrow from '@/components/icons/UI'
import Image from 'next/image'
import Sticker from '@/components/icons/sticker'
import Subtitle from '@/components/UI/text/Subtitle'
import { TProduct } from '@/globalTypes'
import Dots from '@/components/UI/carousel/Dots'
import Link from 'next/link'
import DescriprionList from '@/components/UI/text/DescriptionList'
import Card from './Card'
import Slide from './Slide'

const Slider = ({ products }: { products: TProduct[] }) => {
    const arr = products
    const [current, setCurrent] = useState(0)
    const [name, setName] = useState('')

    const next = () => {
        setName('Forward')
        setTimeout(() => {
            setName('')
            setCurrent(prev => (prev + 1) % products.length)
            arr.push(arr.shift()!)
        }, 200)

    }

    const prev = () => {
        setName('Backward')
        setTimeout(() => {
            setName('')
            setCurrent(prev => (prev - 1) % products.length)
            arr.unshift(arr.pop()!)
        }, 200)

    }

    return (
        <Box className='w-screen relative py-5'>
            <Box
                className={`flex justify-center relative ${name ? 'animated' + name : null}`}
                sx={{
                    height: '70vh',
                    width: `${arr.length * 70}vw`,
                    ml: '-125vw'
                }}
            >
                {arr.map((product, index) => (
                    <Box
                        key={product.id}
                        sx={{
                            height: '100%',
                            transition: 'all .2s ease-in-out',
                            opacity: index === 2 ? 1 : 0.3,
                            transform: index === 2 ? 'scale(1)' : 'scale(.95)'
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