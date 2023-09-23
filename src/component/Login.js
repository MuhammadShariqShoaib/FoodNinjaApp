import React from 'react'
import { Link } from 'react-router-dom';
import { form } from '../data';


export default function Login() {
    return (

        <div class=" flex justify-center items-center min-h-screen bg-gray-200">


            <div className="bg-white p-8 rounded shadow-md">
                <div className='text-center'>
                    <h1 className="text-4xl font-semibold " >ping pong</h1>
                    <hr className="my-4 border-t-2 border-gray-300" />
                </div>

                <div className="text-center mb-6">
                    <h2 className="text-2xl  font-semibold">Welcome Back!</h2>
                </div>

                <form className="space-y-4">
                    {form.filter(user => user.id === 2 || user.id === 3).map((user) => (
                        <div>
                            <input
                                key={user.key}
                                type={user.type}
                                class="inp"
                                placeholder={user.placeholder}
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-6 flex justify-center space-x-4">
                    <Link to="/Signup" className="text-blue-600 cursor-pointer">
                        Don't have an account?
                    </Link>
                    <span className="text-gray-600 hover:text-blue-600 cursor-pointer">
                        Forgot Password
                    </span>
                </div>

            </div>
        </div>

    )
}