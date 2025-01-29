import React, { useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup'

export default function Register() {

    const [requestError, setRequestError] = useState("");
    const [requestSuccess, setrequestSuccess] = useState("");
    const [isLoading, setisLoading] = useState(false);

    let schema = Yup.object().shape({
        name: Yup.string().matches(/^[A-Za-z ]{5,15}$/, "Name must be from 5 to 15 chars ").required("Name is required"),
        email: Yup.string().email("Invalid Email").required("Email is required"),
        phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "Invalid Phone").required("Phone is required"),
        password: Yup.string().matches(/^[A-Za-z0-9]{5,15}$/, "Password must be character or a number from 5 to 15 .").required("Password is required"),
        rePassword: Yup.string().oneOf([Yup.ref("password")], "It doesn't match ").required("Cofirmation is required")
    })

    function handleRegistration(regForm) {

        setisLoading(true);

        axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, regForm)
            .then((res) => {
                setisLoading(false);
                setRequestError(null);
                setrequestSuccess(res.data.message);
            })
            .catch((res) => {
                setisLoading(false);
                setrequestSuccess(null);
                setRequestError(res.response.data.message);
            })

    }



    let formik = useFormik({
        initialValues:
        {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''
        },
        validationSchema: schema,
        onSubmit: handleRegistration,

    })


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign Up to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  ">
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div >
                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text"
                                    autoComplete="name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        {
                            (formik.errors.name && formik.touched.name) ? <div className=' bg-red-200 py-1 border font-semibold'>
                                <p>{formik.errors.name}</p>
                            </div> : null
                        }

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
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
                            <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
                                Phone
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text"
                                    autoComplete="phone"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        {
                            (formik.errors.phone && formik.touched.phone) ? <div className=' bg-red-200 py-1 border font-semibold'>
                                <p>{formik.errors.phone}</p>
                            </div> : null
                        }
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>

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
                        </div>
                        {
                            (formik.errors.password && formik.touched.password) ? <div className=' bg-red-200 py-1 border font-semibold'>
                                <p>{formik.errors.password}</p>
                            </div> : null
                        }
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="rePassword" className="block text-sm/6 font-medium text-gray-900">
                                    Confirmation Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="rePassword"
                                    name="rePassword"
                                    value={formik.values.rePassword}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="password"
                                    autoComplete="current-rePassword"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            {
                                (formik.errors.rePassword && formik.touched.rePassword) ? <div className=' bg-red-200 py-1 border font-semibold'>
                                    <p>{formik.errors.rePassword}</p>
                                </div> : null
                            }


                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {
                                    (isLoading) ? <i className=' fas fa-spinner fa-spin ' /> : ' Sign Up'
                                }

                            </button>


                            {
                                (requestError) ?
                                    <div className=' bg-red-200 py-1 border font-semibold mt-2'>
                                        <p>{requestError}</p>
                                    </div>
                                    : (requestSuccess) ?
                                        <div className=' bg-lime-400 py-1 border font-semibold mt-2'>
                                            <p>{requestSuccess} </p>
                                        </div>
                                        : null
                            }
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500 ">
                        Already Have Account ?
                        <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>


        </>

    );
}
