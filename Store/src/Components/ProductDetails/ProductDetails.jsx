import React from 'react';
import style from './ProductDetails.module.css';
import useProductDetails from '../../Hooks/useProductDetails';
import Cartbtn from '../Cartbtn/Cartbtn';
import { useParams } from 'react-router-dom';
import RelatedProducts from './../RelatedProducts/RelatedProducts';

export default function ProductDetails() {

    let {id} =useParams(); 
    let { data, isLoading } = useProductDetails();

    if (isLoading) {
        return <section className=' w-full h-screen  flex justify-center items-center'>
            <span class="loader"></span>
        </section>
    }

    return (
        <>
            <section className="min-h-screen font-serif flex items-center justify-center bg-gray-100 p-4">
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-5">
                            <img src={data?.imageCover} className="w-full h-full object-cover rounded-lg" alt="Product Image" />
                        </div>
                        <div className="md:w-1/2 flex flex-col justify-center p-6">
                            <h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
                            <p className="text-gray-700 mb-6">{data?.description}</p>
                            <div className="flex justify-between items-center font-mono text-lg mb-4">
                                <span className="text-green-600 font-bold">{data?.price} EGP</span>
                                <span className="flex items-center">
                                    <i className="fas fa-star text-yellow-400 mr-2" />
                                    {data?.ratingsAverage}
                                </span>
                            </div>
                            <Cartbtn product_id={id} />
                        </div>
                    </div>
                </div>
            </section>
            <RelatedProducts/>
        </>
    );
}
