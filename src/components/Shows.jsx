import { useState } from 'react'
import showsData from '../data/shows.json'

const STATUS_COLORS = {
  Planning: 'bg-yellow-100 text-yellow-700',
  Open: 'bg-green-100 text-green-700',
  Full: 'bg-orange-100 text-orange-700',
  Confirmed: 'bg-blue-100 text-blue-700',
  Completed: 'bg-gray-100 text-gray-500',
}

const ROLE_COLORS = {
  pair: 'bg-rose-50 border-rose-200',
  'solo-lead': 'bg-blue-50 border-blue-200',
  'solo-follow': 'bg-purple-50 border-purple-200',
}

const ROLE_LABELS = {
  pair: '👫 Pair',
  'solo-lead': '🕺 Lead (needs partner)',
  'solo-follow': '💃 Follow (needs partner)',
}

const emptyForm = { lead: '', follow: '', role: 'pair', comments: '' }

export default function Shows() {
  const [shows, setShows] = useState(showsData)
  const [expanded, setExpanded] = useState(1)
  const [signupSession, setSignupSession] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const set = field => e => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSignup = (showId, sessionId) => {
    if (!form.lead && !form.follow) return
    const newPair = {
      id: `p${Date.now()}`,
      lead: form.role === 'solo-follow' ? 'UNMATCHED' : form.lead,
      follow: form.role === 'solo-lead' ? 'UNMATCHED' : form.follow,
      type: form.role,
      comments: form.comments,
    }
    setShows(prev => prev.map(show =>
      show.id !== showId ? show : {
        ...show,
        sessions: show.sessions.map(s =>
          s.id !== sessionId ? s : { ...s, enrolledPairs: [...s.enrolledPairs, newPair] }
        ),
      }
    ))
    setSubmitted(true)
    setForm(emptyForm)
    setTimeout(() => { setSubmitted(false); setSignupSession(null) }, 2500)
  }

  const spotsLeft = session =>
    session.pairsNeeded - session.enrolledPairs.filter(p => p.type === 'pair').length

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Show Calendar</h2>
        <p className="text-gray-500 mt-1">
          Upcoming outreach days — sign up as a pair or solo to be matched. We finalize each show once enough dancers are confirmed.
        </p>
      </div>

      {/* How it works */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">How Scheduling Works</h3>
        <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
          {[
            { step: '1', label: 'Facility Confirms', desc: 'We agree on a date and time with the venue' },
            { step: '2', label: 'Show Posted', desc: 'Dancers see it here and sign up — pairs or solo' },
            { step: '3', label: 'Matching', desc: 'Solo leads and follows are paired by the organizers' },
            { step: '4', label: 'Show Confirmed', desc: 'Final team notified 1 week before the visit' },
          ].map(s => (
            <div key={s.step} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-rose-700 text-white rounded-full flex items-center justify-center font-bold text-lg">{s.step}</div>
              <div className="font-semibold text-gray-900">{s.label}</div>
              <div className="text-gray-500 text-xs">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Show list */}
      {shows.map(show => (
        <div key={show.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Show header */}
          <button
            onClick={() => setExpanded(expanded === show.id ? null : show.id)}
            className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="text-center bg-rose-50 rounded-xl px-3 py-2 min-w-[60px]">
                <div className="text-xs text-rose-600 font-semibold uppercase">
                  {new Date(show.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short' })}
                </div>
                <div className="text-2xl font-bold text-rose-900">
                  {new Date(show.date + 'T12:00:00').getDate()}
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">{show.title}</div>
                <div className="text-sm text-gray-500 mt-0.5">{show.sessions.length} session{show.sessions.length > 1 ? 's' : ''} · {show.description}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[show.status]}`}>
                {show.status}
              </span>
              <span className="text-gray-400 text-xl">{expanded === show.id ? '▲' : '▼'}</span>
            </div>
          </button>

          {/* Sessions */}
          {expanded === show.id && (
            <div className="border-t border-gray-100 divide-y divide-gray-100">
              {show.sessions.map(session => {
                const enrolled = session.enrolledPairs.length
                const needed = session.pairsNeeded
                const pairCount = session.enrolledPairs.filter(p => p.type === 'pair').length
                const unmatched = session.enrolledPairs.filter(p => p.type !== 'pair')

                return (
                  <div key={session.id} className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold text-gray-900">{session.time}</span>
                          <span className="text-gray-400">·</span>
                          <span className="font-semibold text-rose-800">{session.venue}</span>
                          <span className="text-xs text-gray-400">{session.location}</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{session.duration} · {session.notes}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-700">
                          {enrolled} / {needed} dancers enrolled
                        </div>
                        <div className="flex gap-1 mt-2 justify-end">
                          {Array.from({ length: needed }).map((_, i) => (
                            <div key={i} className={`w-4 h-4 rounded-full ${i < pairCount ? 'bg-rose-600' : i < enrolled ? 'bg-amber-400' : 'bg-gray-200'}`} />
                          ))}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">● confirmed  ◐ solo (needs match)  ○ open</div>
                      </div>
                    </div>

                    {/* Enrolled pairs */}
                    {session.enrolledPairs.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {session.enrolledPairs.map(pair => (
                          <div key={pair.id} className={`flex items-start gap-3 rounded-xl border p-3 text-sm ${ROLE_COLORS[pair.type]}`}>
                            <span className="font-medium text-gray-600 shrink-0">{ROLE_LABELS[pair.type]}</span>
                            <div className="flex gap-4 flex-wrap">
                              {pair.type !== 'solo-follow' && (
                                <span><span className="text-gray-400 text-xs">Lead:</span> <strong>{pair.lead}</strong></span>
                              )}
                              {pair.type !== 'solo-lead' && (
                                <span><span className="text-gray-400 text-xs">Follow:</span> <strong>{pair.follow}</strong></span>
                              )}
                            </div>
                            {pair.comments && <span className="text-gray-500 text-xs ml-auto italic">{pair.comments}</span>}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Signup */}
                    {signupSession === session.id ? (
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                        {submitted ? (
                          <p className="text-center text-green-700 font-semibold py-2">✓ Signed up! We'll confirm your spot soon.</p>
                        ) : (
                          <>
                            <p className="font-semibold text-gray-800 mb-4">Sign up for {session.time} at {session.venue}</p>
                            <div className="space-y-3">
                              <div>
                                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">I am signing up as</label>
                                <div className="flex gap-3 mt-2">
                                  {[
                                    { val: 'pair', label: '👫 A Pair (Lead + Follow)' },
                                    { val: 'solo-lead', label: '🕺 Solo Lead' },
                                    { val: 'solo-follow', label: '💃 Solo Follow' },
                                  ].map(opt => (
                                    <button
                                      key={opt.val}
                                      onClick={() => setForm(f => ({ ...f, role: opt.val }))}
                                      className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${form.role === opt.val ? 'bg-rose-700 text-white border-rose-700' : 'bg-white border-gray-300 text-gray-700'}`}
                                    >
                                      {opt.label}
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                {form.role !== 'solo-follow' && (
                                  <div>
                                    <label className="block text-xs font-medium text-gray-600 mb-1">Lead Name *</label>
                                    <input required value={form.lead} onChange={set('lead')} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rose-500" />
                                  </div>
                                )}
                                {form.role !== 'solo-lead' && (
                                  <div>
                                    <label className="block text-xs font-medium text-gray-600 mb-1">Follow Name *</label>
                                    <input required value={form.follow} onChange={set('follow')} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rose-500" />
                                  </div>
                                )}
                              </div>
                              <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1">Ability / Comments</label>
                                <input value={form.comments} onChange={set('comments')} placeholder="Years dancing, experience with seniors, any notes..." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rose-500" />
                              </div>
                              <div className="flex gap-3">
                                <button
                                  onClick={() => handleSignup(show.id, session.id)}
                                  disabled={!form.lead && !form.follow}
                                  className="bg-rose-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-rose-800 disabled:opacity-40 transition-colors"
                                >
                                  Confirm Sign-Up
                                </button>
                                <button onClick={() => setSignupSession(null)} className="text-sm text-gray-500 hover:text-gray-700">Cancel</button>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => { setSignupSession(session.id); setForm(emptyForm); setSubmitted(false) }}
                        className="mt-1 px-4 py-2 bg-rose-700 text-white text-sm rounded-lg font-medium hover:bg-rose-800 transition-colors"
                      >
                        Sign Up for This Session →
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
