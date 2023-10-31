import { getDatabase, ref, set, push, update, child, get, remove } from "firebase/database"
import { initializeApp } from "firebase/app"
import { TProduct } from "@/globalTypes"

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
const db = getDatabase()

//Products functions
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
    const products = await getProducts()
    const id = products ? products[products.length - 1].id + 1 : 0

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