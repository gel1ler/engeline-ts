import RHookFormSelect from '@/components/UI/forms/RHookFormSelect'
import RHookFormTextField from '@/components/UI/forms/RHookFormTextField'
import { TProp } from '@/globalTypes'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

const iconsArr = ['diameter', 'ruler', 'thickness', 'volume']

const PropsList = () => {
    const { fields, append, remove } = useFieldArray({ name: "props" })

    return (
        <Box className='flex flex-col gap-2'>
            <Typography>
                Характеристики
            </Typography>
            <RHookFormTextField label='Текст' name={`props.dffd`} />
            {fields.map((field, index) =>
                <Box className='flex items-center gap-2' key={field.id}>
                    <RHookFormSelect name={`props.${index}.icon`} valuesArr={iconsArr} defaultValue='diameter' />
                    <RHookFormTextField label='Текст' name={`props.${index}.text`} />
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