import React from 'react';

export default function Navbar() {
    return (
        <div>

            <div>
                <h3 className="font-bold md:flex md:justify-end uppercase p-4 border-b border-gray-100">
                    <a href="/" class="hover:text-gray-600">Food Ninja</a>
                </h3>
            </div>
            <nav className="col-span-2 md:flex md:justify-end">
                <ul className="p-4 ml-2 space-y-20">
                    <li className="text-gray-700 font-bold">
                        <a href="#">
                            <span className='mt-12 px-4 flex justify-end border-r-4 border-red-600'>
                                Home
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                </svg>

                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <span className='mt-6 px-4 flex justify-end border-r-4 border-white-600'>
                                About
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>

                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <span className='mt-6 px-4 flex justify-center border-r-4 border-white-600'>
                                Contact
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                            </span>
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    );
}
