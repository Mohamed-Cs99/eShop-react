import React, { useContext, useEffect, useState } from 'react';
import style from './Cart.module.css';
import { CartContext } from '../../Context/CartContext';
import cartImage from '../../assets/emptyCart.webp';
import toast from 'react-hot-toast';

export default function Cart() {
    const [cartDetails, setCartDetails] = useState(null);
    const { getCartItems, updateCartQantity, removeCartItem, clearCartItems } = useContext(CartContext);

    async function getCartDetails() {
        let response = await getCartItems();
        if (response.data.status == "success") {
            setCartDetails(response.data.data);
        }
    }

    async function updateCart(prId, nwC) {
        let response = await updateCartQantity(prId, nwC);
        if (response.data.status == "success") {
            setCartDetails(response.data.data);
            toast.success("Product Quantity Updated Successfully...")
        }
    }

    async function deleteProduct(prId) {
        let response = await removeCartItem(prId);
        if (response.data.status == "success") {
            setCartDetails(response.data.data);
            toast.error("Product Deleted...")
        }
    }

    async function removeAllProducts() {
        let response = await clearCartItems();
        if (response.data.message == "success") {
            setCartDetails(null);
        }
    }

    useEffect(() => { getCartDetails(); }, []);

    return (
        <>
            {cartDetails?.products.length > 0 ? <>
                <h1 className='text-center text-slate-600 font-serif font-bold text-2xl my-3'>
                    Total Cart Price: <span className='text-black font-sans'>${cartDetails?.totalCartPrice}</span>
                </h1>
                <div className={style["table-container"]}>
                    <table className={style.table}>
                        <thead>
                            <tr>
                                <th scope="col" className="px-16 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">Product</th>
                                <th scope="col" className="px-6 py-3">Qty</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartDetails?.products?.map((product) => (
                                <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4" data-label="Image">
                                        <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Product Image" />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white" data-label="Product">
                                        {product.product.title}
                                    </td>
                                    <td className="px-6 py-4" data-label="Qty">
                                        <div className="flex items-center justify-center">
                                            <button onClick={() => { updateCart(product.product.id, product.count - 1) }} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <div><span>{product.count}</span></div>
                                            <button onClick={() => { updateCart(product.product.id, product.count + 1) }} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white" data-label="Price">
                                        ${product.price * product.count}
                                    </td>
                                    <td className="px-6 py-4" data-label="Action">
                                        <a onClick={() => { deleteProduct(product.product.id) }} className="font-medium text-red-600 dark:text-red-500 cursor-pointer hover:underline">Remove</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='text-center py-2'>
                        <button onClick={() => { removeAllProducts() }} className='bg-red-500 text-white font-extrabold p-3 rounded-lg font-serif'>Clear Cart</button>
                    </div>
                </div>
            </> : (
                <div className='h-screen flex justify-center items-center'>
                    <img src={cartImage} alt="Empty Cart Image" />
                </div>
            )}
        </>
    );
}
