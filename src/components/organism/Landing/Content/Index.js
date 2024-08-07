import React from "react";
import Image from "next/image";

export default function Index({ name, image, content }) {
  return (
    <div className="container mx-auto py-8 px-4 md:px-20">
      <div className="flex flex-col gap-8 mt-20">
        <h1 className="text-4xl lg:text-5xl text-center font-extrabold text-gray-800 dark:text-white leading-tight">
          {name}
        </h1>
        <div className="flex justify-center">
          <Image
            src={image}
            alt="image"
            width={800}
            height={450}
            className="object-cover w-full rounded-lg shadow-lg md:w-[80%]"
          />
        </div>
        <div
          className="prose prose-lg dark:prose-dark md:px-16 max-w-none leading-relaxed text-justify"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </div>
    </div>
  );
}
