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
import CTA from "@/components/organism/Landing/CTA/Index";
import Footer from "@/components/molekuls/Footer/Index";

export default function Index({ data, params }) {
  const [filter, setFilter] = useState(params);
  const Router = useRouter();

  const onSearch = () => {
    Router.push({
      pathname: "/berita",
      query: { search: filter.search },
    });
  };

  const onPageChange = (page) => {
    Router.push({
      pathname: "/berita",
      query: { ...params, page },
    });
  };

  return (
    <>
      <Head>
        <title>Temukan Artikel | Karanganyar</title>
        {/* Meta Tags */}
        {/* ... */}
      </Head>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto py-6 px-4 md:px-20">
          <div className="py-6 mt-12">
            <h1 className="text-4xl font-bold text-orange-500">
              Berita
              <span className="text-black"> Terkini</span>
            </h1>
            <p className="mt-2 text-lg text-gray-800 text-left">
              Menyajikan informasi terbaru tentang berbagai topik dan berita di
              Kelurahan Karanganyar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.articles.data.map((article) => (
              <Link
                href={`/berita/detail?slug=${article.slug}`}
                key={article.id}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={article.image.preview}
                    alt={article.name}
                    className="w-full object-cover h-64"
                    width={500}
                    height={280}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white line-clamp-2">
                      {article.name}
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {moment(article.created_at).format("LL")}
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex overflow-x-auto sm:justify-center mt-8">
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

export const getServerSideProps = async (context) => {
  const params = context.query;
  params.limit = params.limit || 3; // Limit articles to 3 per page
  params.page = parseInt(params.page) || 1;
  params.search = params.search || "";

  const responseArticles = await api.get("/no-auth/articles/list", {
    params,
  });
  const responseFooter = await api.get("/no-auth/footer/show/1");

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
