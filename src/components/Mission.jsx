const benefits = [
  {
    icon: '🧠',
    title: 'Cognitive Health',
    desc: "Tango's rhythmic patterns support neuroplasticity, improving working memory and spatial awareness. Studies show it slows progression of Parkinson's and Alzheimer's symptoms.",
  },
  {
    icon: '🦶',
    title: 'Physical Stability',
    desc: 'Core engagement and precise footwork enhance balance and posture, significantly reducing fall risk—the leading cause of injury in older adults.',
  },
  {
    icon: '🤝',
    title: 'Social Connection',
    desc: 'The close embrace of Tango combats isolation, reducing anxiety and depression while building genuine bonds between residents and their community.',
  },
]

const team = [
  { name: 'Toby Balsley', role: 'Lead Organizer' },
  { name: 'WaiLing Balsley', role: 'Co-Organizer' },
  { name: 'Paloma', role: 'Co-Organizer' },
]

const tableRows = [
  { category: 'Motor-Cognitive', mechanism: 'Rhythmic synchronization & step memorization', outcome: 'Improved neuroplasticity and working memory' },
  { category: 'Physical Stability', mechanism: 'Core engagement & precise footwork', outcome: 'Enhanced balance and reduced fall risk' },
  { category: 'Bone Health', mechanism: 'Weight-bearing movement against gravity', outcome: 'Maintenance of bone density in lower extremities' },
  { category: 'Emotional/Social', mechanism: 'Close embrace & partner connection', outcome: 'Reduction in isolation, anxiety, and depression' },
  { category: 'Neurological', mechanism: 'Musical activation of neural pathways', outcome: "Slowed progression of Parkinson's & Alzheimer's symptoms" },
]

export default function Mission({ onNavigate }) {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="text-5xl mb-4">💃🕺</div>
        <h2 className="text-4xl font-bold text-rose-900 mb-4">Dance with Purpose</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          TangoTroupe Boston brings professional Argentine Tango performances and gentle therapeutic workshops to Greater Boston's senior living communities and cultural centers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <button
            onClick={() => onNavigate('Dancers')}
            className="bg-rose-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-800 transition-colors"
          >
            Join as a Dancer
          </button>
          <button
            onClick={() => onNavigate('Venues')}
            className="border-2 border-rose-700 text-rose-700 px-6 py-3 rounded-lg font-medium hover:bg-rose-50 transition-colors"
          >
            View Outreach Venues
          </button>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          We are a community of experienced Argentine Tango dancers using the healing power of dance to improve the lives of seniors, individuals with memory care needs, and the broader Boston community. We believe that Tango—with its emphasis on connection, rhythm, and mindful movement—is a profound therapeutic art that belongs in every care setting.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Through monthly visits to assisted living facilities, CCRCs, and community centers, we provide 45-minute programs that combine live performance with gentle participatory workshops. Every participant is welcome, regardless of mobility level. Even seated residents can join in.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-rose-900 text-white rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-amber-400">300+</div>
            <div className="text-rose-200 mt-1 text-sm">Boston Tango Dancers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-400">33</div>
            <div className="text-rose-200 mt-1 text-sm">Target Venues</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-400">45 min</div>
            <div className="text-rose-200 mt-1 text-sm">Per Program</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-400">1/mo</div>
            <div className="text-rose-200 mt-1 text-sm">Launch Goal</div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">The Science Behind the Dance</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map(b => (
            <div key={b.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h4 className="text-lg font-bold text-rose-900 mb-2">{b.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Health Benefits Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Clinical Benefits at a Glance</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Category</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Mechanism</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Clinical Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {tableRows.map(row => (
                <tr key={row.category} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-rose-800">{row.category}</td>
                  <td className="px-4 py-3 text-gray-600">{row.mechanism}</td>
                  <td className="px-4 py-3 text-gray-700">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">The Organizing Team</h3>
        <div className="flex flex-wrap gap-4">
          {team.map(m => (
            <div key={m.name} className="flex items-center gap-4 bg-gray-50 rounded-xl px-6 py-4">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-700 font-bold text-lg">
                {m.name[0]}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{m.name}</div>
                <div className="text-sm text-gray-500">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-6">
          Backed by a community of 300+ Argentine Tango dancers in the Greater Boston area.
        </p>
      </div>
    </div>
  )
}
