import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import { getProduct } from '../../../../firebase/clientApp'
import Start from '@/page-components/product/Start'
import Plx from '@/services/Plx'
import Bar from '@/components/layout/header/Bar/Bar'
import DescriptionList from '@/components/UI/text/DescriptionList'
import Gallery from '@/page-components/index/about/Gallery'
import Title from '@/components/UI/text/Title'
import data from '@/../data/data.json'
import File from '@/page-components/product/File'
import Contacts from '@/page-components/index/Contacts'

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
                <Container sx={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <Box className='flex flex-col'>
                        <Title>Описание</Title>
                        <Typography variant='h6'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima voluptate inventore delectus natus cum eos ratione? Delectus voluptatem a quae, aut itaque explicabo doloribus magni sint neque modi numquam doloremque recusandae dolor ex aliquid nihil, quaerat inventore suscipit! Libero, eos?
                        </Typography>
                        <Box className='ml-4 mt-6'>
                            <DescriptionList props={product.props} fade gap={2} />
                        </Box>
                    </Box>
                    <Box className='flex flex-col gap-8'>
                        <Title>Документы</Title>
                        <File type='word' name='ГОСТ 31385-2016 «Резервуары вертикальные цилиндрические стальные для нефти и нефтепродуктов»' />
                        <File type='excel' name='ГОСТ 31385-2016 «Резервуары вертикальные цилиндрические стальные для нефти и нефтепродуктов»' />
                        <File type='pdf' name='ГОСТ 31385-2016 «Резервуары вертикальные цилиндрические стальные для нефти и нефтепродуктов»' />
                    </Box>
                    <Gallery />
                </Container>
                <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw' }} maxWidth={false}>
                    <Contacts />
                </Container>
            </Box >
        </AOSProvider >
    )
}
