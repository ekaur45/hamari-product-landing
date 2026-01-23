import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Pricing - Humari Product",
    description: "Choose your plan",
};

export default function PricePage() {
    const plans = [
        {
            name: "Standard",
            price: "$22",
            oldPrice: "$24.00",
            save: "6%",
            popular: false,
        },
        {
            name: "Professional",
            price: "$28",
            oldPrice: "$36.00",
            save: "24%",
            popular: true,
        },
        {
            name: "Business",
            price: "$56",
            oldPrice: "$74.00",
            save: "12%",
            popular: false,
        },
    ];

    return (
        <>
            <section
                className="breadcrumb-area bg-default"
                style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-bg.jpg)" }}
            >
                <img
                    src="/assets/img/breadcrumb/shape-1.png"
                    alt=""
                    className="breadcrumb-shape"
                />
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="breadcrumb-content">
                                <h2 className="breadcrumb-title">Pricing</h2>
                                <div className="breadcrumb-list">
                                    <Link href="/">Home</Link>
                                    <span>Pricing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="innerPage_price-area pt-120 pb-90">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        {plans.map((plan, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-4">
                                <div className="h2_price-item mb-30">
                                    {plan.popular && (
                                        <div className="h2_price-popular-tag">
                                            <span>Most Popular</span>
                                        </div>
                                    )}
                                    <div className="h2_price-item-title">
                                        <h5>{plan.name}</h5>
                                    </div>
                                    <div className="h2_price-amount">
                                        <del>{plan.oldPrice}</del>
                                        <div className="h2_price-amount-info">
                                            <h2>{plan.price}</h2>
                                            <p>
                                                <span>Per</span>
                                                <span>Month</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h2_price-middle-info">
                                        <p className="h2_price-middle-info-1">
                                            Discounted Price For USA
                                        </p>
                                        <p className="h2_price-middle-info-2">
                                            Per User, billed annually
                                        </p>
                                    </div>
                                    <div className="h2_price-button">
                                        <a href="#">Enroll Now</a>
                                    </div>
                                    <div className="h3_price-content">
                                        <div className="h2_price-content-top">
                                            <a href="#">Choose 2 - year plan</a>
                                            <span>Save {plan.save}</span>
                                        </div>
                                        <div className="h2_price-content-list">
                                            <ul>
                                                <li>Facilizes sed odic morbid quiz.</li>
                                                <li>Design nexus et malasadas fames brand.</li>
                                                <li>Artistic mind will be great for creation.</li>
                                                <li>Roadmap for business agency arborator.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="cta-area">
                <div className="container mx-auto px-4">
                    <div className="cta-wrapper">
                        <div className="flex flex-wrap items-center -mx-4">
                            <div className="w-full lg:w-1/2 xl:w-1/2 px-4">
                                <div className="cta-content mb-30 lg:mb-0">
                                    <span className="cta-subtitle">Download App</span>
                                    <h2 className="cta-title">
                                        Are you Ready to Start your Online Course?
                                    </h2>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 xl:w-1/2 px-4">
                                <div className="cta-button">
                                    <a href="#" className="cta-btn">
                                        <i className="fa-brands fa-apple"></i>Apple Store
                                    </a>
                                    <a href="#" className="cta-btn">
                                        <i className="fa-brands fa-google-play"></i>Play Store
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
