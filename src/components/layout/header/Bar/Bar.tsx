import { headerProps } from '@/customization/customization'
import { Toolbar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/material'
import { PhoneCall, TelegramIcon, VkIcon } from '@/components/icons/socialMediaIcons'
import MyDrawer from '../drawer/MyDrawer'
import TopHeader from '../topHeader/TopHeader'
import Link from 'next/link'
import NavLinks from './NavLinks'
import { mainInfo } from '@/content/content'

const Bar = ({ noBg, onlyTop }: { noBg?: boolean, onlyTop?: boolean }) => {
  const isFullwidth: string = headerProps.fullwidth ? '' : ' max-w-7xl mx-auto'

  return (
    <>
      {headerProps.topHeader ? <TopHeader noBg={noBg} /> : null}
      {
        !onlyTop
        &&
        <Toolbar className={'flex w-full' + isFullwidth} sx={{ justifyContent: 'space-between', my: 'auto' }}>
          <Link href='/'>
            <Image
              alt='Logo'
              src={mainInfo.logoHorizontal}
              width={200}
              height={40}
            />
          </Link>
          <Box className='flex gap-10'>
            <Box className='gap-10' sx={{ display: ['none', 'none', 'flex'] }}>

              {/* Navigation */}
              {headerProps.links ?
                <NavLinks hoverType='animUnderline' />
                : null
              }

              {/* Social networks */}
              {headerProps.contacts ?
                <Box className='flex gap-3 items-center'>
                  <VkIcon />
                  <TelegramIcon />
                  <PhoneCall icon />
                </Box>
                : null
              }

              {/* Menu */}
            </Box>
            {headerProps.menu ?
              <MyDrawer />
              : null
            }
          </Box>
        </Toolbar>
      }
    </>
  )
}

export default Bar