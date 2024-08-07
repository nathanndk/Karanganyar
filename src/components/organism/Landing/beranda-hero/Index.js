import React from "react";
import Image from "next/image";
import Head from "next/head";

export default function Index() {
  return (
    <div className="w-full h-screen relative">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Image
        src="/images/kelurahan-karanganyar.jpg"
        alt="Kelurahan Karanganyar"
        layout="fill"
        objectFit="cover"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-6 md:p-20">
        <h1
          className="text-4xl md:text-5xl text-white font-bold mb-4"
          style={{ fontFamily: "Inter, sans-serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Selamat Datang di Kelurahan Karanganyar
        </h1>
        <p
          className="text-white text-lg md:text-xl mb-6 max-w-2xl"
          style={{ fontFamily: "Inter, sans-serif", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
        >
          Kami berkomitmen memberikan informasi terbaik tentang kelurahan kami.
        </p>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-3 transition-transform transform hover:scale-105"
          style={{ fontFamily: "Inter, sans-serif", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
        >
          Lebih Lanjut
        </button>
      </div>
    </div>
  );
}
