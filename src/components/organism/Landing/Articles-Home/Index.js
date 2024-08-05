import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 5,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1200, min: 768 },
        items: 3,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 767, min: 500 },
        items: 2,
        slidesToSlide: 1,
    },
    mini: {
        breakpoint: { max: 500, min: 300 },
        items: 1,
        slidesToSlide: 1,
    },
};

export default function Index({ data }) {
    return (
        <div className="bg-gray-100 py-12 px-4 flex flex-col gap-10">
            <h1 className="text-2xl lg:text-4xl text-black dark:text-white font-bold mb-5 lg:mb-5 text-center">
                <span className="text-black">Kegiatan yang</span>{" "}
                <span className="text-orange-500">Kami Selenggarakan</span>
            </h1>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                partialVisible={true}
                infinite={true}
                containerClass="md:px-4 lg:px-8"
                itemClass=""
                buttonClass=""
            >
                {data.map((data, index) => {
                    return (
                        <div
                            className="flex flex-col items-center justify-center md:w-56"
                            key={index}
                        >
                            <Image
                                src={data.image.preview}
                                alt={data.name}
                                className="rounded-lg object-contain aspect-[3/4] h-64"
                                width={500}
                                height={500}
                            />
                            <div className="mt-10 text-center">
                                <p className="text-lg font-semibold text-gray-800 mb-5">
                                    {data.name}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}
