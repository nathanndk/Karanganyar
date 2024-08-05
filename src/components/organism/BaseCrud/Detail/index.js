import { IconChevronLeft, IconFile } from "@tabler/icons-react";
import React from "react";
import moment from "moment";
import { useRouter } from "next/router";

export default function Index({ models, data }) {
    const router = useRouter();
    const renderData = (item, data) => {
        switch (item.type) {
            case "image":
                return (
                    <img
                        src={data[item.key].preview || ""}
                        alt={data[item.key]}
                        className="w-32 h-32 object-contain rounded-md"
                    />
                );
            case "text":
                return <div className="text-black">{data[item.key]}</div>;
            case "date":
                return (
                    <div className="text-black">
                        {moment(data[item.key]).format("LL")}
                    </div>
                );
            case "time":
                return <div className="text-black">{data[item.key]}</div>;
            case "texteditor":
                return (
                    <div
                        className="text-black"
                        dangerouslySetInnerHTML={{ __html: data[item.key] }}
                    ></div>
                );
            case "file":
                return (
                    <div className="flex flex-row items-center justify-start h-20 w-64 bg-gray-50 dark:bg-gray-700 rounded-lg border-2 border-gray-300 dark:border-gray-600 px-4 gap-4">
                        <IconFile
                            className="text-gray-800 dark:text-gray-400"
                            size={48}
                        />
                        <div>
                            <p className="text-sm text-black dark:text-gray-400">
                                {item.label}
                            </p>
                        </div>
                    </div>
                );
        }
    };
    return (
        <>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 bg-white rounded-lg mt-14">
                    <div
                        className="inline-flex items-center rounded-md shadow-sm"
                        role="group"
                    >
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
                                <span className="ms-2">
                                    {" "}
                                    Tambah {models.label}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto">
                        <table className="w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                                {models.detailConfig.map((item) => (
                                    <tr key={item.key}>
                                        <td className="py-2 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {item.label}
                                            </div>
                                        </td>
                                        <td className="px-3 py-2 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                :
                                            </div>
                                        </td>
                                        <td className="py-2 whitespace-nowrap">
                                            {renderData(item, data)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
