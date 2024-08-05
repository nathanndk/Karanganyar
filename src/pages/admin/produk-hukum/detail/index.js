import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Detail from "@/components/organism/BaseCrud/Detail/index";
import Sidebar from "@/components/molekuls/Sidebar/Index";
import api from "@/api/index";
import models from "@/models/lawProducts";
import { Spinner } from "flowbite-react";

export default function Index() {
    const [data, setData] = useState({});
    const router = useRouter();
    const getData = async () => {
        const response = await api.get(
            models.endpoints.detail + "/" + router.query.id
        );

        if (response.status == 200) {
            // console.log(response.data.data);
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
                    <div className="p-4 sm:ml-64">
                        <div
                            className="p-4 border-2 bg-white rounded-lg"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        ></div>
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <Spinner />
                </div>
            )}
        </div>
    );
}
