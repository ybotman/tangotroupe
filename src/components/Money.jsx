const phases = [
  {
    icon: '🤝',
    phase: 'Phase 1: Volunteer',
    subtitle: 'Where we are now',
    active: true,
    desc: 'TangoTroupe launches as a fully volunteer organization. Dancers give their time freely. Facilities pay nothing. This builds relationships, credibility, and community trust.',
  },
  {
    icon: '💰',
    phase: 'Phase 2: Modest Contributions',
    subtitle: 'As we grow',
    active: false,
    desc: 'Many senior facilities have entertainment budgets of $150–$400 per visit. A nominal contribution covers transportation, equipment maintenance, and eventually small dancer stipends.',
  },
  {
    icon: '🏛️',
    phase: 'Phase 3: 501(c)(3) Foundation',
    subtitle: 'The long game',
    active: false,
    desc: 'A Tango Foundation structure enables grant funding from arts councils and healthcare foundations, tax-deductible donations, and formal partnerships with academic medical centers.',
  },
]

const expenses = [
  { item: 'Portable speaker system (one-time)', estimate: '$200–$400', priority: 'Essential', color: 'text-rose-600' },
  { item: 'Website & domain hosting', estimate: '$0–$20/mo (Vercel + domain)', priority: 'Essential', color: 'text-rose-600' },
  { item: 'Transportation (per dancer per visit)', estimate: '$10–$30', priority: 'Recurring', color: 'text-amber-600' },
  { item: 'Dancer stipends (Phase 2)', estimate: '$25–$75/dancer/visit', priority: 'Growth', color: 'text-blue-600' },
  { item: '501(c)(3) legal filing (Phase 3)', estimate: '$600–$1,500', priority: 'Future', color: 'text-gray-400' },
]

export default function Money() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Supporting TangoTroupe</h2>
        <p className="text-gray-500 mt-1">How we sustain the mission over time</p>
      </div>

      {/* Our philosophy */}
      <div className="bg-rose-900 text-white rounded-2xl p-8">
        <h3 className="text-xl font-bold mb-3">Our Philosophy</h3>
        <p className="text-rose-100 leading-relaxed">
          TangoTroupe is first and foremost about service. We are a community of dancers who want to give back. We do this work because it matters—for the residents we visit, and for our own growth as artists. We are not a commercial entertainment company.
        </p>
        <p className="text-rose-100 leading-relaxed mt-3">
          That said, if a facility wants to make a contribution to support our dancers' transportation or equipment, we genuinely appreciate it. Any funds go directly back to supporting the program and the dancers who make it happen.
        </p>
      </div>

      {/* Phases */}
      <div className="grid md:grid-cols-3 gap-6">
        {phases.map(p => (
          <div key={p.phase} className={`rounded-2xl p-6 ${p.active ? 'bg-rose-50 border-2 border-rose-300' : 'bg-white shadow-sm border border-gray-100'}`}>
            <div className="text-3xl mb-3">{p.icon}</div>
            <h3 className={`text-lg font-bold mb-1 ${p.active ? 'text-rose-900' : 'text-gray-900'}`}>{p.phase}</h3>
            <p className={`text-xs font-semibold mb-3 ${p.active ? 'text-rose-600' : 'text-gray-400'}`}>{p.subtitle}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            {p.active && (
              <div className="mt-4 inline-block bg-rose-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
                Current Stage
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Expenses */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Expenses to Plan For</h3>
        <div className="space-y-2">
          {expenses.map(row => (
            <div key={row.item} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div>
                <div className="text-sm font-medium text-gray-900">{row.item}</div>
                <div className={`text-xs mt-0.5 font-medium ${row.color}`}>{row.priority}</div>
              </div>
              <div className="text-sm text-gray-600 font-medium text-right ml-4">{row.estimate}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue insight */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-amber-900 mb-3">💡 Revenue Insight</h3>
        <p className="text-sm text-amber-800 leading-relaxed">
          Many senior facilities explicitly budget for external entertainment and music therapy—often $200–$500 per month. Hebrew SeniorLife, Compass Programming facilities, and community centers frequently have funds earmarked for exactly this type of programming.
        </p>
        <p className="text-sm text-amber-800 leading-relaxed mt-3">
          Leading with the clinical benefits of Tango (balance, neuroplasticity, fall prevention) positions TangoTroupe as <strong>healthcare programming</strong>—not just entertainment—which opens larger budget lines and aligns with the facility's care mission.
        </p>
      </div>

      {/* 501c3 path */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">The 501(c)(3) Path</h3>
        <div className="space-y-3">
          {[
            { step: '1', label: 'Establish track record', desc: 'Complete 6–12 visits, document outcomes and resident feedback' },
            { step: '2', label: 'Form a board', desc: 'Toby, WaiLing, Paloma + 2–3 community advisors (healthcare, arts, legal)' },
            { step: '3', label: 'File incorporation', desc: 'Massachusetts nonprofit corporation ($35 state fee)' },
            { step: '4', label: 'Apply for 501(c)(3)', desc: 'IRS Form 1023-EZ (~$275 fee, 2–4 week turnaround for small orgs)' },
            { step: '5', label: 'Apply for grants', desc: 'Mass Cultural Council, NEA, local foundations, healthcare system grants' },
          ].map(row => (
            <div key={row.step} className="flex gap-4">
              <div className="w-8 h-8 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                {row.step}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{row.label}</div>
                <div className="text-sm text-gray-500">{row.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
