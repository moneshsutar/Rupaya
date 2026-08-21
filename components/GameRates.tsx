'use client';

import { motion } from 'framer-motion';

const gameRates = [
  { name: 'Single Digit', rate: '10₹ Ka 95₹' },
  { name: 'Jodi Digit', rate: '10₹ Ka 950₹' },
  { name: 'Single Pana', rate: '10₹ Ka 1500₹' },
  { name: 'Double Pana', rate: '10₹ Ka 3000₹' },
  { name: 'Triple Pana', rate: '10₹ Ka 9000₹' },
  { name: 'Half Sangam', rate: '10₹ Ka 10000₹' },
  { name: 'Full Sangam', rate: '10₹ Ka 100000₹' },
];

export default function GameRates() {
  return (
    <section className="py-8 px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2
          className="text-2xl md:text-3xl font-black mb-1"
          style={{ color: '#EAA938' }}
        >
          Game Rates
        </h2>
        <p className="text-sm md:text-base font-bold" style={{ color: '#111' }}>
          We have Best Game Rates for you
        </p>
      </motion.div>

      {/* Game Rate Cards Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {gameRates.map((game, index) => (
          <motion.div
            key={game.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="flex items-center justify-between px-6 py-5 rounded shadow-md bg-white/80 backdrop-blur-sm w-full"
            style={{ borderBottom: '4px solid #F5BB4A' }}
          >
            <div className="flex items-center gap-3">
              {/* Arrow Icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5" style={{ fill: '#EAA938' }}>
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span className="font-extrabold text-sm md:text-base" style={{ color: '#000' }}>
                {game.name}
              </span>
            </div>
            <span className="font-extrabold text-sm md:text-base" style={{ color: '#EAA938' }}>
              {game.rate}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
