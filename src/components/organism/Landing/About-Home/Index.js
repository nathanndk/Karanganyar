import Image from "next/image";
import React from "react";

export default function Index({ data }) {
    return (
        <div id="about" className="container mx-auto px-4 py-8">
            <h1 className="text-2xl lg:text-4xl font-bold mt-12 mb-5 text-center text-black dark:text-white">
                Tentang <span className="text-orange-500">karangjatih</span>
            </h1>
            <div className="px-4 md:px-16">
                <Image
                    src="/images/FotoSampul.png"
                    alt="karangjatih"
                    width={800}
                    height={500}
                    className="w-full aspect-video object-cover rounded-lg"
                />
                {/* <iframe
                    src={data.url_video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full aspect-video object-cover rounded-lg"
                ></iframe> */}
            </div>
            <div className="text-center mb-4 mt-4">
                <p className="text-center md:text-2xl px-16">
                    {data.short_description}
                </p>
            </div>
        </div>
    );
}
