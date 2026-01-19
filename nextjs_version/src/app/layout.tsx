import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
    title: "Taleemiyat",
    description: "Hamari Product Landing Page",
    icons: {
        icon: "/assets/img/favicon/favicon.ico",
        apple: "/assets/img/favicon/apple-touch-icon.png",
      },
};
import { PrimeReactProvider } from 'primereact/api';
import { cookies } from "next/headers";
import { User } from "@/types/user.types";
import { Toast } from "primereact/toast";
import UiToast from "@/components/ui/UiToast";
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const isLoggedIn = cookieStore.get("taleemiyat_token") ? true : false;
    let decodedToken: User | null = null;
    if (isLoggedIn) {
        const token = cookieStore.get("taleemiyat_token")?.value;
        decodedToken = JSON.parse(atob(token?.split(".")[1] || ""));
        
    }
    return (
        <html lang="zxx">
            <head>
                <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.png" />
                <link rel="stylesheet" href="/assets/css/animate.min.css" />
                <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
                <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
                <link rel="stylesheet" href="/assets/css/odometer.min.css" />
                <link rel="stylesheet" href="/assets/css/nice-select.css" />
                <link rel="stylesheet" href="/assets/css/meanmenu.css" />
                <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
                <link rel="stylesheet" href="/assets/css/main.css" />
            </head>
            <body>
            <PrimeReactProvider value={{ unstyled: true }}>
                <Sidebar />
                    <Header isLoggedIn={isLoggedIn} decodedToken={decodedToken} />
                    <main className="bg-gray-50">{children}</main>
                    <Footer />
                </PrimeReactProvider>
                {/* Scripts */}
                <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
                <Script src="/assets/js/swiper-bundle.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/jquery.meanmenu.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/jquery.nice-select.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/jquery.scrollUp.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/odometer.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/appear.min.js" strategy="lazyOnload" />
                <Script src="/assets/js/main.js" strategy="lazyOnload" />
            </body>
        </html>
    );
}
