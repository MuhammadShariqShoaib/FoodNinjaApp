import React from 'react';

export default function Navbar() {
    return (
        <div>
            <div>
                <nav className="col-span-2">
                    <div>
                        <h1 className="font-bold ml-2 uppercase p-4 border-b border-gray-100">
                            <a href="/">Food Ninja</a>
                        </h1>
                    </div>
                    <ul className="ml-2 p-4 space-y-28">
                        <li className="text-gray-700 font-bold">
                            <a href="#">
                                <div className='mt-6'>
                                    Home
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    About
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    Contact-
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
