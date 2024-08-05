import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "@/components/organism/BaseCrud/Post/index";
import { Button, Spinner } from "flowbite-react";
import api from "@/api/index";
import Sidebar from "@/components/molekuls/Sidebar/Index";
import ProductsModel from "@/models/founder";

export default function Index() {
    const [data, setData] = useState({});
    function changeData(item, value) {
        setData((prevData) => {
            return {
                ...prevData,
                [item]: value,
            };
        });
    }
    const router = useRouter();
    const getData = async () => {
        const response = await api.get(
            ProductsModel.endpoints.detail + "/" + 1
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

    const handleUpdate = async () => {
        const response = await api.patch(ProductsModel.endpoints.update, data);
    };

    // get parameter from url when is ready

    return (
        <>
            <Sidebar />
        </>
    );
}
