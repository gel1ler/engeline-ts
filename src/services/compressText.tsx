export default function compressText(string: string, length: number): string {
    if (string.length > 380) return string.slice(0, length*9)+'...'
    const splitted = string.split(' ')
    return splitted.length > length ? splitted.slice(0, length).join(" ") + "..." : string
}