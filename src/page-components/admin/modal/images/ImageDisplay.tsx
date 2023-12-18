import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import LaunchIcon from '@mui/icons-material/Launch'
import { TSetString, TSetStringArray } from '@/globalTypes'

type props = {
    state: string | string[]
    image: string
    chooseAdditional?: (value: string) => void
    chooseMain?: TSetString
    deleteHandler: (state: string, fKey: number) => void
    fNum: number
}

const ImageDisplay = ({ state, image, chooseAdditional, chooseMain, deleteHandler, fNum }: props) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100px',
                position: 'relative',
                '&:hover': {
                    "& .image-popover": {
                        opacity: 1
                    }
                }
            }}
        >
            <Box
                className='image-popover column-centered'
                sx={{
                    transition: 'all ease .3s',
                    opacity: state.includes(image) ? 1 : 0,
                    justifyContent: 'center',
                    gap: 1,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    background: 'rgba(255,255,255,.8)',
                    zIndex: 999
                }}
            >
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {state.includes(image) ?
                        <RemoveIcon
                            sx={{
                                fontSize: 30,
                                cursor: 'pointer',
                                color: 'orange'
                            }}

                            onClick={() => chooseAdditional ? chooseAdditional(image) : chooseMain && chooseMain(image)}
                        />
                        :
                        <AddIcon
                            sx={{
                                fontSize: 30,
                                cursor: 'pointer',
                            }}
                            color='success'
                            onClick={() => chooseAdditional ? chooseAdditional(image) : chooseMain && chooseMain(image)}
                        />
                    }
                    <DeleteIcon
                        sx={{
                            fontSize: 25,
                            cursor: 'pointer',
                        }}
                        color='error'
                        onClick={() => deleteHandler(image, fNum)}
                    />
                </Box>
                <a href={image} target="_blank">
                    <LaunchIcon />
                </a>
            </Box>
            <Image
                src={image}
                fill
                style={{ objectFit: 'contain' }}
                alt='choose'
                sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 7vw"
            />
        </Box>
    )
}

export default ImageDisplay