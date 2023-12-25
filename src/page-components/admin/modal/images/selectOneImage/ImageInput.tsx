import { TSetNumber, TSetString, TSetStringArray } from '@/globalTypes'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ChooseImage from './ChooseImage'
import { useFormContext } from 'react-hook-form'

interface props {
    folders: string[][]
    name: string
}

const ImageInput = ({ folders, name }: props) => {
    const { register, setValue, getValues } = useFormContext()

    useEffect(() => {
        register(name)
    }, [register, name])

    const [open, setOpen] = useState(false)
    const state = getValues(name) || []

    name.includes('descriptions') && console.log(state)

    return (
        <Box>
            <ChooseImage
                state={state}
                setState={setValue}
                name={name}
                folders={folders}
                open={open}
                setOpen={setOpen}
            />
            <Box className='flex gap-2'>
                <Button color='secondary' variant='outlined' onClick={() => setOpen(true)}>
                    {state ? 'Изменить' : 'Выбрать'} главную картинку
                </Button>
                {state &&
                    <Button color='error' onClick={() => setValue(name, '')}>
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