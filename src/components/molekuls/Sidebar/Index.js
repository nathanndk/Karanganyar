import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { Navbar, Dropdown } from "flowbite-react";
import { IconMenu2 } from "@tabler/icons-react";
import {
    IconHome,
    IconHistory,
    IconTelescope,
    IconBuildingEstate,
    IconCubePlus,
    IconCalendarEvent,
    IconNews,
    IconChevronDown,
    IconChevronRight,
} from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const sidebarTheme = {
    root: {
        base: "h-full fixed top-0 left-0 z-40 w-64 hidden sm:block",
        collapsed: {
            on: "w-16",
            off: "w-64 block",
        },
        inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 px-3 py-4 bg-white dark:bg-gray-800",
    },
    item: {
        base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
        active: "bg-gray-100 dark:bg-gray-700",
        collapsed: {
            insideCollapse: "group w-full pl-8 transition duration-75",
            noIcon: "font-medium",
        },
        content: {
            base: "flex-1 whitespace-nowrap px-3",
        },
        icon: {
            base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
            active: "text-gray-700 dark:text-gray-100",
        },
        label: "",
        listItem: "",
    },
    items: {
        base: "mt-16",
    },
};

export default function Index() {
    const [user, setUser] = useState({ role_name: "Admin" });
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [width, setWidth] = useState(1200);
    const router = useRouter();

    useEffect(() => {
        // const user = Cookies.get("user");
        // setUser(JSON.parse(user));
        // console.log("user", user);
        // setWidth(window.innerWidth);
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        if (width < 640) {
            setIsCollapsed(true);
        } else {
            setIsCollapsed(false);
        }
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [width]);

    return (
        <>
            <Navbar fluid rounded className="fixed w-full top-0 z-50 bg-white">
                <div className="flex flex-row gap-4">
                    <button
                        className="bg-white sm:hidden"
                        onClick={() => {
                            setIsCollapsed(!isCollapsed);
                        }}
                    >
                        <IconMenu2 />
                    </button>
                    <Navbar.Brand href="/admin">
                        <Image
                            src="/images/logo.png"
                            className="mr-3"
                            alt="Logo karangjatih"
                            width={50}
                            height={50}
                        />
                        <span className="self-center whitespace-nowrap text-xl font-bold text-orange-500 dark:text-white">
                            karangjatih
                        </span>
                    </Navbar.Brand>
                </div>

                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={<p>{user.role_name}</p>}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Admin</span>
                        </Dropdown.Header>
                        {/* <Dropdown.Item>Forgot Password</Dropdown.Item> */}
                        <Dropdown.Divider />
                        <Dropdown.Item
                            onClick={() => {
                                Cookies.remove("user");
                                Cookies.remove("token");
                                router.push("/admin/login");
                            }}
                        >
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </Navbar>
            <Sidebar
                theme={sidebarTheme}
                aria-label="Sidebar with multi-level dropdown example"
                collapsed={isCollapsed}
                // className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            >
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <h1 className="text-lg font-medium text-black ml-2">
                            Setup Landing
                        </h1>
                        <Sidebar.Collapse
                            label="Profil"
                            icon={IconHome}
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open
                                    ? IconChevronDown
                                    : IconChevronRight;

                                return (
                                    <IconComponent
                                        aria-hidden
                                        className={twMerge(
                                            theme.label.icon.open[
                                                open ? "on" : "off"
                                            ]
                                        )}
                                        size={16}
                                    />
                                );
                            }}
                        >
                            <Link
                                href="/admin/sejarah"
                                className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 gap-3"
                                passHref
                            >
                                <span className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"></span>
                                Sejarah
                            </Link>
                            {/* <Link
                                href="/admin/about"
                                className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 gap-3"
                                passHref
                            >
                                <span className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"></span>
                                Tentang Kami
                            </Link> */}
                            <Link
                                href="/admin/visi-misi"
                                className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 gap-3"
                                passHref
                            >
                                <span className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"></span>
                                Visi Misi
                            </Link>
                            <Link
                                href="/admin/struktur-organisasi"
                                className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 gap-3"
                                passHref
                            >
                                <span className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"></span>
                                Struktur Organisasi
                            </Link>
                            <Link
                                href="/admin/perangkat-desa"
                                className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 gap-3"
                                passHref
                            >
                                <span className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"></span>
                                Perangkat Desa
                            </Link>
                        </Sidebar.Collapse>

                        <Link
                            href="/admin/lembaga"
                            className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 gap-3"
                            passHref
                        >
                            <span className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                <IconCalendarEvent />
                            </span>
                            Lembaga
                        </Link>
                        <Link
                            href="/admin/potensi-desa"
                            className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 gap-3"
                            passHref
                        >
                            <span className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                <IconCalendarEvent />
                            </span>
                            Potensi Desa
                        </Link>
                        <Link
                            href="/admin/produk-hukum"
                            className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 gap-3"
                            passHref
                        >
                            <span className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                <IconCalendarEvent />
                            </span>
                            Produk Hukum
                        </Link>
                        <Link
                            href="/admin/footer"
                            className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 gap-3"
                            passHref
                        >
                            <span className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                <IconCalendarEvent />
                            </span>
                            Footer
                        </Link>
                        <h1 className="text-lg font-medium text-black ml-2">
                            Postingan
                        </h1>
                        <Link
                            href="/admin/kegiatan"
                            className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 gap-3"
                            passHref
                        >
                            <span className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                <IconCalendarEvent />
                            </span>
                            Kegiatan
                        </Link>
                        <Link
                            href="/admin/artikel"
                            className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 gap-3"
                            passHref
                        >
                            <span className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                <IconNews />
                            </span>
                            Artikel
                        </Link>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    );
}
