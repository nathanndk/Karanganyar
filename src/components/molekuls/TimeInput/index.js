import React, { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { IconClock } from "@tabler/icons-react";

function TimePicker({ value, item, changeData }) {
    const [selectedHour, setSelectedHour] = useState("");
    const [selectedMinute, setSelectedMinute] = useState("");

    useEffect(() => {
        if (selectedHour !== "" && selectedMinute !== "") {
            handleChange();
        }
    }, [selectedHour, selectedMinute]);

    const handleChange = () => {
        changeData(item.key, `${selectedHour}:${selectedMinute}`);
    };

    useEffect(() => {
        if (value && selectedHour === "" && selectedMinute === "") {
            const [hour, minute] = value.split(":");
            setSelectedHour(hour);
            setSelectedMinute(minute);
        }
    }, [value]);
    return (
        <div className="relative">
            <Menu>
                {({ open }) => (
                    <>
                        <Menu.Button className="w-auto flex flex-row items-center gap-2 py-2 px-2 text-left border-2 border-gray-100 rounded-lg text-sm leading-5 text-gray-900 focus:ring-0 hover:cursor-pointer">
                            {`${selectedHour}:${selectedMinute}`}
                            <span className="">
                                <IconClock className="h-5 w-5 text-gray-400" />
                            </span>
                        </Menu.Button>
                        <Menu.Items
                            className={`${
                                open ? "absolute" : "hidden"
                            } left-0 mt-2 z-10 max-h-40  w-24 bg-white border border-gray-200 rounded-lg shadow-lg outline-none`}
                        >
                            <style>
                                {`
                            .scrollbar-hidden::-webkit-scrollbar {
                                display: none;
                            }
                            `}
                            </style>
                            <div className="p-2 flex flex-row ">
                                <div className="flex flex-col w-1/2 overflow-y-auto scrollbar-hidden max-h-36">
                                    {[...Array(24).keys()].map((hour) => (
                                        <button
                                            key={hour}
                                            className={`py-1 px-2 text-sm leading-5 text-gray-900 focus:outline-none hover:bg-gray-100 ${
                                                hour === parseInt(selectedHour)
                                                    ? "font-bold"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                setSelectedHour(
                                                    hour
                                                        .toString()
                                                        .padStart(2, "0")
                                                );
                                                handleChange();
                                            }}
                                        >
                                            {hour.toString().padStart(2, "0")}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex flex-col w-1/2 overflow-y-auto scrollbar-hidden max-h-36">
                                    {[...Array(60).keys()].map((minute) => (
                                        <button
                                            key={minute}
                                            className={`py-1 px-2 text-sm leading-5 text-gray-900 focus:outline-none hover:bg-gray-100 ${
                                                minute ===
                                                parseInt(selectedMinute)
                                                    ? "font-bold"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                setSelectedMinute(
                                                    minute
                                                        .toString()
                                                        .padStart(2, "0")
                                                );
                                                handleChange();
                                            }}
                                        >
                                            {minute.toString().padStart(2, "0")}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </Menu.Items>
                    </>
                )}
            </Menu>
        </div>
    );
}

export default TimePicker;
