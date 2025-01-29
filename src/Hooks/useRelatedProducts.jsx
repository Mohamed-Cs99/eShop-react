import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

export default function useRelatedProducts() {
 
    let {category} = useParams() ; 

    function getAllRelated() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    }

    let RelatedProductInfo = useQuery(
        {
            queryKey:["relatedProducts"],
            queryFn:getAllRelated , 
            select:(data)=>data.data.data.filter((x)=>x.category.name ==category),
    
        }
    )

    return RelatedProductInfo ;     
}
