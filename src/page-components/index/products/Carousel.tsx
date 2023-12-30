'use client'
import React from 'react'
import { Box } from '@mui/material'
import { TProduct } from '@/globalTypes'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from './Slide'
import Slider from 'react-slick'

const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerPadding: '10px',
}



const Carousel = ({ products }: { products: TProduct[] }) => {
    return (
        <Box className='my-5 w-screen overflow-hidden'>
            <Slider {...settings}>
                {products.map((product, index) => (
                    <Slide key={index} product={product} />
                ))}
            </Slider>
        </Box>
    )
}

export default Carousel