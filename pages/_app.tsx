import AppLayout from "@/component/layout/AppLayout";
import Navbar from "@/component/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
// import  "../smartBanner/smart-app-banner.js"
import "../smartBanner/smart-app-banner.css";
import Script from "next/script.js";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppLayout>
            <Head>
                <meta name="apple-itunes-app" content="app-id=1672028419" />
                <meta name="google-play-app" content="app-id=vn.poho.poho_app" />
                <meta name="msApplication-ID" content="microsoft.build.App" />
                <meta name="msApplication-PackageFamilyName" content="microsoft.build_8wekyb3d8bbwe" />
                {/* <link rel="stylesheet" href="./smartBanner/smart-app-banner.css"/> */}
                <link rel="apple-touch-icon" href="icon.png" />
                <link rel="android-touch-icon" href="icon.png" />
                <link rel="windows-touch-icon" href="icon.png" />
            </Head>

            <Script src="../smartBanner/smart-app-banner.js" />
            <Navbar />
            <Component {...pageProps} />
        </AppLayout>
    );
}
