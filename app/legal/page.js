export default function LegalPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-16 bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-200">

        {/* Terms & Conditions */}
        <section id="terms">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Terms & Conditions</h2>
          <p className="text-gray-600 mb-2">
            By accessing and using our services, you agree to be bound by these terms and conditions. All content, designs, and ideas presented on this website are the property of our interior design company.
          </p>
          <p className="text-gray-600">
            Reproduction, distribution, or commercial use without permission is strictly prohibited. We reserve the right to modify our terms at any time.
          </p>
        </section>

        {/* Privacy Policy */}
        <section id="privacy">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h2>
          <p className="text-gray-600 mb-2">
            We value your privacy. Any personal information shared with us — such as your name, email, or phone number — is stored securely and used only for communication and service purposes.
          </p>
          <p className="text-gray-600">
            We do not share your information with third parties without consent. Our site may use cookies to enhance user experience.
          </p>
        </section>

        {/* FAQs */}
        <section id="faq">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">

            <div>
              <h4 className="text-lg font-semibold text-gray-700">1. How do I start a project with you?</h4>
              <p className="text-gray-600">You can start by contacting us through our <a href="/contact" className="text-amber-500 hover:underline">Contact Us</a> page. We'll schedule a consultation to understand your needs.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-700">2. Do you offer Vastu-compliant interior design?</h4>
              <p className="text-gray-600">Yes, we specialize in creating aesthetically pleasing designs that follow Vastu principles.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-700">3. How long does a typical project take?</h4>
              <p className="text-gray-600">It depends on the scale, but most residential projects take 4–12 weeks from start to finish.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-700">4. Can I see samples of your previous work?</h4>
              <p className="text-gray-600">Absolutely. Visit our <a href="/gallery" className="text-amber-500 hover:underline">Gallery</a> page to view our latest projects.</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  )
}
