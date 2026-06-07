import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import './globals.css';
import Script from "next/script";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: `${process.env.NEXT_APP_NAME}`,
    description: `${process.env.NEXT_APP_NAME} is a platform for learning and teaching`,
    icons: {
        icon: "/assets/img/favicon/favicon.ico",
        apple: "/assets/img/favicon/apple-touch-icon.png",
      },
};
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <body id="artifacts-component-root-html">
                {/* <canvas id="bg-canvas"></canvas>
                <div className="cursor-glow" id="cursor-glow"></div> */}
                <Header />
                <div className="page active">
                {children}
                </div>
                <Footer />
                <Script src="/assets/js/three.min.js" strategy="beforeInteractive" />
                <Script src="/assets/js/bg.js" strategy="beforeInteractive" />
            </body>
        </html>
    )
}