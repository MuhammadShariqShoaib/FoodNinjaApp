import React, { useState } from 'react';
import { nav } from '../data';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('')
    const changeBorder = (title) => {
        setActiveLink(title)
    }
    return (
        <div>
            <div>
                <h3 className="font-bold md:flex md:justify-end uppercase p-4 border-b border-gray-100">
                    <a href="/" className="hover:text-gray-600 ">Food Ninja</a>
                </h3>
            </div>
            <nav className="col-span-2 md:flex md:justify-end">
                <ul className="p-4 ml-2 space-y-20">
                    <li className="text-gray-700 font-bold">
                        {nav.map(user => (
                            <Link
                                key={user.id} to={`/` + user.title} onMouseOver={() => changeBorder(user.title)}>
                                
                                <span className={`mt-12 px-4 flex justify-end border-r-4  ${activeLink === user.title ? "border-red-700" : "border-gray-600"}`}>
                                    {user.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={user.logo} />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </li>
                </ul>
            </nav>
        </div>
    );
}
