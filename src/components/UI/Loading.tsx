'use client'
import React, { useEffect } from 'react'
import { Box } from "@mui/material"
import { useSearchParams } from 'next/navigation'

export default function Loading() {
    const searchParams = useSearchParams()
    const loading = searchParams.get('loading')

    return (
        <Box
            className='w-screen h-screen left-0 top-0 flex items-center justify-center bg-white bg-opacity-75 transition-opacity duration-700'
            sx={{
                opacity: loading ? 1 : 0,
                visibility: loading ? 'visible' : 'hidden',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 2000
            }}
        >
            <svg
                id="_Слой_1"
                data-name="Слой 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 608.31 443.66"
                className='w-48 h-48 transition-all duration-300'
                style={{ opacity: loading ? 1 : 0 }}
            >
                <path className="loader loader-1" d="m0,163.82C100.44,111.54,200.88,59.25,301.32,6.96c8.26-3.07,36.12-12.34,68.19-2.68,28,8.43,43.2,26.48,48.47,33.45L120.35,192.66c-6.76,3.26-36.77,16.83-72.38,5.45-27.19-8.69-42.57-27.11-47.97-34.29" />
                <path className="loader loader-2" d="m95.16,284.36c100.44-52.29,200.88-104.57,301.32-156.86,8.26-3.07,36.12-12.34,68.19-2.68,28,8.43,43.2,26.48,48.47,33.45l-297.63,154.94c-6.76,3.26-36.77,16.83-72.38,5.45-27.19-8.69-42.57-27.11-47.97-34.29" />
                <path className="loader loader-3" d="m190.32,404.9c100.44-52.29,200.88-104.57,301.32-156.86,8.26-3.07,36.12-12.34,68.19-2.68,28,8.43,43.2,26.48,48.47,33.45l-297.63,154.94c-6.76,3.26-36.77,16.83-72.38,5.45-27.19-8.69-42.57-27.11-47.97-34.29" />
            </svg>
        </Box >
    )
}