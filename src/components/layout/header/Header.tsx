import React from 'react'
import { headerProps } from '@/customization/customization'
import StaticHeader from './types/StaticHeader'
import ScrolledHeader from './types/ScrolledHeader'

const Header = () => {
    switch (headerProps.type) {
        case 'static':
            return <StaticHeader />
        case 'scrolled':
            return <ScrolledHeader />
    }
}

export default Header