import IB from "./IB"
import { Menu } from '@mui/icons-material'
import React from 'react'
import arrowLeft from '@/../public/icons/arrow-left.svg'
import arrowRight from '@/../public/icons/arrow-right.svg'
import Image from 'next/image'
import { Box } from "@mui/material"

const style = { fontSize: 30 }

export const MenuIcon = ({ setOpen }: { setOpen: () => void }) => { return (<IB f={setOpen}><Menu sx={style} /></IB>) }

export const Arrow = ({ anchor, f }: { anchor: 'left' | 'right', f: () => void }) => {
    return (
        <Box
            className='absolute top-0 cursor-pointer w-1/2 h-full'
            sx={{
                transition: 'all .3s ease-out',
                [anchor]: 0,
                background: 'transparent',
                ':hover': {
                    background: `linear-gradient(to ${anchor}, rgba(0,0,0,0), rgba(0,0,0,.3))`
                }
            }}
            onClick={f}
        >
            <Image
                className="absolute top-1/2 -translate-y-1/2 h-1/4 w-1/4"
                id='arrow'
                style={{
                    [anchor]: 15,
                    filter: 'drop-shadow(0 0 5px rgba(0,0,0, 0.5))',
                }}
                alt='Стрелка'
                src={anchor === 'left' ? arrowLeft : arrowRight}
            />
        </Box>
    )
}

export default Arrow