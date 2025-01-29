import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

export default function useCategories() {

    function getCategories() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    }


    let categoriesInfo = useQuery({
        queryKey:['allCategories'], 
        queryFn:getCategories, 
        select:(data)=>data.data.data,
        staleTime:30000
    })

 

    return categoriesInfo ; 

}
