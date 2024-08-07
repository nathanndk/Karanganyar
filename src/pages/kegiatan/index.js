import React, { useState } from "react";
import Navbar from "@/components/molekuls/Navbar/index";
import api from "@/api/index";
import moment from "moment";
import "moment/locale/id";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import { Pagination } from "flowbite-react";
import CTA from "@/components/organism/Landing/CTA/Index";
import Footer from "@/components/molekuls/Footer/Index";

export default function Index({ data, params }) {
  const [filter, setFilter] = useState(params);
  const Router = useRouter();

  const onSearch = () => {
    Router.push({
      pathname: "/kegiatan",
      query: { search: filter.search },
    });
  };

  const onPageChange = (page) => {
    Router.push({
      pathname: "/kegiatan",
      query: { ...params, page },
    });
  };

  return (
    <>
      <Head>
        <title>Temukan Artikel | Karanganyar</title>
        <meta
          name="description"
          content="Cari artikel menarik dan informatif tentang berbagai topik di sini. Temukan informasi yang Anda butuhkan dengan mudah."
        />
        <meta
          name="keywords"
          content="artikel, informasi, edukasi, berita, topik terbaru, bacaan menarik"
        />
        <meta name="author" content="Karanganyar" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Temukan Artikel | Karanganyar" />
        <meta
          property="og:description"
          content="Cari artikel menarik dan informatif tentang berbagai topik di sini. Temukan informasi yang Anda butuhkan dengan mudah."
        />
        <meta property="og:image" content="/images/visi-misi.jpg" />
        <meta
          property="og:url"
          content="https://janjipraptiningsih.com/artikel"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Temukan Artikel | Karanganyar" />
        <meta
          name="twitter:description"
          content="Cari artikel menarik dan informatif tentang berbagai topik di sini. Temukan informasi yang Anda butuhkan dengan mudah."
        />
        <meta name="twitter:image" content="/images/visi-misi.jpg" />
        <link rel="canonical" href="https://janjipraptiningsih.com/artikel" />
      </Head>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto py-6 px-4 md:px-20">
          <div className="py-6 mt-12">
            <h1 className="text-4xl font-bold text-orange-500">
              Kegiatan
              <span className="text-black"> Kelurahan</span>
            </h1>
            <p className="mt-2 text-lg text-gray-800 text-left">
              Menyajikan informasi terbaru tentang kegiatan dan acara di Kelurahan
              Karanganyar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {data.activities.data.map((activity) => (
              <Link
                href={`/kegiatan/detail?slug=${activity.slug}`}
                key={activity.id}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={activity.image.preview}
                    alt={activity.name}
                    className="w-full aspect-video object-cover rounded-t-lg"
                    width={500}
                    height={500}
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-orange-500">
                      {activity.name}
                    </h3>
                    <p className="text-gray-600">
                      {moment(activity.date).format("LL")}
                    </p>
                    <p className="text-gray-600">
                      {moment(
                        moment(activity.date).format("YYYY-MM-DD") +
                          " " +
                          activity.start_time
                      ).format("LT")}{" "}
                      -{" "}
                      {moment(
                        moment(activity.date).format("YYYY-MM-DD") +
                          " " +
                          activity.end_time
                      ).format("LT")}
                    </p>
                    <p className="text-gray-600">{activity.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              currentPage={params.page}
              totalPages={data.activities.totalPage}
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
  params.limit = params.limit || 3;
  params.page = parseInt(params.page) || 1;
  params.search = params.search || "";

  const responseActivities = await api.get("/no-auth/activities/list", {
    params,
  });
  const responseFooter = await api.get("/no-auth/footer/show/1");

  const data = {
    activities: responseActivities.data.data,
    footer: responseFooter.data.data,
  };

  return {
    props: {
      data,
      params,
    },
  };
};
