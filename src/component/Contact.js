import React from 'react'
import Navbar from './Navbar'

export default function Contact() {
    return (
        <div className=" grid grid-cols-3">
            <div className='span col-span-1 h-full overflow-hidden'>
                <Navbar />
            </div>
            <div className='flex justify-center font-semibold h-full col-span-2 text-black bg-slate-200'>
                0333121212<br></br>
                raajajdwad@gmail.xom
            </div>
        </div>

    )
}
