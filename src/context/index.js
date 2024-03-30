import React from 'react'
import ThemeProvider from './ThemeProvider'
import { Toaster } from 'react-hot-toast'
import AuthProvider from './AuthProvider'

const ContextProvider = ({ children }) => {
    return (
        <>
            <AuthProvider>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
                <Toaster />
            </AuthProvider>
        </>
    )
}

export default ContextProvider