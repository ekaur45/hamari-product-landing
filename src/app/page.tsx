import HomeCta from "@/components/home/Cta";
import HomeFaq from "@/components/home/Faq";
import HomeFeatures from "@/components/home/Features";
import HomeHero from "@/components/home/Hero";
import HomeHowItWorks from "@/components/home/HowItWorks";
import HomePricing from "@/components/home/Pricing";
import HomeRoles from "@/components/home/Roles";
import HomeTestimonials from "@/components/home/Testimonials";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: `Home - ${process.env.NEXT_APP_NAME}`,
    description: `${process.env.NEXT_APP_NAME} is a platform for learning and teaching`,
};
export default function Home() {
    return (
        <>
            <HomeHero/>
            <HomeHowItWorks/>
            <HomeRoles/>
            {/* <HomeTeachers/> */}
            <HomeFeatures/>
            {/* <HomeAi/> */}
            <HomePricing/>
            <HomeTestimonials/>
            <HomeCta/>
            <HomeFaq/>
            {/* <HomeSignup/> */}
        </>
    )
}