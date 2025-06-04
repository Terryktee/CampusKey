'use client'

import { Separator } from "@/components/ui/separator"
import { HelpCircle, User, Home, CheckCircle, MessageSquare, CreditCard, FileText } from "lucide-react"

export default function HelpGuide() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h2 className="text-3xl font-bold mb-6">📚 CampusKey Help Guide</h2>
      <p className="mb-10">
        Your go-to resource for navigating our platform and getting the most out of CampusKey.
      </p>

      <Separator className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">For Students</h3>
      <div className="space-y-8">
        <div>
          <h4 className="text-xl font-semibold flex items-center gap-2">
            <User className="text-blue-500" /> 1. How to Create an Account
          </h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to the CampusKey homepage.</li>
            <li>Click Sign Up and enter your email address (use your university email if possible).</li>
            <li>Set your password and fill out your profile information (name, school, and program).</li>
            <li>Confirm your account through the verification email.</li>
            <li>Log in and start your search for student accommodation!</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xl font-semibold flex items-center gap-2">
            <Home className="text-blue-500" /> 2. How to Search for Accommodation
          </h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Log in to your CampusKey account.</li>
            <li>Go to the Search tab on the homepage.</li>
            <li>Enter your desired city or university.</li>
            <li>Use filters like budget, amenities, and distance from campus to narrow down your search.</li>
            <li>Browse through listings and click on them for more details.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xl font-semibold flex items-center gap-2">
            <MessageSquare className="text-blue-500" /> 3. How to Contact Landlords
          </h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Once you find a listing you like, click on the Contact Landlord button.</li>
            <li>Send a direct message or request a call to ask about availability, lease terms, or schedule a viewing.</li>
            <li>Use our in-app messaging for secure communication.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xl font-semibold flex items-center gap-2">
            <CheckCircle className="text-blue-500" /> 4. How to Book Accommodation
          </h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>After contacting the landlord and confirming the accommodation details, click on the Book Now button.</li>
            <li>Fill in your move-in date and payment details.</li>
            <li>Pay the deposit securely through CampusKey.</li>
            <li>Wait for landlord confirmation.</li>
            <li>Once confirmed, you’ll receive a contract for review.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xl font-semibold flex items-center gap-2">
            <FileText className="text-blue-500" /> 5. How to Leave a Review
          </h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>After you’ve moved in and settled, go to the Reviews section of the property page.</li>
            <li>Rate the accommodation, landlord, and your overall experience.</li>
            <li>Leave any helpful comments for future students.</li>
          </ol>
        </div>
      </div>

      <Separator className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">For Landlords</h3>
      <div className="space-y-8">
        <div>
          <h4 className="text-xl font-semibold flex items-center gap-2">
            <User className="text-green-500" /> 1. How to Create an Account
          </h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Visit the CampusKey website and click Sign Up.</li>
            <li>Enter your business details, such as your name, property type, and contact information.</li>
            <li>Set up your landlord profile with your property listings.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xl font-semibold flex items-center gap-2">
            <Home className="text-green-500" /> 2. How to List Your Property
          </h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Log in to your landlord account.</li>
            <li>Click on the Add Property button.</li>
            <li>Fill in details about the accommodation (location, price, size, amenities).</li>
            <li>Upload high-quality photos of the property.</li>
            <li>Publish your listing for students to view.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xl font-semibold flex items-center gap-2">
            <MessageSquare className="text-green-500" /> 3. How to Manage Your Listings
          </h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to your Dashboard.</li>
            <li>Click on Manage Listings to edit or update your current properties.</li>
            <li>Respond to student inquiries promptly and update availability as necessary.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xl font-semibold flex items-center gap-2">
            <CheckCircle className="text-green-500" /> 4. How to Accept a Student's Booking
          </h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>When a student shows interest, you’ll receive a message.</li>
            <li>Review the student’s profile and confirm the booking details.</li>
            <li>If everything looks good, confirm the booking.</li>
            <li>Send a rental agreement or lease document for the student to review and sign.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xl font-semibold flex items-center gap-2">
            <CreditCard className="text-green-500" /> 5. How to Receive Payments
          </h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Set up your preferred payment method in your Account Settings.</li>
            <li>Once a student books your accommodation, payments will be processed securely through CampusKey.</li>
            <li>You’ll receive your payment confirmation once the transaction is complete.</li>
          </ol>
        </div>
      </div>

      <Separator className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions (FAQs)</h3>
      <div className="space-y-4">
        <div>
          <strong>1. How secure is my payment?</strong>
          <p>Payments made on CampusKey are secure and processed through trusted third-party providers. We ensure the safety of your transaction data.</p>
        </div>

        <div>
          <strong>2. Can I cancel a booking?</strong>
          <p>Yes, both students and landlords can cancel a booking, but cancellations may come with penalties, such as a cancellation fee or loss of a deposit, depending on the agreed terms.</p>
        </div>

        <div>
          <strong>3. Can I update my listing or profile?</strong>
          <p>Yes, landlords can update listings, while students can change their profile information through the Account Settings section.</p>
        </div>

        <div>
          <strong>4. How do I report an issue with accommodation?</strong>
          <p>If you encounter any issues with a listing or booking, please contact our support team via the Contact Us section, and we’ll assist you in resolving the matter.</p>
        </div>
      </div>

      <Separator className="my-6" />

      <h3 className="text-2xl font-semibold mb-4">Need Further Assistance?</h3>
      <p>If you need help with anything related to CampusKey, feel free to reach out to our customer support team at <a href="mailto:support@campuskey.com" className="text-blue-600">support@campuskey.com</a>.</p>
    </section>
  )
}
