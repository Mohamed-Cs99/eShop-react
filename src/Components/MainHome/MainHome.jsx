import React from 'react'
import style from './MainHome.module.css'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'

export default function MainHome() {
    return (
        <section className={`${style.mainPic} h-screen text-white py-3 `} >

            <CategoriesSlider  />
        </section>
    )
}
