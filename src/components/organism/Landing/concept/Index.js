import Image from "next/image";
import React from "react";

export default function Index({ data }) {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl lg:text-4xl text-black dark:text-white font-bold mt-16 mb-5 lg:mb-5 text-center">
                    <span className="text-black">Konsep</span>{" "}
                    <span className="text-orange-500">
                        Kreatif dan Interaktif
                    </span>
                </h1>
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-16 mt-10 p-6 md:p-0">
                    <div className="w-full md:w-1/3 flex flex-col items-center lg:items-center">
                        <Image
                            src={data.image.preview}
                            alt={data.name}
                            className="h-60 md:h-64 aspect-video rounded-lg object-cover"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <p className="mb-4 text-left md:text-xl">
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
