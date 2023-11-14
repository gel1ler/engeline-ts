'use client'
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

const news = [
    { id: 0, title: '0', description: '0 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum delectus, inventore? Ea earum delectus, inventore?' },
    { id: 1, title: '1', description: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum delectus, inventore? Ea earum delectus, inventore?' },
    { id: 2, title: '2', description: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum delectus, inventore? Ea earum delectus, inventore?' },
    { id: 3, title: '3', description: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum delectus, inventore? Ea earum delectus, inventore?' },
    { id: 4, title: '4', description: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum delectus, inventore? Ea earum delectus, inventore?' },
]

const getStyles = (selected: number, index: number) => {
    const diff = selected - index;
    const absDiff = Math.abs(diff);
    const isNeighbor = absDiff === 1 || (selected === 0 && index === 4) || (selected === 4 && index === 0);
    const isSelected = diff === 0;

    let l = '20%', zi = 0, sc = 0, op = 0, a = 0.7;

    if (isSelected) {
        op = 1;
        l = '50%';
        zi = 10;
        sc = 1;
    } else if (isNeighbor) {
        op = a;
        l = diff > 0 ? '20vw' : '80vw';
        zi = 9;
        sc = 0.9;
    }

    return {
        transition: 'all 0.7s ease-in-out',
        borderRadius: 2,
        bgcolor: '#334465',
        opacity: op,
        position: 'absolute',
        left: l,
        p: 2,
        transform: `translate(-50%, 0) scale(${sc})`,
        // zIndex: zi,
        textAlign: 'center',
        cursor: 'pointer',
        overflow: 'hidden',
    };
}

const Carousel = () => {
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSelected((selected + 1) % news.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [selected]);

    return (
        <Box className='h-full w-full flex relative'>
            {news.map((post, index) => (
                <Box
                    key={post.id}
                    className='h-full'
                    sx={getStyles(selected, index)}
                >
                    <Typography variant="h4">
                        {post.title}
                    </Typography>
                    <Typography>
                        {post.description}
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}

export default Carousel