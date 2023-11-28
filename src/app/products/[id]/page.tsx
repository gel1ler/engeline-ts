import React from 'react'
import { Box } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import StaticHeader from '@/components/layout/header/types/StaticHeader'
import { getProduct } from '../../../../firebase/clientApp'
import Start from '@/page-components/product/Start'
import Plx from 'react-plx'

const startParallax = [
    {
        start: 0,
        end: '50vh',
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: "opacity",
            }
        ]
    },
    {
        start: 0,
        end: '100vh',
        properties: [
            {
                startValue: 0,
                endValue: -400,
                property: "translateY",
            },
        ]
    }
]

export default async function Home({ params }: { params: { id: string } }) {
    const product = await getProduct(Number(params.id))

    return (
        <AOSProvider>
            <StaticHeader />
            <Box position='relative' sx={{ zIndex: -1 }}>
                <Plx parallaxData={startParallax}>
                    <Start product={product} />
                </Plx>
            </Box >
        </AOSProvider >
    )
}
