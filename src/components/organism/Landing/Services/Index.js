import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function Index() {
    return (
        <div className="container mt-10 md:mt-0 mx-auto px-6 md:px-20 mt-20">
            <h1 className="text-3xl lg:text-5xl text-blue-500 text-center dark:text-white font-bold mb-5 lg:mb-8">
                Layanan Kami
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {/* {data.activities.data.map((activity) => ( */}
                <Link href="">
                    <div className="bg-white rounded-lg shadow-lg flex flex-row">
                        <Image
                            src="/images/laptop.png"
                            alt="image"
                            className="w-20 h-20 object-cover rounded-lg"
                            width={500}
                            height={500}
                        />
                        <div className="p-4 flex flex-col">
                            <h1 className="text-lg text-center font-semibold text-gray-800 dark:text-white">
                                Pelayanan Pembuatan KTP
                            </h1>
                            <p>Tata Cara Pembuatan KTP</p>
                        </div>
                    </div>
                </Link>
                <Link href="">
                    <div className="bg-white rounded-lg shadow-lg flex flex-row">
                        <Image
                            src="/images/laptop.png"
                            alt="image"
                            className="w-20 h-20 object-cover rounded-lg"
                            width={500}
                            height={500}
                        />
                        <div className="p-4 flex flex-col">
                            <h1 className="text-lg text-center font-semibold text-gray-800 dark:text-white">
                                Pelayanan Pembuatan KTP
                            </h1>
                            <p>Tata Cara Pembuatan KTP</p>
                        </div>
                    </div>
                </Link>
                <Link href="">
                    <div className="bg-white rounded-lg shadow-lg flex flex-row">
                        <Image
                            src="/images/laptop.png"
                            alt="image"
                            className="w-20 h-20 object-cover rounded-lg"
                            width={500}
                            height={500}
                        />
                        <div className="p-4 flex flex-col">
                            <h1 className="text-lg text-center font-semibold text-gray-800 dark:text-white">
                                Pelayanan Pembuatan KTP
                            </h1>
                            <p>Tata Cara Pembuatan KTP</p>
                        </div>
                    </div>
                </Link>
                {/* ))} */}
            </div>
        </div>
    );
}
