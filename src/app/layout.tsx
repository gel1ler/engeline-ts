import ThemeRegistry from '@/customization/theme/ThemeRegistry'
import './styles/globals.css'
import './styles/anims.css'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/svg+xml" />
        <link rel='image/svg+xml' href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <ThemeRegistry>
        <body className='flex flex-col min-h-screen'>
          <Header />
          <section className='flex-grow'>
            {children}
          </section>
          <Footer />
        </body>
      </ThemeRegistry>
    </html>
  )
}
