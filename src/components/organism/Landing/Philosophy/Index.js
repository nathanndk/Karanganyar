import Image from "next/image";
import React from "react";

export default function Index({ data }) {
    return (
        <div className=" bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl lg:text-4xl text-black dark:text-white font-bold mb-5 lg:mb-5 text-center">
                    <span className="text-orange-500">Filosofi</span>{" "}
                    <span className="text-black">Kami</span>
                </h1>
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-16 p-6 md:p-0">
                    <div className="w-full md:w-1/3 flex flex-col items-center lg:items-center">
                        <Image
                            src={data.image.preview}
                            alt="filosofi"
                            className="md:h-72 rounded-lg object-contain aspect-square"
                            width={720}
                            height={480}
                            quality={70}
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
