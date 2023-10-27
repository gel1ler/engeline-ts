import { IColors, IFooterProps, IHeaderProps } from "./types";

export const colors: IColors = {
    primary: '#fff',
    secondary: '#E5A019',
    bg: '#fff',
    additional: '#CBC2B9',
    helper: '#9e9e9e'
}

export const headerProps: IHeaderProps = {
    type: 'scrolled',
    scrollHeight: 0.7,
    remHeight: 7,
    topHeader: true,
    withShadow: true,
    menu: true,
    links: true,
}




export const footerProps: IFooterProps = {
    type: 'simple',
    logo: true
}