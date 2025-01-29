import React from 'react'
import style from './Brands.module.css'
import useBrands from '../../Hooks/useBrands'
export default function Brands() {

    let { data, isLoading } = useBrands();

    if (isLoading) {
        return <section className=' w-full h-screen  flex justify-center items-center'>
            <span class="loader"></span>
        </section>
    }
    
    return (
        <>

            <div className="row">

                {
                    data?.map((brand) => (<>
                        <div className="w-1/4">
                            <img src={brand.image} alt="Brand image ." />

                        </div>
                    </>))
                }

            </div>

        </>
    )
}
