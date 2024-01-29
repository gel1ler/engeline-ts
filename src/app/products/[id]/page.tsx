import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import AOSProvider from '@/services/AOSProvider'
import { getProduct } from '../../../../firebase/clientApp'
import Start from '@/page-components/product/Start'
import Plx from '@/services/Plx'
import Gallery from '@/components/UI/gallery/Gallery'
import Title from '@/components/UI/text/Title'
import File from '@/page-components/product/File'
import Contacts from '@/components/layout/contacts/Contacts'

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
import PropsList from '@/page-components/product/PropsList'
// import DescriptionList from '@/page-components/product/DescriptionList'
import { WaveDown, WaveUp } from '@/components/layout/bgelements/Waves'

type Props = {
    params: { id: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const product = await getProduct(Number(params.id))

    return {
        title: product.name,
    };
};

const generateUl = (string: string) => {
    const arr = string.split('/n').slice(1)
    return arr
}

export default async function Home({ params }: { params: { id: string } }) {
    const product = await getProduct(Number(params.id))

    return (
        <AOSProvider>
            <Box position='relative'>
                <Plx parallaxData={startParallax}>
                    <Start product={product} />
                </Plx>
                <Container sx={{ maxWidth: ['98vw', '98vw', '98vw', '1600px'], width: '90vw', display: 'flex', flexDirection: 'column', gap: 20 }} maxWidth={false} >
                    {/* {product.descriptions ?
                        <DescriptionList
                            descriptions={product.descriptions}
                        />
                        : null
                    } */}
                    <Box className='flex flex-col'>
                        <Title variant='h3'>Описание</Title>
                        <Box className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2'>
                            {product.description ?
                                product.description.includes('/n') ?
                                    <ul
                                        className='text-center md:text-left'
                                        style={{
                                            fontSize: '18px',
                                            marginLeft: '-16px',
                                            marginTop: '-10px',
                                        }}
                                    >
                                        {generateUl(product.description).map((i, key) =>
                                            <li
                                                data-aos='fade-up'
                                                key={key}
                                                className='mb-4 list-inside'
                                            >
                                                {i}
                                            </li>
                                        )}
                                    </ul>
                                    :
                                    <Typography className='text-center md:text-left mb-6' variant='h6' data-aos='fade-up'>
                                        {product.description}
                                    </Typography>
                                :
                                <PropsList props={product.props} fade gap={2} />
                            }
                            <Image
                                alt='Продукт'
                                src={product.mainImg}
                                width={600}
                                height={400}
                                data-aos='fade-up'
                                className='w-full rounded-xl shadow-md object-cover'
                                style={{maxHeight: '500px'}}
                            />
                        </Box>
                    </Box>
                    {product.description && product.props ?
                        <Box>
                            <Title variant='h3' noAos centered>Характеристики</Title>
                            <PropsList centered props={product.props} fade gap={2} />
                        </Box>
                        : null
                    }
                </Container>
                <Box className='flex flex-col gap-8 bg-stone'>
                    <WaveDown />
                    <Container sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Title variant='h3'>Документы</Title>
                        {product.docs && product.docs.map((doc, key) =>
                            <File
                                key={key}
                                href={doc.link}
                                name={doc.name}
                                size={doc.size}
                            />
                        )}
                        <File
                            size={7.9}
                            href='https://firebasestorage.googleapis.com/v0/b/engeline-708d1.appspot.com/o/docs%2FИнжелайн%20презентация%20(1).pdf?alt=media&token=7e436434-6601-4609-a374-932a4c82bfe6'
                            name='Презентация ООО "ИНЖЕЛАЙН"'
                        />
                    </Container>
                    <WaveUp />
                </Box>
                <Box sx={{ pt: 10 }}>
                    <Title variant='h3' centered>
                        Галерея
                    </Title>
                    <Gallery images={product.additionalImgs} type='wide' />
                </Box>
                <Contacts />
            </Box >
        </AOSProvider >
    )
}
