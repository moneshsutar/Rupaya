'use client';

import { motion } from 'framer-motion';

const availableGames = [
  { name: 'MILAN MORNING', numbers: '123-60-244' },
  { name: 'SRIDEVI', numbers: '480-23-490' },
  { name: 'TIME BAZAR', numbers: '289-96-150' },
  { name: 'MADHUR DAY', numbers: '345-28-189' },
  { name: 'RAJDHANI DAY', numbers: '120-35-140' },
  { name: 'MILAN DAY', numbers: '230-58-189' },
  { name: 'SUPREME DAY', numbers: '124-70-190' },
  { name: 'KALYAN', numbers: '123-67-340' },
  { name: 'SRIDEVI NIGHT', numbers: '234-90-127' },
  { name: 'MADHUR NIGHT', numbers: '139-33-256' },
  { name: 'SUPREME NIGHT', numbers: '457-69-180' },
  { name: 'MILAN NIGHT', numbers: '140-52-390' },
  { name: 'KALYAN NIGHT', numbers: '357-55-168' },
  { name: 'RAJDHANI NIGHT', numbers: '124-77-250' },
  { name: 'MAIN BAZAR', numbers: '120-30-190' },
];

export default function AvailableGames() {
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
          Available Games
        </h2>
        <p className="text-sm md:text-base font-bold" style={{ color: '#111' }}>
          We have multiple types of games for you
        </p>
      </motion.div>

      {/* Game Cards Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {availableGames.map((game, index) => (
          <motion.div
            key={game.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="flex flex-col rounded shadow-md bg-white/80 backdrop-blur-sm p-5 w-full"
            style={{ borderBottom: '4px solid #F5BB4A' }}
          >
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex flex-col gap-1">
                <span className="font-extrabold text-[#111] text-sm md:text-base">
                  {game.name}
                </span>
                <span className="text-[#333] font-semibold text-sm">
                  {game.numbers}
                </span>
                <a
                  href="#"
                  className="text-xs font-semibold leading-tight text-[#EAA938] w-max"
                  style={{
                    borderBottom: '1px dashed #EAA938',
                    paddingBottom: '2px',
                    marginTop: '2px'
                  }}
                >
                  Game Chart
                </a>
              </div>

              {/* Play Button - exact gradient and shape matching image */}
              <button
                className="golden-button-shine w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 ml-1" style={{ fill: '#7A0000' }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
