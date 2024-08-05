import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandTwitter,
    IconBrandYoutube,
} from "@tabler/icons-react";

export default function Index({ data }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-orange-500 dark:bg-gray-900 px-6 lg:px-20 text-black">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 w-full md:w-1/3">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                className="mr-3"
                                alt="Logo Kelurahan karangjati"
                                width={40}
                                height={40}
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
                                Kelurahan karangjati
                            </span>
                        </Link>
                        <p className="mt-2 text-black dark:text-gray-400">
                            {data.address}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 lg:gap-16 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-black dark:text-white">
                                Shortlink
                            </h2>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline">
                                        Beranda
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        href="/sejarah"
                                        className="hover:underline"
                                    >
                                        Sejarah
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        href="/potensi"
                                        className="hover:underline"
                                    >
                                        Potensi
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        href="/kegiatan"
                                        className="hover:underline"
                                    >
                                        Kegiatan
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        href="/berita"
                                        className="hover:underline"
                                    >
                                        Berita
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-black dark:text-white">
                                Sosial Media
                            </h2>
                            <ul className="font-medium">
                                {data.instagram && (
                                    <li className="mb-4">
                                        <Link
                                            href={data.instagram}
                                            className="hover:underline flex items-center"
                                        >
                                            Instagram
                                        </Link>
                                    </li>
                                )}
                                {data.twitter && (
                                    <li className="mb-4">
                                        <Link
                                            href={data.twitter}
                                            className="hover:underline flex items-center"
                                        >
                                            Twitter
                                        </Link>
                                    </li>
                                )}
                                {data.facebook && (
                                    <li className="mb-4">
                                        <Link
                                            href={data.facebook}
                                            className="hover:underline flex items-center"
                                        >
                                            Facebook
                                        </Link>
                                    </li>
                                )}
                                {data.tiktok && (
                                    <li className="mb-4">
                                        <Link
                                            href={data.tiktok}
                                            className="hover:underline flex items-center"
                                        >
                                            Tiktok
                                        </Link>
                                    </li>
                                )}
                                {data.youtube && (
                                    <li className="mb-4">
                                        <Link
                                            href={data.youtube}
                                            className="hover:underline flex items-center"
                                        >
                                            Youtube
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-black dark:text-white">
                                Kontak
                            </h2>
                            <ul className="font-medium">
                                {data.email && (
                                    <li className="mb-4">
                                        <Link
                                            href={`mailto:${data.email}`}
                                            className="hover:underline"
                                        >
                                            {data.email}
                                        </Link>
                                    </li>
                                )}

                                {data.phone && (
                                    <li className="mb-4">
                                        <Link
                                            href={`tel:${data.phone}`}
                                            className="hover:underline"
                                        >
                                            {data.phone}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-black sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center text-black dark:text-gray-400">
                        © {currentYear}{" "}
                        <Link href="/" className="hover:underline">
                            Kelurahan karangjati
                        </Link>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        {data.instagram && (
                            <Link
                                href={data.instagram}
                                className="text-black hover:text-white me-5"
                            >
                                <IconBrandInstagram className="w-5 h-5" />
                                <span className="sr-only">Instagram page</span>
                            </Link>
                        )}
                        {data.twitter && (
                            <Link
                                href={data.twitter}
                                className="text-black hover:text-white me-5"
                            >
                                <IconBrandTwitter className="w-5 h-5" />
                                <span className="sr-only">Twitter page</span>
                            </Link>
                        )}
                        {data.facebook && (
                            <Link
                                href={data.facebook}
                                className="text-black hover:text-white me-5"
                            >
                                <IconBrandFacebook className="w-5 h-5" />
                                <span className="sr-only">Facebook page</span>
                            </Link>
                        )}
                        {data.tiktok && (
                            <Link
                                href={data.tiktok}
                                className="text-black hover:text-white me-5"
                            >
                                <IconBrandTiktok className="w-5 h-5" />
                                <span className="sr-only">Tiktok account</span>
                            </Link>
                        )}
                        {data.youtube && (
                            <Link
                                href={data.youtube}
                                className="text-black hover:text-white me-5"
                            >
                                <IconBrandYoutube className="w-5 h-5" />
                                <span className="sr-only">Youtube account</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}
