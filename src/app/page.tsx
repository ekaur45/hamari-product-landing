import HomeAi from "@/components/home/Ai";
import HomeCta from "@/components/home/Cta";
import HomeFaq from "@/components/home/Faq";
import HomeFeatures from "@/components/home/Features";
import HomeHero from "@/components/home/Hero";
import HomeHowItWorks from "@/components/home/HowItWorks";
import HomePricing from "@/components/home/Pricing";
import HomeRoles from "@/components/home/Roles";
import HomeSignup from "@/components/home/Signup";
import HomeTeachers from "@/components/home/Teachers";
import HomeTestimonials from "@/components/home/Testimonials";

export default function Home() {
    return (
        <>
            <HomeHero/>
            <HomeHowItWorks/>
            <HomeRoles/>
            <HomeTeachers/>
            <HomeFeatures/>
            <HomeAi/>
            <HomePricing/>
            <HomeTestimonials/>
            <HomeCta/>
            <HomeFaq/>
            <HomeSignup/>
        </>
    )
}