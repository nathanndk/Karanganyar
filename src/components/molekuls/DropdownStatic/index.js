import { Combobox, Transition } from "@headlessui/react";
import { useEffect, useState, Fragment } from "react";
import api from "@/api/index";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";

export default function Index({ value, labelValue, item, changeData }) {
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState({
        [item.selectedLabel]: item.placeholder,
        [item.key]: null,
    });

    const getData = () => {
        setOptions(
            item.options.filter((option) =>
                option.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    };

    useEffect(() => {
        getData();
    }, [search]);

    useEffect(() => {
        if (value == { [item.selectedLabel]: labelValue, [item.key]: null }) {
            setSelected({
                [item.selectedLabel]: labelValue,
                [item.key]: value,
            });
        }
    }, [value]);
    return (
        <div className="relative">
            <Combobox
                value={selected}
                onChange={(e) => {
                    setSelected(e);
                    changeData(item.key, e[item.selectedValue]);
                }}
            >
                <div className="relative mt-1">
                    <div className="relative w-full">
                        <Combobox.Input
                            className="w-full border-1 border-slate-300  focus:border-orange-500 focus:ring-orange-500 rounded-lg py-2 pl-3 pr-10 text-slate-600 bg-gray-50  text-sm"
                            displayValue={(row) => row[item.selectedLabel]}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <IconChevronDown
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setSearch("")}
                    >
                        <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {options.map((person) => (
                                <Combobox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4
                                        hover:cursor-pointer
                                    ${
                                        active
                                            ? "bg-gray-200 text-black"
                                            : "text-gray-900"
                                    }`
                                    }
                                    value={person}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                        active
                                                            ? "text-black"
                                                            : "text-teal-600"
                                                    }`}
                                                >
                                                    <IconCheck
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}
