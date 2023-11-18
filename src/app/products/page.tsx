import About from '@/page-components/index/about/About'
import { Box, Container } from '@mui/material'
import Start from '@/page-components/index/start/Start'
import Plx from 'react-plx'
import Products from '@/page-components/index/products/big/Products'
import Fabric from '@/page-components/index/about/Fabric'
import Title from '@/components/UI/text/Title'
import Contacts from '@/page-components/index/Contacts'
import AnotherAdavantages from '@/page-components/index/AnotherAdvantages';
import AOSProvider from '@/services/AOSProvider'
import Gallery from '@/page-components/index/Gallery'
import StaticHeader from '@/components/layout/header/types/StaticHeader'

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
    <AOSProvider>
      <Box className='relative'>
        <StaticHeader />
        <Box>
          
        </Box>
      </Box >
    </AOSProvider >
  )
}
