import Head from "next/head";
import React from "react";
import Navbar from "@/components/molekuls/Navbar/index";
import Image from "next/image";
import Cta from "@/components/organism/Landing/CTA/Index";
import Footer from "@/components/molekuls/Footer/Index";
import api from "@/api/index";
import Content from "@/components/organism/Landing/Content/Index";
export default function Index({ data }) {
    return (
        <>
            <Head>
                <title>
                    Struktur Pemerintahan karangjati | Kelurahan karangjati
                </title>
                <meta
                    name="description"
                    content="Pelajari Struktur Pemerintahan Kelurahan karangjati, Kabupaten Sragen. Temukan informasi menarik tentang asal-usul dan perkembangan wilayah ini."
                />
                <meta
                    name="keywords"
                    content="Struktur Pemerintahan karangjati, Kabupaten Sragen, Struktur Pemerintahan"
                />
                <meta name="author" content="karangjati" />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="Struktur Pemerintahan karangjati | Kelurahan karangjati"
                />
                <meta
                    property="og:description"
                    content="Pelajari Struktur Pemerintahan dan perkembangan Kelurahan karangjati, Kabupaten Sragen. Temukan informasi menarik tentang asal-usul dan perkembangan wilayah ini."
                />
                <meta
                    property="og:image"
                    content="/images/kelurahan-karangjati.jpg"
                />
                <meta
                    property="og:url"
                    content="https://janjipraptiningsih.com/artikel/detail?id=example"
                />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Struktur Pemerintahan karangjati | Kelurahan karangjati"
                />
                <meta
                    name="twitter:description"
                    content="Pelajari Struktur Pemerintahan dan perkembangan Kelurahan karangjati, Kabupaten Sragen. Temukan informasi menarik tentang asal-usul dan perkembangan wilayah ini."
                />
                <meta
                    name="twitter:image"
                    content="/images/kelurahan-karangjati.jpg"
                />
                <link
                    rel="canonical"
                    href="https://janjipraptiningsih.com/artikel/detail?id=example"
                />
            </Head>
            <Navbar />
            <Content
                name={data.content.name}
                image={data.content.image.preview}
            />
            {/* make gallery */}
            <div className="container mx-auto px-4 md:px-20 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.organization.map((item, index) => (
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
                ))}
            </div>
            <Cta />
            <Footer data={data.footer} />
        </>
    );
}

export const getServerSideProps = async () => {
    try {
        const [responseOrganization, responseContent, responseFooter] =
            await Promise.all([
                api.get("/no-auth/organization/list"),
                api.get("/no-auth/content/show/3"),
                api.get("/no-auth/footer/show/1"),
            ]);

        // console.log("Organization data:", responseOrganization.data);
        return {
            props: {
                data: {
                    organization: responseOrganization.data.data.data,
                    content: responseContent.data.data,
                    footer: responseFooter.data,
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
