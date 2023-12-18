import RHookFormTextField from '@/components/UI/forms/RHookFormTextField'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useFieldArray } from 'react-hook-form'

const iconsArr = ['diameter', 'ruler', 'thickness', 'volume']

const PropsList = () => {
    const { fields, append, remove } = useFieldArray({ name: "props" })

    return (
        <Box className='flex flex-col gap-2'>
            <Typography>
                Характеристики
            </Typography>
            {fields.map((field, index) =>
                <Box className='flex items-center gap-2' key={field.id}>
                    <RHookFormTextField label='Текст' name={`props.${index}.icon`} />
                    <RHookFormTextField fullWidth label='Текст' name={`props.${index}.text`} />
                    <Button color='error' size='small' onClick={() => remove(index)}>
                        Удалить
                    </Button>
                </Box>
            )}
            <Button
                color='secondary'
                className='w-min'
                onClick={() => append({ icon: "diameter", text: "" })}
            >
                Добавить+
            </Button>
        </Box>
    )
}

export default PropsList