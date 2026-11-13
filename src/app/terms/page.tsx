export default function Terms() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mx-auto max-w-3xl">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms of Service</h1>
                    <p className="mt-2 text-sm text-gray-600">Effective date: April 30, 2026</p>
                </div>

                <div className="prose prose-gray max-w-none">
                    <p>
                        These Terms of Service (“Terms”) govern your use of {process.env.NEXT_APP_NAME} (the “Platform”, “we”, “us”, or
                        “our”). By accessing or using the Platform, you agree to these Terms.
                    </p>

                    <h2>1. Eligibility and accounts</h2>
                    <ul>
                        <li>You must provide accurate information when creating an account.</li>
                        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                        <li>You are responsible for all activities that occur under your account.</li>
                    </ul>

                    <h2>2. Acceptable use</h2>
                    <p>You agree not to misuse the Platform. For example, you will not:</p>
                    <ul>
                        <li>Break the law or violate others’ rights.</li>
                        <li>Attempt to gain unauthorized access to accounts or systems.</li>
                        <li>Upload malware or disrupt the Platform’s operation.</li>
                        <li>Harass, abuse, or harm other users.</li>
                        <li>Scrape, reverse engineer, or interfere with our services except as permitted by law.</li>
                    </ul>

                    <h2>3. Content and communications</h2>
                    <ul>
                        <li>
                            You retain ownership of content you submit to the Platform, but you grant us a license to host,
                            store, and display it solely to operate and improve the Platform.
                        </li>
                        <li>
                            You are responsible for the content you submit and for ensuring it is appropriate for an
                            educational environment.
                        </li>
                    </ul>

                    <h2>4. Services, features, and changes</h2>
                    <p>
                        We may add, remove, or modify features at any time. We may also suspend or discontinue the Platform
                        (in whole or in part) when necessary.
                    </p>

                    <h2>5. Payments (if applicable)</h2>
                    <p>
                        Some features may be paid. If you purchase a plan, you agree to provide accurate billing details
                        and authorize payment according to the pricing shown at checkout.
                    </p>

                    <h2>6. Intellectual property</h2>
                    <p>
                        The Platform, including its software, design, and branding, is owned by or licensed to us and is
                        protected by intellectual property laws. You may not copy or reuse it except as permitted.
                    </p>

                    <h2>7. Disclaimer</h2>
                    <p>
                        The Platform is provided “as is” and “as available”. We do not guarantee uninterrupted or error-free
                        operation and disclaim warranties to the fullest extent permitted by law.
                    </p>

                    <h2>8. Limitation of liability</h2>
                    <p>
                        To the maximum extent permitted by law, we will not be liable for indirect, incidental, special, or
                        consequential damages, or for loss of data, profits, or revenue.
                    </p>

                    <h2>9. Termination</h2>
                    <p>
                        We may suspend or terminate access to the Platform if we reasonably believe you violated these Terms
                        or if necessary to protect the Platform or users.
                    </p>

                    <h2>10. Privacy</h2>
                    <p>
                        Your use of the Platform is also governed by our Privacy Policy.
                    </p>

                    <h2>11. Contact</h2>
                    <p>
                        If you have questions about these Terms, contact us at{" "}
                        <a href="mailto:info@develenza.com">info@develenza.com</a>.
                    </p>

                    <h2>12. Changes to these terms</h2>
                    <p>
                        We may update these Terms from time to time. We will post the updated version on this page and
                        update the effective date above.
                    </p>
                </div>
            </div>
        </div>
    );
}