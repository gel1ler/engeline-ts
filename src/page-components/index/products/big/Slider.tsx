'use client'
import { TProduct } from '@/globalTypes'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import Slider from "react-slick"

const products = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

const MySlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    return (
        <Slider
            {...settings}
        >
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    )
}

export default MySlider