import { Toast } from "flowbite-react";
import Notifications from "@/components/molekuls/Notifications";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Flowbite } from "flowbite-react";
import "@/styles/globals.css"; // Hapus impor ini jika sudah ada

import { useState, useEffect } from "react";
import Router from "next/router";
import PageLoader from "@/components/molekuls/PageLoader";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // Used for page transition
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);
    return (
        <>
            {/* {loading ? (
                <PageLoader />
            ) : ( */}
            <Flowbite>
                <Provider store={store}>
                    <NextNProgress color="rgb(249 115 22)" />
                    <Component {...pageProps} />
                    <Notifications />
                </Provider>
            </Flowbite>
            {/* )} */}
        </>
    );
}
