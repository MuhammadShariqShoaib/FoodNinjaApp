import React, { useState } from 'react';
import { imageW } from '../data'

export default function Card(props) {

    const [isHovered, setIsHovered] = useState(false);
    const x = imageW.length;
    const [isClk, setIsClk] = useState('');
    const zoomIn = () => {
        setIsHovered(true);

        setIsClk(isClk - 1);


    }

    const zoomOut = () => {
        setIsHovered(false);
    }
    const imageStyle = {
        transform: isHovered ? 'scale(2.1)' : 'scale(1)',
        transition: 'transform 2.9s ease',

    };
    return (
        <div>

            <div className="card relative h-[275px] " >
                <img
                    onMouseOver={zoomIn}    // Mouse hover event for zoomIn on desktop
                    onTouchStart={zoomIn}   // Touch event for zoomIn on mobile
                    onMouseOut={zoomOut}    // Mouse hover out event for zoomOut on desktop
                    onTouchEnd={zoomOut}    // Touch event for zoomOut on mobile
                    style={imageStyle}
                    src={process.env.PUBLIC_URL + '/' + props.src}
                    alt=""
                    className="w-full h-48 sm:h-48 object-cover"
                />

                <div class="absolute  px-0 py-0 w-full ">
                    <h1 class="text-black font-semibold text-1xl "> {isHovered && (
                        <div className="flex justify-between ">
                            {imageW.filter(item => item.id === 1).map((item) => (
                                <div key="user.id">
                                    <p><strong>Name:</strong> {item.name}</p>
                                    <p><strong>Location:</strong> {item.location}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    </h1>
                </div>
                {!isHovered && (
                    <div className="m-4">
                        <span className="font-bold">{props.name}</span>
                        <span className="block text-gray-500 text-sm">{props.desc}</span>
                    </div>
                )}
            </div>


        </div>
    );
}