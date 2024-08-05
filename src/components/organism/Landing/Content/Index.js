import React from "react";
import Image from "next/image";

export default function Index({ name, image, content }) {
    return (
        <div className="container mx-auto py-8 px-4 md:px-20">
            <div className="flex flex-col gap-8 mt-20">
                <h1 className="text-3xl lg:text-6xl text-center font-bold text-gray-800 dark:text-white leading-tight">
                    {name}
                </h1>
                <Image
                    src={image}
                    alt="image"
                    width={800}
                    height={450}
                    className="object-contain w-full rounded-lg md:h-[500px]"
                />
                <div
                    className="prose prose-lg dark:prose-dark md:px-16 max-w-none"
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                ></div>
            </div>
        </div>
    );
}
