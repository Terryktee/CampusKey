'use client'

import { Separator } from "@/components/ui/separator"
import { CheckCircle, Home, MessageCircle, Search, Star, Users, UploadCloud, Phone } from "lucide-react"

export default function HowItWorks() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h2 className="text-3xl font-bold mb-4">🛠️ How It Works</h2>
      <p className="mb-6">
        CampusKey makes it easy for students to find trusted accommodation near their universities and for landlords to connect with reliable tenants. Here’s how the platform works:
      </p>

      <Separator className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">👩‍🎓 For Students</h3>
      <ul className="space-y-4 mb-10">
        <li className="flex items-start gap-3">
          <Search className="mt-1" />
          <div>
            <strong>1. Browse Listings</strong>
            <p>Search by university, location, or price to discover accommodation options near your campus.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Home className="mt-1" />
          <div>
            <strong>2. View Property Details</strong>
            <p>Each listing includes photos, rent, amenities, distance from campus, and landlord information.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Phone className="mt-1" />
          <div>
            <strong>3. Contact Landlords</strong>
            <p>Send a message or call the landlord directly from the platform.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CheckCircle className="mt-1" />
          <div>
            <strong>4. Book & Secure Your Spot</strong>
            <p>Once you’ve found your ideal place, book it and plan your move with confidence.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <MessageCircle className="mt-1" />
          <div>
            <strong>5. Leave a Review</strong>
            <p>Share your experience to help other students make informed choices.</p>
          </div>
        </li>
      </ul>

      <Separator className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">🧑‍💼 For Landlords</h3>
      <ul className="space-y-4 mb-10">
        <li className="flex items-start gap-3">
          <Users className="mt-1" />
          <div>
            <strong>1. Register & Verify</strong>
            <p>Sign up and submit verification documents to ensure a secure experience for all users.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <UploadCloud className="mt-1" />
          <div>
            <strong>2. List Your Property</strong>
            <p>Upload photos, set your rent, and describe your property’s features and location.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Search className="mt-1" />
          <div>
            <strong>3. Get Discovered by Students</strong>
            <p>Your listing becomes visible to thousands of students searching for housing.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <MessageCircle className="mt-1" />
          <div>
            <strong>4. Receive Inquiries</strong>
            <p>Respond to interested students and finalize arrangements with ease.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Star className="mt-1" />
          <div>
            <strong>5. Build Trust Through Reviews</strong>
            <p>Gain a reputation as a reliable landlord through honest student feedback.</p>
          </div>
        </li>
      </ul>

      <Separator className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">💡 Why CampusKey?</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><strong>✅ Trusted & Verified</strong> – Only approved landlords and real student accounts.</li>
        <li><strong>🔐 Safe & Secure</strong> – Your data and transactions are protected.</li>
        <li><strong>🌍 Community-Driven</strong> – Built by students, for students.</li>
      </ul>
    </section>
  )
}
