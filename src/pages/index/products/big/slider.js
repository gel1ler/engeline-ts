import React, { useState, useEffect } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import Arrow from '@/components/UI/icons/arrow'

const Slide = ({ image }) => {
    return (
        <Box
            sx={{
                cursor: 'pointer',
                position: 'relative',
                width: '100%',
                height: '100%',
                transition: 'all .2s ease-out'
            }}
            data-aos='fade-up'
        >
            <Image
                src={image}
                alt='Станок фото'
                fill
                style={{
                    filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    objectFit: 'cover'
                }}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 40vw"
            />
        </Box>
    )

}

const Slider = ({ additional, main, isVisible, num, setMainCurrent }) => {
    let images = [main, ...additional].slice(0, 4)
    const [current, setCurrent] = useState(0)


    useEffect(() => {
        isVisible ? setMainCurrent(num) : null
    })

    return (
        <Box sx={{ position: 'relative', height: 'min-content' }}>
            <Arrow left current={current} setCurrent={setCurrent} length={images.length} />
            <Arrow current={current} setCurrent={setCurrent} length={images.length} />
            <Box
                sx={{
                    width: '100%',
                    height: '50vh',
                }}
                className='flex-centered'
                data-aos='fade-up'
            >
                <Slide image={images[current]} />
                <Box
                    sx={{
                        mt: 1,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gridTemplateRows: '100px',
                        gap: 1
                    }}
                >
                    {images.map((i, key) =>
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                opacity: current == key ? '1' : '0.5',
                                transition: 'all .2s ease-out'
                            }}
                            key={key}
                        >
                            <Image
                                alt='Миниатюра слайдера'
                                src={i}
                                fill
                                style={{
                                    borderRadius: '5px',
                                    objectFit: 'cover',
                                    filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))',
                                    cursor: 'pointer'
                                }}
                                sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 7vw"
                                onClick={() => setCurrent(key)}
                            />
                        </Box>
                    )}
                </Box>
            </Box >
        </Box>
    )
}

export default Slider