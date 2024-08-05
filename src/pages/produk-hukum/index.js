import React from "react";
import Head from "next/head";
import Navbar from "@/components/molekuls/Navbar/index";
import { TextInput, Pagination } from "flowbite-react";
import { IconSearch } from "@tabler/icons-react";
import { Table } from "flowbite-react";
import api from "@/api/index";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Index({ data, params }) {
    const [filter, setFilter] = useState(params);
    const Router = useRouter();

    const onSearch = () => {
        // add params to this page
        Router.push({
            pathname: "/produk-hukum",
            query: { search: filter.search },
        });
    };
    const onPageChange = (page) => {
        Router.push({
            pathname: "/produk-hukum",
            query: { ...params, page },
        });
    };
    return (
        <>
            <Head>
                <title>Apa yang Kami Lakukan | karangjatih</title>
                <meta
                    name="description"
                    content="Pelajari tentang apa yang dilakukan oleh karangjatih, konsep, pendekatan, dan kegiatan terbaru yang dijalankan untuk pengembangan komunitas di Indonesia."
                />
                <meta
                    name="keywords"
                    content="karangjatih, apa yang kami lakukan, konsep, pendekatan, kegiatan, pengembangan komunitas, Indonesia"
                />
                <meta name="author" content="Tim karangjatih" />
                <meta
                    property="og:title"
                    content="Apa yang Kami Lakukan | karangjatih"
                />
                <meta
                    property="og:description"
                    content="Pelajari tentang apa yang dilakukan oleh karangjatih, konsep, pendekatan, dan kegiatan terbaru yang dijalankan untuk pengembangan komunitas di Indonesia."
                />
                <meta
                    property="og:url"
                    content="https://janjipraptiningsih.com"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://janjipraptiningsih.com/path-to-image.jpg"
                />
                <meta property="og:site_name" content="karangjatih" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Apa yang Kami Lakukan | karangjatih"
                />
                <meta
                    name="twitter:description"
                    content="Pelajari tentang apa yang dilakukan oleh karangjatih, konsep, pendekatan, dan kegiatan terbaru yang dijalankan untuk pengembangan komunitas di Indonesia."
                />
                <meta
                    name="twitter:image"
                    content="https://janjipraptiningsih.com/path-to-image.jpg"
                />
            </Head>
            <Navbar />
            <div className="container mx-auto px-2 md:px-4 lg:px-20 py-6">
                <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center gap-4 mt-20">
                    <h1 className="text-3xl font-bold text-center text-orange-500">
                        Produk
                        <span className="text-black"> Hukum</span>
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
                                        href="/kegiatan"
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
                <br />
                <br />
                <div className="overflow-x-auto">
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>
                                <div className="text-center">No</div>
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <div className="text-center">Nama</div>
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <div className="text-center">Tahun</div>
                            </Table.HeadCell>
                            <Table.HeadCell>
                                <div className="text-center">Aksi</div>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {data.law_products.map((item, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>
                                        <div className="text-center">
                                            {index + 1}
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>{item.name}</Table.Cell>
                                    <Table.Cell>
                                        <div className="text-center">
                                            {item.year}
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="flex justify-center items-center gap-2">
                                            <button
                                                onClick={() => {
                                                    const url =
                                                        item.file.preview;
                                                    const link =
                                                        document.createElement(
                                                            "a"
                                                        );
                                                    link.href = url;
                                                    link.download =
                                                        item.name + ".pdf";
                                                    document.body.appendChild(
                                                        link
                                                    );
                                                    link.click();
                                                    document.body.removeChild(
                                                        link
                                                    );
                                                }}
                                                href="#"
                                                className="inline-block flex flex-row items-center text-md h-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 h-auto"
                                            >
                                                Unduh
                                            </button>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const data = {};
    const params = context.query;
    params.limit = params.limit || 3;
    params.page = parseInt(params.page) || 1;
    params.search = params.search || "";
    const responsePotency = await api.get("/no-auth/law-products/list", params);

    // console.log(params);
    // console.log(responsePotency.data.data);
    data.law_products = responsePotency.data.data.data;
    return {
        props: {
            data,
            params,
        },
    };
};
