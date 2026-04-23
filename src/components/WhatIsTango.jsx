const pillars = [
  {
    icon: '🤝',
    title: 'Connection',
    desc: "Argentine Tango is danced in a close embrace — partners move as one, communicating entirely through subtle shifts of weight and breath. No words needed. It is the most intimate social dance in the world.",
  },
  {
    icon: '🎵',
    title: 'Improvisation',
    desc: "Every tango is improvised in the moment. There are no fixed routines. The lead proposes, the follow interprets. Each dance is a conversation — shaped by the music, the embrace, and the person in your arms.",
  },
  {
    icon: '🌍',
    title: 'Community',
    desc: 'The milonga — the tango social dance — is one of the most welcoming communities you will find. Strangers become dance partners. Partners become friends. Every city has a community waiting to embrace you.',
  },
  {
    icon: '🧘',
    title: 'Mindfulness',
    desc: "Tango demands your complete presence. You cannot think about your day, your phone, or tomorrow. For 3 minutes, there is only the music and your partner. Dancers describe it as a moving meditation.",
  },
]

const levels = [
  {
    level: 'Complete Beginner',
    time: 'Day 1',
    desc: "You don't need dance experience. You don't need a partner. You just need to show up. Beginner classes teach the walk, the embrace, and the first conversations of the dance.",
    cta: true,
  },
  {
    level: 'Social Dancer',
    time: '6–18 months',
    desc: "You attend milongas (social dances), you understand the cabeceo (the silent invitation), you have regular partners, and you're starting to feel the music in your feet.",
    cta: false,
  },
  {
    level: 'Intermediate',
    time: '2–5 years',
    desc: 'You dance with a variety of partners, you have a personal style, you understand musicality and the difference between orchestras. You are part of the community.',
    cta: false,
  },
  {
    level: 'Advanced / Teacher',
    time: '5+ years',
    desc: "Your tango is deeply personal. You teach, you perform, you may travel to Buenos Aires. And still — every dance teaches you something new. The learning never ends.",
    cta: false,
  },
]

const myths = [
  { myth: '"I need a partner to start."', truth: 'False. Most classes are for individuals. You rotate partners in class — this is actually how you learn faster.' },
  { myth: '"It looks complicated and hard."', truth: 'The basics are simple: a walk, an embrace, a rhythm. The depth comes gradually, over years, and that\'s what keeps it endlessly fascinating.' },
  { myth: '"I\'m not a dancer."', truth: 'If you can walk, you can tango. The Argentines say: "The tango is a walk with feeling." No formal dance background required.' },
  { myth: '"It\'s only for young people."', truth: 'Tango is one of the few partner dances where experience genuinely improves with age. Many of the finest dancers are in their 50s, 60s, and 70s.' },
]

export default function WhatIsTango() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="bg-rose-900 text-white rounded-2xl p-10 text-center">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="TangoTroupe" className="w-24 h-24 rounded-full object-cover" />
        </div>
        <h2 className="text-3xl font-bold mb-4">What is Argentine Tango?</h2>
        <p className="text-rose-100 text-xl max-w-2xl mx-auto leading-relaxed">
          Argentine Tango is not a performance — it is a conversation. A dialogue between two people, expressed through movement, music, and the close embrace. It is the most human of dances.
        </p>
      </div>

      {/* Four pillars */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">The Four Pillars</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map(p => (
            <div key={p.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h4 className="text-xl font-bold text-rose-900 mb-2">{p.title}</h4>
              <p className="text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video placeholder / quote */}
      <div className="bg-gray-900 text-white rounded-2xl p-10 text-center">
        <p className="text-2xl italic text-rose-200 mb-4">
          "In tango, you don't follow steps. You follow a person."
        </p>
        <p className="text-gray-400 text-sm">— Argentine tango tradition</p>
      </div>

      {/* Levels / journey */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Tango Journey</h3>
        <p className="text-gray-500 mb-6">Tango is a lifelong practice. Here is what the path looks like.</p>
        <div className="space-y-4">
          {levels.map((l, i) => (
            <div key={l.level} className={`rounded-2xl p-6 ${l.cta ? 'bg-rose-50 border-2 border-rose-300' : 'bg-white border border-gray-100 shadow-sm'}`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${l.cta ? 'bg-rose-700 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {i + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className={`font-bold text-lg ${l.cta ? 'text-rose-900' : 'text-gray-900'}`}>{l.level}</h4>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{l.time}</span>
                    </div>
                    <p className="text-gray-600 mt-2 leading-relaxed">{l.desc}</p>
                  </div>
                </div>
                {l.cta && (
                  <div className="shrink-0">
                    <span className="inline-block bg-rose-700 text-white text-xs px-3 py-1.5 rounded-full font-semibold">
                      ← Start Here
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Myths */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Myths vs. Reality</h3>
        <div className="space-y-5">
          {myths.map(m => (
            <div key={m.myth} className="flex gap-4">
              <div className="shrink-0 mt-1">
                <span className="text-red-500 text-lg">✗</span>
              </div>
              <div>
                <p className="font-semibold text-gray-700 italic">{m.myth}</p>
                <p className="text-gray-600 text-sm mt-1"><span className="text-green-600 font-bold">✓ </span>{m.truth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Where to start in Boston */}
      <div className="bg-rose-900 text-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">Ready to Try Tango in Boston?</h3>
        <p className="text-rose-100 leading-relaxed mb-6">
          The Greater Boston tango community is vibrant, welcoming, and has been dancing for decades. There are weekly milongas, beginner-friendly classes, and a community of 300+ dancers who would love to meet you.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          {[
            { label: 'Weekly Classes', desc: 'Beginner classes offered most weeknights in Boston, Cambridge & Brookline' },
            { label: 'Milongas', desc: 'Social dances held weekly — all levels welcome, practice nights for beginners' },
            { label: 'This Program', desc: "Come see us perform — then ask us how to start. We'd love to show you." },
          ].map(item => (
            <div key={item.label} className="bg-rose-800 rounded-xl p-5">
              <div className="font-bold text-amber-400 mb-2">{item.label}</div>
              <div className="text-rose-200 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
        <p className="text-rose-300 text-sm mt-6 text-center">
          See one of our outreach shows? Ask any of our dancers — we are always happy to point you toward your first class.
        </p>
      </div>
    </div>
  )
}
