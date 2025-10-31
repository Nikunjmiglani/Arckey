import Head from 'next/head'
import React from 'react'
export default function LegalPage() {
    return (
      <>
      <Head>
        <title>Leading Interior Designers in Delhi | Miggla</title>
        <meta
          name="description"
          content="Miggla is recognized as one of the best interior designers in Delhi, offering end-to-end residential and commercial interior design services across Delhi Ncr."
        />
        <meta
          name="keywords"
          content="interior designer in Delhi NCR, best interior designers in Noida, famous commercial Interior designer in delhi, home interior designer Delhi, luxury interior designers Gurgaon, interior decorators near me"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Miggla Interiors - Transform Your Space" />
        <meta property="og:description" content="High-quality interior design services in Delhi NCR." />
        <meta property="og:url" content="https://arckey.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ✅ JSON-LD Schema Markup for FAQ Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Miggla offer for interior design in Delhi NCR?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Miggla provides end-to-end interior design services for residential and commercial spaces including space planning, 3D designs, modular kitchen and wardrobe design, custom furniture manufacturing, and full turnkey interior solutions. We handle everything from concept to execution — so you can relax and move in stress-free."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer commercial interior design for offices and retail spaces?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Miggla offers expert commercial interior design services across Delhi NCR for corporate offices, clinics, salons, showrooms, cafes, and more. We specialize in designing boss cabins, reception areas, conference rooms, workstations, and brand-aligned interiors that enhance both aesthetics and productivity. Whether you need a modern office makeover or a complete turnkey commercial setup, our team ensures smart space planning, quality execution, and on-time delivery."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does a full interior design project take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Project timelines vary by size and complexity, but most 2BHK/3BHK homes are delivered within 45–60 days, and commercial spaces in 30–45 days. We’re known for our on-time handovers with regular progress updates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a turnkey interior solution?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A turnkey interior solution means we handle everything—from design, material selection, civil work, electrical, false ceiling, carpentry, furnishing, to final styling. You simply approve the design, and we deliver the finished space, ready for you to walk in."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is Miggla different from other interior designers in Delhi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Miggla offers end-to-end residential and commercial interior design with in-house custom furniture, modular kitchens, and full turnkey execution. With 1000+ projects delivered across Delhi NCR, we ensure Vastu-aligned planning, on-time handovers, and tailored spaces that blend style and function."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I see previous interior design projects done by Miggla?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can explore our portfolio of 1000+ completed projects across Delhi, Noida, Gurugram, and Faridabad. Visit our Project Gallery or follow us on Instagram for real-time design inspiration."
                  }
                }
              ]
            })
          }}
        />
      </Head>
        <main className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto space-y-16 bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-200">

                {/* Terms & Conditions */}
                <section id="terms" className="px-4 py-10 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Terms & Conditions</h2>

  <div className="text-gray-700 space-y-6 leading-relaxed">

    <p>
      By accessing and using our services, you agree to be bound by these terms and conditions. All content, designs, and ideas presented on this website are the property of our interior design company.
    </p>

    <p>
      Reproduction, distribution, or commercial use without permission is strictly prohibited. We reserve the right to modify our terms at any time.
    </p>

    <p>
      Our store is hosted on www.linker.store. They provide the platform that allows us to sell our products and services. Continued use of the site after updates to these terms implies acceptance.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">1. Account Terms</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>You must be at least 18 years old or of the age of majority in your region to use our site.</li>
      <li>Accurate information must be provided during registration. False details may result in suspension.</li>
      <li>You are responsible for all activity under your account, and you must ensure confidentiality.</li>
      <li>We may refuse service, terminate accounts, or remove content at our sole discretion.</li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">2. User Obligations</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>You may not use our site for unlawful purposes or violate any laws.</li>
      <li>Prohibited actions include fraud, harassment, spreading malware, spamming, or IP theft.</li>
      <li>Unauthorized access or copying of site data/content is strictly prohibited.</li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">3. Product Information & Orders</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Order confirmation emails do not constitute acceptance — it's just an acknowledgment.</li>
      <li>Orders are for personal use only, not resale.</li>
      <li>Product images and availability may vary; no guarantee of stock.</li>
      <li>We reserve rights to cancel or limit orders based on fraud, stock, or policy violations.</li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">4. Taxes</h3>
    <p>
      You are responsible for any taxes or charges applicable to your purchases, including VAT and cesses.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">5. Communication</h3>
    <p>
      By interacting with us, you agree to receive communications via email, SMS, WhatsApp, or phone for order-related or promotional messages.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">6. Copyrights & Trademarks</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>All content on the site is protected under copyright and IP laws.</li>
      <li>Reproduction or use without written consent is prohibited.</li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">7. Indemnification & Limitation of Liability</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>We are not liable for any loss or damage resulting from your use of our services or site.</li>
      <li>Refunds, if applicable, are limited to the amount paid.</li>
      <li>You agree to indemnify us for any loss caused by breach of these terms or laws.</li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">8. Termination</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>These terms remain effective until terminated by you or us.</li>
      <li>Violation of any terms can result in immediate termination without notice.</li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">9. Entire Agreement</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>This agreement overrides all previous agreements and communications.</li>
      <li>Failure to enforce any term shall not be a waiver of that term.</li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">10. Governing Law</h3>
    <p>
      These terms are governed by Indian law, with exclusive jurisdiction in the courts of Delhi, India.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">11. Waiver</h3>
    <p>
      Any delay in enforcement of our rights does not waive our right to enforce them later.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">12. Miscellaneous</h3>
    <p>
      Complaints must be raised within 15 days of order delivery. We will not entertain complaints beyond this period.
    </p>

  </div>
