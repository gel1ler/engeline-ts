import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import ImageList from './imageList'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const Folder = ({ img, folder, multiSelection, chooseAdditional, chooseMain, deleteHandler, fNum }) => {
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
                    <ImageList
                        fNum={fNum}
                        key={key}
                        img={img}
                        image={image}
                        multiSelection={multiSelection}
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