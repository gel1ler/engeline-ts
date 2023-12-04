import About from '@/page-components/index/about/About'
import { Box, Container } from '@mui/material'
import Start from '@/page-components/index/start/Start'
import Plx from '@/services/Plx'
import Products from '@/page-components/index/products/Products'
import Fabric from '@/page-components/index/about/Fabric'
import Title from '@/components/UI/text/Title'
import Contacts from '@/page-components/index/Contacts'
import AnotherAdavantages from '@/page-components/index/about/AnotherAdvantages';
import AOSProvider from '@/services/AOSProvider'
import Gallery from '@/components/UI/Gallery'
import Bar from '@/components/layout/header/Bar/Bar'
import { Metadata } from 'next'
import Loader from '@/components/layout/loader'

export const metadata: Metadata = {
  title: 'Инжелайн - производственное предприятие',
  description: 'Инжелайн - производственное предприятие',
}


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
      <Box className='relative w-screen'>
        <Bar onlyTop />
        <Plx parallaxData={startParallax}>
          <Start />
        </Plx>
        <Box id='about_anchor' sx={{ pt: '70px', mt: '-70px' }}>
          <About />
        </Box>
        <Fabric />
        <Box id='products_anchor' sx={{ pt: '140px', mt: '-140px' }}>
          <Products />
        </Box>
        <Box className='w-2/3 mx-auto anchor' sx={{ my: 10 }}>
          <Title>
            Другие преимущества
          </Title>
          <AnotherAdavantages />
        </Box>
        <Gallery images={['/advantages/lab.webp', '/advantages/antikor.jpg', '/advantages/control.jpg', '/advantages/lab.webp', '/advantages/lab.webp']} />
        <Box id='contacts_anchor' sx={{ pt: '30px', mt: '-30px' }}>
          <Container maxWidth='xl'>
            <Contacts />
          </Container>
        </Box>
      </Box >
    </AOSProvider>
  )
}
