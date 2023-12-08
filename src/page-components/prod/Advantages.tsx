import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const advantages = [
    {
        text: 'Объемы производства до 2000 тн в месяц',
        src: '/icons/prodAdv/volume.png'
    },
    {
        text: 'Штат более 100 человек',
        src: '/icons/prodAdv/employees.png'
    },
    {
        text: 'Площадь основного цеха N метров',
        src: '/icons/prodAdv/area.png'
    },
]


const Advantages = () => {
    return (
        <Grid container spacing={4}>
            {advantages.map((i, key) =>
                <Grid item md={4} sm={6} xs={12} key={key} data-aos='fade-up' data-aos-offset='20'>
                    <Box className='flex flex-col items-center w-3/4 gap-2'>
                        <Image
                            src={i.src}
                            alt='Icon'
                            width={100}
                            height={100}
                        />
                        <Typography variant='h5' textAlign='center'>
                            {i.text}
                        </Typography>
                    </Box>
                </Grid>
            )
            }
        </Grid >
    )
}

export default Advantages