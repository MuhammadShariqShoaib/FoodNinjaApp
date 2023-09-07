import React from 'react';

export default function Card(props) {
    return (

        <div>
                <div className="card">
                    <img  src={props.src} alt="" className="w-full h-48 sm:h-48 object-cover" />
                    <div className="m-4">
                        <span className="font-bold">{props.name}</span>
                        <span className="block text-gray-500 text-sm">{props.desc}</span>
                    </div>
                </div>
        
        </div>
    );
}
