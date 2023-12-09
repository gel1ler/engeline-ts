export default function compressText(string: string, length: number): string {
    const splitted = string.split(' ')
    return splitted.length > length ? splitted.slice(0, length).join(" ") + "..." : string
}