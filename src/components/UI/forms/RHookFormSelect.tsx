import { DiamIcon, RulerIcon, ThicknessIcon, VolumeIcon } from '@/components/icons/productIcons'
import { MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const RHookFormSelect = ({ name, valuesArr }: { name: string, valuesArr: any[] }) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <Select
            type='select'
            color='secondary'
            variant='outlined'
            error={!!errors[name]}
            {...register(name)}
        >
            {valuesArr.map((i, key) =>
                <MenuItem value={i} key={key}>{i}</MenuItem>
            )}
        </Select>
    )
}

export default RHookFormSelect