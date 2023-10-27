import { TSetBool, TSetNumber } from '@/globalTypes'
import { Box } from '@mui/material'
import React from 'react'

const Dots = ({
    current, length, setCurrent
}: {
    current: number, length: number, setCurrent: TSetNumber
}) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: 10,
                left: 0,
                right: 0,
                mx: 'auto',
                display: 'flex',
                justifyContent: 'center',
                gap: 1
            }}
        >
            {Array(length).fill(0).map((dot, key) => {
                const active = current == key
                return (
                    <Box
                        onClick={() => setCurrent(key)}
                        key={key}
                        sx={{
                            cursor: 'pointer',
                            width: active ? '30px' : '10px',
                            height: '10px',
                            borderRadius: active ? '10px' : '50%',
                            opacity: active ? 1 : 0.5,
                            boxShadow: '0 0 5px 1px rgba(0,0,0,0.2)',
                            transition: 'all .2s ease-out',
                            background: 'white',
                        }}
                    />
                )
            }
            )}
        </Box>
    )
}

export default Dots