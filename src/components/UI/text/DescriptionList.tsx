import React from 'react'
import { Box, Divider, List, ListItem, Typography } from '@mui/material'
import { DiamIcon, RulerIcon, ThicknessIcon, VolumeIcon } from '@/components/icons/productIcons'
import { TProp } from '@/globalTypes'

const DescriptionList = ({ props, fade, gap }: { props: TProp[], fade?: boolean, gap?: number }) => {
    if (!props) return 'asdf'
    return (
        <Box className='flex flex-col justify-around w-fit' sx={{ gap: gap ? gap : 2 }}>
            {props.slice(0, 3).map((i, key) => {
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
                        <Box data-aos={fade ? 'fade-up' : null} className='flex items-center gap-2'>
                            {icon}
                            <Typography
                                variant='h6'
                            >
                                {res}
                            </Typography>
                        </Box>
                        {key === 2 ? null : <Divider />}
                    </Box>
                )
            })}
        </Box>

    )
}

export default DescriptionList