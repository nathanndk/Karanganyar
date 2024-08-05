import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "@/components/organism/BaseCrud/Post/index";
import { Button, Spinner } from "flowbite-react";
import api from "@/api/index";
import Sidebar from "@/components/molekuls/Sidebar/Index";
import models from "@/models/institution";
import TimeInput from "@/components/molekuls/TimeInput/index";
import { IconChevronLeft } from "@tabler/icons-react";

export default function Index() {
    const [data, setData] = useState({
        category_code: "institution",
    });
    const router = useRouter();
    function changeData(item, value) {
        if (item == "name") {
            let slug = value.toLowerCase().replace(/ /g, "-");
            setData((prevData) => {
                return {
                    ...prevData,
                    [item]: value,
                    slug: slug,
                };
            });
        }
        setData((prevData) => {
            return {
                ...prevData,
                [item]: value,
            };
        });
        // console.log(data);
    }

    const handleUpdate = async () => {
        const response = await api.post(models.endpoints.create, data);
        // console.log(response);
    };

    // get parameter from url when is ready

    return (
        <>
            <Sidebar />
            {/* if data is ! {} then show the detail */}
            <div className="p-4 sm:ml-64 bg-gray-100 min-h-screen">
                <div className="p-4 flex flex-col gap-4 border-2 bg-white rounded-lg dark:border-gray-700 mt-20">
                    <div
                        className="inline-flex items-center rounded-md"
                        role="group"
                    >
                        <button
                            type="button"
                            className="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 hover:text-orange-500 focus:text-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-orange-500 dark:focus:text-white"
                            onClick={() => router.push(models.url.list)}
                        >
                            <IconChevronLeft />
                            <span className="ms-2"> Edit {models.label}</span>
                        </button>
                    </div>
                    <Form
                        label="Tambah Produk"
                        changeData={changeData}
                        data={data}
                        postConfig={models.createConfig}
                    />
                    <div className="mt-4">
                        <Button
                            onClick={() => {
                                // submitForm(data);
                                handleUpdate();
                            }}
                        >
                            Save changes
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
