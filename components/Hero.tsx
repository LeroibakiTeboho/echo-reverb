'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80"
        alt="Concert background"
        fill
        className="object-cover opacity-40"
        priority
      />
      
      {/* Animated Visualizer */}
      <div className="audio-visualizer absolute top-10 w-full">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bar" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 neon-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Echo Reverb
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Ambient post-rock from the Pacific coast
        </motion.p>
        
        <motion.button
          className="px-8 py-3 bg-transparent text-lg font-bold neon-border rounded-full hover:bg-opacity-10 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Stream New Album
        </motion.button>
      </div>
    </div>
  );
}