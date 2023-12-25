import { TSetStringArray } from '@/globalTypes'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ChooseImages from './ChooseImages'
import { useFormContext } from 'react-hook-form'

interface props {
    name: string
    folders: string[][]
}

const ImagesInput = ({ name, folders }: props) => {
    const { register, setValue, getValues } = useFormContext()

    useEffect(() => {
        register(name)
    }, [register, name])

    const [open, setOpen] = useState(false)

    const state = getValues(name) || []

    return (
        <Box>
            <ChooseImages
                state={state}
                setState={setValue}
                name={name}
                folders={folders}
                open={open}
                setOpen={setOpen}
            />
            <Box className='flex gap-2'>
                <Button color='secondary' variant='outlined' onClick={() => setOpen(true)}>
                    {state ? 'Изменить' : 'Выбрать'} доп картинки
                </Button>
                {state.length ?
                    <Button color='error' onClick={() => setValue(name, [])}>
                        Очистить
                    </Button>
                    : null
                }
            </Box>
            {state.length ? state.map((i: string, key: number) => (
                <Link href={i} target='_blank' key={key}>
                    <Typography sx={{ my: 1, textDecoration: 'underline' }}>
                        Доп картинкa {key} - {i}
                    </Typography>
                </Link>
            )) : null}
        </Box>
    )
}

export default ImagesInput