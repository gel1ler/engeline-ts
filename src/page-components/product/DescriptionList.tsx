import Gallery from '@/components/UI/gallery/Gallery'
import Title from '@/components/UI/text/Title'
import { TDescription } from '@/globalTypes'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const DescriptionList = ({ descriptions }: { descriptions: TDescription[] }) => {
    return (
        <Grid container spacing={2}>
            {descriptions.map((description, key) =>
                <Grid item key={key} md={12} lg={6}>
                    <Box sx={{ minHeight: '60vh' }} className='flex flex-col items-center gap-2'>
                        <Title variant='h4'>
                            {description.name}
                        </Title >
                        <video
                            data-aos='fade-up'
                            className='object-cover rounded-xl'
                            controls
                            src={description.video}
                        />
                    </Box>
                </Grid>
            )}
        </Grid>
    )
}

export default DescriptionList