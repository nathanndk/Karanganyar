import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Detail from "@/components/organism/BaseCrud/Detail/index";
import Sidebar from "@/components/molekuls/Sidebar/Index";
import api from "@/api/index";
import models from "@/models/hero";
import { Spinner } from "flowbite-react";

export default function Index() {
    const [data, setData] = useState({});
    const router = useRouter();
    const getData = async () => {
        const response = await api.get(
            "/divisions/" + router.query.id + "/show"
        );
        if (response.status == 200) {
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
        <>
            <Sidebar />
            {Object.keys(data).length != 0 ? (
                <Detail data={data} models={models} />
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <Spinner />
                </div>
            )}
        </>
    );
}
