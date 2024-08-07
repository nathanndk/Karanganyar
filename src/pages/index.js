import React from "react";
import HeroSection from "@/components/organism/Landing/beranda-sejarah/Index";
import Cta from "@/components/organism/Landing/CTA/Index";
import Footer from "@/components/molekuls/Footer/Index";
import KegiatanTerbaru from "@/components/organism/Landing/beranda-kegiatan/Index";
import api from "@/api/index";
import Navbar from "@/components/molekuls/Navbar/index";
import Head from "next/head";
import Welcome from "@/components/organism/Landing/beranda-hero/Index";
import BeritaTerbaru from "@/components/organism/Landing/beranda-berita/Index";
import Potensi from "@/components/organism/Landing/beranda-potensi/Index";
import truncate from "html-truncate";

export default function Index({ data }) {
  return (
    <>
      <Head>
        <title>Karanganyar - Overview</title>
        <meta
          name="description"
          content="Temukan misi, kegiatan, dan pembaruan terbaru dari Karanganyar, kelurahan terbaik di Karanganyar."
        />
        <meta
          name="keywords"
          content="Karanganyar, kelurahan, Karanganyar, jawa tengah, indonesia, kegiatan, berita, potensi, pembaruan"
        />
        <meta name="author" content="Tim Karanganyar" />
        <meta property="og:title" content="Karanganyar - Overview" />
        <meta
          property="og:description"
          content="Temukan misi, kegiatan, dan pembaruan terbaru dari Karanganyar, sebuah kelurahan terbaik di Karanganyar."
        />
        <meta property="og:url" content="https://janjipraptiningsih.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://janjipraptiningsih.com/path-to-image.jpg"
        />
        <meta property="og:site_name" content="Karanganyar" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Karanganyar - Overview" />
        <meta
          name="twitter:description"
          content="Temukan misi, kegiatan, dan pembaruan terbaru dari Karanganyar, sebuah NGO terkemuka di Indonesia."
        />
        <meta
          name="twitter:image"
          content="https://janjipraptiningsih.com/path-to-image.jpg"
        />
      </Head>
      <Navbar />
      <Welcome />
      <HeroSection />
      <KegiatanTerbaru data={data.activities} />
      <Potensi />
      <BeritaTerbaru data={data.articles} />
      <Cta />
      <Footer data={data.footer} />
    </>
  );
}

const truncateHtml = (html, maxLength) => {
  return truncate(html, maxLength, { ellipsis: "..." });
};

export const getServerSideProps = async () => {
  const [responseArticles, responseActivities, responseFooter] =
    await Promise.all([
      api.get("/no-auth/articles/list"),
      api.get("/no-auth/activities/list"),
      api.get("/no-auth/footer/show/1"),
    ]);

  responseArticles.data.data.data.map((article) => {
    article.content = truncateHtml(article.content, 180);
  });
  
  const data = {
    // hero: responseHero.data.data,
    // about: responseAbout.data.data,
    articles: responseArticles.data.data.data,
    footer: responseFooter.data.data,
    activities: responseActivities.data.data.data,
  };
  // console.log(data.activities);

  // console.log(data.articles);

  // data.about.url_video = data.about.url_video.replace(
  //     "youtu.be",
  //     "youtube.com/embed"
  // );

  return {
    props: {
      data,
    },
  };
};
