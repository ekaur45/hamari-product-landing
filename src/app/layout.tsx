import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import './globals.css';
import Script from "next/script";
import { Metadata } from "next";
import ScrollDetect from "@/components/layout/Scroll";
import { cookies } from "next/headers";
import { User } from "@/types/user.types";
export const metadata: Metadata = {
    title: `${process.env.NEXT_APP_NAME}`,
    description: `${process.env.NEXT_APP_NAME} is a platform for learning and teaching`,
    icons: {
        icon: "/assets/img/favicon/favicon.ico",
        apple: "/assets/img/favicon/apple-touch-icon.png",
      },
};
import ProfileService from "@/services/profile.service";
const profileService = new ProfileService();
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
        const profile = await profileService.getProfile();
        if (profile.statusCode === 200) {
            decodedToken = profile.data;
        }
    }
    return (
        <html lang="en" >
            <body id="artifacts-component-root-html">
                {/* <canvas id="bg-canvas"></canvas>
                <div className="cursor-glow" id="cursor-glow"></div> */}
                <ScrollDetect/>
                <Header 
                isLoggedIn={isLoggedIn}
                decodedToken={decodedToken}
                />
                <div className="page">
                {children}
                </div>
                <Footer />
                <Script src="/assets/js/three.min.js" strategy="beforeInteractive" />
                <Script src="/assets/js/bg.js" strategy="beforeInteractive" />
            </body>
        </html>
    )
}