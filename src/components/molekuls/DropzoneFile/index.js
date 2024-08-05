import React from "react";
import { FileInput, Label } from "flowbite-react";
import api from "@/api/index";
import { IconFile } from "@tabler/icons-react";

export default function Index({ data, changeData, item }) {
    const handleDrop = async (e) => {
        // console.log("drop");
        e.preventDefault();
        // console.log(e);
        const files = e.target.files;
        // console.log(files);
        const formData = new FormData();
        formData.append("file", files[0]);
        const response = await api.upload("/upload/file", formData);
        if (response.status == 200) {
            changeData(item.key, response.data.data);
        }
        // console.log(data);
    };

    const handleDelete = () => {
        changeData(item.key, null);
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Prevent default behavior
    };

    return (
        <div
            className="flex w-full justify-start"
            onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => handleDragOver(e)} // Handle DragOver event
        >
            {data[item.key] ? (
                <div className="flex flex-row items-center justify-start h-20 w-64 bg-gray-50 dark:bg-gray-700 rounded-lg border-2 border-gray-300 dark:border-gray-600 px-4 gap-4">
                    <IconFile
                        className="text-gray-800 dark:text-gray-400"
                        size={48}
                    />
                    <div>
                        <p className="text-sm text-black dark:text-gray-400">
                            {item.label}
                        </p>
                        <p
                            className="text-xs text-red-500 dark:text-gray-400 cursor-pointer"
                            onClick={() => handleDelete()}
                        >
                            Hapus
                        </p>
                    </div>
                </div>
            ) : (
                <Label
                    htmlFor="dropzone-file"
                    className="flex h-64 w-64 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <svg
                            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                        </svg>

                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                                Click to upload
                            </span>{" "}
                            or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                    </div>
                    <FileInput
                        name={item.key}
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        accept="*"
                        onChange={(e) => handleDrop(e)}
                    />
                </Label>
            )}
        </div>
    );
}
