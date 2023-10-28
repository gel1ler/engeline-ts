interface prop {
    icon: string,
    name: string
}

interface description {
    align: string,
    photo: string,
    text: string,
    title: string,
}

export interface Product {
    id: number,
    name: string,
    shortDescription: string,
    descriptions: description[],
    mainImg: string,
    additionalImgs: string[],
    props: prop[],
}