import React from "react";

export default function Index({ data }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-gradient-to-l from-orange-300 via-orange-100 to-white rounded-lg p-6 shadow-lg">
                <h1 className="text-xl lg:text-3xl text-black dark:text-white font-bold mb-4 lg:mb-6 text-left">
                    <span className="text-orange-500">{data.first_quote}</span>
                </h1>

                <h2 className="text-lg lg:text-2xl text-black dark:text-white font-semibold mb-3 lg:mb-4 text-left">
                    <span className="text-black">{data.second_quote}</span>
                </h2>
            </div>
        </div>
    );
}
