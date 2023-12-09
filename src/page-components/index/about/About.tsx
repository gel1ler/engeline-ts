import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Title from '@/components/UI/text/Title'
import Advantages from './Advantages'

const About = () => {
    return (
        <Box
            sx={{
                bgcolor: 'white',
                pt: [5, 5, 10],
            }}
        >
            <Title centered>
                О компании
            </Title>
            <Box className='flex flex-col items-center mt-10' sx={{ mt: 5 }}>
                <Typography
                    variant='h5'
                    data-aos='fade-up'
                    textAlign='center'
                    sx={{
                        width: ['90%', '90%', '66%']
                    }}
                >
                    Производственная компания ООО «ИНЖЕЛАЙН» расположена на одном из крупнейших машиностроительных
                    заводов страны, имеющем ряд технологических преимуществ:
                </Typography>
                <Advantages />
            </Box>
        </Box>
    )
}

export default About