import React from 'react';

export default function Cards() {
    return (

        <div className="px-16 py-6 bg-gray-100 col-span-2">
            <main>
                <div class="text-red-600 flex justify-end">
                    <a href="#" class="btn ">Log in</a>
                    <a href="#" class="ml-2 btn ">Sign up</a>
                </div>
                <header>
                    <h2 class="text-gray-700 text-5xl font-semibold">Recipies</h2>
                    <h3 class="text-2xl font-semibold ">For Ninjas</h3>
                </header>
            </main>
            <div>
                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
            </div>
            
            <div className="mt-8 grid lg:grid-cols-3 gap-10">
                {/* sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 */}
                {/* Replace the following code with your recipe cards */}
                <div className="card">
                    <img src="food1.jpg" alt="" className="w-full h-48 sm:h-48 object-cover" />
                    <div className="m-4">
                        <span className="font-bold">5 bean chili sticks</span>
                        <span className="block text-gray-500 text-sm">Recipe by me</span>
                    </div>
                </div>

                <div className="card">
                    <img src="food2.jpg" alt="" className="w-full h-48 sm:h-48 object-cover" />
                    <div className="m-4">
                        <span className="font-bold">Yubari King Melons </span>
                        <span className="block text-gray-500 text-sm">Recipe by me</span>
                    </div>
                </div>

                <div className="card">
                    <img src="food3.jpg" alt="" className="w-full h-48 sm:h-48 object-cover" />
                    <div className="m-4">
                        <span className="font-bold">Spanish Iberian Ham</span>
                        <span className="block text-gray-500 text-sm">Recipe by me</span>
                    </div>
                </div>


            </div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
            <div className="mt-8">
                {/* Add your most popular recipes here */}
            </div>
            <div class="flex justify-center">
                <div class=" btn max-w-fit hover:shadow-inner">
                    Load more
                </div>
            </div>
        </div>
    );
}
