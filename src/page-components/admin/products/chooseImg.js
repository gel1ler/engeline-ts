import React, { useState } from 'react'
import {
    Box,
    Typography,
    Modal,
} from '@mui/material'
import { deleteImage } from '@/../firebase/storage'
import Folder from './folder'
import AddImage from './addImage'

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

const ChooseImg = ({ folders, openImg, setOpenImg, img, setImg, multiSelection }) => {
    const [tempFolders, setTempFolders] = useState(folders)

    const chooseMain = (image) => {
        setImg(image)
        setOpenImg(false)
    }

    const chooseAdditional = (image) => {
        let arr = img
        if (arr.includes(image)) {
            setImg(arr.filter(i => i != image))
        }
        else {
            setImg([...arr, image])
        }
    }

    const deleteHandler = (image, fKey) => {
        let t = tempFolders
        t[fKey] = t[fKey].filter(i => i != image)
        setTempFolders(t)
        let arr = img
        setImg(arr.filter(i => i != image))
        deleteImage(image)
    }

    const addHandler = (url, folderName) => {
        let t = tempFolders
        let index = t.findIndex(i => i[0] === folderName)
        t[index].push(url)
        console.log(url)
        setTempFolders([...t])
    }

    return (
        <Modal open={openImg} onClose={() => setOpenImg(false)}>
            <Box sx={style}>
                <Box className='row-centered' sx={{ justifyContent: 'space-between' }}>
                    <Typography variant='h4'>
                        Изображения
                    </Typography>
                    <AddImage
                        folders={tempFolders}
                        addHandler={addHandler}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 3 }}>
                    {tempFolders.map((folder, key) => (
                        <Folder
                            fNum={key}
                            key={key}
                            img={img}
                            folder={folder}
                            multiSelection={multiSelection}
                            chooseMain={chooseMain}
                            chooseAdditional={chooseAdditional}
                            deleteHandler={deleteHandler}
                            z />
                    ))}
                </Box>
            </Box>
        </Modal >
    )
}

export default ChooseImg