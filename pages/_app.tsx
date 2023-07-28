import AppLayout from "@/components/layout/AppLayout";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect,useState } from "react";
import Script from "next/script.js";
import Head from "next/head";
//@ts-ignore
import SmartBanner from "react-smartbanner";
import "react-smartbanner/dist/main.css";

export default function App({ Component, pageProps }: AppProps) {
    const [showCustomBanner, setShowCustomBanner] = useState(true)

    useEffect(() => {
        const init = async () => {
            //@ts-ignore
            var iOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent); // fails on iPad iOS 13
  
            if (iOS) {
                //@ts-ignore   
                if (window.indexedDB || window.SpeechSynthesisUtterance || window.webkitAudioContext) {
                    setShowCustomBanner(false)
                }
 
            }
            alert(init())
        }
        }, [])

    return (
        <AppLayout>
            <Head>
                <meta name="apple-itunes-app" content="app-id=1672028419" />
                <meta name="google-play-app" content="app-id=vn.poho.poho_app" />
                <meta name="msApplication-ID" content="microsoft.build.App" />
                <meta name="msApplication-PackageFamilyName" content="microsoft.build_8wekyb3d8bbwe" />
                <link rel="apple-touch-icon" href="icon.png" />
                <link rel="android-touch-icon" href="icon.png" />
                <link rel="windows-touch-icon" href="icon.png" />
            </Head>
                <Navbar />

            <Component {...pageProps} />
        </AppLayout>
    );
}
