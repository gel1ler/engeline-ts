import About from '@/pages/index/about/About'
import { Box } from '@mui/material'
import Start from '@/pages/index/start/Start'
import Plx from 'react-plx'
import Products from '@/pages/index/products/big/products2'

export default function Home() {

  const startParallax = [
    {
      start: 0,
      end: '50vh',
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        }
      ]
    },
    {
      start: 0,
      end: '100vh',
      properties: [
        {
          startValue: 0,
          endValue: -400,
          property: "translateY",
        },
      ]
    }
  ]

  return (
    <Box className='relative'> 
      <Plx parallaxData={startParallax}>
        <Start />
      </Plx>
      <Box className='w-full anchor' id='about'>
        <About />
      </Box>
      <Products />
    </Box>
  )
}
