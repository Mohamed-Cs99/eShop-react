import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

export default function useCategoriesProducts() {

    let {name} = useParams(); 
   
    function getAllProducts() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    }
   
    let catProducts = useQuery({
        queryKey:['CategoryProducts'],
        queryFn:getAllProducts, 
        select:(data)=>data.data.data.filter((x)=>x.category.name == name),
        staleTime:3000
    })

    return catProducts ; 
}
