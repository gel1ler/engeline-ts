export type TSetBool = (value: boolean) => void
export type TSetNumber = (value: number) => void


/////////////////////////////////////////////
export interface TProp {
    icon: string,
    text: string
}

interface description {
    align?: string,
    photo: string,
    text: string,
    title?: string,
}

export interface TProduct {
    id: number,
    name: string,
    shortDescription: string,
    descriptions: description[],
    mainImg: string,
    additionalImgs: string[],
    props: TProp[],
}