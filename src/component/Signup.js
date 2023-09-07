import React from 'react'
import { form } from '../data'
export default function Signup() {
    return (

        <div class=" flex justify-center items-center min-h-screen bg-gray-200  ">
            <div className="bg-white p-8 rounded shadow-md">
                <div className='text-center'>
                    <h1 className="text-4xl font-semibold " >ping pong</h1>
                    <hr className="my-4 border-t-2 border-gray-300" />
                </div>

                <div className="text-center mb-6">
                    <h2 className="text-2xl  font-semibold">Sign up</h2>
                </div>

                <form className="space-y-4">
                    {form.map((user) => (

                        <div>

                            <input
                                key={user.key}
                                type={user.text}
                                class="inp"
                                placeholder={user.placeholder}
                            />
                        </div>
                    ))}


                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-blue-700 focus:outline-none"
                    >
                        Create Account
                    </button>
                </form>
                <div className="mt-6 flex justify-center space-x-4">
                    <span className="text-blue-600 cursor-pointer">
                        <p className="font-body">  By signing up, you agree to the Terms of <u className='text-gray-600'>Service</u> and <u className='text-gray-600'>Privacy Policy</u></p>
                    </span>
                </div>

            </div>
        </div>

    )
}
