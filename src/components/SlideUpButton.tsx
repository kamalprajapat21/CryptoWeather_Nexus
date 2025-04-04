'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SlideUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg"
      >
        {isVisible ? 'Close' : 'Open'}
      </button>

      {/* Slide-Up Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-64"
          >
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Slide-Up Panel</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">This panel slides up when you click the button.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
