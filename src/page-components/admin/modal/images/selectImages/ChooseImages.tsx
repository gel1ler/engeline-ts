import React, { useState } from 'react'
import {
    Box,
    Typography,
    Modal,
} from '@mui/material'
import { deleteImage } from '@/firebase/clientApp'
import Folder from '../Folder'
import AddImage from '../AddImage'
import { TSetBool, TSetString, TSetStringArray } from '@/globalTypes'
import { FieldValues, UseFormSetValue } from 'react-hook-form'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 5,
    width: '80vw',
    height: '70vh',
    overflowY: 'scroll'
}

interface props {
    folders: string[][]
    open: boolean
    setOpen: TSetBool
    state: string[]
    setState: UseFormSetValue<FieldValues>
    name: string
}

const ChooseImages = ({ folders, open, setOpen, state, setState, name }: props) => {
    const [tempFolders, setTempFolders] = useState(folders)

    const deleteHandler = (image: string, fKey: number) => {
        let t = tempFolders
        t[fKey] = t[fKey].filter(i => i != image)
        setTempFolders(t)
        let arr = state
        setState(name, arr.filter(i => i != image))
        deleteImage(image)
    }

    const chooseAdditional = (image: string) => {
        let arr = state
        if (arr.includes(image)) {
            setState(name, arr.filter(i => i != image))
        }
        else {
            setState(name, [...arr, image])
        }
    }

    const addHandler = (url: string, folderName: string) => {
        let t = tempFolders
        let index = t.findIndex(i => i[0] === folderName)
        t[index].push(url)
        setTempFolders([...t])
    }

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={style}>
                <Box className='flex justify-between items-center'>
                    <Typography variant='h4'>
                        Изображения
                    </Typography>
                    <AddImage folders={tempFolders} addHandler={addHandler} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 3 }}>
                    {tempFolders.map((folder, key) => (
                        <Folder
                            fNum={key}
                            key={key}
                            state={state}
                            folder={folder}
                            chooseAdditional={chooseAdditional}
                            deleteHandler={deleteHandler}
                        />
                    ))}
                </Box>
            </Box>
        </Modal >
    )
}

export default ChooseImages