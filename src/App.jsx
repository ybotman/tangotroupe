import { useState } from 'react'
import Mission from './components/Mission'
import WhatIsTango from './components/WhatIsTango'
import Shows from './components/Shows'
import Venues from './components/Venues'
import Dancers from './components/Dancers'
import ForFacilities from './components/ForFacilities'
import Money from './components/Money'

const TABS = [
  { id: 'Mission', label: 'Mission' },
  { id: 'WhatIsTango', label: 'What is Tango?' },
  { id: 'Shows', label: 'Shows' },
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
        <div className="max-w-6xl mx-auto px-4 pt-5 pb-0">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/logo.png"
              alt="TangoTroupe Boston"
              className="w-16 h-16 rounded-full object-cover border-2 border-rose-300 shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-wide leading-tight">TangoTroupe Boston</h1>
              <p className="text-rose-200 text-sm mt-0.5">Argentine Tango Outreach · Greater Boston</p>
            </div>
            <div className="hidden md:block text-right shrink-0">
              <p className="text-amber-400 font-semibold text-sm">300+ dancers · 33 venues</p>
              <p className="text-rose-300 text-xs mt-0.5">Dance with Purpose</p>
            </div>
          </div>
          <nav className="flex gap-0.5 overflow-x-auto">
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
        {activeTab === 'WhatIsTango' && <WhatIsTango />}
        {activeTab === 'Shows' && <Shows />}
        {activeTab === 'Venues' && <Venues />}
        {activeTab === 'Dancers' && <Dancers />}
        {activeTab === 'ForFacilities' && <ForFacilities />}
        {activeTab === 'Money' && <Money />}
      </main>

      <footer className="bg-rose-900 text-rose-300 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="w-10 h-10 rounded-full object-cover opacity-80" />
            <div>
              <p className="font-semibold text-white text-sm">TangoTroupe Boston</p>
              <p className="text-xs text-rose-400">Dance with Purpose</p>
            </div>
          </div>
          <p className="text-xs text-rose-400">
            Organized by Toby Balsley, WaiLing Balsley & Paloma · Greater Boston Argentine Tango Outreach
          </p>
        </div>
      </footer>
    </div>
  )
}
