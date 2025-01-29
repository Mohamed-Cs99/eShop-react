import { createContext } from "react";

import axios from "axios";


export let CartContext = createContext();


export default function CartContextProvider(props) {

    let headers = { token: localStorage.getItem("storeToken") }

    function addProductToCart(productId) {
        return axios
            .post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId: productId }, { headers })
            .then((res) => res)
            .catch((err) => err);

    }

    function getCartItems() {
        return axios
            .get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
            .then((res) => res)
            .catch((err) => err)
    }

    function updateCartQantity(productId, nwCount) {
        return axios
            .put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { count: nwCount }, { headers })
            .then((res) => res)
            .catch((err) => err);

    }

    function removeCartItem(productId) {
        return axios
            .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { headers })
            .then((res) => res)
            .catch((err) => err);
    }

    function clearCartItems() {
        return axios
            .delete(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
            .then((res) => res)
            .catch((err) => err);
    }



    return <CartContext.Provider value={{ addProductToCart, getCartItems, updateCartQantity, removeCartItem,clearCartItems }}>
        {props.children}
    </CartContext.Provider>
}