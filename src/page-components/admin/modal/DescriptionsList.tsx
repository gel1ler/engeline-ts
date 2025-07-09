import RHookFormTextField from '@/components/UI/forms/RHookFormTextField'
import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { useFieldArray } from 'react-hook-form'
import ImageInput from './images/selectOneImage/ImageInput'
import ImagesInput from './images/selectImages/ImagesInput'

const aligns = ['left', 'right']

const DescriptionsList = ({ folders }: { folders: any[] }) => {
    const { fields, append, remove } = useFieldArray({ name: "descriptions" })

    return (
        <Box className='flex flex-col gap-4'>
            <Typography>
                Описания
            </Typography>
            {fields.map((field, index) =>
                <Box key={field.id}>
                    <Box className='flex flex-col gap-6'>
                        <RHookFormTextField label='Название' name={`descriptions.${index}.name`} />
                        <RHookFormTextField label='Текст' name={`descriptions.${index}.text`} />
                        <ImageInput
                            folders={folders}
                            name={`descriptions.${index}.video`}
                        />
                        <ImagesInput
                            folders={folders}
                            name={`descriptions.${index}.photos`}
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
                onClick={() => append({ name: '', text: '', video: '', photos: [''] })}
            >
                Добавить+
            </Button>
        </Box>
    )
}

export default DescriptionsList