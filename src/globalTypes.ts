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
    id: number | null | undefined
    align?: string,
    photo: string,
    text: string,
    title?: string,
}

export interface TProduct {
    id: number,
    name: string,
    shortDescription: string,
    descriptions: TDescription[],
    props: TProp[],
    mainImg: string,
    additionalImgs: string[],
}