'use client'

export default function StudentGuide() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">🎓 Student Help Guide</h1>
      <p className="mb-8 text-lg">
        Welcome to CampusKey! Here’s a step-by-step guide to help you navigate the platform and find trusted student accommodation with ease.
      </p>

      <div className="space-y-10">

        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">📝 1. How to Create an Account</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Go to the CampusKey homepage and click <strong>Sign Up</strong>.</li>
            <li>Use your university email (if possible).</li>
            <li>Fill in your name, school, and program.</li>
            <li>Verify your account via email and start exploring!</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">🔍 2. How to Search for Accommodation</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Log in to your account.</li>
            <li>Use the <strong>Search</strong> bar to find listings near your university or city.</li>
            <li>Apply filters (price, amenities, distance) to narrow your results.</li>
            <li>Click listings to view photos, rent, and landlord details.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">📞 3. How to Contact Landlords</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Click the <strong>Contact Landlord</strong> button on a listing.</li>
            <li>Send a message or request a phone call.</li>
            <li>Communicate securely through in-app messaging.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">🏠 4. How to Book Accommodation</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Confirm details with the landlord.</li>
            <li>Click <strong>Book Now</strong> and provide your move-in date.</li>
            <li>Pay your deposit securely through CampusKey.</li>
            <li>Receive confirmation and review the lease contract.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">🗣️ 5. How to Leave a Review</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>After moving in, visit the property page.</li>
            <li>Rate your experience and the landlord.</li>
            <li>Leave a review to help future students.</li>
          </ul>
        </div>

        {/* FAQ or Help */}
        <div className="mt-10">
          <p className="text-lg">
            For more support, visit the <a href="/contact-us" className="text-blue-600 underline">Contact Us</a> page or email us at{" "}
            <a href="mailto:n02422803p@students.nust.ac.zw" className="text-blue-600 underline">n02422803p@students.nust.ac.zw</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
