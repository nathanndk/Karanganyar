import React from "react";
import Navbar from "@/components/molekuls/Navbar/index";
import api from "@/api/index";
import moment from "moment";
import "moment/locale/id";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import { Pagination } from "flowbite-react";
import truncate from "html-truncate";
import CTA from "@/components/organism/Landing/CTA/Index";
import Footer from "@/components/molekuls/Footer/Index";

export default function Index({ data, params }) {
  const Router = useRouter();

  const onPageChange = (page) => {
    Router.push({
      pathname: "/kelembagaan",
      query: { ...params, page },
    });
  };

  return (
    <>
      <Head>
        <title>Temukan Lembaga | karangjatih</title>
        <meta name="description" content="Cari Lembaga Desa Karangjati" />
        <meta
          name="keywords"
          content="Lembaga, Desa Karangjati, Karangjati, Sragen, Jawa Tengah"
        />
        <meta name="author" content="karangjatih" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Temukan Lembaga | karangjatih" />
        <meta
          property="og:description"
          content="Cari Lembaga Desa Karangjati"
        />
        <meta property="og:image" content="/images/visi-misi.jpg" />
        <meta
          property="og:url"
          content="https://janjipraptiningsih.com/Lembaga"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Temukan Lembaga | karangjatih" />
        <meta
          name="twitter:description"
          content="Cari Lembaga Desa Karangjati"
        />
        <meta name="twitter:image" content="/images/visi-misi.jpg" />
        <link rel="canonical" href="https://janjipraptiningsih.com/Lembaga" />
      </Head>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto py-6 px-4 md:px-20">
          <div className="py-6 mt-12">
            <h1 className="text-4xl font-bold text-orange-500">
              Kelembagaan
              <span className="text-black"> Karanganyar</span>
            </h1>
            <p className="mt-2 text-lg text-gray-800 text-left">
              Kelembagaan yang terdapat di Kelurahan Karanganyar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.articles.data.map((article) => (
              <Link
                href={`/kelembagaan/detail?slug=${article.slug}`}
                key={article.id}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={article.image.preview}
                    alt={article.name}
                    className="w-full object-cover h-64"
                    width={500}
                    height={280}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {article.name}
                    </h2>
                    <div
                      className="prose prose-lg dark:prose-dark max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: article.content,
                      }}
                    ></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              currentPage={params.page}
              totalPages={data.articles.totalPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
      <CTA />
      <Footer data={data.footer} />
    </>
  );
}

const truncateHtml = (html, maxLength) => {
  return truncate(html, maxLength, { ellipsis: "..." });
};

export const getServerSideProps = async (context) => {
  const params = context.query;
  params.category_code = "institution";
  params.limit = params.limit || 3;
  params.page = parseInt(params.page) || 1;
  params.search = params.search || "";

  const responseArticles = await api.get("/no-auth/gallery/list", params);
  const responseFooter = await api.get("/no-auth/footer/show/1");

  responseArticles.data.data.data.map((article) => {
    article.content = truncateHtml(article.content, 50);
  });

  const data = {
    articles: responseArticles.data.data,
    footer: responseFooter.data.data,
  };

  return {
    props: {
      data,
      params,
    },
  };
};
