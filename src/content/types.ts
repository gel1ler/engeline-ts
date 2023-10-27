export interface IMainInfo {
    name: string,
    description: string,
    phone: string,
    email: string,
    map: string,
    logoSmall: string
    logoText: string
    logoHorizontal: string,
    logoVertical: string,
}

export interface ISocialMedia {
    vk?: string,
    telegram?: string,
    instagram?: string,
}

export interface INavLink {
    id: number,
    name: string,
    anchorLink?: boolean,
    href: string
}
