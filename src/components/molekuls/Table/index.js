import React from "react";
import { Table } from "flowbite-react";
import { IconPencil, IconTrash, IconInfoCircle } from "@tabler/icons-react";
import { useRouter } from "next/router";
import api from "@/api/index";

export default function Index({ data, models, getData }) {
    const router = useRouter();
    const deleteData = async (id) => {
        const response = await api.delete(models.endpoints.delete + "/" + id);
        if (response.status == 200) {
            getData();
        }
    };
    const updateData = (id) => {
        router.push(`${models.url.update}?id=${id}`);
    };
    const detailData = (id) => {
        router.push(`${models.url.detail}?id=${id}`);
    };
    const renderRow = (configItem, item) => {
        switch (configItem.type) {
            case "text":
                return <Table.Cell>{item[configItem.key]}</Table.Cell>;
            case "image":
                return (
                    <Table.Cell>
                        <img
                            src={item[configItem.key]?.preview}
                            className="w-20 h-20 object-contain rounded-lg"
                        />
                    </Table.Cell>
                );
            case "static-enum":
                return (
                    <Table.Cell>
                        {
                            configItem.options.find(
                                (option) =>
                                    option[configItem.selectedValue] ==
                                    item[configItem.key]
                            )?.[configItem.selectedLabel]
                        }
                    </Table.Cell>
                );
        }
    };
    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    {models.listConfig.map((item) => (
                        <Table.HeadCell key={item.key}>
                            {item.label}
                        </Table.HeadCell>
                    ))}
                    <Table.HeadCell>
                        <div className="text-center">Aksi</div>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {data.map((item) => (
                        <Table.Row key={item.id}>
                            {models.listConfig.map((configItem) =>
                                renderRow(configItem, item)
                            )}
                            <Table.Cell>
                                <div className="flex justify-center items-center gap-2">
                                    {models.actionConfig.detail && (
                                        <button
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            onClick={() => detailData(item.id)}
                                        >
                                            <IconInfoCircle size={20} />
                                        </button>
                                    )}
                                    {models.actionConfig.update && (
                                        <button
                                            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-2 text-center me-2 mb-2 dark:focus:ring-yellow-900"
                                            onClick={() => updateData(item.id)}
                                        >
                                            <IconPencil size={20} />
                                        </button>
                                    )}
                                    {models.actionConfig.delete && (
                                        <button
                                            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                            onClick={() => deleteData(item.id)}
                                        >
                                            <IconTrash size={20} />
                                        </button>
                                    )}
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}
