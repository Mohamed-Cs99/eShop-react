import React from 'react'
import style from './Guard.module.css'
import { Navigate } from 'react-router-dom'

export default function Guard(props) {

    if (localStorage.getItem("storeToken")) {
        return props.children;
    }

    else {
        return <Navigate to="/login" />
    }


}
