import { Typography } from '@mui/material'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

const ArrowTextLink = ({ href, dataAos, children }: { href: string, dataAos: string, children: ReactNode }) => {
  return (
    <Link href={href} data-aos={dataAos} data-aos-offset="20">
      <Typography variant='h5' className='flex items-center trans animUnderline w-fit'>
        {children}
        <ArrowCircleRightOutlinedIcon sx={{ mt: '4px' }} />
      </Typography>
    </Link>
  )
}

export default ArrowTextLink