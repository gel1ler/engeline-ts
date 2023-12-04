import Fill from '@/components/UI/Fill'
import { Download } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const File = ({ name, type }: { name: string, type: 'word' | 'excel' | 'pdf' }) => {
    return (
        <Box data-aos='fade-up' data-aos-offset='20' className='pt-4 pr-2 outline-1 rounded-md flex overflow-hidden gap-8' sx={{ boxShadow: '0 0 10px 5px rgba(0,0,0,.1)' }}>
            <Box className='relative w-28' sx={{ aspectRatio: '3/3' }}>
                <Image
                    fill
                    src={`/icons/docs/${type}.svg`}
                    alt='Icon'
                    className=' -z-50'
                />
                <Fill type='to anchor' anchor='to top' />
            </Box>
            <Box>
                <Typography variant='h6' className='flex-grow'>
                    {name}
                </Typography>
                <Typography variant='body2' color='GrayText' className='flex-grow'>
                    Размер файла: 7.2мб
                </Typography>
            </Box>
            <Button>
                <Download color='secondary' fontSize='large' />
            </Button>
        </Box>
    )
}

export default File