import React, { ReactNode } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import Start from '@/page-components/prod/Start'
import Plx from '@/services/Plx'
import Title from '@/components/UI/text/Title'
import Contacts from '@/components/layout/contacts/Contacts'
import Image from 'next/image'
import Advantages from '@/page-components/prod/Advantages'
import AC from '@/page-components/prod/AC'
import { ArrowDropUp } from '@mui/icons-material'
import Lab from '@/page-components/prod/Lab'
import { startParallax } from '@/customization/customization'
import { Metadata } from 'next'
import Factory from '@/page-components/prod/Factory'

export const metadata: Metadata = {
    title: 'Инжелайн - производство',
    description: 'Инжелайн - производственное предприятие',
}

export default async function Home() {
    return (
        <AOSProvider>
            <Box position='relative'>
                <Plx parallaxData={startParallax}>
                    <Start />
                </Plx>
                <Container maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', gap: 10 }} className='anchor' id='factory_anchor'>
                    <Factory />
                    <Advantages />
                </Container>
                <Box className='flex flex-col gap-8 relative'>
                    <Image
                        fill
                        src='/prod/AC/AC2.jpg'
                        alt='Антикор'
                        className=' -z-50 opacity-10'
                    />

                    <Image
                        alt='Bg element'
                        className='w-full drop-shadow-md mb-10'
                        src='/bgelements/wave.svg'
                        width={1920}
                        height={100}
                    />
                    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <AC />
                    </Container>
                    <Image
                        alt='Bg element'
                        className='w-full mt-10'
                        style={{
                            filter: 'drop-shadow(0 -4px 2px rgba(0, 0, 0, 0.1))',
                        }}
                        src='/bgelements/wave2.svg'
                        width={1920}
                        height={100}
                    />
                </Box>
                <Lab />
                <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw' }} maxWidth={false}>
                    <Contacts />
                </Container>
            </Box >
        </AOSProvider >
    )
}
