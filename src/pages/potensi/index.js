import React, { useState } from "react";
import Navbar from "@/components/molekuls/Navbar/index";
import api from "@/api/index";
import moment from "moment";
import "moment/locale/id";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import { TextInput, Pagination } from "flowbite-react";
import { IconSearch } from "@tabler/icons-react";
import truncate from "html-truncate";

export default function Index({ data, params }) {
    const [filter, setFilter] = useState(params);
    const Router = useRouter();

    const onSearch = () => {
        // add params to this page
        Router.push({
            pathname: "/potensi",
            query: { search: filter.search },
        });
    };
    const onPageChange = (page) => {
        Router.push({
            pathname: "/potensi",
            query: { ...params, page },
        });
    };

    return (
        <>
            <Head>
                <title>Temukan Potensi | karangjatih</title>
                <meta
                    name="description"
                    content="Cari Potensi Desa Karangjati"
                />
                <meta
                    name="keywords"
                    content="Potensi, ekonomi, sosial, budaya, desa, Karangjati, Sragen, Jawa Tengah"
                />
                <meta name="author" content="karangjatih" />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="Temukan Potensi | karangjatih"
                />
                <meta
                    property="og:description"
                    content="Cari Potensi menarik dari Desa Karangjati"
                />
                <meta property="og:image" content="/images/visi-misi.jpg" />
                <meta
                    property="og:url"
                    content="https://janjipraptiningsih.com/Potensi"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Temukan Potensi | karangjati"
                />
                <meta
                    name="twitter:description"
                    content="Cari Potensi menarik dan informatif tentang berbagai topik di sini. Temukan informasi yang Anda butuhkan dengan mudah."
                />
                <meta name="twitter:image" content="/images/visi-misi.jpg" />
                <link
                    rel="canonical"
                    href="https://janjipraptiningsih.com/Potensi"
                />
            </Head>
            <Navbar />
            <div className="container mx-auto py-6 px-4 md:px-20">
                <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center gap-4 mt-20">
                    <h1 className="text-3xl font-bold text-center text-orange-500">
                        Potensi Desa
                    </h1>

                    <div className="flex flex-row items-center gap-2 w-full md:w-auto">
                        <div className="relative w-full">
                            <TextInput
                                placeholder="Cari"
                                value={filter.search}
                                onChange={(e) => {
                                    setFilter({
                                        search: e.target.value,
                                    });
                                }}
                            />
                            <div class="absolute top-0 end-0 flex h-full">
                                {filter.search && (
                                    <Link
                                        href="/potensi"
                                        class="flex items-center pe-3"
                                        onClick={() =>
                                            setFilter({ search: "" })
                                        }
                                    >
                                        <div>
                                            <svg
                                                class="w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 14"
                                            >
                                                <path
                                                    stroke="black"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                />
                                            </svg>
                                            <span class="sr-only">
                                                Close modal
                                            </span>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div>
                            <button
                                href="#"
                                className="inline-block flex flex-row items-center text-md h-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 h-auto"
                                onClick={onSearch}
                            >
                                <IconSearch />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {data.potency.data.map((article) => (
                        <Link
                            href={`/potensi/detail?slug=${article.slug}`}
                            key={article.id}
                        >
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <Image
                                    src={article.image.preview}
                                    alt={article.name}
                                    className="w-full object-cover h-64"
                                    width={500}
                                    height={280}
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        {article.name}
                                    </h2>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                                        {moment(article.created_at).format(
                                            "LL"
                                        )}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex overflow-x-auto sm:justify-center">
                    <Pagination
                        currentPage={params.page}
                        totalPages={data.potency.totalPage}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
        </>
    );
}

const truncateHtml = (html, maxLength) => {
    return truncate(html, maxLength, { ellipsis: "..." });
};

export const getServerSideProps = async (context) => {
    const data = {};
    const params = context.query;
    params.category_code = "potency";
    params.limit = params.limit || 3;
    params.page = parseInt(params.page) || 1;
    params.search = params.search || "";
    const responsePotency = await api.get("/no-auth/gallery/list", params);

    responsePotency.data.data.data.map((article) => {
        article.content = truncateHtml(article.content, 50);
    });

    data.potency = responsePotency.data.data;
    return {
        props: {
            data,
            params,
        },
    };
};
