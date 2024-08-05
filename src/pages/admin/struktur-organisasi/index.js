import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "@/components/organism/BaseCrud/Post/index";
import { Button, Spinner } from "flowbite-react";
import api from "@/api/index";
import Sidebar from "@/components/molekuls/Sidebar/Index";
import Model from "@/models/organizationStructure";
import { IconDeviceFloppy } from "@tabler/icons-react";

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
        const response = await api.get(Model.endpoints.detail + "/" + 3);
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
        const response = await api.patch(Model.endpoints.update, data);
    };

    // get parameter from url when is ready

    return (
        <>
            <Sidebar />
            {/* if data is ! {} then show the detail */}

            {Object.keys(data).length != 0 ? (
                <div className="p-4 sm:ml-64 bg-gray-100 min-h-screen">
                    <div className="p-4 flex flex-col gap-4 border-2 bg-white rounded-lg dark:border-gray-700 mt-20">
                        <h1 className="text-lg font-medium text-black">
                            {Model.label}
                        </h1>
                        <Form
                            label="Tambah Produk"
                            changeData={changeData}
                            data={data}
                            postConfig={Model.updateConfig}
                        />
                        <div className="mt-4">
                            <button
                                className="flex flex-row items-center text-md h-10 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg px-4 py-2 h-auto mt-4"
                                onClick={() => {
                                    handleUpdate();
                                }}
                            >
                                <IconDeviceFloppy size={20} className="mr-2" />
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <Spinner />
                </div>
            )}
        </>
    );
}
