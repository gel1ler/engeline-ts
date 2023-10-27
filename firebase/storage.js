import { getStorage, ref, listAll, getDownloadURL, deleteObject, uploadBytesResumable } from "firebase/storage"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: "https://ingeline-4766c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

initializeApp(firebaseConfig)
const st = getStorage()

export async function getImages(folder) {
    try {
        const imagesRef = ref(st, folder + '/')
        const fileList = await listAll(imagesRef)
        const urls = await Promise.all(fileList.items.map((itemRef) => {
            return getDownloadURL(itemRef)
        }))
        urls.unshift(folder)
        return urls
    }
    catch (err) {
        console.log(err)
    }
}

export async function getFolders() {
    const rootRef = ref(st)
    const foldersList = await listAll(rootRef)
    const arr = await Promise.all(foldersList.prefixes.map(i => {
        return getImages(i.name)
    }))
    return arr
}

export async function deleteImage(link) {
    try {
        const imageRef = ref(st, link)
        deleteObject(imageRef).then(() => {
            return 'succ'
        })
    }
    catch (err) {
        console.log(err)
    }
}

export async function uploadImage(file, folderName) {
    try {
        const storageRef = ref(st, `${folderName}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        return new Promise((resolve, reject) => {
            uploadTask.on(
                'state_changed',
                (snapshot) => { },
                (error) => {
                    console.log(error)
                },
                async () => {
                    const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
                    resolve(downloadUrl)
                }
            )
        })
    } catch (error) {
        return `err ${error.message}`
    }
}