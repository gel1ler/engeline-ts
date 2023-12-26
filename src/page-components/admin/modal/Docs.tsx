import RHookFormTextField from '@/components/UI/forms/RHookFormTextField'
import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { useFieldArray } from 'react-hook-form'
import ImagesInput from './images/selectImages/ImagesInput'
import ImageInput from './images/selectOneImage/ImageInput'

const Docs = ({ folders }: { folders: any[] }) => {
    const { fields, append, remove } = useFieldArray({ name: "docs" })

    return (
        <Box className='flex flex-col gap-4'>
            <Typography>
                Документы
            </Typography>
            {fields.map((field, index) =>
                <Box key={field.id}>
                    <Box className='flex flex-col gap-6'>
                        <RHookFormTextField label='Название' name={`docs.${index}.name`} />
                        <RHookFormTextField label='Размер' name={`docs.${index}.size`} />
                        <ImageInput
                            label='документ'
                            folders={folders}
                            name={`docs.${index}.link`}
                        />
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
                onClick={() => append({ name: '', link: '', size: 0 })}
            >
                Добавить+
            </Button>
        </Box>
    )
}

export default Docs