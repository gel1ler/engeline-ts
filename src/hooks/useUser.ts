// hooks/useUser.ts
import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../firebase/clientApp'

interface UserData extends User {
    isAdmin?: boolean
}

export const useUser = () => {
    const [user, setUser] = useState<UserData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const tokenResult = await user.getIdTokenResult()
                const isAdmin = !!(tokenResult.claims.isAdmin === true)
                setUser({ ...user, isAdmin })
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    return { user, loading }
}