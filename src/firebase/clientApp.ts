import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, update, child, get, remove } from "firebase/database"
import { getStorage, ref as storageRef, listAll, getDownloadURL, deleteObject, uploadBytesResumable } from "firebase/storage"
import { TProduct } from "@/globalTypes"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

initializeApp(firebaseConfig)

////////////////////////////////////////////////////////////
//DB

const db = getDatabase()
export const auth = getAuth()

export async function getProducts(): Promise<TProduct[]> {
    const dbRef = ref(db)
    const snapshot = await get(child(dbRef, "products"))

    if (snapshot.exists()) {
        const products = snapshot.val()
        return products
    } else {
        return []
    }
}

export async function getProduct(id: number): Promise<TProduct> {
    const dbRef = ref(db)
    const snapshot = await get(child(dbRef, `products/${id}`))


    if (snapshot.exists()) {
        const product = snapshot.val()
        return product
    } else {
        throw new Error("Empty")
    }
}

export async function createProduct(productData: Omit<TProduct, 'id'>) {
    let id
    try {
        const products = await getProducts()
        id = products ? products[products.length - 1].id + 1 : 0
    }
    catch (err: unknown) {
        if (err instanceof Error && err.message === 'Empty') {
            id = 0
        }
    }

    const reference = ref(db, 'products/' + id)

    set(reference, {
        id,
        ...productData
    }).then(() => console.log('succ')).catch(err => console.log(err))
}

export async function changeProduct(id: number, productData: Omit<TProduct, 'id'>) {
    const reference = ref(db, 'products/' + id)

    update(reference, {
        id,
        ...productData
    }).then(() => console.log('succ')).catch(err => console.log(err))
}

export async function deleteProduct(id: number) {
    try {
        await remove(ref(db, 'products/' + id)).
            then(() => 'success')
    }
    catch (err) {
        console.log(err)
    }
}

function arrayMove(arr: any[], old_index: number, new_index: number) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1
        while (k--) {
            arr.push(undefined)
        }
    }

    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    arr.forEach((i, key) => i.id = key)
    return arr
};

export async function InsertProduct(oldId: number, newId: number) {
    try {
        const products = await getProducts()
        const newProducts = arrayMove(products, oldId, newId)

        const reference = ref(db, 'products')

        update(reference, {
            ...newProducts
        }).then(() => console.log('succ')).catch(err => console.log(err))

    }
    catch (err) {
        console.log(err)
    }
}

//////////////////////////////////////////////////////////////////////
//Storage

const st = getStorage()

export async function getImages(folder: string) {
    try {
        const imagesRef = storageRef(st, folder + '/')
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
    const rootRef = storageRef(st)
    const foldersList = await listAll(rootRef)
    const arr = await Promise.all(foldersList.prefixes.map(i => {
        return getImages(i.name)
    }))
    return arr
}

export async function deleteImage(link: string) {
    try {
        const imageRef = storageRef(st, link)
        deleteObject(imageRef).then(() => {
            return 'succ'
        })
    }
    catch (err) {
        console.log(err)
    }
}

export async function uploadImage(file: File, folderName: string) {
    const imagesRef = storageRef(st, `${folderName}/${file.name}`);
    const uploadTask = uploadBytesResumable(imagesRef, file);

    const downloadUrl = await new Promise((resolve, reject) => {
        uploadTask.on(
            'state_changed',
            (snapshot) => { },
            (error) => {
                console.log(error)
            },
            async () => {
                try {
                    const url = await getDownloadURL(uploadTask.snapshot.ref)
                    resolve(url)
                } catch (err) {
                    console.error(err)
                    reject(err)
                }
            }
        )
    })

    return downloadUrl
}