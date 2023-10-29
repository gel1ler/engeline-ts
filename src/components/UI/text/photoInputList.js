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
            label={label}
            multiline
            value={value}
            onChange={onChange}
            fullWidth={fullWidth}
            autoFocus
            onKeyDown={e => e.key == 'Enter' ? addInput() : null}
        />
    )
}

const PhotoInputList = ({ title, state, setState }) => {
    const addInput = () => {
        setState(prevList => [...prevList, [{ text: '', photo: '' }]])
    }

    const changeHandler = (field, value, key) => {
        setState(state.map((item, index) => index === key ? { ...item, [field]: value } : item));
    }

    const deleteHandler = (key) => {
        setState(state.filter((i, index) => index !== key))
    }

    return (
        <Box className='c-gap2'>
            <Typography>
                {title}
            </Typography>
            {state.map((i, key) =>
                <Box key={key}>
                    <Box className='r-gap3'>
                        <Box className='c-gap3'>
                            <Field
                                label='Название'
                                value={i.title}
                                fullWidth
                                onChange={event => changeHandler('title', event.target.value, key)}
                                addInput={addInput}
                            />
                            <Field
                                label='Фото'
                                value={i.photo}
                                fullWidth
                                onChange={event => changeHandler('photo', event.target.value, key)}
                                addInput={addInput}
                            />
                            <Select
                                color='secondary'
                                label='Расположение фото'
                                fullWidth
                                size='small'
                                onChange={event => changeHandler('align', event.target.value, key)}
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
                            label='text'
                            value={i.text}
                            fullWidth
                            onChange={event => changeHandler('text', event.target.value, key)}
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