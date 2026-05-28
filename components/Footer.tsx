'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(90deg, #ff990088, #ff9900ea)' }}>
      {/* Main footer content */}
      <div className="px-6 py-10 md:py-16 text-center max-w-4xl mx-auto flex flex-col items-center">

        {/* Logo/Brand Stacked */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div
            className="w-32 h-32 rounded-full flex flex-col items-center justify-center p-4 relative"
            style={{ background: '#F0B74A' }}
          >
            <span className="font-extrabold text-2xl leading-none" style={{ color: '#111', fontFamily: 'Arial, sans-serif' }}>
              rupaya
            </span>
            <span className="font-extrabold text-2xl leading-none" style={{ color: '#111', fontFamily: 'Arial, sans-serif' }}>
               Games
            </span>
            <span className="text-[10px] font-bold tracking-widest mt-1" style={{ color: '#555' }}>
              MOST TRUSTED
            </span>
          </div>
        </motion.div>

        {/* Info Text */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm md:text-base mb-6 font-medium px-4"
          style={{ color: '#fff' }}
        >
          Players need to be 18+ in order to register. Underage gambling is prohibited.
        </motion.p>

        <motion.p
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-sm md:text-base font-bold mb-6 px-4"
          style={{ color: '#fff' }}
        >
          Ground Floor 10th St George's Court Myrtle Street Douglas Isle of Man TM1 ED12559810
        </motion.p>

        <motion.p
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xs md:text-sm leading-relaxed max-w-3xl mb-10 px-4"
          style={{ color: '#fff' }}
        >
          Our website is operated by rupaya Games International B.V., a company established under the laws of United Kingdom, with registered address at Ground Floor 10th St George's Court Myrtle Street Douglas Isle of Man TM1 ED12559810 and having its gaming sublicence issued, by United Kingdom e-Gaming and all rights to operate the gaming software worldwide.
        </motion.p>

        {/* Divider */}
        <div
          className="w-full h-[1px] mb-4 opacity-50"
          style={{
            backgroundImage: 'linear-gradient(to right, transparent, #fff, transparent)',
            backgroundSize: '10px 1px',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Bottom Bar: Copyright & Social */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xs md:text-sm font-medium mb-4 md:mb-0"
            style={{ color: '#fff' }}
          >
            Copyright © 2025 rupaya Games | All rights reserved
          </motion.p>

          <motion.a
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
            href="https://t.me/rupayamatka"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform hover:scale-110"
            aria-label="Telegram"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 pr-0.5" style={{ fill: '#EAA938' }}>
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.896-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </motion.a>
        </div>

      </div>
    </footer>
  );
}
