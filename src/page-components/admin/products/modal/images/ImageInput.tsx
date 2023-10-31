import { TSetNumber, TSetString } from '@/globalTypes'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import ChooseImg from './ChooseImg'

const ImageInput = ({ mainImg, setMainImg }: { mainImg: string, setMainImg: TSetString }) => {
    const [open, setOpen] = useState(false)

    return (
        <Box>
            <ChooseImg 
                
            />
            <Box className='flex gap-2'>
                <Button color='secondary' variant='outlined' onClick={() => setOpen(true)}>
                    {mainImg ? 'Изменить' : 'Выбрать'} главную картинку
                </Button>
                {mainImg &&
                    <Button color='error' onClick={() => setMainImg('')}>
                        Очистить
                    </Button>
                }
            </Box>
            {mainImg &&
                <Link href={mainImg} target='_blank'>
                    <Typography sx={{ my: 1, textDecoration: 'underline' }}>
                        Главная картинка - {mainImg}
                    </Typography>
                </Link>
            }
        </Box>
    )
}

export default ImageInput