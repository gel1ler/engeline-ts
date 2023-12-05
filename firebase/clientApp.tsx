import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, update, child, get, remove } from "firebase/database"
import { getStorage, ref as storageRef, listAll, getDownloadURL, deleteObject, uploadBytesResumable } from "firebase/storage"
import { TProduct } from "@/globalTypes"

const firebaseConfig = {
    apiKey: "AIzaSyCt7UQ0t2UjncmNh02TRXB382N4sKQo7gg",
    authDomain: "engeline-708d1.firebaseapp.com",
    databaseURL: "https://engeline-708d1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "engeline-708d1",
    storageBucket: "engeline-708d1.appspot.com",
    messagingSenderId: "939641098298",
    appId: "1:939641098298:web:23eaa5ff5a675bd19ca503"
};

initializeApp(firebaseConfig)

////////////////////////////////////////////////////////////
//DB

const db = getDatabase()

export async function getProducts(): Promise<TProduct[]> {
    const dbRef = ref(db)
    const snapshot = await get(child(dbRef, "products"))

    if (snapshot.exists()) {
        const products = snapshot.val()
        return products
    } else {
        throw new Error("Empty")
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