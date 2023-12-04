import React from 'react'
import { Box, Divider, List, ListItem, Typography } from '@mui/material'
import { DiamIcon, RulerIcon, ThicknessIcon, VolumeIcon } from '@/components/icons/productIcons'
import { TProp } from '@/globalTypes'
import Image from 'next/image'

const DescriptionList = ({ props, fade, gap }: { props: TProp[], fade?: boolean, gap?: number }) => {
    if (!props) return 'asdf'
    return (
        <Box className='flex flex-col w-fit' sx={{ gap: gap ? gap : 2 }}>
            {props.map((i, key) => {
                let res: any = i.text

                if (i.text?.includes(':')) {
                    const temp = i.text.split(':')
                    const title = temp[0] + ':'
                    const text = temp[1]
                    res = <span><b>{title}</b>{text}</span>
                }

                return (
                    <Box className='flex flex-col gap-4' key={key}>
                        <Box data-aos={fade ? 'fade-up' : null} className='flex gap-3'>
                            <Image
                                src={i.icon}
                                width={60}
                                height={60}
                                className='w-8 h-8'
                                alt='icon'
                            />
                            <Typography variant='h6'>
                                {res}
                            </Typography>
                        </Box>
                        {key === props.length - 1 ? null : <Divider data-aos='fade-up' />}
                    </Box>
                )
            })}
        </Box>

    )
}

export default DescriptionList