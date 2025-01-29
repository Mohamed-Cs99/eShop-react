import React from 'react'
import style from './RelatedProducts.module.css'
import useRelatedProducts from '../../Hooks/useRelatedProducts';
import Settings from './../Settings/Settings';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Cartbtn from '../Cartbtn/Cartbtn';
export default function RelatedProducts() {

    let { data, isLoading } = useRelatedProducts();


    if (isLoading) {
        return <span class="loader "></span>
    }
    var Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>


            <section className=' py-8 font-extrabold '>
                <h1 className=' text-center font-serif font-extrabold mb-4 '>Related Products</h1>

                <Slider {...Settings}>

                    {data?.map((pr) => (
                        <div key={pr.id} className=" text-center">
                            <div className="item rounded border-left p-3 bg-light ">
                                <Link className='text-decoration-none' to={`/productdetails/${pr.id}/${pr.category.name}`}>
                                    <img src={pr.imageCover} className=' w-full h-[300px] object-cover' alt="product image" />  
                                    <p className={` font-serif font-extrabold `}>{pr.title}</p>
                                    <h2 className=' font-serif font-extrabold text-slate-600 '>[{pr.category.name}]</h2>
                                </Link>



                            </div>
                        </div>
                    ))}
                </Slider>

            </section>

        </>

    )
}
