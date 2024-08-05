import React from "react";
import Head from "next/head";
import Navbar from "@/components/molekuls/Navbar/index";
import WhatWeDo from "@/components/organism/Landing/what-we-do/Index";
import Concept from "@/components/organism/Landing/concept/Index";
import Approach from "@/components/organism/Landing/approach/Index";
import Activities from "@/components/organism/Landing/Articles-Home/Index";
import NewActivities from "@/components/organism/Landing/beranda-kegiatan/Index";
import Cta from "@/components/organism/Landing/CTA/Index";
import Footer from "@/components/molekuls/Footer/Index";
import api from "@/api/index";

export default function Index({ data }) {
    return (
        <>
            <Head>
                <title>Apa yang Kami Lakukan | karangjatih</title>
                <meta
                    name="description"
                    content="Pelajari tentang apa yang dilakukan oleh karangjatih, konsep, pendekatan, dan kegiatan terbaru yang dijalankan untuk pengembangan komunitas di Indonesia."
                />
                <meta
                    name="keywords"
                    content="karangjatih, apa yang kami lakukan, konsep, pendekatan, kegiatan, pengembangan komunitas, Indonesia"
                />
                <meta name="author" content="Tim karangjatih" />
                <meta
                    property="og:title"
                    content="Apa yang Kami Lakukan | karangjatih"
                />
                <meta
                    property="og:description"
                    content="Pelajari tentang apa yang dilakukan oleh karangjatih, konsep, pendekatan, dan kegiatan terbaru yang dijalankan untuk pengembangan komunitas di Indonesia."
                />
                <meta
                    property="og:url"
                    content="https://janjipraptiningsih.com"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://janjipraptiningsih.com/path-to-image.jpg"
                />
                <meta property="og:site_name" content="karangjatih" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Apa yang Kami Lakukan | karangjatih"
                />
                <meta
                    name="twitter:description"
                    content="Pelajari tentang apa yang dilakukan oleh karangjatih, konsep, pendekatan, dan kegiatan terbaru yang dijalankan untuk pengembangan komunitas di Indonesia."
                />
                <meta
                    name="twitter:image"
                    content="https://janjipraptiningsih.com/path-to-image.jpg"
                />
            </Head>
            <Navbar />
            <WhatWeDo data={data.whatWeDo} />
            <Concept data={data.concept} />
            <Approach data={data.approach} />
            <Activities data={data.activities} />
            <NewActivities data={data.newActivities} />
            <Cta />
            <Footer data={data.footer} />
        </>
    );
}

export const getServerSideProps = async () => {
    const data = {};

    // Definisikan semua promise untuk permintaan API
    const promises = [
        api.get("/no-auth/what-we-do/show/1"),
        api.get("/no-auth/activity-concept/show/1"),
        api.get("/no-auth/activity-concept/show/2"),
        api.get("/no-auth/footer/show/1"),
        api.get("/no-auth/activity-categories/list"),
        api.get("/no-auth/activities/list"),
    ];

    // Jalankan semua permintaan API secara paralel
    const [
        responseWhatWeDo,
        responseConcept,
        responseApproach,
        responseFooter,
        responseActivites,
        responseActivities,
    ] = await Promise.all(promises);

    // Masukkan hasil response ke dalam objek data
    data.whatWeDo = responseWhatWeDo.data.data;
    data.concept = responseConcept.data.data;
    data.approach = responseApproach.data.data;
    data.footer = responseFooter.data.data;
    data.activities = responseActivites.data.data.data;
    data.newActivities = responseActivities.data.data;

    return {
        props: {
            data,
        },
    };
};
