'use client'
import Carousel from '@/components/UI/carousel/Carousel'
import About from '@/pages/index/about/About'
import { Box } from '@mui/material'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import Start from '@/pages/index/start/Start'
import Plx from 'react-plx'
import Products from '@/pages/index/products/big/products.js'

const products = [
  {
    additionalImg: [
      'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%A2%D1%80%D1%83%D0%B1%D1%8B%2F320e77b5-3723-476e-b244-2c1ded9ee356.jpeg?alt=media&token=7845ede3-171c-42d6-ad31-b8b8b0ea3a70',
      'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%A2%D1%80%D1%83%D0%B1%D1%8B%2FIMG_7102.jpeg?alt=media&token=49c3e0d2-7525-42ae-bef9-f3a7c4b700ff',
      'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%A2%D1%80%D1%83%D0%B1%D1%8B%2FIMG_7101.jpeg?alt=media&token=5a7d76ea-22ad-4d80-ba07-b318221d7bc8'
    ],
    descriptions: [[Object], [Object], [Object], [Object]],
    id: 0,
    mainImg: 'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%A2%D1%80%D1%83%D0%B1%D1%8B%2F4da66684-c91e-4865-81ec-39f593b07901.jpeg?alt=media&token=57118f6a-55fd-4248-ada3-5e0a3f7651bc',
    name: 'Трубы',
    props: [[Object], [Object], [Object]],
    shortDescription: 'Трубы различного диаметра и толщины из листа или обечаек'
  },
  {
    additionalImg: [
      'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%9B%D0%B8%D1%81%D1%82%2FIMG_6583.jpeg?alt=media&token=39cfc9d4-55ad-4f0f-9c3f-b6654537c5cc',
      'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%9B%D0%B8%D1%81%D1%82%2FIMG_6608.jpeg?alt=media&token=f791779e-9563-490c-95e1-a85a58f0a7ed',
      'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%9B%D0%B8%D1%81%D1%82%2FIMG_8532.jpeg?alt=media&token=bcdcf0ec-7ae5-46bf-b9ad-8d37486d6839'
    ],
    description: 'Мы предлагаем своим клиентам листы из наличия, а также производство необходимой продукции на заказ. В таблице представлен перечень листового проката, который доступен к отгрузке из наличия на складе.',
    id: 1,
    mainImg: 'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%9B%D0%B8%D1%81%D1%82%2FIMG_6581.jpeg?alt=media&token=f7e971b1-bf40-4924-9ae7-92c8c17f0f78',
    name: 'Лист',
    props: [[Object]],
    shortDescription: 'ТОЛЩИНА ОТ 5 ДО 30ММ\n' +
      '\n' +
      'ШИРИНА РАСКРОЯ ОТ 1100 ДО 2300ММ\n' +
      '\n' +
      'ДЛИННА РАСКРОЯ ДО 12000ММ\n' +
      '\n' +
      'ДОСТУПНЫЕ МАРКИ СТАЛИ: СТ3,\n' +
      'СТ20, СТ45, 09Г2С, 17Г1С'
  },
  {
    additionalImg: [
      'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%9E%D0%B1%D0%B5%D1%87%D0%B0%D0%B9%D0%BA%D0%B8%2F1588e4b9-24cb-44bb-8df8-feee30747780.jpeg?alt=media&token=c2b8db5e-9fdb-4815-9c17-bc234ed0172e',
      'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%9E%D0%B1%D0%B5%D1%87%D0%B0%D0%B9%D0%BA%D0%B8%2F51737e3d-44f6-4f02-ab43-6e27ac115aab.jpeg?alt=media&token=3cd4fd5c-d514-4435-bbc2-c9a0bd95b95e',
      'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%9E%D0%B1%D0%B5%D1%87%D0%B0%D0%B9%D0%BA%D0%B8%2Fbe2655fc-2234-44f4-baf4-0ab7d040bc5e.jpeg?alt=media&token=1389d2c8-4b31-47cd-a9aa-38dd1fad0abc'
    ],
    description: 'Продукция нашего завода включает в себя трубы обечаечного типа, стальные кольца, конусы из листового металла, стальные переходы, резервуары и емкости различного назначения. Для производства может быть использован листовой металл горячего проката или лист повторного применения, восстановленный из трубы. Также возможно использование сырья предоставленного заказчиком.',
    id: 2,
    mainImg: 'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%9E%D0%B1%D0%B5%D1%87%D0%B0%D0%B9%D0%BA%D0%B8%2F0af2f91b-a064-45f0-a973-4a4bef8b2b37.jpeg?alt=media&token=065d08aa-e581-4213-a4c6-c4c039b63496',
    name: 'Обечаечные трубы',
    props: [[Object]],
    shortDescription: 'Толщина листа до 70мм\n' +
      'Ширина листа до 3000мм\n' +
      'Диаметр изделия от 630 мм до 5000мм\n' +
      'Коническая и цилиндрическая форма изделия'
  },
  {
    additionalImg: [
      'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%9E%D1%82%D0%B2%D0%BE%D0%B4%D1%8B%2Ftap%20(1).JPG?alt=media&token=8b973e38-0679-40fc-aa82-69d89be842c2',
      'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%9E%D1%82%D0%B2%D0%BE%D0%B4%D1%8B%2Ftap%20(14).JPG?alt=media&token=0a54d1dd-7c52-410a-b875-89a9c35ce1e1',
      'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%9E%D1%82%D0%B2%D0%BE%D0%B4%D1%8B%2Ftap%20(9).JPG?alt=media&token=58e715f4-ded3-4236-a057-e66d3bc0c38e'
    ],
    description: 'No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    id: 3,
    mainImg: 'https://firebasestorage.googleapis.com/v0/b/ingeline-4766c.appspot.com/o/%D0%9E%D1%82%D0%B2%D0%BE%D0%B4%D1%8B%2Ftap%20(4).JPG?alt=media&token=1abfc128-b7cf-4272-88b0-59483346ee17',
    name: 'Отводы',
    props: [[Object]],
    shortDescription: '"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.'
  }
]

export default function Home() {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('md'))

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
      {isSm ?
        <SmallProducts products={products} />
        :
        <Products products={products} />
      }
    </Box>
  )
}
