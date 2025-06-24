'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { pressQuotes } from '@/data/pressQuotes';

export default function PressSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section id="press" className="py-16">
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center neon-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Press
      </motion.h2>
      
      <div className="overflow-hidden">
        <motion.div 
          ref={sliderRef}
          className="flex"
          drag="x"
          dragConstraints={{ right: 0, left: -1200 }}
          dragElastic={0.1}
        >
          {pressQuotes.map((quote, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 bg-gray-900 p-6 rounded-xl mx-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="italic mb-4">"{quote.text}"</p>
              <div className="flex items-center">
                <div className="bg-gray-700 w-10 h-10 rounded-full mr-3"></div>
                <div>
                  <p className="font-bold">{quote.source}</p>
                  <p className="text-sm text-gray-500">{quote.publication}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}