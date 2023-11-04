import React, { useState } from 'react'
import Box from '@mui/material/Box'
import ProductTitle from './ProductTitle'
import Image from 'next/image'
import pipe from 'public/products/3d/bg-pipe.jpg'
import bigPipe from 'public/products/3d/pipe.jpg'
import list from 'public/products/3d/list.jpg'
import HelperText from '@/components/UI/text/HelperText'
import Carousel from '@/components/UI/carousel/Carousel'
import { getProducts } from '../../../../../firebase/database'

const d3 = [pipe, list, bigPipe, list]

const Products = async () => {
    const products = await getProducts()

    return (
        <Box id='products_anchor'>
            {products.slice(0, 1).map((product, key) =>
                <Box
                    key={key}
                    className='grid grid-cols-2 h-screen gap-10 p-20 relative'
                >
                    <Image
                        data-aos='fade-up'
                        src={d3[key]}
                        alt='Картинка на заднем фоне'
                        fill
                        className='object-cover absolute h-screen'
                        style={{
                            maxWidth: '80vw',
                            left: key % 2 == 1 ? '20vw' : 0,
                            zIndex:-1
                        }}
                    />
                    <Box
                        className='absolute top-0 left-0 w-full h-full z-10'
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'linear-gradient(to bottom, white 40%, rgba(255,255,255,0.8) 70%, transparent)',
                            zIndex: -1
                        }}
                    />
                    {key % 2 == 0 &&
                        <ProductTitle
                            title={product.name}
                            link={'/products/' + product.id}
                            props={product.props}
                            num={key}
                        />
                    }
                    <Box className='c-gap2' sx={{ mt: 10 }}>
                        {key === 0 ?
                            <HelperText>
                                Нажимайте на стрелки или миниатюры для просмотра картинок
                            </HelperText>
                            :
                            null}
                        <Carousel
                            images={[product.mainImg, ...product.additionalImgs]}
                            arrows
                            thumbnails
                            dots
                        />
                    </Box>
                    {key % 2 == 1 &&
                        <ProductTitle
                            title={product.name}
                            link={'/products/' + product.id}
                            props={product.props}
                            num={key}
                        />
                    }
                </Box >
            )}
        </Box >
    )
}

export default Products