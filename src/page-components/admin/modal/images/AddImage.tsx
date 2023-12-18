import AddButton from '@/components/UI/buttons/add'
import { Box, Typography, Button, Dialog, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { uploadImagesHandler } from '@/services/UploadImagesHandler'

const AddImage = ({ folders, addHandler }: { folders: string[][], addHandler: (url: string, folderName: string) => void }) => {
    const foldersNames = folders.map((i, key) => i[0])
    const [file, setFile] = useState<File | File[]>()
    const [folderName, setFolderName] = useState(foldersNames[0])
    const [open, setOpen] = useState(false)

    const handleChange = (event: any) => {
        if (!event.target.files[0]) {
            console.log('err')
        }
        else if (event.target.files.length == 1) {
            setFile(event.target.files[0])
        }
        else {
            setFile(event.target.files)
        }
    }



    return (
        <Box sx={{ position: 'relative' }}>
            <AddButton onClick={() => setOpen(true)} />
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box
                    sx={{
                        p: 2
                    }}
                    className='flex flex-col items-center gap-6'
                >
                    <Typography variant='h5' className='p-4'>Добавление картинки</Typography>
                    <input
                        type='file'
                        onChange={event => handleChange(event)}
                        multiple
                    />
                    <TextField
                        onChange={e => setFolderName(e.target.value)}
                        value={folderName}
                        variant='outlined'
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
                        onClick={() => file && uploadImagesHandler(file, folderName, addHandler)}
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