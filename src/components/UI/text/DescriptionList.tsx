import React from 'react'
import { Box, Divider, List, ListItem, Typography } from '@mui/material'
import { DiamIcon, RulerIcon, ThicknessIcon, VolumeIcon } from '@/components/icons/productIcons'
import { TProp } from '@/globalTypes'

const DescriptionList = ({ props, align, fade }: { props: TProp[], align: 'start' | 'flex-end', fade?: boolean }) => {

    return (
        <Box className='flex flex-col gap-4'>
            {props.map((i, key) => {
                let icon

                switch (i.icon) {
                    case 'diameter':
                        icon = <DiamIcon />
                        break
                    case 'ruler':
                        icon = <RulerIcon />
                        break
                    case 'thickness':
                        icon = <ThicknessIcon />
                        break
                    case 'volume':
                        icon = <VolumeIcon />
                        break
                }

                let res

                if (i.text?.includes(':')) {
                    const temp = i.text.split(':')
                    const title = temp[0] + ':'
                    const text = temp[1]
                    res = <span><b>{title}</b>{text}</span>
                }
                else {
                    res = i.text
                }

                return (
                    <Box className='flex flex-col gap-4' key={key}>
                        <Box data-aos={fade ? 'fade-up' : null} className='flex items-center' sx={{ justifyContent: align, gap: 1 }}>
                            {icon}
                            <Typography
                                variant='h5'
                            >
                                {res}
                            </Typography>
                        </Box>
                        {key === props.length - 1 ? null : <Divider />}
                    </Box>
                )
            })}
        </Box>

    )
}

export default DescriptionList