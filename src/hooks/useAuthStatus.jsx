import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

export default function useAuthStatus(){
    const [loggedIn, setloggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setloggedIn(true)
            }
            setCheckingStatus(false)
        })
    }, [])
    return {loggedIn, checkingStatus}
}