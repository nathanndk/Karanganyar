import Head from "next/head";
import React from "react";
import Navbar from "@/components/molekuls/Navbar/index";
import api from "@/api/index";
import moment from "moment";
import "moment/locale/id";
import Image from "next/image";
import CTA from "@/components/organism/Landing/CTA/Index";
import Footer from "@/components/molekuls/Footer/Index";

export default function Index({ data }) {
  return (
    <>
      <Head>
        <title>{data.article.name} | Karanganyar</title>
        <meta
          name="description"
          content={`${data.article.name} - Temukan informasi menarik dan mendalam tentang topik ini. Baca artikel lengkapnya di sini.`}
        />
        <meta
          name="keywords"
          content={`artikel, ${data.article.name}, informasi, edukasi, berita`}
        />
        <meta name="author" content="karangjatih" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`${data.article.name} | karangjatih`}
        />
        <meta
          property="og:description"
          content={`${data.article.name} - Temukan informasi menarik dan mendalam tentang topik ini. Baca artikel lengkapnya di sini.`}
        />
        <meta property="og:image" content={data.article.image.preview} />
        <meta
          property="og:url"
          content={`https://janjipraptiningsih.com/artikel/detail?id=${data.article.id}`}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${data.article.name} | karangjatih`}
        />
        <meta
          name="twitter:description"
          content={`${data.article.name} - Temukan informasi menarik dan mendalam tentang topik ini. Baca artikel lengkapnya di sini.`}
        />
        <meta name="twitter:image" content={data.article.image.preview} />
        <link
          rel="canonical"
          href={`https://janjipraptiningsih.com/artikel/detail?id=${data.article.id}`}
        />
      </Head>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto py-8 px-4 md:px-20">
          <div className="flex flex-col gap-8 mt-20 lg:mt-32 items-center">
            <h1 className="text-2xl lg:text-4xl text-center font-bold text-gray-800 dark:text-white leading-tight">
              {data.article.name}
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm lg:text-lg">
              Diubah pada {moment(data.article.updated_at).format("LL")}
            </p>
            <div className="w-full flex justify-center">
              <div className="w-full max-w-md lg:max-w-lg overflow-hidden rounded-lg">
                <Image
                  src={data.article.image.preview}
                  alt="image"
                  layout="responsive"
                  width={800}
                  height={1000} // Keep this ratio to make it responsive
                  className="object-contain"
                />
              </div>
            </div>
            <div
              className="prose prose-lg dark:prose-dark md:px-16 max-w-none"
              dangerouslySetInnerHTML={{
                __html: data.article.content,
              }}
            ></div>
          </div>
        </div>
      </div>
      <CTA />
      <Footer data={data.footer} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const responseFooter = await api.get("/no-auth/footer/show/1");
  const responseArticles = await api.get(
    "/no-auth/articles/show?slug=" + query.slug
  );

  const data = {
    article: responseArticles.data.data,
    footer: responseFooter.data.data,
  };

  return {
    props: {
      data,
    },
  };
}
