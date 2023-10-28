import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// import ProductTitle from './productTitle'
import Image from 'next/image'
import pipe from 'public/products/3d/bg-pipe.jpg'
import bigPipe from 'public/products/3d/pipe.jpg'
import list from 'public/products/3d/list.jpg'
import HelperText from '@/components/UI/text/HelperText'
import Carousel from '@/components/UI/carousel/Carousel'
import { getProducts } from '@/../firebase/clientApp'

const ProductList = ({ products }: { products: any }) => {
    return (
        <>
            {products.slice(0, 4).map((product, key) =>
                <Box
                    key={key}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        height: '100vh',
                        gap: 5,
                        p: 10,
                        position: 'relative',
                    }}
                >
                    <Image
                        data-aos='fade-up'
                        src={d3[key]}
                        alt='Картинка на заднем фоне'
                        fill
                        style={{
                            zIndex: -1,
                            objectFit: 'cover',
                            maxWidth: '80vw',
                            position: 'absolute',
                            left: key % 2 == 1 ? '20vw' : 0,
                        }}
                    />
                    <Box
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
                    {/* {key % 2 == 0 ?
                <ProductTitle
                    title={product.name}
                    link={'/products/' + product.id}
                    props={product.props}
                    num={key}
                />
                :
                null
            } */}
                    <Box className='c-gap2' sx={{ mt: 10 }}>
                        {key === 0 ?
                            <HelperText>
                                Нажимайте на стрелки или миниатюры для просмотра картинок
                            </HelperText>
                            :
                            null}
                        {/* <Carousel
                    images={[product.mainImg, ...product.additionalImgst
                    ]}
                    arrows
                    thumbnails
                    dots
                    autoplay
                /> */}
                        {/* <Slider
                    setMainCurrent={setCurrent}
                    num={key}
                    additional={product.additionalImg}
                    main={product.mainImg}
                /> */}
                    </Box>
                    {/* {key % 2 == 1 ?
                <ProductTitle
                    current={current}
                    title={product.name}
                    link={'/products/' + product.id}
                    description={product.description}
                    props={product.props}
                    num={key}
                />
                :
                null
            } */}
                </Box >
            )}
        </>
    )
}

export default ProductList