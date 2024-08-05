import React from "react";
import Table from "@/components/molekuls/Table/index";
import { TextInput, Button, Pagination } from "flowbite-react";
import { IconSearch, IconCirclePlus } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import api from "@/api/index";
import { useRouter } from "next/router";

const textInputTheme = {
    field: {
        input: {
            colors: {
                gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-orange-500 dark:focus:ring-orange-500",
            },
        },
    },
};
export default function Index({ models, staticFilter }) {
    const router = useRouter();
    const [params, setParams] = useState({
        page: 1,
        search: "",
        ...staticFilter,
    });
    const [data, setData] = useState({
        data: [],
        total: 0,
        totalPage: 0,
    });

    const onPageChange = (page) => setParams((prev) => ({ ...prev, page }));

    const getData = async () => {
        const response = await api.get(models.endpoints.list, params);
        if (response.status == 200) {
            setData({
                data: response.data.data.data,
                total: response.data.data.total,
                totalPage: response.data.data.totalPage,
            });
        }
    };
    useEffect(() => {
        getData();
    }, [params]);

    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="p-4 flex flex-col gap-1 bg-white rounded-lg dark:border-gray-700 mt-20">
                    <h1 className="text-lg font-medium text-black">
                        {models.label}
                    </h1>
                    <div className="flex flex-row items-center gap-6 mt-4 md:justify-between">
                        <TextInput
                            theme={textInputTheme}
                            color="gray"
                            size="sm"
                            icon={IconSearch}
                            placeholder="Cari Data"
                            required
                            onChange={(e) => {
                                setParams((prev) => {
                                    return {
                                        ...prev,
                                        search: e.target.value,
                                    };
                                });
                            }}
                        />
                        {models.actionConfig.create && (
                            <button
                                href="#"
                                className="flex flex-row items-center text-md h-10 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg px-4 py-2 h-auto"
                                onClick={() => {
                                    router.push(models.url.create);
                                }}
                            >
                                <IconCirclePlus size={20} className="mr-2" />
                                Tambah
                            </button>
                        )}
                    </div>
                    <Table data={data.data} models={models} getData={getData} />
                    <div className="flex overflow-x-auto sm:justify-center">
                        <Pagination
                            currentPage={params.page}
                            totalPages={data.totalPage}
                            onPageChange={onPageChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
