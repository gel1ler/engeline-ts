import RHookFormSelect from '@/components/UI/forms/RHookFormSelect'
import RHookFormTextField from '@/components/UI/forms/RHookFormTextField'
import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { useFieldArray } from 'react-hook-form'

const aligns = ['left', 'right']

const DescriptionsList = () => {
    const { fields, append, remove } = useFieldArray({ name: "descriptions" })

    return (
        <Box className='flex flex-col gap-4'>
            <Typography>
                Описания
            </Typography>
            {fields.map((field, index) =>
                <Box key={field.id}>
                    <Box className='flex gap-6'>
                        <Box className='flex flex-col gap-6'>
                            <RHookFormTextField label='Название' name={`descriptions.${index}.title`} />
                            <RHookFormTextField label='Фото' name={`descriptions.${index}.photo`} />
                            <RHookFormSelect name={`descriptions.${index}.align`} valuesArr={aligns} defaultValue='left' />
                        </Box>
                        <RHookFormTextField fullWidth label='Текст' name={`descriptions.${index}.text`} />
                        <Button className='h-min' color='error' size='small' onClick={() => remove(index)}>
                            Удалить
                        </Button>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                </Box>
            )}
            <Button
                color='secondary'
                className='w-min'
                onClick={() => append({ name: '', photo: '', align: '', text: '' })}
            >
                Добавить+
            </Button>
        </Box>
    )
}

export default DescriptionsList