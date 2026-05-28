'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      className="w-full min-h-screen lg:min-h-[85vh] relative overflow-hidden py-16 lg:py-10 flex items-center"
    >
      {/* Sunlight Effect */}
      <div className="hero-sunlight-container">
        <div className="hero-sunlight-shine"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* Left Side: Professional Text */}
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-4 lg:pt-16 lg:-translate-x-8 xl:-translate-x-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center justify-center lg:justify-start gap-3 w-full"
          >
            <div className="w-10 h-[2px] bg-[#7A0000]"></div>
            <span className="font-bold tracking-[0.15em] text-[#7A0000] text-sm uppercase">
              100% Trusted Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 lg:mb-6 text-[#111]"
            style={{ fontFamily: '"Brush Script MT", "Comic Sans MS", cursive', letterSpacing: '0.05em' }}
          >
            Experience the <br />
            <span className="text-[#7A0000]">rupaya Games</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-900 text-base sm:text-lg md:text-xl max-w-[90%] sm:max-w-lg mb-6 leading-relaxed font-semibold italic mx-auto lg:mx-0"
          >
            Play online Matka with India's most secure and fastest-growing platform. Win big prizes and enjoy lightning-fast withdrawals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="w-full max-w-[90%] sm:max-w-lg mb-8 flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0"
          >
            <h2 
              className="text-[#7A0000] text-3xl sm:text-4xl font-bold mb-2 leading-tight"
              style={{ fontFamily: '"Brush Script MT", "Comic Sans MS", cursive', letterSpacing: '0.05em' }}
            >
              Welcome to RUPAYA MATKA Online Matka Play
            </h2>
            <p className="text-gray-900 text-base sm:text-lg md:text-xl font-semibold italic mb-4">
              Most Genuine and Hi-tech Book
            </p>
            
            <div className="space-y-2 mb-4 text-gray-900 text-base sm:text-lg md:text-xl font-semibold italic">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span>Minimum Deposit : <span className="text-[#7A0000] font-bold">100</span></span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span>Minimum Withdrawal : <span className="text-[#7A0000] font-bold">500</span></span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span>Maximum Withdrawal : <span className="text-green-800 font-bold">No Limits</span></span>
              </div>
            </div>

            <p className="text-[#7A0000] text-xl font-bold italic mt-2">
              रूपया आपका, भरोसा हमारा। 🙏🏼
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="/Rupaya.apk"
            download
            className="golden-button-shine px-8 py-3.5 rounded text-sm md:text-base font-bold uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-transform mt-2 lg:mt-0"
          >
            Download APK
          </motion.a>
        </div>

        {/* Right Side: Exact Image */}
        <div className="flex justify-center lg:justify-end items-center relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[450px] mt-24 lg:mt-0 translate-x-0 lg:translate-x-24 xl:translate-x-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/uiimage.png"
              alt="rupaya Games Cards"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
