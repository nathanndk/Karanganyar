import Head from "next/head";
import React from "react";
import Navbar from "@/components/molekuls/Navbar/index";
import moment from "moment";
import "moment/locale/id";
import Image from "next/image";

export default function Index() {
  const article = {
    name: "Sejarah Karanganyar",
    updated_at: "2024-08-07T00:00:00Z",
    image: { preview: "/images/kelurahan-karanganyar.jpg" },
    content: `
      <p>Karanganyar adalah sebuah kabupaten di Provinsi Jawa Tengah, Indonesia. Kabupaten ini berbatasan dengan Kabupaten Sragen di utara, Kabupaten Grobogan di barat laut, Kabupaten Boyolali di barat, Kabupaten Sukoharjo di selatan, dan Provinsi Jawa Timur di timur.</p>
      <p>Sejarah Karanganyar dimulai dari era Kerajaan Mataram Kuno hingga masa kolonial Belanda. Banyak situs bersejarah yang dapat ditemukan di Karanganyar, seperti Candi Sukuh, Candi Cetho, dan berbagai peninggalan kolonial.</p>
      <p>Perjuangan rakyat Karanganyar melawan penjajah juga merupakan bagian penting dari sejarah daerah ini. Salah satu pahlawan nasional yang berasal dari Karanganyar adalah Raden Mas Said, atau lebih dikenal sebagai Pangeran Sambernyawa.</p>
      <p>Hari jadi Kabupaten Karanganyar diperingati setiap tanggal 18 November, yang merupakan tanggal berdirinya kabupaten ini pada tahun 1917.</p>
    `,
  };

  return (
    <>
      <Head>
        <title>{article.name} | Karanganyar</title>
        <meta
          name="description"
          content={`Sejarah Karanganyar - Temukan informasi menarik dan mendalam tentang topik ini. Baca artikel lengkapnya di sini.`}
        />
        <meta
          name="keywords"
          content={`artikel, Sejarah Karanganyar, informasi, edukasi, berita`}
        />
        <meta name="author" content="Karanganyar" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content={`Sejarah Karanganyar | Karanganyar`}
        />
        <meta
          property="og:description"
          content={`Sejarah Karanganyar - Temukan informasi menarik dan mendalam tentang topik ini. Baca artikel lengkapnya di sini.`}
        />
        <meta property="og:image" content={article.image.preview} />
        <meta
          property="og:url"
          content={`https://janjipraptiningsih.com/artikel/detail?id=1`}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Sejarah Karanganyar | Karanganyar`}
        />
        <meta
          name="twitter:description"
          content={`Sejarah Karanganyar - Temukan informasi menarik dan mendalam tentang topik ini. Baca artikel lengkapnya di sini.`}
        />
        <meta name="twitter:image" content={article.image.preview} />
        <link
          rel="canonical"
          href={`https://janjipraptiningsih.com/artikel/detail?id=1`}
        />
      </Head>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto py-8 px-4 md:px-20">
          <div className="flex flex-col gap-8 mt-20 lg:mt-10">
            <h1 className="text-2xl lg:text-4xl font-bold mt-12 mb-5 text-center text-black dark:text-white">
              Sejarah <span className="text-orange-500">Karanganyar</span>
            </h1>
            <div className="w-full overflow-hidden rounded-lg">
              <Image
                src={article.image.preview}
                alt="image"
                layout="responsive"
                width={800}
                height={450}
                className="object-cover"
              />
            </div>
            <div
              className="prose prose-lg dark:prose-dark md:px-16 max-w-none"
              dangerouslySetInnerHTML={{
                __html: article.content,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
