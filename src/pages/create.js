import React from "react";
import Create from "@/components/organism/BaseCrud/Post/index";
import { useState } from "react";
import ProductsModel from "@/models/hero";
import Notifications from "@/components/molekuls/Notifications";
import helper from "@/utils/helper";
import { Button } from "flowbite-react";
import Sidebar from "@/components/molekuls/Sidebar/Index";
import { IconChevronLeft } from "@tabler/icons-react";

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
    return (
        <>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 flex flex-col gap-4 border-2 bg-white rounded-lg dark:border-gray-700 mt-20">
                    <div>
                        <button
                            type="button"
                            className="inline-flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                        >
                            <IconChevronLeft />
                            <span className="ms-2">Tambah Divisi</span>
                        </button>
                    </div>
                    <Create
                        label="Tambah Produk"
                        changeData={changeData}
                        data={data}
                        postConfig={ProductsModel.createConfig}
                    />
                    <div>
                        <Button
                            onClick={() => {
                                // submitForm(data);
                                helper.addNotification(
                                    "Data Berhasil Ditambahkan"
                                );
                            }}
                        >
                            Tambah
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
