
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useBrands() {


    function getAllBrands() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    }

    let brandsInfo = useQuery(
        {
            queryKey: ['Brands'],
            queryFn: getAllBrands,
            select: (data) => data.data.data,

        }
    )
     
    return brandsInfo ; 

}
