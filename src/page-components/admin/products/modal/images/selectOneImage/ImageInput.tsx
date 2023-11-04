import { TSetNumber, TSetString, TSetStringArray } from '@/globalTypes'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import ChooseImage from './ChooseImage'

interface props {
    state: string
    setState: TSetString
    folders: string[][]
}

const ImageInput = ({ state, setState, folders }: props) => {
    const [open, setOpen] = useState(false)

    return (
        <Box>
            <ChooseImage
                state={state}
                setState={setState}
                folders={folders}
                open={open}
                setOpen={setOpen}
            />
            <Box className='flex gap-2'>
                <Button color='secondary' variant='outlined' onClick={() => setOpen(true)}>
                    {state ? 'Изменить' : 'Выбрать'} главную картинку
                </Button>
                {state &&
                    <Button color='error' onClick={() => setState('')}>
                        Очистить
                    </Button>
                }
            </Box>
            {state &&
                <Link href={state} target='_blank'>
                    <Typography sx={{ my: 1, textDecoration: 'underline' }}>
                        Главная картинка - {state}
                    </Typography>
                </Link>
            }
        </Box>
    )
}

export default ImageInput