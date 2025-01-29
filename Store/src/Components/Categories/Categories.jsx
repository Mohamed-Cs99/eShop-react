import React from 'react'
import style from './Categories.module.css'
import useCategories from './../../Hooks/useCategories';
import { Link } from 'react-router-dom';
export default function Categories() {



    let { data, isLoading } = useCategories();

    if (isLoading) {
        return <section className=' w-full h-screen  flex justify-center items-center'>
            <span class="loader"></span>
        </section>
    }

    return (
        <>
            <section>
            <h1 className=' text-center font-serif font-extrabold py-5'>All Categories</h1>
                <div className="row justify-center text-center border bg-slate-200">
                    {
                        data?.map((category) => (
                            <div className="item sm:w-full lg:w-1/2 xl:w-1/4 p-2 ">
                                <Link to={`/category/${category.name}`}>
                                    <img src={category.image} className='w-full h-[350px] object-cover' alt="Category image" />
                                    <h1 className='font-serif font-extrabold py-2'>{category.name}</h1>
                                </Link>

                            </div>
                        ))

                    }


                </div>
            </section>

        </>
    )
}
