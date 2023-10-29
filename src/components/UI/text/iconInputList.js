import { DiamIcon, RulerIcon, ThicknessIcon, VolumeIcon } from '@/components/icons/productIcons'
import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const IconInputList = ({ title, state, setState }) => {
    const addInput = () => {
        setState(prevList => [...prevList, [{ text: '', icon: ',' }]])
    }

    const textChangeHandler = (value, key) => {
        setState(state.map((i, index) => index === key ? { text: value, icon: i.icon } : i))
    }

    const iconChangeHandler = (value, key) => {
        setState(state.map((i, index) => index === key ? { text: i.text, icon: value } : i))
    }

    const deleteHandler = (key) => {
        setState(state.filter((i, index) => index !== key))
    }



    const iconsArr = [
        {
            icon: < DiamIcon />,
            type: 'diameter'
        },
        {
            icon: < RulerIcon />,
            type: 'ruler'
        },
        {
            icon: <ThicknessIcon />,
            type: 'thickness'
        },
        {
            icon: <VolumeIcon />,
            type: 'volume'
        },
    ]

    return (
        <Box className='c-gap2'>
            <Typography>
                {title}
            </Typography>
            {state.map((i, key) =>
                <Box className='row-centered r-gap1' key={key}>
                    <Select
                        color='secondary'
                        size='small'
                        label="-"
                        onChange={event => iconChangeHandler(event.target.value, key)}
                        value={i.icon}
                    >
                        {iconsArr.map((i, key) =>
                            <MenuItem value={i.type} key={key}>{i.icon}</MenuItem>
                        )}
                    </Select>
                    <TextField
                        color='secondary'
                        size='small'
                        value={i.text}
                        onChange={event => textChangeHandler(event.target.value, key)}
                        fullWidth
                        autoFocus
                        onKeyDown={e => e.key == 'Enter' ? addInput() : null}
                    />
                    <Button color='error' size='small' onClick={() => deleteHandler(key)}>
                        Удалить
                    </Button>
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

export default IconInputList