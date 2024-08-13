import Head from "next/head";
import React from "react";
import Navbar from "@/components/molekuls/Navbar/index";
import Image from "next/image";
import CTA from "@/components/organism/Landing/CTA/Index";
import Footer from "@/components/molekuls/Footer/Index";
import api from "@/api/index"; // Make sure this path is correct

export default function Index({ data }) {
  return (
    <>
      <Head>
        <title>Kondisi Geografis | Karanganyar</title>
        <meta
          name="description"
          content="Informasi mengenai kondisi geografis Kelurahan Karanganyar"
        />
        <meta
          name="keywords"
          content="Karanganyar, kondisi geografis, kelurahan"
        />
        <meta name="author" content="Karanganyar" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Kondisi Geografis | Karanganyar" />
        <meta
          property="og:description"
          content="Informasi mengenai kondisi geografis Kelurahan Karanganyar"
        />
        <meta property="og:image" content="/images/kelurahan-karanganyar.jpg" />
        <meta
          property="og:url"
          content="https://janjipraptiningsih.com/artikel/detail?id=1"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kondisi Geografis | Karanganyar" />
        <meta
          name="twitter:description"
          content="Informasi mengenai kondisi geografis Kelurahan Karanganyar"
        />
        <meta
          name="twitter:image"
          content="/images/kelurahan-karanganyar.jpg"
        />
        <link
          rel="canonical"
          href="https://janjipraptiningsih.com/artikel/detail?id=1"
        />
      </Head>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto py-8 px-4 md:px-20">
          <div className="flex flex-col gap-8 mt-20 lg:mt-10">
            <h1 className="text-2xl lg:text-4xl font-bold mt-12 text-center text-black dark:text-white">
              Kondisi <span className="text-orange-500">Geografis</span>
            </h1>
            <div className="w-full overflow-hidden rounded-lg max-w-2xl mx-auto mb-8">
              <Image
                src="/images/peta-karanganyar.jpg"
                alt="Peta Kelurahan Karanganyar"
                layout="responsive"
                width={800}
                height={450}
                className="object-cover"
              />
            </div>
            <div className="prose prose-lg dark:prose-dark md:px-16 max-w-none">
              <h2 className="text-xl font-semibold mt-8">Luas Wilayah</h2>
              <p>Karanganyar memiliki luas wilayah 521.520 Ha</p>
              <h2 className="text-xl font-semibold mt-8">Jumlah Lingkungan</h2>
              <p>Jumlah Lingkungan ada 3 Lingkungan yaitu:</p>
              <table className="table-auto w-full text-left">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Lingkungan</th>
                    <th className="px-4 py-2">RT</th>
                    <th className="px-4 py-2">RW</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Cerbonan</td>
                    <td className="border px-4 py-2">12</td>
                    <td className="border px-4 py-2">3</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">Karanganyar</td>
                    <td className="border px-4 py-2">14</td>
                    <td className="border px-4 py-2">4</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Dompon</td>
                    <td className="border px-4 py-2">9</td>
                    <td className="border px-4 py-2">3</td>
                  </tr>
                </tbody>
              </table>
              <h2 className="text-xl font-semibold mt-8">Perbatasan Wilayah</h2>
              <table className="table-auto w-full text-left">
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Sebelah Utara</td>
                    <td className="border px-4 py-2">Kelurahan Bejen</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">Sebelah Selatan</td>
                    <td className="border px-4 py-2">Kelurahan Jungke</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Sebelah Timur</td>
                    <td className="border px-4 py-2">Kelurahan Tegalgede</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">Sebelah Barat</td>
                    <td className="border px-4 py-2">Kelurahan Cangakan</td>
                  </tr>
                </tbody>
              </table>
              <h2 className="text-xl font-semibold mt-8">
                Orbitasi (Jarak dari Pusat Pemerintahan)
              </h2>
              <table className="table-auto w-full text-left">
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      Jarak dari Pusat Pemerintahan Kecamatan
                    </td>
                    <td className="border px-4 py-2">0,5 Km</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border px-4 py-2">
                      Jarak dari Pusat Pemerintahan Kabupaten
                    </td>
                    <td className="border px-4 py-2">1 Km</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">
                      Jarak dari Pusat Pemerintahan Provinsi
                    </td>
                    <td className="border px-4 py-2">100 Km</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CTA />
      <Footer data={data.footer} />
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const responseFooter = await api.get("/no-auth/footer/show/1");

    return {
      props: {
        data: {
          footer: responseFooter.data.data,
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
