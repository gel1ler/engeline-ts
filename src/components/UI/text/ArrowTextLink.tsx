import { Typography } from '@mui/material'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

const ArrowTextLink = ({ href, dataAos, children }: { href: string, dataAos: string, children: ReactNode }) => {
  return (
    <Link href={href} data-aos={dataAos} data-aos-offset="20" className='w-fit'>
      <Typography
        variant='h6'
        className='flex items-center trans animUnderline w-fit'
        sx={{
          fontSize: ['15px','inherit'],
          mx: ['auto', 0],
        }}
      >
        {children}
        <ArrowCircleRightOutlinedIcon fontSize='small' sx={{ mt: '2px' }} />
      </Typography>
    </Link>
  )
}

export default ArrowTextLink