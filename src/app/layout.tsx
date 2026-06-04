import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import './globals.css';
import Script from "next/script";
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <body id="artifacts-component-root-html">
                <canvas id="bg-canvas"></canvas>
                <div className="cursor-glow" id="cursor-glow"></div>
                <Header />
                {children}
                <Footer />
                <Script src="/assets/js/three.min.js" strategy="beforeInteractive" />
                <Script src="/assets/js/bg.js" strategy="beforeInteractive" />
            </body>
        </html>
    )
}