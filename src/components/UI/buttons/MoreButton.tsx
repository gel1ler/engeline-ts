import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const MoreButton = ({
    href, sx, dataAos
}: {
    href: string, sx?: {}, dataAos?: string
}) => {
    return (
        <Link href={href}>
            < Button
                data-aos={dataAos ? dataAos : null}
                color='secondary'
                variant='outlined'
                sx={sx}
            >
                Подробнее
            </Button >
        </Link >
    )
}

export default MoreButton