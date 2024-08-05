import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Detail from "@/components/organism/BaseCrud/Detail/index";
import Sidebar from "@/components/molekuls/Sidebar/Index";
import api from "@/api/index";
import models from "@/models/sponsorPartners";
import { Spinner } from "flowbite-react";

export default function Index() {
    const [data, setData] = useState({});
    const router = useRouter();
    const getData = async () => {
        const response = await api.get(
            models.endpoints.detail + "/" + router.query.id
        );

        if (response.status == 200) {
            //console.log(response.data.data);
            setData(response.data.data);
        }
    };
    useEffect(() => {
        if (router.isReady) {
            getData();
        }
    }, [router.isReady]);

    // get parameter from url when is ready
    return (
        <div className="bg-gray-100 dark:bg-gray-800 min-h:screen">
            <Sidebar />
            {Object.keys(data).length != 0 ? (
                <>
                    <Detail data={data} models={models} />
                    {/* Render kontent data as html */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-4 mt-16 lg:mt-8 border-2 rounded-lg">
                        <div className="flex flex-col gap-4 w-full order-2 md:order-1">
                            <div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    karangjatih
                                    #OnTheRoad:📍Semarang,Indonesia.Bersama
                                    @tiki_semarang & @rosticafe Berbagi Takjil
                                    On The Road 🚗🌙✨
                                </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <IconMapPin />
                                <p className="text-black font-semibold">
                                    Tembalang, Semarang
                                </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <IconCalendar />
                                <p className="text-black font-semibold">
                                    18 April 2022
                                </p>
                            </div>
                            <p>
                                Ingin Bergabung? Silahkan klik tombol di bawah
                                ini
                            </p>

                            <button
                                className="text-md h-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-2 h-auto"
                                onClick={() => setOpenModal(true)}
                            >
                                <span>Bergabung</span>
                            </button>
                        </div>
                        <div className="flex flex-col gap-4 order-1 md:order-2">
                            <img
                                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                                alt="image"
                                className="w-full aspect-video object-cover rounded-lg"
                            />
                        </div>
                    </div> */}
                </>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <Spinner />
                </div>
            )}
        </div>
    );
}
