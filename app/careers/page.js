import Link from 'next/link'
import { FaBriefcase } from 'react-icons/fa'

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6 flex items-center justify-center">
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-gray-200 text-center">
        <div className="flex justify-center mb-6">
          <FaBriefcase className="text-4xl text-amber-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h1>
        <p className="text-gray-600 text-base mb-6">
          We’re always looking for passionate designers and creative minds to join our team.
          While we don’t have any open positions at the moment, we’d still love to hear from you.
        </p>
        <p className="text-gray-600 text-base mb-8">
          If you're interested in working with us in the future, feel free to reach out and share your profile.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-xl transition-all"
        >
          Contact Us
        </Link>
      </div>
    </main>
  )
}
