import imageCompression from "browser-image-compression"

export const compressImage = async (file) => {
    let options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1500,
        useWebWorker: true,
    }

    try {
        const compressedImage = await imageCompression(file, options)
        return compressedImage
    } catch (error) {
        console.error('Error compressing image:', error)
        throw error
    }
}