import Gallery from '@/components/UI/gallery/Gallery'
import Title from '@/components/UI/text/Title'
import { TDescription } from '@/globalTypes'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const DescriptionList = ({ descriptions }: { descriptions: TDescription[] }) => {
    return (
        <>
            {descriptions.map((description, key) =>
                <Box sx={{ minHeight: '60vh' }} className='flex flex-col' key={key}>
                    <Title>
                        {description.name}
                    </Title>
                    <Typography variant='h6'>
                        {description.text}
                    </Typography>
                    <Box className='grid grid-cols-2 h-full'>
                        <Box className='w-full h-full relative'>
                            <Image
                                alt='Видео'
                                fill
                                className='object-cover'
                                src={description.video}
                            />
                        </Box>
                        <Gallery images={description.photos} type='square' />
                    </Box>
                </Box>
            )}
        </>
    )
}

export default DescriptionList