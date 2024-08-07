import Head from "next/head";
import React from "react";
import Navbar from "@/components/molekuls/Navbar/index";
import Image from "next/image";
import Cta from "@/components/organism/Landing/CTA/Index";
import Footer from "@/components/molekuls/Footer/Index";
import api from "@/api/index";
import StrukturPemerintahan from "@/components/organism/Landing/struktur-pemerintahan";

export default function Index({ data }) {
  const organization = data.organization || [];

  return (
    <>
      <Head>
        <title>Struktur Pemerintahan Karanganyar | Kelurahan Karanganyar</title>
        <meta
          name="description"
          content="Pelajari Struktur Pemerintahan Kelurahan Karanganyar, Kabupaten Karanganyar. Temukan informasi menarik tentang asal-usul dan perkembangan wilayah ini."
        />
        <meta
          name="keywords"
          content="Struktur Pemerintahan Karanganyar, Kabupaten Karanganyar, Struktur Pemerintahan"
        />
        <meta name="author" content="Karanganyar" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Struktur Pemerintahan Karanganyar | Kelurahan Karanganyar"
        />
        <meta
          property="og:description"
          content="Pelajari Struktur Pemerintahan dan perkembangan Kelurahan Karanganyar, Kabupaten Karanganyar. Temukan informasi menarik tentang asal-usul dan perkembangan wilayah ini."
        />
        <meta property="og:image" content="/images/kelurahan-Karanganyar.jpg" />
        <meta
          property="og:url"
          content="https://janjipraptiningsih.com/artikel/detail?id=example"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Struktur Pemerintahan Karanganyar | Kelurahan Karanganyar"
        />
        <meta
          name="twitter:description"
          content="Pelajari Struktur Pemerintahan dan perkembangan Kelurahan Karanganyar, Kabupaten Karanganyar. Temukan informasi menarik tentang asal-usul dan perkembangan wilayah ini."
        />
        <meta
          name="twitter:image"
          content="/images/kelurahan-Karanganyar.jpg"
        />
        <link
          rel="canonical"
          href="https://janjipraptiningsih.com/artikel/detail?id=example"
        />
      </Head>
      <Navbar />
      <StrukturPemerintahan />
      {/* make gallery */}
      <div className="bg-gray-100 py-8">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-black dark:text-white mb-6">
          Informasi <span className="text-orange-500">Tambahan</span>
        </h2>
        <div className="container mx-auto px-12 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {organization.length > 0 ? (
            organization.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.image.preview}
                  alt="image"
                  width={800}
                  height={450}
                  className="object-cover w-full rounded-lg md:h-[350px]"
                />
                <br />
                <h1 className="text-xl lg:text-2xl text-center font-bold text-gray-800 dark:text-white leading-tight">
                  {item.title}
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
                  {item.subtitle}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
              Tidak ada data yang tersedia.
            </p>
          )}
        </div>
      </div>
      <Cta />
      <Footer data={data.footer} />
    </>
  );
}

export const getServerSideProps = async () => {
  const [responseOrganization, responseFooter] = await Promise.all([
    api.get("/no-auth/organization/list"),
    api.get("/no-auth/footer/show/1"),
  ]);

  const data = {
    organization: responseOrganization.data.data.data || [],
    footer: responseFooter.data.data,
  };

  return {
    props: {
      data,
    },
  };
};