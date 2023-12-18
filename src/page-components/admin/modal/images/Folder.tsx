import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import ImageDisplay from './ImageDisplay'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { TSetString, TSetStringArray } from '@/globalTypes'

type props = {
    state: string | string[]
    folder: string[]
    chooseAdditional?: (value: string) => void
    chooseMain?: TSetString
    deleteHandler: (img: string, fKey: number) => void
    fNum: number
}

const Folder = ({ state, folder, chooseAdditional, chooseMain, deleteHandler, fNum }: props) => {
    const [open, setOpen] = useState(false)

    return (
        <Box>
            <Typography
                variant='h5'
                onClick={() => setOpen(!open)}
                sx={{
                    cursor: folder.length === 1 ? null : 'pointer',
                    color: folder.length === 1 ? 'lightgray' : null,
                }}
                className='row-centered'
            >
                {folder[0]}
                <ArrowDropDownIcon
                    sx={{
                        transform: open ? 'rotate(180deg)' : null
                    }}
                    fontSize='large'
                />
            </Typography>
            <Box
                sx={{
                    display: open ? 'grid' : 'none',
                    gridTemplateColumns: `repeat(6, 1fr)`,
                    gap: 4,
                    width: '100%',
                    justifyItems: 'center',
                }}
            >
                {folder.slice(1).map((image, key) => (
                    <ImageDisplay
                        key={key}
                        fNum={fNum}
                        state={state}
                        image={image}
                        chooseMain={chooseMain}
                        chooseAdditional={chooseAdditional}
                        deleteHandler={deleteHandler}
                    />
                ))}
            </Box >
        </Box>
    )
}

export default Folder