export type TSetBool = (value: boolean) => void
export type TSetNumber = (value: number) => void
export type TSetString = (value: string) => void
export type TSetStringArray = (value: string[]) => void


/////////////////////////////////////////////
export interface TProp {
    icon: string,
    text: string
}

export interface TDescription {
    name: string,
    text: string
    video: string,
    photos: string[]
    align?: string,
}

export interface TProduct {
    id: number,
    name: string,
    shortDescription: string,
    description: string,
    descriptions: TDescription[]
    props: TProp[],
    mainImg: string,
    additionalImgs: string[],
}