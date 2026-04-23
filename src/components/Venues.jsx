import { useState } from 'react'
import venuesData from '../data/venues.json'

const STATUS_COLORS = {
  'Not Contacted': 'bg-gray-100 text-gray-700',
  'Outreached': 'bg-blue-100 text-blue-700',
  'Scheduled': 'bg-green-100 text-green-700',
  'Completed': 'bg-purple-100 text-purple-700',
}

const STATUSES = ['All', 'Not Contacted', 'Outreached', 'Scheduled', 'Completed']
const TYPES = ['All', 'Senior Living', 'Community Center']

export default function Venues() {
  const [venues, setVenues] = useState(venuesData)
  const [statusFilter, setStatusFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = venues.filter(v => {
    const statusMatch = statusFilter === 'All' || v.status === statusFilter
    const typeMatch = typeFilter === 'All' || v.type === typeFilter
    const searchMatch = !search || v.name.toLowerCase().includes(search.toLowerCase()) || v.location.toLowerCase().includes(search.toLowerCase())
    return statusMatch && typeMatch && searchMatch
  })

  const statusCounts = STATUSES.slice(1).reduce((acc, s) => {
    acc[s] = venues.filter(v => v.status === s).length
    return acc
  }, {})

  const handleStatusUpdate = (id, newStatus) => {
    const today = new Date().toISOString().split('T')[0]
    setVenues(prev => prev.map(v =>
      v.id === id ? { ...v, status: newStatus, last_contact: today } : v
    ))
    setSelected(prev => prev ? { ...prev, status: newStatus, last_contact: today } : null)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Outreach Venues</h2>
          <p className="text-gray-500 mt-1">{filtered.length} of {venues.length} venues shown</p>
        </div>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search venues..."
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none w-64"
        />
      </div>

      {/* Status summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(statusCounts).map(([status, count]) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status === statusFilter ? 'All' : status)}
            className={`bg-white rounded-xl p-4 text-left border-2 transition-colors ${
              statusFilter === status ? 'border-rose-500' : 'border-gray-100 hover:border-gray-300'
            }`}
          >
            <div className="text-2xl font-bold text-gray-900">{count}</div>
            <div className="text-xs text-gray-500 mt-1">{status}</div>
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-wrap gap-6">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Status</p>
            <div className="flex flex-wrap gap-2">
              {STATUSES.map(s => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 text-sm rounded-full font-medium transition-colors ${
                    statusFilter === s ? 'bg-rose-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Type</p>
            <div className="flex flex-wrap gap-2">
              {TYPES.map(t => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`px-3 py-1.5 text-sm rounded-full font-medium transition-colors ${
                    typeFilter === t ? 'bg-rose-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Venue</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Location</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden lg:table-cell">Contact Title</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Last Contact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map(v => (
              <tr
                key={v.id}
                onClick={() => setSelected(v)}
                className="hover:bg-rose-50 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">{v.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5 md:hidden">{v.location}</div>
                  <div className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium ${
                    v.type === 'Senior Living' ? 'bg-rose-50 text-rose-700' : 'bg-blue-50 text-blue-700'
                  }`}>{v.type}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 hidden md:table-cell">{v.location}</td>
                <td className="px-6 py-4 text-sm text-gray-600 hidden lg:table-cell">{v.contact_title}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[v.status]}`}>
                    {v.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 hidden md:table-cell">{v.last_contact || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">No venues match the current filters</div>
        )}
      </div>

      {/* Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-rose-900 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{selected.name}</h3>
                  <p className="text-rose-200 mt-1 text-sm">{selected.location} · {selected.type}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-rose-200 hover:text-white text-3xl leading-none ml-4"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Contact Title</p>
                  <p className="mt-1 text-gray-900 font-medium">{selected.contact_title}</p>
                  {selected.contact_name && (
                    <p className="text-sm text-rose-700 font-medium mt-0.5">{selected.contact_name}</p>
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Last Contact</p>
                  <p className="mt-1 text-gray-900 font-medium">{selected.last_contact || 'Never'}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Pitch Hook</p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700 leading-relaxed italic">
                  "{selected.pitch_hook}"
                </div>
              </div>

              {selected.notes && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Notes</p>
                  <p className="text-gray-700 text-sm">{selected.notes}</p>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {['Not Contacted', 'Outreached', 'Scheduled', 'Completed'].map(s => (
                    <button
                      key={s}
                      onClick={() => handleStatusUpdate(selected.id, s)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selected.status === s
                          ? 'bg-rose-700 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
