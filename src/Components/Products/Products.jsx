import React from 'react'
import style from './Products.module.css'
import axios, { Axios } from 'axios'
import useAllPrdoucts from './../../Hooks/useAllPrdoucts';
import Cartbtn from '../Cartbtn/Cartbtn';
import { Link } from 'react-router-dom';
export default function Products() {

    let { data, isLoading } = useAllPrdoucts();

    if (isLoading) {
        return <section className=' w-full h-screen  flex justify-center items-center'>
            <span class="loader"></span>
        </section>
    }



    return (
        <>


            {/* Products Section --> Showing All Products  */}
            <section id='Products'>
                <h1 className=' text-center font-serif font-extrabold py-5'>Our Products</h1>
                <div className="row font-serif text-center font-semibold bg-slate-200 border">
                    {data?.map((product) =>

                        <div className=' xl:w-1/4 lg:w-1/2 '>
                            <Link to={`/productdetails/${product.id}/${product.category.name}`}>
                                <div className="item px-2">
                                    <img src={product.imageCover} className=' w-full' alt="Product Image" />
                                    <div className="caption py-3">
                                        <h2 className=' text-emerald-600'>{product.category.name}</h2>
                                        <h3>{product.title}</h3>
                                    </div>
                                    <div className="priceRating flex justify-around font-mono py-3 ">
                                        <span>{product.price}EGP</span>
                                        <span> <i className='fas fa-star text-yellow-400' />{product.ratingsAverage}</span>
                                    </div>

                                </div>
                            </Link>

                            <Cartbtn product_id={product.id} />

                        </div>


                    )}
                </div>
            </section>

        </>
    )
}
