import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Index({ data }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-10">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl lg:text-6xl text-orange-500 dark:text-white font-bold mb-6">
              Potensi <span className="text-black">Kelurahan Karanganyar</span>
            </h1>
            <p className="text-gray-800 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              Kelurahan Karanganyar terletak di Kabupaten Karanganyar, Jawa
              Tengah, Indonesia. Kelurahan ini terkenal dengan kekayaan budaya
              dan sejarahnya, serta menjadi tujuan wisata budaya yang penting.
            </p>
            <Link href="#about" passHref>
              <button className="bg-orange-500 hover:bg-yellow-600 text-white font-semibold rounded-lg px-6 py-3 transition-colors duration-300">
                Telusuri
              </button>
            </Link>
          </div>

          <div className="w-full md:w-1/2 h-80 md:h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/kelurahan-karanganyar.jpg"
                alt="Potensi Kelurahan Karanganyar"
                layout="intrinsic"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
