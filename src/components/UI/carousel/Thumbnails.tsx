import { TSetNumber } from '@/globalTypes'
import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Thumbnails = ({
    images, current, setCurrent
}: {
    images: string[], current: number, setCurrent: TSetNumber
}) => {
    return (
        <Box className='mt-2 grid grid-cols-3 grid-rows-1 gap-1'>
            {images.map((i, key) =>
                <Box
                    className='relative transition-opacity duration-300'
                    sx={{ opacity: current == key ? '1' : '0.5', minHeight: '100px' }}
                    key={key}
                >
                    <Image
                        alt='Миниатюра слайдера'
                        src={i}
                        fill
                        className='rounded-md object-cover cursor-pointer'
                        style={{ filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))' }}
                        sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 7vw"
                        onClick={() => setCurrent(key)}
                    />
                </Box>
            )}
        </Box>
    )
}

export default Thumbnails