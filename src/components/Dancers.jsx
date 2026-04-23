import { useState } from 'react'

const SKILL_LEVELS = [
  'Beginner (< 1 year)',
  'Social Dancer (1–3 years)',
  'Intermediate (3–5 years)',
  'Advanced (5+ years)',
  'Teacher / Performer',
]

export default function Dancers() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', skill: '', availability: '', message: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const set = field => e => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"

  return (
    <div className="space-y-8">
      {/* Blurb */}
      <div className="bg-rose-900 text-white rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-3">Tango for the Community: Dance with Purpose</h2>
        <p className="text-rose-100 text-lg leading-relaxed">
          Join our outreach initiative to bring the magic of Argentine Tango to Greater Boston's senior and community centers. This is more than a performance—it is <em>movement medicine</em>. Use your art to combat isolation, improve lives, and deepen your own connection to the dance.
        </p>
      </div>

      {/* What we ask / what you get */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">What We Ask</h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            {[
              'Commit to one afternoon per month (2–4 hours including travel)',
              'Perform and optionally lead gentle movement workshops for residents',
              'Bring patience, warmth, and a spirit of service',
              'Intermediate+ level preferred; teachers and performers especially welcome',
              'Bring a partner if you can — or we will match you with the team',
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-rose-700 font-bold shrink-0 mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">What You Get</h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            {[
              'Real-world performance experience in front of live, appreciative audiences',
              "Sharpen your lead/follow precision and presence through teaching",
              'Be part of a mission-driven community within the Boston tango world',
              'Bring tango to people who may never encounter it otherwise',
              'Potential stipends as the program grows and receives funding',
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-amber-500 font-bold shrink-0 mt-0.5">★</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Elevator pitch for recruiting */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-2">Share This with Dancers</p>
        <p className="text-amber-900 text-sm leading-relaxed italic">
          "Take your dancing beyond the milonga. By joining our outreach team, you'll master the social bridge aspect of Tango, using your skills to combat isolation in seniors while improving your own lead/follow precision through teaching. One afternoon a month. Real impact."
        </p>
      </div>

      {/* Signup form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Sign Up to Dance</h3>

        {submitted ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💃</div>
            <h4 className="text-xl font-bold text-rose-900 mb-2">Welcome to TangoTroupe!</h4>
            <p className="text-gray-600">
              Thank you for signing up. We'll be in touch soon with details about upcoming performances. ¡Gracias!
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', skill: '', availability: '', message: '' }) }}
              className="mt-6 text-sm text-rose-700 underline"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input required value={form.name} onChange={set('name')} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input required type="email" value={form.email} onChange={set('email')} className={inputClass} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" value={form.phone} onChange={set('phone')} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skill Level *</label>
                <select required value={form.skill} onChange={set('skill')} className={inputClass}>
                  <option value="">Select your level...</option>
                  {SKILL_LEVELS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Typical Availability</label>
              <input
                value={form.availability}
                onChange={set('availability')}
                placeholder="e.g., Weekends, Tuesday afternoons, flexible..."
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about yourself</label>
              <textarea
                value={form.message}
                onChange={set('message')}
                rows={4}
                placeholder="How long have you been dancing? Do you have a regular partner? Any performance or teaching experience? What draws you to this program?"
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rose-700 text-white py-3 rounded-lg font-medium hover:bg-rose-800 transition-colors text-base"
            >
              Join TangoTroupe →
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
