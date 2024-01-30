import React from 'react'
import { Box, Container } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import Start from '@/page-components/prod/Start'
import Plx from '@/services/Plx'
import Contacts from '@/components/layout/contacts/Contacts'
import Image from 'next/image'
import Advantages from '@/page-components/prod/Advantages'
import AC from '@/page-components/prod/AC'
import Lab from '@/page-components/prod/Lab'
import { startParallax } from '@/customization/customization'
import { Metadata } from 'next'
import Factory from '@/page-components/prod/Factory'
import { WaveDown, WaveUp } from '@/components/layout/bgelements/Waves'

export const metadata: Metadata = {
    title: 'Инжелайн - производство',
    description: `Задача компании - сохранение компетенций завода Первомайскхиммаш и дальнейшее развитие востребованных направлений. Мы стремимся сохранять и укреплять накопленные за много лет традиции и навыки.`
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
                        className=' -z-50 opacity-10 object-cover'
                    />

                    <WaveDown />
                    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <AC />
                    </Container>
                    <WaveUp />
                </Box>
                <Lab />
                {/* <Docs /> */}
                <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw' }} maxWidth={false}>
                    <Contacts />
                </Container>
            </Box >
        </AOSProvider >
    )
}
