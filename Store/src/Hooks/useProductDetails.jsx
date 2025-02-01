import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function useProductDetails() {
    

    let {id}=useParams(); 

    function getSpecificProduct(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }

    let productDetails =useQuery({
        queryKey:['prDetails'], 
        queryFn:getSpecificProduct,
        select:(data)=>data.data.data,
        staleTime:1000,
        refetchInterval:500
        
    })

    return productDetails ;

}
