import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";

// Dynamically import the Carousel component
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3,
    },
    mobile: {
        breakpoint: { max: 767, min: 350 },
        items: 1,
        slidesToSlide: 1,
    },
};

export default function Index({ data }) {
    return (
        <div className="h-screen">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .3s"
                transitionDuration={300}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {data.carousel.data.map((item, index) => (
                    <div
                        key={index}
                        // className="flex items-center justify-center w-screen h-auto md:w-full md:h-96"
                        className="flex items-center justify-center w-full h-48 md:h-screen"
                    >
                        <Image
                            className="w-full h-full object-cover md:w-full md:h-auto"
                            src={item.image.preview}
                            alt={`Image ${index + 1}`}
                            // layout="responsive"
                            width={500}
                            height={500}
                            quality={70}
                            priority={index === 0} // Priority load the first image
                        />
                    </div>
                ))}
            </Carousel>
            <p className="text-left md:text-center p-6 mt-4 md:text-xl">
                {data.show.description}
            </p>
        </div>
    );
}
