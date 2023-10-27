import React, { useState } from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import Subtitle from '@/components/UI/text/Subtitle'
import Image from 'next/image'
import DescriprionList from '@/components/UI/text/descriprionList'

const ProductTitle = ({ title, num, props, href, link }) => {
    return (
        <Box>
            <AnchorLink href={'#' + href}>
                <Subtitle right={num % 2 == 1 ? true : false}>
                    {`${title}`}
                </Subtitle>
            </AnchorLink>
            <Box>
                <DescriprionList fade props={props} align={num % 2 == 1 ? 'flex-end' : null} />
                <Link href={link} data-aos='fade-up'>
                    <Typography
                        variant='h6'
                        sx={{
                            textDecoration: 'underline',
                            mt: 4
                        }}
                        data-aos='fade-up'
                        textAlign={num % 2 == 1 ? 'right' : null}
                    >
                        Подробнее
                    </Typography>
                </Link>
            </Box>
        </Box >
    )
}

export default ProductTitle