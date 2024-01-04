import { Button, SxProps } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const MoreButton = ({
    href, sx, dataAos, centered
}: {
    href: string, sx?: SxProps, dataAos?: string, centered?: boolean
}) => {
    return (
        <Link href={href} className={'w-fit' + (centered ? ' mx-auto' : '')}>
            <Button
                color='secondary'
                variant='outlined'
                sx={sx}
                data-aos={dataAos}
                data-aos-offset="20"
            >
                Подробнее
            </Button >
        </Link >
    )
}

export default MoreButton