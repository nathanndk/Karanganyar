import React from "react";
import Navbar from "@/components/molekuls/Navbar/index";
import {
    TextInput,
    Modal,
    Button,
    Tabs,
    TabsRef,
    TabItem,
} from "flowbite-react";
import {
    IconCalendar,
    IconLocation,
    IconClock,
    IconMap,
    IconMapPin,
    IconSearch,
} from "@tabler/icons-react";
import { useState, useRef } from "react";
import Post from "@/components/organism/BaseCrud/Post/index";
import Volunteer from "@/models/volunteer";
import Sponsor from "@/models/sponsor";
import Participant from "@/models/participant";
import api from "@/api/index";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

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
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({});
    const [activeTab, setActiveTab] = useState(0);
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
        let registerForm;
        switch (activeTab) {
            case 0:
                registerForm = `Halo, saya ${formData.name} ingin bergabung sebagai peserta pada kegiatan ${data.activity.name} yang akan diadakan pada tanggal ${data.activity.date} di ${data.activity.location}.`;
                // console.log(registerForm);
                // redirect to wa
                window.open(
                    `https://wa.me/628882551944?text=${encodeURIComponent(
                        registerForm
                    )}`
                );
                break;
            case 1:
                registerForm = `Halo, saya ${formData.name} ingin bergabung sebagai relawan pada kegiatan ${data.activity.name} yang akan diadakan pada tanggal ${data.activity.date} di ${data.activity.location}.`;
                // console.log(registerForm);
                window.open(
                    `https://wa.me/628882551944?text=${encodeURIComponent(
                        registerForm
                    )}`
                );
                break;
            case 2:
                // console.log(formData);
                registerForm = `Halo, saya ${formData.name} sebagai perwakilan dari ${formData.company_name} ingin bergabung sebagai sponsor ${formData.partnership_type} pada kegiatan ${data.activity.name} yang akan diadakan pada tanggal ${data.activity.date} di ${data.activity.location}.`;
                // console.log(registerForm);
                window.open(
                    `https://wa.me/628882551944?text=${encodeURIComponent(
                        registerForm
                    )}`
                );
                break;
            default:
                break;
        }
    };
    return (
        <>
            <Head>
                <title>{data.activity.name} | karangjatih</title>
                <meta
                    name="description"
                    content={`Bergabunglah dengan kegiatan ${data.activity.name} yang akan diadakan pada tanggal ${data.activity.date} di ${data.activity.location}. Temukan informasi lengkap tentang kegiatan ini di sini.`}
                />
                <meta
                    name="keywords"
                    content={`kegiatan, acara, ${data.activity.name}, ${data.activity.location}, partisipasi, komunitas, sosial, event`}
                />
                <meta name="author" content="karangjatih" />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content={`${data.activity.name} | karangjatih`}
                />
                <meta
                    property="og:description"
                    content={`Bergabunglah dengan kegiatan ${data.activity.name} yang akan diadakan pada tanggal ${data.activity.date} di ${data.activity.location}. Temukan informasi lengkap tentang kegiatan ini di sini.`}
                />
                <meta
                    property="og:image"
                    content={data.activity.image.preview}
                />
                <meta
                    property="og:url"
                    content={`https://namawebsite.com/kegiatan/detail?id=${data.activity.id}`}
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={`${data.activity.name} | karangjatih`}
                />
                <meta
                    name="twitter:description"
                    content={`Bergabunglah dengan kegiatan ${data.activity.name} yang akan diadakan pada tanggal ${data.activity.date} di ${data.activity.location}. Temukan informasi lengkap tentang kegiatan ini di sini.`}
                />
                <meta
                    name="twitter:image"
                    content={data.activity.image.preview}
                />
                <link
                    rel="canonical"
                    href={`https://namawebsite.com/kegiatan/detail?id=${data.activity.id}`}
                />
            </Head>
            <Navbar />
            <div className="container mx-auto py-6 px-4 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4 mt-16 lg:mt-8 border-2 rounded-lg">
                    <div className="flex flex-col gap-4 w-full order-2 md:order-1">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {data.activity.name}
                        </h1>
                        <div>
                            <div
                                className="text-gray-600 dark:text-gray-300"
                                dangerouslySetInnerHTML={{
                                    __html: data.activity.description,
                                }}
                            >
                                {/* render as html */}
                            </div>
                        </div>
                        <Link href={data.activity.url_location} target="blank">
                            <div className="flex flex-row gap-2">
                                <IconMapPin />
                                <p className="text-black font-semibold">
                                    {data.activity.location}
                                </p>
                            </div>
                        </Link>
                        <div className="flex flex-row gap-2">
                            <IconCalendar />
                            <p className="text-black font-semibold">
                                {data.activity.date}
                            </p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <IconClock />
                            <p className="text-black font-semibold">
                                {data.activity.time}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 order-1 md:order-2">
                        <Image
                            src={data.activity.image.preview}
                            alt="image"
                            className="w-full aspect-video object-cover rounded-lg"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const { query } = context;
    let data = {};
    const responseActivities = await api.get(
        "/no-auth/activities/show?slug=" + query.slug
    );
    if (responseActivities.status != 200) {
        return {
            notFound: true,
        };
    }
    data.activity = responseActivities.data.data;

    data.activity.time =
        moment(
            moment(data.activity.date).format("YYYY-MM-DD") +
                " " +
                data.activity.end_time
        ).format("LT") +
        " - " +
        moment(
            moment(data.activity.date).format("YYYY-MM-DD") +
                " " +
                data.activity.end_time
        ).format("LT");
    data.activity.date = moment(data.activity.date).format("LL");

    // Lakukan log query untuk melihat isinya
    return {
        props: {
            data,
        },
    };
}
