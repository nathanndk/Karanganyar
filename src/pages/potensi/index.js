import React, { useState } from "react";
import Navbar from "@/components/molekuls/Navbar/index";
import api from "@/api/index";
import moment from "moment";
import "moment/locale/id";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import { TextInput, Pagination } from "flowbite-react";
import { IconSearch } from "@tabler/icons-react";
import truncate from "html-truncate";
import CTA from "@/components/organism/Landing/CTA/Index";
import Footer from "@/components/molekuls/Footer/Index";

export default function Index({ data, params }) {
  const [filter, setFilter] = useState(params);
  const Router = useRouter();

  const onSearch = () => {
    // add params to this page
    Router.push({
      pathname: "/potensi",
      query: { search: filter.search },
    });
  };
  const onPageChange = (page) => {
    Router.push({
      pathname: "/potensi",
      query: { ...params, page },
    });
  };

  return (
    <>
      <Head>
        <title>Temukan Potensi | Karanganyar</title>
        <meta name="description" content="Cari Potensi Desa Karanganyar" />
        <meta
          name="keywords"
          content="Potensi, ekonomi, sosial, budaya, desa, Karanganyar, Sragen, Jawa Tengah"
        />
        <meta name="author" content="Karanganyar" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Temukan Potensi | Karanganyar" />
        <meta
          property="og:description"
          content="Cari Potensi menarik dari Desa Karanganyar"
        />
        <meta property="og:image" content="/images/visi-misi.jpg" />
        <meta
          property="og:url"
          content="https://janjipraptiningsih.com/Potensi"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Temukan Potensi | Karanganyar" />
        <meta
          name="twitter:description"
          content="Cari Potensi menarik dan informatif tentang berbagai topik di sini. Temukan informasi yang Anda butuhkan dengan mudah."
        />
        <meta name="twitter:image" content="/images/visi-misi.jpg" />
        <link rel="canonical" href="https://janjipraptiningsih.com/Potensi" />
      </Head>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto py-6 px-4 md:px-20">
          <div className="py-6 mt-12">
            <h1 className="text-4xl font-bold text-orange-500">
              Potensi
              <span className="text-black"> Karanganyar </span>
            </h1>
            <p className="mt-2 text-lg text-gray-800 text-left">
              Potensi di Kelurahan Karanganyar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.potency.data.map((article) => (
              <Link
                href={`/potensi/detail?slug=${article.slug}`}
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
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {moment(article.created_at).format("LL")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              currentPage={params.page}
              totalPages={data.potency.totalPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
      <CTA></CTA>
      <Footer data={data.footer} />
    </>
  );
}

const truncateHtml = (html, maxLength) => {
  return truncate(html, maxLength, { ellipsis: "..." });
};

export const getServerSideProps = async (context) => {
  const params = context.query;
  params.category_code = "potency";
  params.limit = params.limit || 3;
  params.page = parseInt(params.page) || 1;
  params.search = params.search || "";

  const responsePotency = await api.get("/no-auth/gallery/list", params);
  const responseFooter = await api.get("/no-auth/footer/show/1");

  responsePotency.data.data.data.map((article) => {
    article.content = truncateHtml(article.content, 50);
  });

  const data = {
    potency: responsePotency.data.data,
    footer: responseFooter.data.data,
  };

  return {
    props: {
      data,
      params,
    },
  };
};
