import { IMainInfo, INavLink, ISocialMedia } from "./types";

export const mainInfo: IMainInfo = {
    name: 'Название',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officia a iure dolore impedit velit, blanditiis repellat ipsa alias nobis illo iusto, cupiditate perferendis natus omnis iste, libero asperiores! Quis.',
    phone: '+7(495)374-53-43',
    email: 'info@engeline.ru',
    map: 'https://yandex.ru/maps/?from=mapframe&ll=43.524819%2C54.993879&mode=usermaps&source=mapframe&um=constructor%3A711ea37dc3a1461d53cb66acc3637e91b23c8492ed19997ddb60495aa5a2ae09&utm_source=mapframe&z=5',
    logoSmall: '/logo/logo-small.svg',
    logoText: '/logo/logo-text.svg',
    logoVertical: '/logo/logo-vertical.svg',
    logoHorizontal: '/logo/logo-horizontal.svg'
}

export const socialMedia: ISocialMedia = {
    vk: 'https://vk.com/',
    telegram: 'https://web.telegram.org/',
    instagram: 'https://google.com/'
}

export const navigation: INavLink[] = [
    {
        id: 0,
        name: "Главная",
        href: "/",
    },
    {
        id: 1,
        name: "Продукция",
        href: "/products",
        anchorLink: true,
    },
    {
        id: 2,
        name: "Контакты",
        href: "#contacts_anchor",
        anchorLink: true,
    }
]

type TLinks = {
    text: string
    href: string
}

export const links: TLinks[] = [
    {
        text: 'Механическая обработка',
        href: '/products/0'
    },
    {
        text: 'Емкостное химическое и машинное оборудование',
        href: '/products/1'
    },
    {
        text: 'Муфты ремонтные стальные',
        href: '/products/2'
    },
    {
        text: 'Соединительные детали трубопроводов',
        href: '/products/3'
    },
    {
        text: 'Трубы обечаечные, корпуса, бандажи',
        href: '/products/4'
    },
    {
        text: 'Трубы восстановленные',
        href: '/products/5'
    },
    {
        text: 'Антикоррозийное покрытие',
        href: '/products/6'
    },
]