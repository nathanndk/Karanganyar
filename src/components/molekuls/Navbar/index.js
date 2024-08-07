import { Dropdown } from "flowbite-react";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  const isDropdownActive = (paths) => paths.includes(pathname);

  return (
    <nav className="fixed z-50 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full px-4 lg:px-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/logo-kelurahan-karanganyar.png"
            className="mr-3"
            alt="Logo Kelurahan Karanganyar"
            width={40}
            height={50}
          />
          <div className="flex flex-col">
            <span className="hidden lg:block self-center whitespace-nowrap text-xl font-bold text-orange-500 dark:text-white">
              Kelurahan Karanganyar
            </span>
          </div>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <IconMenu2 />
        </button>
        <div
          className={
            "w-full lg:block lg:w-auto" + (isOpen ? " block" : " hidden")
          }
        >
          <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 text-gray-900 rounded lg:p-0 dark:text-white ${
                  isActive("/") ? "text-orange-500 font-bold" : ""
                }`}
                aria-current="page"
              >
                Beranda
              </Link>
            </li>
            <li className="hidden lg:block">
              <div>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <span
                      className={`${
                        isDropdownActive([
                          "/struktur-pemerintahan",
                          "/visi-misi",
                          "/sejarah",
                        ])
                          ? "text-orange-500 font-bold"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      Profil
                    </span>
                  }
                >
                  <Link href="/struktur-pemerintahan">
                    <Dropdown.Item
                      className={
                        isActive("/struktur-pemerintahan")
                          ? "text-orange-500 font-bold"
                          : ""
                      }
                    >
                      Struktur Pemerintahan
                    </Dropdown.Item>
                  </Link>
                  <Link href="/visi-misi">
                    <Dropdown.Item
                      className={
                        isActive("/visi-misi")
                          ? "text-orange-500 font-bold"
                          : ""
                      }
                    >
                      Visi Misi
                    </Dropdown.Item>
                  </Link>
                  <Link href="/sejarah">
                    <Dropdown.Item
                      className={
                        isActive("/sejarah") ? "text-orange-500 font-bold" : ""
                      }
                    >
                      Sejarah
                    </Dropdown.Item>
                  </Link>
                </Dropdown>
              </div>
            </li>
            <li className="block lg:hidden">
              <div className="block py-2 px-3 text-gray-900 rounded lg:p-0 dark:text-white">
                <Disclosure>
                  <Disclosure.Button
                    className={`${
                      isDropdownActive([
                        "/struktur-pemerintahan",
                        "/visi-misi",
                        "/sejarah",
                      ])
                        ? "text-orange-500 font-bold"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    Profil
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">
                    <Link
                      href="/struktur-pemerintahan"
                      className={`block py-3 px-3 text-gray-900 rounded lg:p-0 dark:text-white ${
                        isActive("/struktur-pemerintahan")
                          ? "text-orange-500 font-bold"
                          : ""
                      }`}
                    >
                      Struktur Pemerintahan
                    </Link>
                    <Link
                      href="/visi-misi"
                      className={`block py-2 px-3 text-gray-900 rounded lg:p-0 dark:text-white ${
                        isActive("/visi-misi")
                          ? "text-orange-500 font-bold"
                          : ""
                      }`}
                    >
                      Visi & Misi
                    </Link>
                    <Link
                      href="/sejarah"
                      className={`block py-2 px-3 text-gray-900 rounded lg:p-0 dark:text-white ${
                        isActive("/sejarah") ? "text-orange-500 font-bold" : ""
                      }`}
                    >
                      Sejarah
                    </Link>
                  </Disclosure.Panel>
                </Disclosure>
              </div>
            </li>
            <li>
              <Link
                href="/kelembagaan"
                className={`block py-2 px-3 text-gray-900 rounded lg:p-0 dark:text-white ${
                  isActive("/kelembagaan") ? "text-orange-500 font-bold" : ""
                }`}
              >
                Kelembagaan
              </Link>
            </li>
            <li>
              <Link
                href="/potensi"
                className={`block py-2 px-3 text-gray-900 rounded lg:p-0 dark:text-white ${
                  isActive("/potensi") ? "text-orange-500 font-bold" : ""
                }`}
              >
                Potensi
              </Link>
            </li>
            <li>
              <Link
                href="/kegiatan"
                className={`block py-2 px-3 text-gray-900 rounded lg:p-0 dark:text-white ${
                  isActive("/kegiatan") ? "text-orange-500 font-bold" : ""
                }`}
              >
                Kegiatan
              </Link>
            </li>
            <li>
              <Link
                href="/berita"
                className={`block py-2 px-3 text-gray-900 rounded lg:p-0 dark:text-white ${
                  isActive("/berita") ? "text-orange-500 font-bold" : ""
                }`}
              >
                Berita
              </Link>
            </li>
            <li>
              <Link
                href="/dasar-hukum"
                className={`block py-2 px-3 text-gray-900 rounded lg:p-0 dark:text-white ${
                  isActive("/dasar-hukum") ? "text-orange-500 font-bold" : ""
                }`}
              >
                Dasar Hukum
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
