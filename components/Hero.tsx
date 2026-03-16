'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-full relative overflow-hidden bg-white">
      {/* Title Bar */}
      <div className="text-center py-4 bg-gray-50/50">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight" style={{ color: '#000' }}>
          Welcome to <span style={{ color: '#EAA938' }}>MAJESTICGAMES</span>
        </h1>
      </div>

      {/* Main Banner Area */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: '320px' }}>
        {/* Background Stripes Design - Hand-painted SVG looking */}
        <div
          className="absolute   right-0 top-0 w-full md:w-3/5 lg:w-1/2 h-full opacity-90"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000' preserveAspectRatio='none'%3E%3Cdefs%3E%3Cpattern id='strokes' width='200' height='200' patternTransform='rotate(-45 0 0)' patternUnits='userSpaceOnUse'%3E%3Cpath d='M-10,50 Q10,40 50,55 T100,45 T150,50 T210,48 L210,80 Q150,90 100,75 T50,85 T-10,75 Z' fill='%23990000'/%3E%3Cpath d='M-10,120 Q20,110 60,125 T120,115 T180,130 T220,120 L220,150 Q180,165 120,145 T60,165 T-10,145 Z' fill='%23EAA938'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='2000' height='2000' x='-500' y='-500' fill='url(%23strokes)'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0) 100%)' }} />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-8 md:py-12 flex flex-col md:flex-row items-center justify-between">

          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left z-20">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-bold mb-4"
              style={{
                fontFamily: 'cursive, sans-serif',
                fontSize: 'clamp(32px, 6vw, 64px)',
                color: '#7A0000',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              Play Online Matka
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center py-14"
            >

              {/* Top ruling line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "240px" }}
                transition={{ duration: 0.7 }}
                className="h-[1px] bg-yellow-500 mb-6"
              />

              {/* Main Title */}
              <div className="text-center leading-tight">

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl md:text-6xl font-light"
                  style={{
                    fontFamily: '"Brush Script MT", cursive',
                    color: "#000080",
                    letterSpacing: "0.08em"
                  }}
                >
                  Majestic
                </motion.h1>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-5xl md:text-6xl font-light"
                  style={{
                    fontFamily: '"Brush Script MT", cursive',
                    color: "#000080",
                    letterSpacing: "0.08em"
                  }}
                >
                  Games
                </motion.h1>

              </div>

              {/* Elegant underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "160px" }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="h-[2px] bg-yellow-500 mt-5"
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-4 text-xs tracking-[0.4em]"
                style={{
                  color: "#EAA938",
                  fontFamily: '"Brush Script MT", cursive'
                }}
              >
                MOST TRUSTED
              </motion.p>

              {/* Bottom ruling line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "240px" }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="h-[1px] bg-yellow-500 mt-6"
              />

            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center justify-center md:justify-start gap-4 mt-4"
            >
              <span className="font-bold italic" style={{ color: '#EAA938', fontSize: 'clamp(24px, 4vw, 36px)' }}>
                100%
              </span>
              <span className="font-bold" style={{ fontFamily: 'cursive, sans-serif', color: '#7A0000', fontSize: 'clamp(24px, 4vw, 36px)' }}>
                TRUSTED
              </span>
            </motion.div>
          </div>

          {/* Right Side Image Placeholder */}
          <div className="flex-1 lg:pl-60 md:pl-20 px-4 md:px-0 relative h-64 md:h-[400px] w-full flex items-center justify-center z-10 mt-8 md:mt-0">
            {/* Model holding money placeholder - we don't have the exact image, using a stylized placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full  h-full max-w-sm flex items-center justify-center bg-gray-100 rounded-3xl shadow-inner border-4 border-dashed border-gray-300"
            >
              <div className="text-center p-4">
                <span className="text-4xl block mb-2">📸</span>
                <p className="text-sm font-semibold text-gray-500">Banner Image Area</p>
                <p className="text-xs text-gray-400 mt-1">(Model with cash graphic)</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
