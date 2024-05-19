import React, { createContext, useEffect, useState } from 'react'


//context for verify token in sessionStorage,this context is used for to protect routes-
//for Dashboard and Project component(only logged user can move to Dashboard and Project component)
export const tokenAuthContext = createContext()


function TokenAuth({ children }) {

    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setIsAuthorized(true)
        }
        else {
            setIsAuthorized(false)
        }
    }, [isAuthorized])

    return (
        <>
            <tokenAuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
                {children}
            </tokenAuthContext.Provider>
        </>
    )
}

export default TokenAuth