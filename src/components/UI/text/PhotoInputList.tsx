import { Box, Button, Divider, MenuItem, Select, Switch, TextField, Typography } from '@mui/material'
import React from 'react'

const aligns = [
    'left',
    "right",
]

const Field = ({ label, value, fullWidth, onChange, addInput }) => {
    return (
        <TextField
            color='secondary'
            size='small'
            multiline
            label={label}
            value={value}
            onChange={onChange}
            fullWidth={fullWidth}
            autoFocus
            onKeyDown={e => e.key == 'Enter' ? addInput() : null}
        />
    )
}

type TPhotoInput = {
    name: string
    photo: string
    align: 'left' | 'right'
    text: string
}

const PhotoInputList = ({
    title, state, setState
}: {
    title: string, state: TPhotoInput[], setState: (value: TPhotoInput[]) => void
}
) => {
    const addInput = () => {
        setState((prevList: TPhotoInput[]) => [...prevList, { name: '', photo: '', align: 'left', text: '' }])
    }

    const changeHandler = (field: string, value: string, key: number) => {
        setState(state.map((item, index) => index === key ? { ...item, [field]: value } : item));
    }

    const deleteHandler = (key: number) => {
        setState(state.filter((i, index) => index !== key))
    }

    return (
        <Box className='flex flex-col gap-4'>
            <Typography>
                {title}
            </Typography>
            {state.map((i, key) =>
                <Box key={key}>
                    <Box className='flex gap-6'>
                        <Box className='flex flex-col gap-6'>
                            <Field
                                label='Название'
                                value={i.name}
                                fullWidth
                                onChange={(event: { target: { value: string } }) => changeHandler('name', event.target.value, key)}
                                addInput={addInput}
                            />
                            <Field
                                label='Фото'
                                value={i.photo}
                                fullWidth
                                onChange={(event: { target: { value: string } }) => changeHandler('photo', event.target.value, key)}
                                addInput={addInput}
                            />
                            <Select
                                color='secondary'
                                label='Расположение фото'
                                fullWidth
                                size='small'
                                onChange={event => changeHandler('align', event.target.value || '', key)}
                            >
                                {aligns.map((i, key) =>
                                    <MenuItem
                                        key={key}
                                        value={i}
                                    >
                                        {i}
                                    </MenuItem>
                                )}
                            </Select>
                        </Box>
                        <Field
                            label='Текст'
                            value={i.text}
                            fullWidth
                            onChange={(event: { target: { value: string } }) => changeHandler('text', event.target.value, key)}
                            addInput={addInput}
                        />
                        <Button
                            color='error'
                            size='small'
                            onClick={() => deleteHandler(key)}
                            sx={{
                                height: 'min-content'
                            }}
                        >
                            Удалить
                        </Button>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                </Box>
            )}
            <Button
                color='secondary'
                sx={{ width: 'min-content' }}
                onClick={addInput}
            >
                Добавить+
            </Button>
        </Box>
    )
}

export default PhotoInputList