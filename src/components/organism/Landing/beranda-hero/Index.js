import React from "react";
import Image from "next/image";

export default function Index() {
    return (
        <div className="w-full h-screen">
            <Image
                src="/images/balai-karangjati.jpg"
                alt="Kelurahan Karanganyar"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-6 md:p-20">
                <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
                    Selamat Datang di Kelurahan Karangjati
                </h1>
                <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
                    Kami berkomitmen memberikan informasi terbaik tentang
                    kelurahan kami.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-3 transition-transform transform hover:scale-105">
                    Lebih Lanjut
                </button>
            </div>
        </div>
    );
}
