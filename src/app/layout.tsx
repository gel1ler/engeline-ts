import ThemeRegistry from '@/customization/theme/ThemeRegistry'
import './styles/globals.css'
import './styles/anims.css'
import Footer from '@/components/layout/footer/Footer'
import Loader from '@/components/layout/loader'
import Loading from '@/components/UI/Loading'
import { SpeedInsights } from "@vercel/speed-insights/next"
import ScrolledHeader from '@/components/layout/header/types/ScrolledHeader'
import { Suspense } from 'react'

function LoadingFallback() {
  return <>placeholder</>
}
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="https://engeline.ru/favicon.ico" sizes="any" type="image/svg+xml" />
        <link rel="icon" href="https://engeline.ru/favicon.ico" type="image/x-icon" />
        <link rel='image/svg+xml' href="https://engeline.ru/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="https://engeline.ru/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <ThemeRegistry>
        <body className='flex flex-col min-h-screen'>
          <SpeedInsights />
          <Loader />
          <Suspense fallback={<LoadingFallback />}>
            <Loading />
          </Suspense>
          <ScrolledHeader />
          <section className='flex-grow'>
            {children}
          </section>
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  )
}
