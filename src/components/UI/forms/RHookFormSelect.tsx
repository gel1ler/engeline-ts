import { MenuItem, Select } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const RHookFormSelect = ({ name, valuesArr, defaultValue }: { name: string, valuesArr: any[], defaultValue: any }) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <Select
            type='select'
            color='secondary'
            variant='outlined'
            error={!!errors[name]}
            {...register(name)}
            defaultValue={defaultValue}
        >
            {valuesArr.map((i, key) =>
                <MenuItem value={i} key={key}>{i}</MenuItem>
            )}
        </Select>
    )
}

export default RHookFormSelect