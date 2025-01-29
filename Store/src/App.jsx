import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Categories from './Components/Categories/Categories';
import Notfound from './Components/Notfound/Notfound';
import Products from './Components/Products/Products';
import Brands from './Components/Brands/Brands';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import UserTokenProvider from './Context/UserToken'
import Guard from './Components/Guard/Guard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CategoryProudcts from './Components/CategoryProudcts/CategoryProudcts';
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast';
import ProductDetails from './Components/ProductDetails/ProductDetails';



let query = new QueryClient();

let x = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Guard> <Home /></Guard> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "products", element: <Guard> <Products /></Guard> },
      { path: "productdetails/:id/:category", element: <Guard> <ProductDetails/></Guard> },
      { path: "cart", element: <Guard><Cart /></Guard> },
      { path: "categories", element: <Guard><Categories /></Guard> },
      { path: "category/:name", element: <Guard><CategoryProudcts /></Guard> },
      { path: "brands", element: <Guard><Brands /> </Guard> },
      { path: "profile", element: <Guard> <Profile /></Guard> },
      { path: "settings", element: <Guard><Settings /></Guard> },
      { path: "*", element: <Notfound /> }
    ]
  }
])


function App() {


  return (
    <>
      <UserTokenProvider>
        <CartContextProvider>
          <QueryClientProvider client={query}>
            <Toaster/> 
            <RouterProvider router={x}></RouterProvider>
            <ReactQueryDevtools></ReactQueryDevtools>
          </QueryClientProvider>
        </CartContextProvider>
      </UserTokenProvider>

    </>
  )
}

export default App
