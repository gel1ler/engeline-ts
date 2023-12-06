'use client'
import React, { useEffect, useState } from 'react'
import { AppBar } from '@mui/material'
import Bar from '../Bar/Bar'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { headerProps } from '@/customization/customization'
import StartBar from '../Bar/StartBar'

const scrollHeight: number | undefined = headerProps.scrollHeight

const ScrolledHeader = () => {
    const [height, setHeight] = useState<number>(0)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => setHeight(window.innerHeight), [])

    useScrollPosition(({ prevPos, currPos }) => {
        if (typeof scrollHeight === 'number') {
            let y: number = -currPos.y
            if (y >= height * scrollHeight) {
                setIsActive(true)
            }
            if (y < height * scrollHeight) {
                setIsActive(false)
            }
        }
    })

    return (
        <>
            <AppBar
                position='static'
                sx={{
                    zIndex: 100,
                    boxShadow: '0 0 5px 2px rgba(0,0,0,.1)'
                }}
            >
                <StartBar />
            </AppBar>
            <AppBar
                elevation={0}
                sx={{
                    transition: 'opacity .3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 0 8px 4px rgba(0,0,0,.3)',
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? 'all' : 'none'
                }}
            >
                <Bar />
            </AppBar>
        </>
    )
}

export default ScrolledHeader