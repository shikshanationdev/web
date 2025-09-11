import React from 'react'
import { LuLightbulb, LuRocket, LuHandshake, LuHeart } from 'react-icons/lu'

const cardData = [
  {
    icon: <LuLightbulb className="text-4xl text-teal-700" />,
    title: 'Mission-Driven Culture',
    desc: "We're committed to making quality education accessible to all — urban, rural, and underserved communities alike.",
    bg: 'bg-teal-100',
    color: 'text-teal-700',
  },
  {
    icon: <LuRocket className="text-4xl text-orange-500" />,
    title: 'Growth and Learning',
    desc: 'Join a fast-growing team (11–50 employees, hiring since 2025) in an emerging EdTech leader',
    bg: 'bg-amber-100',
    color: 'text-orange-500',
  },
  {
    icon: <LuHandshake className="text-4xl text-pink-500" />,
    title: 'Collaborative Culture',
    desc: "Work alongside passionate educators, technologists, and innovators, shaping India’s education landscape.",
    bg: 'bg-pink-100',
    color: 'text-pink-500',
  },
  {
    icon: <LuHeart className="text-4xl text-indigo-600" />,
    title: 'Value',
    desc: 'Inclusion, integrity, academic rigor, empathy, and empowerment are at the heart of what we do.',
    bg: 'bg-indigo-100',
    color: 'text-indigo-600',
  },
]

const CareersValues: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-sky-700 mb-10">Why You’ll Love Working With Us</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((c, idx) => (
          <div key={idx} className={`p-8 rounded-2xl ${c.bg}`}>
            <div className="mb-4">{c.icon}</div>
            <h3 className={`text-xl font-semibold ${c.color} mb-3`}>{c.title}</h3>
            <p className="text-slate-600 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CareersValues
