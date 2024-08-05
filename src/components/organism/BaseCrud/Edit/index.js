import React from "react";
import Table from "@/components/molekuls/Table/index.jsx";
import { TextInput, Button, Pagination, Label } from "flowbite-react";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import helper from "@/utils/helper";

export default function Index({ label, changeData, data, models }) {
    function formatNumber(angka) {
        // ubah angka menjadi format indonesia dengan nilai desimal 2 digit dan ribuan menggunakan titik
        return parseFloat(angka).toLocaleString("id-ID");
    }
    function setInputType(type, item, changeData, data) {
        switch (type) {
            case "text":
                return (
                    <TextInput
                        sizing="md"
                        placeholder={item.placeholder}
                        onChange={(e) => {
                            changeData(item.key, e.target.value);
                        }}
                    />
                );
            case "number":
                return (
                    <TextInput
                        sizing="md"
                        placeholder={item.placeholder}
                        value={data["format_" + item.key] || 0}
                        onChange={(e) => {
                            let newValue = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                            );
                            if (newValue === "") {
                                newValue = 0;
                            }
                            //change format data
                            changeData(
                                "format_" + item.key,
                                formatNumber(newValue)
                            );
                            changeData(item.key, newValue);
                        }}
                    />
                );
            case "price":
                return (
                    <>
                        <TextInput
                            sizing="md"
                            placeholder={item.placeholder}
                            addon="Rp"
                            value={data["format_" + item.key] || 0}
                            onChange={(e) => {
                                let newValue = e.target.value.replace(
                                    /[^0-9]/g,
                                    ""
                                );
                                if (newValue === "") {
                                    newValue = 0;
                                }
                                //change format data
                                changeData(
                                    "format_" + item.key,
                                    formatNumber(newValue)
                                );
                                changeData(item.key, newValue);
                            }}
                        />
                    </>
                );
            case "email":
                return (
                    <TextInput
                        theme={inputTheme}
                        color="gray"
                        placeholder={item.placeholder}
                        value={data[item.key] || ""}
                        onChange={(e) => {
                            changeData(item.key, e.target.value);
                        }}
                        type="email"
                        required
                    />
                );

            case "password":
                return (
                    <TextInput
                        theme={inputTheme}
                        color="gray"
                        placeholder={item.placeholder}
                        value={data[item.key] || ""}
                        onChange={(e) => {
                            changeData(item.key, e.target.value);
                        }}
                        type="password"
                        required
                    />
                );
            default:
                return "text";
        }
    }
    async function submitForm(formData) {}
    return (
        <>
            <div className="p-4 border-2 bg-white rounded-lg dark:border-gray-700 mt-20">
                <div className="relative grid gap-6 overflow-x-auto px-5">
                    <h1 className="text-2xl font-semibold text-black">
                        {label}
                    </h1>
                    <div className="mb-2 block">
                        {models.createConfig.map((item) => (
                            <div key={item.key}>
                                <Label htmlFor={item.key} value={item.label} />
                                {setInputType(
                                    item.type,
                                    item,
                                    changeData,
                                    data
                                )}
                            </div>
                        ))}
                    </div>
                    <div>
                        <Button
                            onClick={() => {
                                // console.log(helper);
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
