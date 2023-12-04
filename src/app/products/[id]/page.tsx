import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import { getProduct } from '../../../../firebase/clientApp'
import Start from '@/page-components/product/Start'
import Plx from '@/services/Plx'
import Bar from '@/components/layout/header/Bar/Bar'
import DescriptionList from '@/page-components/product/DescriptionList'
import Gallery from '@/components/UI/Gallery'
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

import { Metadata } from "next";
import Image from 'next/image'

type Props = {
    params: { id: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const product = await getProduct(Number(params.id))

    return {
        title: product.name,
    };
};

export default async function Home({ params }: { params: { id: string } }) {
    const product = await getProduct(Number(params.id))
    // const product = data.products[Number(params.id)]

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
                        <Box className='ml-4 mt-6 grid grid-cols-2 gap-6'>
                            <DescriptionList props={product.props} fade gap={2} />
                            <Image
                                alt='Продукт'
                                src={product.mainImg}
                                width={600}
                                height={400}
                                data-aos='fade-up'
                                className='w-full rounded-xl shadow-md object-contain'
                            />
                        </Box>
                    </Box>
                </Container>
                <Box className='flex flex-col gap-8 bg-stone-100'>
                    <Image
                        alt='Bg element'
                        className='w-full drop-shadow-md mb-20'
                        src='/bgelements/wave.svg'
                        width={1920}
                        height={100}
                    />
                    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Title>Документы</Title>
                        <File type='word' name='ГОСТ 31385-2016 «Резервуары вертикальные цилиндрические стальные для нефти и нефтепродуктов»' />
                        <File type='excel' name='ГОСТ 31385-2016 «Резервуары вертикальные цилиндрические стальные для нефти и нефтепродуктов»' />
                        <File type='pdf' name='ГОСТ 31385-2016 «Резервуары вертикальные цилиндрические стальные для нефти и нефтепродуктов»' />
                    </Container>
                    <Image
                        alt='Bg element'
                        className='w-full mt-20'
                        style={{
                            filter: 'drop-shadow(0 -4px 2px rgba(0, 0, 0, 0.1))',
                        }}
                        src='/bgelements/wave2.svg'
                        width={1920}
                        height={100}
                    />
                </Box>
                <Gallery images={[product.mainImg, ...product.additionalImgs]} />
                <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw' }} maxWidth={false}>
                    <Contacts />
                </Container>
            </Box >
        </AOSProvider >
    )
}
