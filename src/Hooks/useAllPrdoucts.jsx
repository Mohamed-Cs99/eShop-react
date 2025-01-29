import { useQuery } from '@tanstack/react-query';
import axios, { Axios } from 'axios'
import React from 'react'

export default function useAllPrdoucts() {

    function getAllProducts()
    {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`) ; 
    }

    let allProductsInfo=useQuery({
        queryKey:['allProducts'],
        queryFn:getAllProducts,
        select:(data)=>data.data.data, 
        staleTime:30000
    })

    return allProductsInfo ; 
}
