export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0D6CA3] mb-6">CampusKey – Terms of Service</h1>
        <p className="mb-6 text-sm text-gray-600">Effective Date: [Insert Date]</p>

        <p className="mb-6">
          Welcome to CampusKey, a platform developed by Unknown People to simplify student accommodation. These Terms of Service ("Terms") govern your access to and use of our website located at <a href="https://www.KarveTech.co.zw" className="text-blue-600 underline">www.Karvetech.co.zw</a> and any services provided through it (collectively, the "Service"). By using CampusKey, you agree to be bound by these Terms.
        </p>

        {[
          {
            title: "1. Acceptance of Terms",
            body: `By accessing or using CampusKey, you agree to be legally bound by these Terms. If you do not agree to these Terms, you may not use our platform.`,
          },
          {
            title: "2. Eligibility",
            body: `CampusKey is intended for university students and registered landlords. Users must be 18 years or older or have guardian consent. By using this platform, you represent and warrant that you meet the eligibility requirements.`,
          },
          {
            title: "3. Purpose of Service",
            body: (
              <ul className="list-disc pl-6 space-y-2">
                <li>Students can search, compare, and connect with verified accommodation near their university.</li>
                <li>Landlords can list their properties and communicate with potential tenants.</li>
                <li>We aim to ensure secure, transparent, and community-approved housing solutions.</li>
              </ul>
            ),
          },
          {
            title: "4. Account Registration",
            body: `To use certain features, you must register for an account using a valid email and accurate personal details. Students may be required to verify their university identity. You are responsible for keeping your login credentials secure.`,
          },
          {
            title: "5. Property Listings",
            body: (
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing accurate and up-to-date property information</li>
                <li>Ensuring compliance with housing regulations</li>
                <li>Representing their property truthfully</li>
              </ul>
            ),
          },
          {
            title: "6. Student Engagement",
            body: (
              <ul className="list-disc pl-6 space-y-2">
                <li>Interact respectfully with landlords and fellow users</li>
                <li>Provide honest reviews based on actual stays or inquiries</li>
                <li>Use the platform for legitimate accommodation searches only</li>
              </ul>
            ),
          },
          {
            title: "7. Fees and Payments",
            body: `CampusKey may offer premium features or charge listing fees in the future. All fees will be clearly communicated. We do not handle rental payments directly — any payments must be managed between student and landlord.`,
          },
          {
            title: "8. Prohibited Use",
            body: (
              <ul className="list-disc pl-6 space-y-2">
                <li>Post false or misleading listings</li>
                <li>Harass or impersonate others</li>
                <li>Infringe on any party’s intellectual property</li>
                <li>Spread malware or spam</li>
                <li>Engage in fraudulent behavior</li>
              </ul>
            ),
          },
          {
            title: "9. Reviews and Feedback",
            body: `Users may leave reviews about listings or interactions. By submitting content, you grant us a royalty-free license to display and use it. We may moderate reviews to maintain fairness and clarity.`,
          },
          {
            title: "10. Privacy",
            body: `Your privacy is important to us. All data you submit is handled in accordance with our Privacy Policy. We do not sell or misuse your personal data.`,
          },
          {
            title: "11. Service Availability",
            body: `While we strive to keep CampusKey available at all times, we may suspend or restrict access for maintenance, upgrades, or unexpected downtime. We do not guarantee uninterrupted access.`,
          },
          {
            title: "12. Limitation of Liability",
            body: (
              <ul className="list-disc pl-6 space-y-2">
                <li>Any agreements or disputes between students and landlords</li>
                <li>Accuracy of listings or reviews</li>
                <li>Damages resulting from use of the Service</li>
              </ul>
            ),
          },
          {
            title: "13. Termination",
            body: `We may suspend or terminate your access to CampusKey at our discretion if you violate these Terms or act in a way that harms the platform or community.`,
          },
          {
            title: "14. Changes to the Terms",
            body: `We may revise these Terms from time to time. Updated versions will be posted on this page. Continued use of the platform means you accept the changes.`,
          },
          {
            title: "15. Governing Law",
            body: `These Terms shall be governed by the laws of Zimbabwe, and any legal disputes shall be resolved through the courts of Zimbabwe.`,
          },
          {
            title: "16. Contact Information",
            body: (
              <p>
                If you have any questions about these Terms, you can reach us at: <br />
                📧 <a href="mailto:n02422803p@nust.ac.zw" className="text-blue-600 underline">n02422803p@nust.ac.zw</a>
              </p>
            ),
          },
        ].map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold text-[#0D6CA3] mb-2">{section.title}</h2>
            <div className="text-gray-700">{section.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
