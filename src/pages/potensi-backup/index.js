import Head from "next/head";
import React from "react";
import Navbar from "@/components/molekuls/Navbar/index";
import Image from "next/image";
import Cta from "@/components/organism/Landing/CTA/Index";
import Footer from "@/components/molekuls/Footer/Index";
import api from "@/api/index";

export default function Index({ data }) {
    return (
        <>
            <Head>
                <title>Potensi Karanganyar | Kelurahan Karanganyar</title>
                <meta
                    name="description"
                    content="Temukan produk unggulan, tempat wisata, dan kuliner khas di Kelurahan Karanganyar. Jelajahi potensi wilayah ini yang kaya akan budaya dan tradisi."
                />
                <meta
                    name="keywords"
                    content="Potensi Karanganyar, produk unggulan, wisata, kuliner, Kabupaten Karanganyar"
                />
                <meta name="author" content="karangjatih" />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="Potensi Karanganyar | Kelurahan Karanganyar"
                />
                <meta
                    property="og:description"
                    content="Temukan produk unggulan, tempat wisata, dan kuliner khas di Kelurahan Karanganyar. Jelajahi potensi wilayah ini yang kaya akan budaya dan tradisi."
                />
                <meta
                    property="og:image"
                    content="/images/kelurahan-karanganyar.jpg"
                />
                <meta
                    property="og:url"
                    content="https://janjipraptiningsih.com/artikel/detail?id=example"
                />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Potensi Karanganyar | Kelurahan Karanganyar"
                />
                <meta
                    name="twitter:description"
                    content="Temukan produk unggulan, tempat wisata, dan kuliner khas di Kelurahan Karanganyar. Jelajahi potensi wilayah ini yang kaya akan budaya dan tradisi."
                />
                <meta
                    name="twitter:image"
                    content="/images/kelurahan-karanganyar.jpg"
                />
                <link
                    rel="canonical"
                    href="https://janjipraptiningsih.com/artikel/detail?id=example"
                />
            </Head>
            <Navbar />
            <main className="container mx-auto px-4 md:px-20 py-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl lg:text-6xl font-bold text-orange-500 leading-tight">
                        Potensi Karanganyar
                    </h1>
                    <p className="text-gray-600 text-lg mt-4">
                        Temukan produk unggulan, tempat wisata, dan kuliner khas
                        di Kelurahan Karanganyar. Jelajahi potensi wilayah ini
                        yang kaya akan budaya dan tradisi.
                    </p>
                </header>
                <section className="mb-12">
                    <Image
                        src="/images/kelurahan-karanganyar.jpg"
                        alt="Kelurahan Karanganyar"
                        layout="responsive"
                        width={800}
                        height={450}
                        className="object-cover rounded-lg"
                    />
                </section>
                <section className="prose lg:prose-xl mx-auto max-w-3xl">
                    <h2 className="text-2xl font-semibold mb-4">
                        Produk Unggulan Kelurahan Karanganyar
                    </h2>
                    <table className="w-full border-collapse border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-200 px-4 py-2">
                                    Gambar
                                </th>
                                <th className="border border-gray-200 px-4 py-2">
                                    Lingkungan
                                </th>
                                <th className="border border-gray-200 px-4 py-2">
                                    Nama Usaha
                                </th>
                                <th className="border border-gray-200 px-4 py-2">
                                    Pemilik
                                </th>
                                <th className="border border-gray-200 px-4 py-2">
                                    Alamat
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/tahu.jpg"
                                        alt="Membuat Tahu"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Membuat Tahu
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Ibu Mardo
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan RT. 03 RW. 02 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/cilok.jpg"
                                        alt="Membuat Cilok/Salome"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Membuat Cilok/Salome
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Bp. Mujiyono
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan RT. 01 RW. 01 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/bandeng.jpg"
                                        alt="Bandeng Presto Prima Rasa"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Bandeng Presto Prima Rasa
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Ibu Hartati Ngesti Palupi
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan RT. 02 RW. 02 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/souvenir.jpg"
                                        alt="Membuat Souvenir"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Membuat Souvenir
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Ibu Sukati
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan RT. 01 RW. 02 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/sate.jpg"
                                        alt="Membuat Sate Ayam"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Membuat Sate Ayam
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Bp. Dul Rubai
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan RT. 04 RW. 01 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/anyaman.jpg"
                                        alt="Membuat Kerajinan Anyaman Keranjang Plastik"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Karanganyar
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Membuat Kerajinan Anyaman Keranjang Plastik
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Bp. Nanang
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Karanganyar RT. 03 RW. 05 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/karak.jpg"
                                        alt="Membuat Karak"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Dompon
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Membuat Karak
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Bp. Babah Untung
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Dimoro RT. 01 RW. 10 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/mie.jpg"
                                        alt="Membuat Mie"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Dompon
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Membuat Mie
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Bp. Warto
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Dimoro RT. 01 RW. 10 Kel. Karanganyar
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">
                        Tempat Wisata dan Kuliner
                    </h2>
                    <table className="w-full border-collapse border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-200 px-4 py-2">
                                    Gambar
                                </th>
                                <th className="border border-gray-200 px-4 py-2">
                                    Lingkungan
                                </th>
                                <th className="border border-gray-200 px-4 py-2">
                                    Nama Sarana / Prasarana
                                </th>
                                <th className="border border-gray-200 px-4 py-2">
                                    Alamat
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/stadion.jpg"
                                        alt="Stadion 45 Karanganyar"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Stadion 45 Karanganyar
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan RT. 01 RW. 01 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/taman-pancasila.jpg"
                                        alt="Taman Pancasila Karanganyar"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Karanganyar
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Taman Pancasila Karanganyar
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Jl. Lawu Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/hotel.jpg"
                                        alt="Hotel Atmo"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Dompon
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Hotel Atmo
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Dompon RT. 02 RW. 08 Kel. Karanganyar
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">
                        Wisata Kuliner
                    </h2>
                    <table className="w-full border-collapse border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-200 px-4 py-2">
                                    Gambar
                                </th>
                                <th className="border border-gray-200 px-4 py-2">
                                    Lingkungan
                                </th>
                                <th className="border border-gray-200 px-4 py-2">
                                    Nama Usaha / Warung Makan
                                </th>
                                <th className="border border-gray-200 px-4 py-2">
                                    Pemilik
                                </th>
                                <th className="border border-gray-200 px-4 py-2">
                                    Alamat Usaha
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/repndho.jpg"
                                        alt="Warung Makan Rependho"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Warung Makan Rependho
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Bp. Samiran
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan RT. 02 RW. 02 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/pak-wahono.jpg"
                                        alt="Warung Makan Pak Wahono"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Warung Makan Pak Wahono
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Bp. Wahono
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan RT. 03 RW. 02 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/mie-ayam.jpg"
                                        alt="Warung Mie Ayam Naryo"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Warung Mie Ayam Naryo
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Bp. Naryo
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan RT. 03 RW. 03 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/nasi-tumpang.jpg"
                                        alt="Warung Spesial Nasi Tumpang & Soto Narto"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Warung Spesial Nasi Tumpang & Soto Narto
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Bp. Narto
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Cerbonan RT. 03 RW. 03 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/cindelaras.jpg"
                                        alt="Warung Cindelaras"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Karanganyar
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Warung Cindelaras
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Ibu Mariyo
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Karangrejo, RT. 02 RW. 05 Kel. Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/mie-ayam-bakso.jpg"
                                        alt="Warung Mie Ayam Bakso Pak Katrem"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Karanganyar
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Warung Mie Ayam Bakso Pak Katrem
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Bp. Katrem
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Jl. Badak II Karanganyar RT. 01 RW. 07 Kel.
                                    Karanganyar
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">
                                    <Image
                                        src="/images/kuliner-malam.jpg"
                                        alt="Kuliner Malam Hari Taman Pancasila"
                                        width={100}
                                        height={100}
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Karanganyar
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Kuliner Malam Hari Taman Pancasila
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    PKL Taman Pancasila
                                </td>
                                <td className="border border-gray-200 px-4 py-2">
                                    Karanganyar
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 className="text-2xl font-semibold mt-8 mb-4">
                        Situs Sejarah
                    </h2>
                    <p className="mb-4">
                        Salah satu situs sejarah penting di Karanganyar adalah
                        Makam Nyi Ageng Karang, cikal bakal Karanganyar, yang
                        terletak di RT.02 RW.04 Kelurahan Karanganyar.
                    </p>
                    <Image
                        src="/images/makam-nyi-ageng.jpg"
                        alt="Makam Nyi Ageng Karang"
                        layout="responsive"
                        width={800}
                        height={450}
                        className="object-cover rounded-lg"
                    />
                </section>
            </main>
            <Cta />
            <Footer data={data.footer} />
        </>
    );
}

export const getServerSideProps = async () => {
    try {
        const { data: responseFooter } = await api.get(
            "/no-auth/footer/show/1"
        );

        return {
            props: {
                data: {
                    footer: responseFooter.data,
                },
            },
        };
    } catch (error) {
        console.error("Error fetching footer data:", error);
        return {
            props: {
                data: {
                    footer: null,
                },
            },
        };
    }
};
