import React from 'react'
import style from './CategoryProudcts.module.css'
import { Link, useParams } from 'react-router-dom'
import useAllPrdoucts from '../../Hooks/useAllPrdoucts';

import useCategoriesProducts from './../../Hooks/useCategoriesProducts';
import Cartbtn from '../Cartbtn/Cartbtn';

export default function CategoryProudcts() {

    let { name } = useParams();
    let { data, isLoading, isError } = useCategoriesProducts();


    if (isLoading) {
        return <section className=' w-full h-screen  flex justify-center items-center'>
            <span class="loader"></span>
        </section>
    }
    if (data.length == 0) {
        return <section >
            <h1 className=' text-center font-serif font-extrabold py-5'>{name}</h1>
            <div className="content w-full h-screen  flex justify-center items-center">
                <h1 className=' font-bold '>No Products Found </h1>
            </div>

        </section>
    }
    return (
        <>
            <h1 className=' text-center font-serif font-extrabold py-5'>{name}</h1>
            <div className="row font-serif font-extrabold text-center  justify-center bg-slate-200 ">

                {
                    data?.map((pr) => (
                        <div className="xl:w-1/4 lg:w-1/2 sm:w-full p-3 border bg-zinc-300 ">
                            <Link to={`/productdetails/${pr.id}/${pr.category.name}`}>
                                <img src={pr.imageCover} className=' w-full ' alt="Product Image" />
                                <h1 className=' py-3'>{pr.title}</h1>
                                <div className="priceRating flex justify-around font-mono py-3 ">
                                    <span>{pr.price}EGP</span>
                                    <span> <i className='fas fa-star text-yellow-400' />{pr.ratingsAverage}</span>
                                </div>
                            </Link>

                            <Cartbtn product_id={pr.id} />
                            
                        </div>
                    ))
                }
            </div>



        </>
    )
}
