'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const tabs = [
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'community', label: 'Community', icon: '🌐' },
  { id: 'skills', label: 'Skills', icon: '💡' }
]

export default function JourneyVisualization({ journeyData }) {
  const [activeTab, setActiveTab] = useState('education')

  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <div className="space-y-4">
            {journeyData.education.map((edu, index) => (
              <motion.div
                key={`edu-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 rounded-lg p-4 border border-cyan-200/50 dark:border-cyan-800/50"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{edu.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{edu.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )
      
      case 'community':
        return (
          <div className="space-y-4">
            {journeyData.organizations.map((org, index) => (
              <motion.div
                key={`org-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200/50 dark:border-green-800/50"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{org.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{org.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{org.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{org.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )
      
      case 'skills':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {journeyData.domains.map((domain, index) => (
              <motion.div
                key={`domain-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-4 border border-orange-200/50 dark:border-orange-800/50"
              >
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{domain.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {domain.skills.join(', ')}
                </p>
              </motion.div>
            ))}
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="relative w-full">
      {/* Gadget Screen Container */}
      <div className="relative bg-gray-200 dark:bg-gray-900 rounded-2xl p-1 shadow-2xl border border-gray-300 dark:border-gray-700">
        {/* Screen Bezel */}
        <div className="relative bg-white dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
          {/* Screen Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-transparent to-sky-50/50 dark:from-cyan-500/5 dark:via-transparent dark:to-sky-500/5 pointer-events-none" />
          
          {/* Top Notch/Status Bar */}
          <div className="relative bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">Enagement Tracker</span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500 font-mono">2025</div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-gray-50/50 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-800">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </div>
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500 dark:bg-cyan-400"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 min-h-[300px] bg-white dark:bg-gray-950">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-500/50 dark:bg-cyan-400/50 rounded-full" />
        <div className="absolute top-2 right-2 w-1 h-1 bg-purple-500/50 dark:bg-purple-400/50 rounded-full" />
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-green-500/50 dark:bg-green-400/50 rounded-full" />
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-orange-500/50 dark:bg-orange-400/50 rounded-full" />
      </div>
    </div>
  )
}
