import Image from 'next/image'
import React from 'react'

export const WaveDown = () => {
    return (
        <Image
            alt='Bg element'
            className='w-full mb-10'
            style={{
                filter: 'drop-shadow(0 10px 2px rgba(0, 0, 0, .02))',
            }}
            src='/bgelements/wave.svg'
            width={1920}
            height={100}
        />
    )
}

export const WaveUp = () => {
    return (
        <Image
            alt='Bg element'
            className='w-full mt-10'
            style={{
                filter: 'drop-shadow(0 -4px -2px rgba(0, 0, 0, 0.1))',
            }}
            src='/bgelements/wave2.svg'
            width={1920}
            height={100}
        />
    )
}