</section>


                {/* Privacy Policy */}
                <section id="privacy" className="px-4 py-10 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy – Miggla.com</h2>

  <div className="text-gray-700 space-y-6 leading-relaxed">
    <p>
      Last Updated: October 31, 2025
    </p>
    <p>
      Welcome to Miggla.com (“Miggla,” “we,” “our,” or “us”).
    </p>
    <p>
      We are a team of interior designers based in Pitampura, Delhi, offering creative residential and commercial design solutions. Through Miggla.com, we share professional insights, décor ideas,tips, and expert blogs related to interior design, modular kitchens, home / office renovation, and Vastu interiors.
    </p>
    <p>
      We respect your privacy and are committed to protecting the personal information you share with us. This policy explains how we collect, use, and safeguard your data when you interact with our website or services.
    </p>
    <p>
      By using our website, you agree to the terms of this Privacy Policy.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">1. About Miggla</h3>
    <p>
      Miggla Interior Designers is a Delhi-based interior design studio specializing in custom home and office interiors, architectural planning, modular furniture, false ceiling designs, and space optimization.
    </p>
    <p>
      Our website, Miggla.com, serves as a platform to:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Showcase our projects and services</li>
      <li>Publish informative blogs and design tips</li>
      <li>Connect with potential clients and design enthusiasts</li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">2. Information We Collect</h3>
    <p>
      We collect two types of data:
    </p>
    <p>
      <strong>a) Personal Information (Provided by You)</strong>
    </p>
    <p>
      When you contact us through inquiry forms or subscribe to updates, we may collect:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Your name</li>
      <li>Email address</li>
      <li>Phone number</li>
      <li>City or project location</li>
      <li>Any message or query you submit</li>
    </ul>
    <p>
      <strong>b) Non-Personal Information (Automatically Collected)</strong>
    </p>
    <p>
      When you browse our website, we collect certain information automatically through cookies and analytics tools, including:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>IP address</li>
      <li>Browser and device details</li>
      <li>Pages visited and time spent</li>
      <li>Traffic sources (e.g., search engines or social media)</li>
    </ul>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">3. How We Use the Collected Information</h3>
    <p>
      We use your information to:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Respond to inquiries or consultation requests</li>
      <li>Share interior design insights and blog updates (if you subscribe)</li>
      <li>Improve our website’s content and functionality</li>
      <li>Display relevant Google Ads and promotions</li>
      <li>Analyze website performance and visitor trends</li>
    </ul>
    <p>
      We do not sell or rent your personal information to any third parties.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">4. Advertising and Google AdSense Policy</h3>
    <p>
      Miggla.com displays advertisements through Google AdSense and may partner with other trusted ad networks.
    </p>
    <p>
      <strong>a) Google Ads Cookies</strong>
    </p>
    <p>
      Google uses cookies, including the DART cookie, to serve ads based on users’ visits to this and other websites.
      You can opt out of personalized advertising by visiting the <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Google Ads Settings</a>.
    </p>
    <p>
      <strong>b) Third-Party Advertisers</strong>
    </p>
    <p>
      Third-party vendors may use cookies and similar technologies to display relevant ads.
      Miggla.com has no control over these cookies but ensures all ads comply with Google’s content and privacy standards.
    </p>
    <p>
      For more information, please visit the <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Google Advertising Privacy Policy</a>.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">5. Cookies Policy 🍪</h3>
    <p>
      We use cookies to enhance user experience and analyze traffic.
    </p>
    <p>
      Cookies help us:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Understand which design topics interest visitors most</li>
      <li>Improve loading speed and layout</li>
      <li>Deliver location-relevant content (Delhi NCR-based design inspiration)</li>
      <li>Serve personalized advertisements</li>
    </ul>
    <p>
      You can disable cookies anytime through your browser settings, though some parts of the website may not function optimally.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">6. Data Protection</h3>
    <p>
      We take data privacy seriously.
    </p>
    <p>
      Miggla uses secure servers and SSL encryption to protect your data from unauthorized access, misuse, or disclosure.
    </p>
    <p>
      Only authorized personnel have access to your contact details for the purpose of communication or consultation.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">7. Third-Party Tools and Services</h3>
    <p>
      Miggla uses trusted third-party tools to improve site functionality and marketing:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Google Analytics for traffic analysis</li>
      <li>Google AdSense for monetization</li>
      <li>Hosting and email services for communication and security</li>
    </ul>
    <p>
      Each of these services has its own privacy policies that comply with international standards.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">8. Your Rights</h3>
    <p>
      You have full control over your data. You may:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Request access, correction, or deletion of your information</li>
      <li>Unsubscribe from newsletters or marketing emails</li>
      <li>Withdraw consent for data collection</li>
    </ul>
    <p>
      To exercise these rights, email us at support@miggla.com.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">9. Children’s Privacy</h3>
    <p>
      Miggla.com is intended for adults interested in interior design and home improvement.
    </p>
    <p>
      We do not knowingly collect information from children under the age of 13.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">10. Updates to This Policy</h3>
    <p>
      We may update this Privacy Policy periodically to reflect changes in our services or legal obligations.
    </p>
    <p>
      The latest version will always be available on this page with the updated date.
    </p>

    <h3 className="text-xl font-semibold text-gray-800 mt-8">11. Contact Miggla</h3>
    <p>
      For questions, feedback, or privacy-related concerns, please contact us:
    </p>
    <p>
      🏢 Miggla Luxury Interiors & Custom Furniture
    </p>
    <p>
      📍 G-02, Best sky tower, Nsp, Pitampura, New Delhi – 110034, India
    </p>
    <p>
      📩 Email: info@miggla.com
    </p>
    <p>
      🌐 Website: https://miggla.com
    </p>
  </div>
</section>

<br/>
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
        </>
    )
}