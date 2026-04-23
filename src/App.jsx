import { useState } from 'react'
import Mission from './components/Mission'
import Venues from './components/Venues'
import Dancers from './components/Dancers'
import ForFacilities from './components/ForFacilities'
import Money from './components/Money'

const TABS = [
  { id: 'Mission', label: 'Mission' },
  { id: 'Venues', label: 'Venues' },
  { id: 'Dancers', label: 'Dancers' },
  { id: 'ForFacilities', label: 'For Facilities' },
  { id: 'Money', label: 'Support Us' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('Mission')

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-rose-900 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 pt-6 pb-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold tracking-wide">TangoTroupe Boston</h1>
              <p className="text-rose-200 mt-1 text-sm">Argentine Tango Outreach • Greater Boston</p>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-rose-200 text-sm">Bringing dance to communities</p>
              <p className="text-amber-400 font-semibold text-sm">300+ dancers · 33 target venues</p>
            </div>
          </div>
          <nav className="flex gap-1 overflow-x-auto">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium rounded-t-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gray-50 text-rose-900'
                    : 'text-rose-100 hover:bg-rose-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'Mission' && <Mission onNavigate={setActiveTab} />}
        {activeTab === 'Venues' && <Venues />}
        {activeTab === 'Dancers' && <Dancers />}
        {activeTab === 'ForFacilities' && <ForFacilities />}
        {activeTab === 'Money' && <Money />}
      </main>

      <footer className="bg-rose-900 text-rose-300 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-semibold text-white">TangoTroupe Boston</p>
          <p className="text-sm mt-1">Dance with Purpose · Serving Greater Boston Senior & Community Centers</p>
          <p className="text-xs mt-3 text-rose-400">Organized by Toby Balsley, WaiLing Balsley & Paloma</p>
        </div>
      </footer>
    </div>
  )
}
