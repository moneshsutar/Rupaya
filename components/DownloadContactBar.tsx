'use client';

import { motion } from 'framer-motion';

export default function DownloadContactBar() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 py-8 px-4" style={{ background: '#FFFBF0' }}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full md:w-auto min-w-[260px] flex items-center justify-center gap-3 py-4 px-6 rounded-lg font-black text-lg shadow-md"
        style={{ background: 'linear-gradient(to right, #EAA938, #FFE285)', color: '#000' }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
        </svg>
        DOWNLOAD APK
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full md:w-auto min-w-[260px] flex items-center justify-center gap-3 py-4 px-6 rounded-lg font-black text-lg shadow-md"
        style={{ background: '#25D366', color: '#FFF' }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.745.449 3.393 1.246 4.839L2 22l5.35-1.189A9.974 9.974 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.334c-1.554 0-3.04-.403-4.364-1.16l-.312-.185-3.238.72 .86-3.111-.204-.324C3.96 14.814 3.535 13.437 3.535 12 3.535 7.329 7.329 3.535 12 3.535c4.671 0 8.465 3.794 8.465 8.465S16.671 20.334 12 20.334z" />
        </svg>
        CONTACT US
      </motion.button>
    </div>
  );
}
