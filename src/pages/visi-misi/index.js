import Head from "next/head";
import React from "react";
import Navbar from "@/components/molekuls/Navbar/index";
import Image from "next/image";
import Cta from "@/components/organism/Landing/CTA/Index";
import Footer from "@/components/molekuls/Footer/Index";
import api from "@/api/index";
// import Content from "@/components/organism/Landing/Content/Index";
import VisiMisi from "@/components/organism/Landing/visi-misi/Index";
export default function Index({ data }) {
  return (
    <>
      <Head>
        <title>Sejarah Karanganyar | Kelurahan Karanganyar</title>
        <meta
          name="description"
          content="Pelajari sejarah dan perkembangan Kelurahan Karanganyar, Kabupaten Karanganyar. Temukan informasi menarik tentang asal-usul dan perkembangan wilayah ini."
        />
        <meta
          name="keywords"
          content="Sejarah Karanganyar, Kabupaten Karanganyar, asal-usul, sejarah, perkembangan"
        />
        <meta name="author" content="karangjatih" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Sejarah Karanganyar | Kelurahan Karanganyar"
        />
        <meta
          property="og:description"
          content="Pelajari sejarah dan perkembangan Kelurahan Karanganyar, Kabupaten Karanganyar. Temukan informasi menarik tentang asal-usul dan perkembangan wilayah ini."
        />
        <meta property="og:image" content="/images/kelurahan-karanganyar.jpg" />
        <meta
          property="og:url"
          content="https://janjipraptiningsih.com/artikel/detail?id=example"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sejarah Karanganyar | Kelurahan Karanganyar"
        />
        <meta
          name="twitter:description"
          content="Pelajari sejarah dan perkembangan Kelurahan Karanganyar, Kabupaten Karanganyar. Temukan informasi menarik tentang asal-usul dan perkembangan wilayah ini."
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
      <VisiMisi></VisiMisi>
      <Cta />
      <Footer data={data.footer} />
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const [responseFooter] = await Promise.all([

      api.get("/no-auth/footer/show/1"),
    ]);

    // console.log("Content data:", responseContent.data);
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
