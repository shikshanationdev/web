import React from 'react'
import Image from 'next/image'

const CareersHero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <h3 className="text-4xl md:text-5xl font-semibold text-sky-700">Join Our Mission at
            <span className="block">Shiksha Nation</span>
          </h3>

          <p className="mt-6 text-slate-600 max-w-xl leading-relaxed">
            <strong className="font-semibold text-slate-700">Shiksha Nation</strong> is India’s first AI-powered, bilingual learning platform—offering high-quality, affordable education from Class 6 to competitive exams and career skills. Built on the philosophy “For Bharat, By Bharat, Of Bharat,” we’re committed to shaping a future-ready generation from every corner of India.
          </p>

          <div className="mt-8">
            <a href="/careers/apply" className="inline-flex items-center gap-3 bg-sky-700 text-white px-6 py-3 rounded-full shadow hover:bg-sky-800 transition">
              Join Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative w-full h-96 md:h-[520px]">
          <Image src="/careers/image1.webp" alt="careers" fill style={{ objectFit: 'contain' }} />
        </div>
      </div>
    </section>
  )
}

export default CareersHero
