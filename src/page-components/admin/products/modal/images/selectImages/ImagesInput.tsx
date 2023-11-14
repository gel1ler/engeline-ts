import { TSetStringArray } from '@/globalTypes'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import ChooseImages from './ChooseImages'

interface props {
    state: string[]
    setState: TSetStringArray
    folders: string[][]
}

const ImagesInput = ({ state, setState, folders }: props) => {
    const [open, setOpen] = useState(false)

    return (
        <Box>
            <ChooseImages
                state={state}
                setState={setState}
                folders={folders}
                open={open}
                setOpen={setOpen}
            />
            <Box className='flex gap-2'>
                <Button color='secondary' variant='outlined' onClick={() => setOpen(true)}>
                    {state ? 'Изменить' : 'Выбрать'} доп картинки
                </Button>
                {state.length ?
                    <Button color='error' onClick={() => setState([])}>
                        Очистить
                    </Button>
                    : null
                }
            </Box>
            {state.length ? state.map((i, key) => (
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