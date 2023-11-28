import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import StaticHeader from '@/components/layout/header/types/StaticHeader'
import { getProduct } from '../../../../firebase/clientApp'
import Start from '@/page-components/product/Start'
import Plx from '@/services/Plx'
import Bar from '@/components/layout/header/Bar/Bar'
import DescriptionList from '@/components/UI/text/DescriptionList'
import Subtitle from '@/components/UI/text/Subtitle'
import Gallery from '@/page-components/index/about/Gallery'
import Title from '@/components/UI/text/Title'
import { DockOutlined, DocumentScanner } from '@mui/icons-material'
import Image from 'next/image'
import Fill from '@/components/UI/Fill'
import data from '@/../data/data.json'

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
    // const product = await getProduct(Number(params.id))
    const product = data.products[Number(params.id)]

    return (
        <AOSProvider>
            <Bar onlyTop />
            <Box position='relative'>
                <Plx parallaxData={startParallax}>
                    <Start product={product} />
                </Plx>
                <Container sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <Box className='flex flex-col'>
                        <Title>Описание</Title>
                        <Typography variant='h6'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate inventore delectus natus cum eos ratione? Delectus voluptatem a quae, aut itaque explicabo doloribus magni sint neque modi numquam doloremque recusandae dolor ex aliquid nihil, quaerat inventore suscipit! Libero, eos?
                        </Typography>
                        <Box className='ml-4 mt-6'>
                            <DescriptionList props={product.props} fade gap={2} />
                        </Box>
                    </Box>
                    <Box className='flex flex-col'>
                        <Title>Документы</Title>
                        <Box className='pt-4 outline-1 rounded-md flex overflow-hidden gap-4' sx={{ boxShadow: '0 0 10px 5px rgba(0,0,0,.1)' }}>
                            <Box className='relative w-28' sx={{ aspectRatio: '3/4' }}>
                                <Image
                                    fill
                                    src='/icons/docs/word.svg'
                                    alt='Icon'
                                    className=' -z-50 translate-y-4'
                                />
                                <Fill type='to anchor' anchor='to top' />
                            </Box>
                            <Typography variant='h6'>
                                ГОСТ 31385-2016 «Резервуары вертикальные цилиндрические стальные для нефти и нефтепродуктов»
                            </Typography>
                        </Box>
                    </Box>
                    <Gallery />
                </Container>
            </Box >
        </AOSProvider >
    )
}
