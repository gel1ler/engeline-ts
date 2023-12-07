import Fill from '@/components/UI/Fill'
import { Download } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const File = ({ name, href }: { name: string, href: string }) => {
    let type = 'pdf'
    href.includes('.pdf') ? type = 'pdf' : null
    href.includes('.xls') || href.includes('.xlsx') || href.includes('.xlsm') ? type = 'excel' : null
    href.includes('.doc') || href.includes('.docx') ? type = 'word' : null

    return (
        <Box
            data-aos='fade-up'
            data-aos-offset='20'
            className='pt-4 pr-2 outline-1 rounded-md flex overflow-hidden gap-8 w-full'
            sx={{ boxShadow: '0 0 10px 5px rgba(0,0,0,.1)' }}
            bgcolor='primary.main'
        >
            <Box className='relative w-28' sx={{ aspectRatio: '3/3' }}>
                <Image
                    fill
                    src={`/icons/docs/${type}.svg`}
                    alt='Icon'
                    className=' -z-50'
                />
                <Fill type='to anchor' anchor='to top' />
            </Box>
            <Box className='w-full flex flex-col'>
                <Typography variant='h6' className='h-full'>
                    {name}
                </Typography>
                <Typography variant='body2' color='GrayText' sx={{ mb: 1 }}>
                    Размер файла: 7.2мб
                </Typography>
            </Box>
            <a target='_blank' href={href} className='my-auto'>
                <Button>
                    <Download
                        color='secondary'
                        sx={{
                            transition: 'opacity .15s ease-out',
                            opacity: .4,
                            ':hover': {
                                opacity: 1
                            }
                        }}
                        fontSize='large'
                    />
                </Button>
            </a>
        </Box>
    )
}

export default File