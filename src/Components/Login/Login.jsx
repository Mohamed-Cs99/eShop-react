import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import * as Yup from 'yup'
import axios, { Axios } from 'axios';

import { UserToken } from './../../Context/UserToken';
export default function Login() {

    let { userToken, setuserToken } = useContext(UserToken);

    let [loginError, setLoginError] = useState("");

    let navigate = useNavigate();

    function handleLogin(loginForm) {

        axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, loginForm)
            .then((res) => {
                if (res.data.message == "success") {
                    localStorage.setItem("storeToken", res.data.token);
                    setuserToken(res.data.token);
                    navigate("/");
                }

            })
            .catch((res) => {
                setLoginError(res.response.data.message);
            })
    }


    let schema = Yup.object().shape(
        {
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().matches(/^[A-Za-z0-9]{5,15}$/, "Password must be character or a number from 5 to 15 .").required("Password is required"),

        }
    )


    let formik = useFormik({
        initialValues:
        {
            email: '',
            password: ''
        }
        ,
        validationSchema: schema,
        onSubmit: handleLogin


    })

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    {/* <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  ">
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="email"

                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        {
                            (formik.errors.email && formik.touched.email) ? <div className=' bg-red-200 py-1 border font-semibold'>
                                <p>{formik.errors.email}</p>
                            </div> : null
                        }

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <NavLink className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </NavLink>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="password"

                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                            {
                                (formik.errors.password && formik.touched.password) ? <div className=' bg-red-200 py-1 border font-semibold mt-2'>
                                    <p>{formik.errors.password}</p>
                                </div> : null
                            }
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                        {
                            (loginError) ?
                                <div className=' bg-red-200 py-1 border font-semibold mt-2'>
                                    <p>{loginError}</p>
                                </div> : null
                        }
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{' '}
                        <Link to='/register' className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Register Now
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
