import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function Index() {
    return (
        <div className="container mt-20 md:mt-48 mx-auto px-6 md:px-20">
            <h1 className="text-3xl lg:text-5xl text-blue-500 text-center dark:text-white font-bold mb-5 lg:mb-8">
                Berita Terbaru
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {/* {data.activities.data.map((activity) => ( */}
                <Link href="">
                    <div className="bg-white rounded-lg shadow-lg">
                        <Image
                            src="/images/Hero.jpeg"
                            alt="image"
                            className="w-full aspect-video object-cover rounded-t-lg"
                            width={500}
                            height={500}
                        />
                        <div className="p-4">
                            <h1 className="text-lg text-center font-semibold text-gray-800 dark:text-white">
                                Pelayanan Pembuatan KTP
                            </h1>
                        </div>
                    </div>
                </Link>
                <Link href="">
                    <div className="bg-white rounded-lg shadow-lg">
                        <Image
                            src="/images/Hero.jpeg"
                            alt="image"
                            className="w-full aspect-video object-cover rounded-t-lg"
                            width={500}
                            height={500}
                        />
                        <div className="p-4">
                            <h1 className="text-lg text-center font-semibold text-gray-800 dark:text-white">
                                Pelayanan Pembuatan KTP
                            </h1>
                        </div>
                    </div>
                </Link>
                <Link href="">
                    <div className="bg-white rounded-lg shadow-lg">
                        <Image
                            src="/images/Hero.jpeg"
                            alt="image"
                            className="w-full aspect-video object-cover rounded-t-lg"
                            width={500}
                            height={500}
                        />
                        <div className="p-4">
                            <h1 className="text-lg text-center font-semibold text-gray-800 dark:text-white">
                                Pelayanan Pembuatan KTP
                            </h1>
                        </div>
                    </div>
                </Link>
                {/* ))} */}
            </div>
        </div>
    );
}
