'use client'
import { motion } from 'framer-motion';

export default function MusicSection() {
  return (
    <section id="music" className="py-16">
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center neon-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Listen Now
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div 
          className="bg-gray-900 p-6 rounded-xl"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4">SoundCloud</h3>
          <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">SoundCloud Player</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gray-900 p-6 rounded-xl"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4">Spotify</h3>
          <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Spotify Player</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}