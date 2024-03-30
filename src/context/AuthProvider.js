import React, { createContext, useState } from 'react'
import { signInUser } from '../api/auth'

export const AuthContext = createContext()

const defaultAuthInfo = {
    profile: null,
    isLoggedIn: false,
    isPending: false,
    error: ''
}

const AuthProvider = ({ children }) => {

    const [authInfo, setAutoInfo] = useState({ ...defaultAuthInfo })

    const handleLogin = async (email, password) => {
        setAutoInfo({ ...authInfo, isPending: true })
        const { error, user } = await signInUser({ email, password })
        if (error) {
            return setAutoInfo({ ...authInfo, isPending: false, error })
        }

        setAutoInfo({
            profile: { ...user },
            isLoggedIn: true,
            isPending: false,
            error: ''
        })

        localStorage.setItem('auth-token', user.token)

    }

    return <AuthContext.Provider value={{ authInfo, handleLogin }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider