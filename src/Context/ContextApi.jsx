import React, { createContext, useState } from 'react'

//create context for to give response of add
export const addResponseContext = createContext()

//create context for to give response of edit
export const editResponseContext = createContext()

function ContextApi({ children }) {

    //state   for add response
    const [addResponse, setAddResponse] = useState('')

    //state   for edit response
    const [editResponse, setEditResponse] = useState("")


    return (
        <>
            <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
                <editResponseContext.Provider value={{ editResponse, setEditResponse }}>
                    {children}
                </editResponseContext.Provider>
            </addResponseContext.Provider>
        </>
    )
}

export default ContextApi