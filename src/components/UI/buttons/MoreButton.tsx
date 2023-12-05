import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const MoreButton = ({
    href, sx, dataAos
}: {
    href: string, sx?: {}, dataAos?: string
}) => {
    return (
        <Link href={href} className='w-fit'>
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