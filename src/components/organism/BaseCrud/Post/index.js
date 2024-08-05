import React from "react";
import {
    TextInput,
    Button,
    Pagination,
    Label,
    Datepicker,
    Textarea,
} from "flowbite-react";
import Dropzone from "@/components/molekuls/Dropzone/index";
import TextEditor from "@/components/molekuls/TextEditor/index";
import inputTheme from "@/styles/themes";
import PasswordInput from "@/components/atoms/PasswordInput/Index";
import DropdownDynamic from "@/components/molekuls/DropdownDynamic/index";
import DropdownStatic from "@/components/molekuls/DropdownStatic/index";
import TimeInput from "@/components/molekuls/TimeInput/index";
import DropzoneFile from "@/components/molekuls/DropzoneFile/index";
import moment from "moment";
import { IconMail } from "@tabler/icons-react";
moment.locale("id");

const textInputTheme = {
    field: {
        input: {
            colors: {
                gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-orange-500 dark:focus:ring-orange-500",
            },
        },
    },
};

const textAreaTheme = {
    base: "block w-full rounded-lg border text-sm disabled:cursor-not-allowed disabled:opacity-50",
    colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-orange-500 focus:ring-orange-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-orange-500 dark:focus:ring-orange-500",
    },
};

export default function Index({ changeData, data, postConfig }) {
    function formatNumber(angka) {
        // ubah angka menjadi format indonesia dengan nilai desimal 2 digit dan ribuan menggunakan titik
        return parseFloat(angka).toLocaleString("id-ID");
    }
    // console.log("postConfig", postConfig);
    function setInputType(type, item, changeData, data) {
        switch (type) {
            case "text":
                return (
                    <TextInput
                        theme={textInputTheme}
                        color="gray"
                        // className="focus:border-black focus:ring-2 focus:ring-black"
                        // sizing="md"
                        placeholder={item.placeholder}
                        value={data[item.key] || ""}
                        onChange={(e) => {
                            changeData(item.key, e.target.value);
                        }}
                    />
                );
            case "number":
                return (
                    <TextInput
                        theme={textInputTheme}
                        color="gray"
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
                            theme={textInputTheme}
                            color="gray"
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
            case "image":
                return (
                    <>
                        <Dropzone
                            changeData={changeData}
                            data={data}
                            item={item}
                        />
                    </>
                );
            case "file":
                return (
                    <>
                        <DropzoneFile
                            changeData={changeData}
                            data={data}
                            item={item}
                        />
                    </>
                );

            case "email":
                return (
                    <TextInput
                        theme={textInputTheme}
                        color="gray"
                        placeholder={item.placeholder}
                        value={data[item.key] || ""}
                        onChange={(e) => {
                            changeData(item.key, e.target.value);
                        }}
                        type="email"
                        rightIcon={IconMail}
                        required
                    />
                );

            case "password":
                return (
                    <PasswordInput
                        theme={textInputTheme}
                        color="gray"
                        placeholder={item.placeholder}
                        value={data[item.key] || ""}
                        onChange={(e) => {
                            changeData(item.key, e.target.value);
                        }}
                    />
                );

            case "texteditor":
                return (
                    <TextEditor
                        value={data[item.key] || ""}
                        changeData={changeData}
                        item={item}
                    />
                );

            case "textarea":
                return (
                    <Textarea
                        name={item.key}
                        placeholder={item.placeholder}
                        theme={textAreaTheme}
                        required
                        rows={4}
                        onChange={(e) => {
                            changeData(item.key, e.target.value);
                        }}
                    >
                        {data[item.key] || ""}
                    </Textarea>
                );

            case "date":
                let value;
                if (data[item.key]) {
                    value = moment(data[item.key]).format("YYYY-MM-DD");
                }
                return (
                    <Datepicker
                        language="id"
                        value={value || ""}
                        onSelectedDateChanged={(date) => {
                            let formattedDate =
                                moment(date).format("YYYY-MM-DD");
                            changeData(item.key, formattedDate);
                        }}
                    />
                );
            case "dropdown-dynamic":
                return (
                    <DropdownDynamic
                        value={data[item.key] || ""}
                        labelValue={data[item.labelKey] || ""}
                        item={item}
                        changeData={changeData}
                    />
                );
            case "time":
                return (
                    <TimeInput
                        value={data[item.key] || ""}
                        item={item}
                        changeData={changeData}
                    />
                );
            case "dropdown-static":
                return (
                    <DropdownStatic
                        value={data[item.key] || ""}
                        labelValue={data[item.labelKey] || ""}
                        item={item}
                        changeData={changeData}
                    />
                );
        }
    }
    async function submitForm(formData) {}
    return (
        <>
            <div className="mb-2 block flex flex-col gap-4 w-full ">
                {postConfig.map((item) => (
                    <div key={item.key}>
                        <Label htmlFor={item.key} value={item.label}></Label>
                        {item.required && (
                            <span className="text-red-500">*</span>
                        )}

                        {setInputType(item.type, item, changeData, data)}
                    </div>
                ))}
            </div>
        </>
    );
}
