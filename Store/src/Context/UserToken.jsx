
import React, { createContext, useState } from 'react'


export let UserToken = createContext();

export default function UserTokenProvider(props) {
    const [userToken, setuserToken] = useState
        (
            (localStorage.getItem("storeToken")) ? localStorage.getItem("storeToken") : null
        )
    return (
        <UserToken.Provider value={{userToken ,setuserToken}}>
            {props.children}
        </UserToken.Provider>

    )
}
