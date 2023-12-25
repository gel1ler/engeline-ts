import { MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const RHookFormSelect = ({
    name, valuesArr, defaultValue, fullwidth, label
}: {
    name: string, valuesArr: any[], defaultValue: any, fullwidth?: boolean, label:string
}) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <TextField
            sx={{
                width: fullwidth ? '100%' : 'auto',
            }}
            inputProps={{
                color: 'black'
            }}
            label={label}
            select
            color='secondary'
            variant='outlined'
            error={!!errors[name]}
            {...register(name)}
            defaultValue={defaultValue}
        >
            {valuesArr.map((i, key) =>
                <MenuItem value={i} key={key}>{i}</MenuItem>
            )}
        </TextField>
    )
}

export default RHookFormSelect