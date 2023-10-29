import AddButton from '@/components/UI/buttons/add'
import { Box, Input, Popover, Typography, Button, Dialog, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import { uploadImage } from '@/../firebase/storage'
import React, { useState } from 'react'
import { compressImage } from '@/services/compressImage'

const AddImage = ({ folders, addHandler }) => {
    const foldersNames = folders.map((i, key) => i[0])
    const [file, setFile] = useState('')
    const [folderName, setFolderName] = useState(foldersNames[0])
    const [isMultiple, setIsMultiple] = useState(false)
    const [open, setOpen] = useState(false)

    const handleChange = (event) => {
        if (!event.target.files[0]) {
            console.log('err')
        }
        else if (event.target.files.length == 1) {
            setFile(event.target.files[0])
        }
        else {
            setIsMultiple(true)
            setFile(event.target.files)
        }
    }

    const uploadHandler = async (file, folderName) => {
        if (!isMultiple) {
            const size = file.size / (1024 ** 2)

            const normalImage = size > 0.7 ? await compressImage(file) : file
            const normalRes = await uploadImage(normalImage, folderName + '/normal')

            addHandler(normalRes, folderName)
            setOpen(false)
        }
        else {
            const arr = Array(...file)
            arr.forEach(async i => {
                const size = i.size / (1024 ** 2)

                const normalImage = size > 0.7 ? await compressImage(i) : i
                const normalRes = await uploadImage(normalImage, folderName)

                addHandler(normalRes, folderName)
            })
            setOpen(false)
        }
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <AddButton onClick={event => setOpen(true)} />
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box
                    sx={{
                        p: 2
                    }}
                    className='column-centered c-gap3'
                >
                    <Typography variant='h5' sx={{ p: 2 }}>Добавление картинки</Typography>
                    <input
                        type='file'
                        onChange={event => handleChange(event)}
                        multiple="multiple"
                    />
                    <FormControl fullWidth>
                        <InputLabel>Папка</InputLabel>
                        <Select
                            value={folderName}
                            label="Папка"
                            onChange={event => setFolderName(event.target.value)}
                        >
                            {foldersNames.map((i, key) =>
                                <MenuItem value={i} key={key}>{i}</MenuItem>
                            )}
                        </Select>
                        {/* <TextField color='secondary' helperText='Создать новую' label='Название папки' /> */}
                    </FormControl>
                    <Button
                        color='secondary'
                        onClick={() => uploadHandler(file, folderName)}
                        disabled={file ? false : true}
                    >
                        Загрузить
                    </Button>
                </Box>
            </Dialog>
        </Box>
    )
}

export default AddImage