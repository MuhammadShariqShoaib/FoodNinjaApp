import React ,{useState} from 'react'
import Card from './Card'
import {data} from '../data';
import { Link } from 'react-router-dom';
export default function Menu() {
    const [visibleRecipes, setVisibleRecipes] = useState(3);
    const totalRecipes = data.length;
    const showMore=()=>{
        setVisibleRecipes(visibleRecipes + 3); 
    }
    const showLess=()=>{
        setVisibleRecipes(visibleRecipes - 3); 
    }
    return (
        <div className="px-16 py-6 bg-gray-100 col-span-2">

            <div>

                <div class="text-black flex justify-end">
                    <Link to="/Login" class="btn ">Log in</Link>
                    <Link to="/Signup" class="ml-2 btn ">Sign up</Link>
                </div>
                <div>
                    <h2 class="text-gray -700 text-5xl font-semibold">Recipies</h2>
                    <h3 class="text-2xl font-semibold ">For Ninjas</h3>
                </div>
            </div>
            <div>
                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
            </div>
            <div className="mt-8 grid lg:grid-cols-3 gap-10">
                {data.slice(0, visibleRecipes).map((user) => (
                    <Card key={user.id}  src={user.src} name={user.name} desc={user.desc} />

                ))}
            </div>

            <div className="mt-8">
                {/* Add your most popular recipes here */}
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
            </div>
            <div class="flex justify-center">
            {visibleRecipes < totalRecipes &&( 
                <button class=" btn max-w-fit hover:shadow-inner hover:text-2xl " onClick={showMore}>
                    Load more
                </button>
                )}
                {!(visibleRecipes < totalRecipes) &&( 
                <button class=" btn max-w-fit hover:shadow-inner hover:text-2xl" onClick={showLess}>
                    Show less
                </button>
                )}
            </div>
        </div>
    )
}
