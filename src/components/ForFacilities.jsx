import { useState } from 'react'

const faqs = [
  {
    q: 'What space do you require?',
    a: 'We require a clear floor space of approximately 15×15 feet. Hardwood or smooth tile is ideal; we avoid thick carpeting to ensure dancer and resident safety.',
  },
  {
    q: 'Do you provide your own sound?',
    a: 'Yes, we are fully self-contained. We bring our own high-quality portable speaker system and music library. You do not need to provide any equipment.',
  },
  {
    q: 'Is this a show or a class?',
    a: 'We are flexible. We offer a 45-minute demonstration performance where residents watch and enjoy, a Gentle Movement workshop where residents participate at their own comfort level, or a combination of both.',
  },
  {
    q: 'Do residents need to be dancers to participate?',
    a: 'Absolutely not. Our workshops are designed for all levels of mobility, including those who prefer to sit and watch or practice gentle, rhythmic movement with a partner while seated.',
  },
  {
    q: 'How many people do you bring?',
    a: 'Depending on the program, we typically bring 2 to 4 instructors and dancers to ensure personalized, attentive support for all residents.',
  },
  {
    q: 'Is there a cost?',
    a: 'We are a volunteer-based outreach program and offer our services at no cost. Many facilities have a modest entertainment budget—if you wish to make a contribution to support our dancers\' transportation and equipment, we welcome it, but it is never required.',
  },
  {
    q: 'Do you have experience with memory care residents?',
    a: "Yes. Tango's rhythmic patterns and emotional music are particularly beneficial for residents with Parkinson's and dementia. We adapt each session to the specific needs and mobility levels of your community.",
  },
  {
    q: 'Can you do multiple sessions in one day?',
    a: 'Yes—we can perform in 3 to 4 different neighborhoods or wings within your facility in a single day, bringing the program to residents across different care levels.',
  },
]

const EMAIL_TEMPLATE = `Dear [Name],

I am organizing TangoTroupe Boston, a local group of experienced Argentine Tango dancers dedicated to bringing professional-grade cultural programming to [Facility Name].

We offer a 45-minute interactive experience that combines a live performance with a gentle workshop tailored for seniors. Research shows that the rhythmic walking and synchronization of Tango specifically target motor-cognitive pathways, improving balance and gait stability more effectively than standard exercise.

Our program is entirely self-contained—we bring our own sound system and music. We visit on a volunteer basis, once a month, and can adapt to residents of all mobility levels, including those in memory care.

Would you have 10 minutes to discuss how we might fit into your programming calendar?

Best regards,
Toby Balsley
TangoTroupe Boston`

const CALL_QUESTIONS = [
  'Do you have a dedicated budget for external entertainers, or do you primarily work with volunteer groups?',
  'Does your facility have a ballroom or a large, clear floor space (roughly 15×15 feet) suitable for dancing?',
  'Do you have residents in Memory Care who would benefit from a sensory-based, rhythmic intervention?',
  'Would you be interested in a "marathon" day where we perform in 3–4 different neighborhoods within your facility?',
  "What is the best way to schedule a visit—do you have a programming calendar I can reference?",
  "Who is the best person to follow up with for scheduling—is that you, or someone on your activities team?",
]

export default function ForFacilities() {
  const [openFaq, setOpenFaq] = useState(null)
  const [copied, setCopied] = useState(false)

  const copyTemplate = () => {
    navigator.clipboard.writeText(EMAIL_TEMPLATE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">For Facility Directors</h2>
        <p className="text-gray-500 mt-1">Elevator pitches, email templates, and call scripts for your outreach</p>
      </div>

      {/* Pitches */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="inline-block bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Senior Living Pitch
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            "This 45-minute workshop uses the specific forward-and-backward walking rhythms of Argentine Tango to target the motor-cognitive pathways associated with gait stability and working memory. Your residents will experience a boost in core strength, a reduction in fall-related anxiety, and the deep social connections central to your enrichment mission—all through the joy of dance."
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Community Center Pitch
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            "We offer a turnkey socio-cultural experience that serves your mission of lifelong learning and wellness. Our Tango workshops are scientifically-backed interventions that improve cognitive flexibility and cardiovascular health in a fun, inclusive environment—perfect for your adult programming calendar."
          </p>
        </div>
      </div>

      {/* Email template */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-900">Email / Letter Template</h3>
          <button
            onClick={copyTemplate}
            className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors ${
              copied ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {copied ? '✓ Copied!' : 'Copy Template'}
          </button>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-mono border border-gray-200">
          {EMAIL_TEMPLATE}
        </div>
      </div>

      {/* Call questions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Questions to Ask on the Call</h3>
        <ol className="space-y-3">
          {CALL_QUESTIONS.map((q, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-700">
              <span className="text-rose-700 font-bold shrink-0 w-5">{i + 1}.</span>
              <span>{q}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Contact title guide */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Who to Contact</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Title</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Setting</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Typical Budget Authority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { title: 'EnrichedLIFE / Life Enrichment Director', setting: 'Senior Living', budget: 'High — strategic programming decisions' },
                { title: 'Activities Director / Coordinator', setting: 'Senior Living', budget: 'Medium — day-to-day scheduling' },
                { title: 'Director of Compass Programming', setting: 'Memory Care', budget: 'High — specialized therapeutic programs' },
                { title: 'Program Manager / Director', setting: 'Community Centers', budget: 'Medium — public programming calendar' },
                { title: 'Recreation Program Coordinator', setting: 'Municipal', budget: 'Low–Medium — fits within department budget' },
              ].map(row => (
                <tr key={row.title} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{row.title}</td>
                  <td className="px-4 py-3 text-gray-500">{row.setting}</td>
                  <td className="px-4 py-3 text-gray-600">{row.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-sm">{faq.q}</span>
                <span className="text-gray-400 shrink-0 ml-4 text-xl leading-none">
                  {openFaq === i ? '−' : '+'}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
