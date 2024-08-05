import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import "moment/locale/id";

export default function Index({ data }) {
    // const articles = [
    //     {
    //         title: "Lomba Memasak Kelurahan Karanganyar",
    //         date: "2024-02-20",
    //         image: "/images/Hero.jpeg", // Ensure this path is correct
    //         author: "Sgit Kusmantoro",
    //         views: 444,
    //     },
    //     {
    //         title: "PIN POLID 2",
    //         date: "2024-02-19",
    //         image: "/images/Hero.jpeg", // Ensure this path is correct
    //         author: "Sgit Kusmantoro",
    //         views: 297,
    //     },
    //     {
    //         title: "Pendistribusian Kotak Suara Pemilu 2024",
    //         date: "2024-02-12",
    //         image: "/images/Hero.jpeg", // Ensure this path is correct
    //         author: "Sgit Kusmantoro",
    //         views: 209,
    //     },
    // ];

    return (
        <div className="bg-white py-10">
            <div className="container mx-auto px-6 md:px-20">
                <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                    <h1 className="text-3xl lg:text-5xl text-orange-500 dark:text-white font-bold mb-5 md:mb-0">
                        Berita <span className="text-black">Terbaru</span>
                    </h1>
                    <p className="text-gray-500 text-xl text-center md:text-right">
                        Dapatkan berita terbaru dan informasi menarik dari kami
                    </p>
                </div>
                <div className="space-y-8">
                    {data.map((article, index) => (
                        <Link
                            key={index}
                            href={`/berita/detail?slug=${article.slug}`}
                        >
                            <div className="flex flex-col md:flex-row items-start bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-4">
                                <div className="relative w-full md:w-1/3 h-48">
                                    <Image
                                        src={article.image.preview}
                                        alt={article.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                                        unoptimized
                                    />
                                </div>
                                <div className="w-full md:w-2/3 p-4 md:p-6">
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                        {article.name}
                                    </h2>
                                    {/* render content */}
                                    <div
                                        className="prose prose-lg dark:prose-dark max-w-none"
                                        dangerouslySetInnerHTML={{
                                            __html: article.content,
                                        }}
                                    ></div>
                                    <br />
                                    <div className="text-gray-500 dark:text-gray-400 mb-2">
                                        <span className="block">
                                            {moment(article.created_at).format(
                                                "LL"
                                            )}
                                        </span>
                                    </div>
                                    {/* <p className="text-gray-500 dark:text-gray-400">
                                        Dilihat {article.views} kali
                                    </p> */}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <Link
                        href="/berita"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-3 transition-colors duration-300"
                    >
                        Show More
                    </Link>
                </div>
            </div>
        </div>
    );
}
