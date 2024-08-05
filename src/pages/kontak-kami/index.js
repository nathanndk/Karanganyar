import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/molekuls/Navbar";
import { TabItem, Tabs } from "flowbite-react";
import Sponsor from "@/models/sponsor";
import Post from "@/components/organism/BaseCrud/Post";
import Footer from "@/components/molekuls/Footer/Index";
import api from "@/api/index";
import Image from "next/image";
import { useRouter } from "next/router";

const tabsTheme = {
    tablist: {
        tabitem: {
            base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
            styles: {
                fullWidth: {
                    base: "ml-0 flex w-full rounded-none first:ml-0",
                    active: {
                        on: "active rounded-none bg-orange-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
                        off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
                    },
                },
            },
        },
    },
};

export default function Index({ data }) {
    const [formData, setFormData] = useState({});
    const router = useRouter();

    function changeData(item, value) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [item]: value,
            };
        });
    }

    const handleRegister = () => {
        let registerForm = `Halo, saya ${formData.name} sebagai perwakilan dari ${formData.company_name} ingin bergabung sebagai ${formData.partnership_type} untuk karangjatih.`;

        router.push(
            `https://wa.me/628882551944?text=${encodeURIComponent(
                registerForm
            )}`
        );
    };

    return (
        <>
            <Head>
                <title>Bergabunglah Bersama Kami | karangjatih</title>
                <meta
                    name="description"
                    content="Bergabunglah bersama kami sebagai sponsor atau media partner untuk mendukung berbagai kegiatan yang kami adakan. Temukan informasi lebih lanjut di sini."
                />
                <meta
                    name="keywords"
                    content="sponsorship, media partner, dukungan, kegiatan, karangjatih"
                />
                <meta name="author" content="karangjatih" />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="Bergabunglah Bersama Kami | karangjatih"
                />
                <meta
                    property="og:description"
                    content="Bergabunglah bersama kami sebagai sponsor atau media partner untuk mendukung berbagai kegiatan yang kami adakan. Temukan informasi lebih lanjut di sini."
                />
                <meta property="og:image" content="/images/Sponsorship.png" />
                <meta
                    property="og:url"
                    content="https://janjipraptiningsih.com/sponsorship"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Bergabunglah Bersama Kami | karangjatih"
                />
                <meta
                    name="twitter:description"
                    content="Bergabunglah bersama kami sebagai sponsor atau media partner untuk mendukung berbagai kegiatan yang kami adakan. Temukan informasi lebih lanjut di sini."
                />
                <meta name="twitter:image" content="/images/Sponsorship.png" />
                <link
                    rel="canonical"
                    href="https://janjipraptiningsih.com/sponsorship"
                />
            </Head>
            <Navbar />
            <div className="relative w-full h-96">
                <Image
                    src="/images/Sponsorship.png"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={70}
                    priority={true}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                    {/* <h1 className="text-2xl lg:text-5xl text-white font-bold mb-5 text-center">
            Bergabunglah
            <span className="text-white"> Bersama Kami !</span>
          </h1> */}
                </div>
            </div>
            <div className="bg-white py-12 px-4 md:px-20 flex flex-col gap-10">
                <h1 className="text-2xl lg:text-5xl text-black dark:text-white font-bold text-center">
                    Sudah Didukung dan Dipercaya Oleh
                </h1>
                <Tabs style="fullWidth" theme={tabsTheme}>
                    <TabItem
                        title="Sponsor"
                        onChange={() => {
                            setParams({
                                type: "sponsor",
                            });
                        }}
                    >
                        <div className="border-4 border-orange-100 rounded-lg">
                            {data.sponsorPrimary.data.length == 1 ? (
                                <div className="grid grid-cols-3">
                                    <div className="p-2 flex items-center justify-center"></div>
                                    {data.sponsorPrimary.data.map((item) => {
                                        return (
                                            <div
                                                className="p-2 flex items-center justify-center order-2"
                                                key={item.id}
                                            >
                                                <Image
                                                    src={item.image.preview}
                                                    alt="Logo Sponsor"
                                                    width={500}
                                                    height={500}
                                                    quality={70}
                                                    style={{
                                                        maxHeight: "200px",
                                                        width: "100%",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="grid grid-cols-3">
                                    {data.sponsorPrimary.data.map((item) => {
                                        return (
                                            <div
                                                className="p-2 flex items-center justify-center order-2"
                                                key={item.id}
                                            >
                                                <Image
                                                    src={item.image.preview}
                                                    alt="logo"
                                                    width={500}
                                                    height={500}
                                                    style={{
                                                        maxHeight: "200px",
                                                        width: "100%",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                            <div className="grid grid-cols-3">
                                {data.sponsor.data.map((item) => {
                                    return (
                                        <div
                                            className="p-2 flex items-center justify-center"
                                            key={item.id}
                                        >
                                            <Image
                                                src={item.image.preview}
                                                alt="logo"
                                                width={500}
                                                height={500}
                                                style={{
                                                    maxHeight: "200px",
                                                    width: "100%",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </TabItem>
                    <TabItem
                        title="Media Partner"
                        onChange={() => {
                            setParams({
                                type: "sponsor",
                            });
                        }}
                    >
                        <div className="grid grid-cols-3 rounded-lg border-4 border-orange-100">
                            {data.media.data.map((item) => {
                                return (
                                    <div
                                        className="p-2 flex items-center justofy-center"
                                        key={item.id}
                                    >
                                        <Image
                                            src={item.image.preview}
                                            alt="logo"
                                            width={500}
                                            height={500}
                                            style={{
                                                maxHeight: "200px",
                                                width: "100%",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </TabItem>
                </Tabs>
            </div>
            <div className="px-4 md:px-20 py-12">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl lg:text-5xl text-black dark:text-white font-bold mb-5 text-center">
                        Siap Bekerja Sama dengan Kami?
                    </h1>
                    <div className="flex flex-row items-center w-full bg-gray-100 py-12 px-4 md:px-12 gap-10 rounded-lg">
                        <Image
                            src="/images/Partner.png"
                            alt="Partnership"
                            width={720}
                            height={480}
                            quality={70}
                            className="hidden md:block w-1/2 h-72 rounded-lg object-cover"
                        />
                        <div className="w-full md:w-1/2">
                            <Post
                                postConfig={Sponsor.createConfig}
                                changeData={changeData}
                                data={formData}
                            />
                            <button
                                href="#"
                                className="inline-block w-full text-md h-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 h-auto mt-4"
                                onClick={() => handleRegister()}
                            >
                                Bergabung
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer data={data.footer} />
        </>
    );
}

export const getServerSideProps = async () => {
    const data = {};

    // Definisi semua promise yang akan dijalankan secara paralel
    const promises = [
        api.get("/no-auth/partners/list", {
            type: "sponsor",
            is_primary: false,
        }),
        api.get("/no-auth/partners/list", {
            type: "sponsor",
            is_primary: true,
        }),
        api.get("/no-auth/partners/list", {
            type: "media",
        }),
        api.get("/no-auth/footer/show/1"),
    ];

    // Menggunakan Promise.all untuk menjalankan semua promise secara paralel
    const [
        responseSponsor,
        responseSponsorPrimary,
        responseMedia,
        responseFooter,
    ] = await Promise.all(promises);

    // Memasukkan hasil response ke dalam objek data
    data.sponsor = responseSponsor.data.data;
    data.sponsorPrimary = responseSponsorPrimary.data.data;
    data.media = responseMedia.data.data;
    data.footer = responseFooter.data.data;

    return {
        props: {
            data,
        },
    };
};
