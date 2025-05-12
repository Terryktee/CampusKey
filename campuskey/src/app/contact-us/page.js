'use client'

export default function ContactUs() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">📬 Contact Us</h1>
      <p className="mb-8 text-lg">
        Need help or have a question about CampusKey? We’re here to assist you. Use the form below or reach out through our contact details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">📞 Get in Touch</h2>
          <p className="mb-4">
            💌 <strong>Email:</strong>{' '}
            <a href="mailto:n02422803p@students.nust.ac.zw" className="text-blue-600 underline">
              n02422803p@students.nust.ac.zw
            </a>
          </p>
          <p className="mb-4">
            🌐 <strong>Website:</strong>{' '}
            <a href="https://www.Karvetech.co.zw" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              www.Karvetech.co.zw
            </a>
          </p>
          <p>
            🏢 <strong>Address:</strong> Selborne,Bulawayo, Zimbabwe
          </p>
        </div>

        {/* Contact Form (non-functional UI) */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">✉️ Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                placeholder="Type your message here..."
                rows={5}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
