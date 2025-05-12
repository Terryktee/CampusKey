export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-[#0D6CA3] mb-6">CampusKey Privacy Policy</h1>
                <p className="text-sm text-gray-600 mb-6">Effective Date: [Insert Date]</p>
                <p className="mb-6">
                    CampusKey ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, which connects students to verified, trusted accommodation near universities.
                </p>

                {[
                    {
                        title: "1. Information We Collect",
                        body: (
                            <>
                                <p className="mb-2 font-semibold">a. Information You Provide</p>
                                <ul className="list-disc pl-6 space-y-1 mb-4">
                                    <li><strong>Students:</strong> Name, email, student ID, university, contact number, search preferences, reviews.</li>
                                    <li><strong>Landlords:</strong> Name, email, phone number, property details, location, listing preferences.</li>
                                </ul>
                                <p className="mb-2 font-semibold">b. Automatically Collected Information</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>IP address</li>
                                    <li>Browser type</li>
                                    <li>Device information</li>
                                    <li>Pages visited</li>
                                    <li>Time spent on the platform</li>
                                    <li>Cookies (see Section 6)</li>
                                </ul>
                            </>
                        ),
                    },
                    {
                        title: "2. How We Use Your Information",
                        body: (
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Provide and improve our services</li>
                                <li>Match students with relevant accommodation</li>
                                <li>Verify user identity and eligibility</li>
                                <li>Communicate updates, alerts, or service notifications</li>
                                <li>Respond to inquiries or resolve disputes</li>
                                <li>Maintain the integrity and safety of our community</li>
                            </ul>
                        ),
                    },
                    {
                        title: "3. Sharing of Your Information",
                        body: (
                            <ul className="list-disc pl-6 space-y-1">
                                <li>With verified landlords (for student inquiries)</li>
                                <li>With students (if a landlord responds to their inquiry)</li>
                                <li>With service providers who support the platform (e.g., hosting or email services)</li>
                                <li>When required by law, court order, or to comply with legal processes</li>
                            </ul>
                        ),
                    },
                    {
                        title: "4. Data Storage and Security",
                        body: (
                            <p>
                                Your data is stored securely using encrypted technologies and protected server infrastructure. We implement administrative, technical, and physical safeguards to protect against unauthorized access, alteration, disclosure, or destruction.
                                <br /><br />
                                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        ),
                    },
                    {
                        title: "5. Your Rights",
                        body: (
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Access your personal data</li>
                                <li>Correct inaccurate information</li>
                                <li>Request deletion of your account or data</li>
                                <li>Withdraw consent to data processing (where applicable)</li>
                            </ul>
                        ),
                    },
                    {
                        title: "6. Cookies and Tracking Technologies",
                        body: (
                            <div>
                                <p>We use cookies to:</p>
                                <ul className="list-disc pl-6 space-y-1 mt-2">
                                    <li>Improve user experience</li>
                                    <li>Track session activity</li>
                                    <li>Remember preferences</li>
                                    <li>Analyze traffic trends</li>
                                </ul>
                                <p className="mt-4">
                                    You can manage cookies through your browser settings. Disabling cookies may limit some functionality of the platform.
                                </p>
                            </div>
                        ),
                    },
                    {
                        title: "7. Third-Party Services",
                        body: (
                            <p>
                                Our platform may contain links to third-party sites or services. We are not responsible for the privacy practices of those websites. We encourage users to review their policies independently.
                            </p>
                        ),
                    },
                    {
                        title: "8. Children's Privacy",
                        body: (
                            <p>
                                CampusKey is not intended for individuals under the age of 18 without parental or guardian consent. We do not knowingly collect personal data from minors without proper consent.
                            </p>
                        ),
                    },
                    {
                        title: "9. International Users",
                        body: (
                            <p>
                                If you are accessing the service from outside Zimbabwe, please be aware that your data may be processed in Zimbabwe, where data protection laws may differ.
                            </p>
                        ),
                    },
                    {
                        title: "10. Changes to This Policy",
                        body: (
                            <p>
                                We may update this Privacy Policy from time to time. We will notify users of significant changes by posting an alert on the platform or emailing registered users.
                            </p>
                        ),
                    },
                    {
                        title: "11. Contact Us",
                        body: (
                            <p>
                                For questions or concerns regarding this Privacy Policy, please contact:<br />
                                <strong>Unknown Member</strong><br />
                                📧 Email: <a href="mailto:n02422803p@students.nust.ac.zw" className="text-blue-600 underline">n02422803p@students.nust.ac.zw</a>
                            </p>
                        ),
                    },
                ].map((section, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="text-xl font-semibold text-[#0D6CA3] mb-2">{section.title}</h2>
                        <div className="text-gray-800">{section.body}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}