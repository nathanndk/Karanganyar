import React from "react";

export default function Index() {
    return (
        <div className="relative w-full h-[30vh]">
            {/* Map Section */}
            <div className="absolute inset-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.783032401142!2d110.75708051432704!3d-7.556497876821336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5a34d2c3a49b%3A0x8e4a09af17ab7a82!2sKaranganyar%2C%20Kec.%20Karanganyar%2C%20Kabupaten%20Karanganyar%2C%20Jawa%20Tengah%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1624723137386!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    className="border-0"
                    allowFullScreen=""
                    loading="lazy"
                    title="Peta Kantor Kelurahan Karanganyar"
                ></iframe>
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
                <h1 className="text-lg lg:text-2xl font-bold mb-3 text-white text-center">
                    <span className="block">Peta Lokasi</span>
                    <span className="text-white">Kelurahan Karanganyar</span>
                </h1>
                <p className="mb-4 text-gray-200 text-sm lg:text-base text-center max-w-md">
                    Berikut adalah peta lokasi Kelurahan Karanganyar, Kecamatan
                    Karanganyar, Kabupaten Karanganyar, Jawa Tengah.
                </p>
                <a
                    href="https://www.google.com/maps/dir//Kantor+Kelurahan+Karanganyar/@-7.5564979,110.7570805,15z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 transition-colors duration-300"
                >
                    Lihat di Google Maps
                </a>
            </div>
        </div>
    );
}
