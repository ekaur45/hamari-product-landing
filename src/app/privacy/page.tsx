export default function Privacy() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mx-auto max-w-3xl">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
                    <p className="mt-2 text-sm text-gray-600">Effective date: April 30, 2026</p>
                </div>

                <div className="prose prose-gray max-w-none">
                    <p>
                        This Privacy Policy explains how {process.env.NEXT_APP_NAME} (the “Platform”, “we”, “us”, or “our”) collects, uses,
                        and shares information when you use our websites, apps, and services.
                    </p>

                    <h2>Information we collect</h2>
                    <ul>
                        <li>
                            <strong>Account information</strong>: name, email address, role (e.g., student/teacher/parent),
                            and other details you provide when registering.
                        </li>
                        <li>
                            <strong>Profile information</strong>: phone number, address, nationality, and other optional
                            profile fields.
                        </li>
                        <li>
                            <strong>Usage data</strong>: pages viewed, features used, device/browser information, and
                            diagnostic logs.
                        </li>
                        <li>
                            <strong>Communications</strong>: messages you send to support or within the Platform.
                        </li>
                        <li>
                            <strong>Cookies</strong>: we may use cookies or similar technologies to keep you signed in,
                            remember preferences, and improve the experience.
                        </li>
                    </ul>

                    <h2>How we use information</h2>
                    <ul>
                        <li>Provide and operate the Platform (authentication, sessions, user dashboards).</li>
                        <li>Personalize features based on your role and preferences.</li>
                        <li>Maintain security, prevent abuse, and enforce our policies.</li>
                        <li>Communicate with you about your account, updates, and support requests.</li>
                        <li>Improve the Platform through analytics and diagnostics.</li>
                    </ul>

                    <h2>How we share information</h2>
                    <p>We may share information only as needed, including:</p>
                    <ul>
                        <li>
                            <strong>Service providers</strong> (e.g., email delivery, hosting, analytics) that process data
                            on our behalf under appropriate safeguards.
                        </li>
                        <li>
                            <strong>Legal and safety</strong>: when required by law, or to protect users, our Platform, or
                            the public.
                        </li>
                        <li>
                            <strong>Business changes</strong>: if we undergo a merger, acquisition, or asset sale, your
                            information may be transferred as part of that transaction.
                        </li>
                    </ul>

                    <h2>Data retention</h2>
                    <p>
                        We retain information as long as necessary to provide the Platform and for legitimate business or
                        legal purposes. You may request deletion where applicable.
                    </p>

                    <h2>Security</h2>
                    <p>
                        We implement reasonable administrative, technical, and organizational measures to protect
                        information. No method of transmission or storage is 100% secure, so we cannot guarantee absolute
                        security.
                    </p>

                    <h2>Children’s privacy</h2>
                    <p>
                        The Platform is designed for education use cases. If you are a parent/guardian and believe a child
                        has provided personal information without appropriate consent, please contact us and we will take
                        appropriate steps.
                    </p>

                    <h2>Your choices</h2>
                    <ul>
                        <li>You can update certain profile information in your account settings.</li>
                        <li>You can control cookies through your browser settings.</li>
                        <li>You can request access, correction, or deletion depending on applicable laws.</li>
                    </ul>

                    <h2>Contact us</h2>
                    <p>
                        If you have questions about this Privacy Policy, contact us at{" "}
                        <a href="mailto:info@develenza.com">info@develenza.com</a>.
                    </p>

                    <h2>Changes to this policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will post the updated version on this page
                        and update the effective date above.
                    </p>
                </div>
            </div>
        </div>
    );
}