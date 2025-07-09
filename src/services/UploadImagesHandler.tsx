import { uploadImage } from '@/firebase/clientApp'
import { compressImage } from "./compressImage"

type f = (
    file: File | File[],
    folderName: string,
    addHandler: (url: string, folderName: string) => void
) => void

export const uploadImagesHandler: f = async (file, folderName, addHandler) => {
    if (file instanceof File) {
        const size = file.size / (1024 ** 2)

        const normalImage = size > 0.7 ? await compressImage(file) : file
        const normalRes = await uploadImage(normalImage, folderName + '/')

        typeof normalRes === 'string' ? addHandler(normalRes, folderName) : console.log('Error')
    }
    else {
        const arr = Array(...file)
        arr.forEach(async i => {
            const size = i.size / (1024 ** 2)

            const normalImage = size > 0.7 ? await compressImage(i) : i
            const normalRes = await uploadImage(normalImage, folderName)

            typeof normalRes === 'string' ? addHandler(normalRes, folderName) : console.log('Error')
        })
    }
}