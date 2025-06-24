'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { albums } from '@/data/albums';

export default function Discography() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section id="discography" className="py-16">
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center neon-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Discography
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albums.map((album, index) => (
          <motion.div
            key={index}
            className="aspect-square relative cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
            whileHover={{ y: -10 }}
          >
            <motion.div
              className="absolute inset-0 bg-gray-900 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center"
              animate={{ 
                rotateY: flippedIndex === index ? 180 : 0,
                opacity: flippedIndex === index ? 0 : 1 
              }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={album.imageUrl}
                alt={album.title}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold mt-4">{album.title}</h3>
              <p className="text-gray-400">{album.year}</p>
            </motion.div>
            
            <motion.div
              className="absolute inset-0 bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center"
              animate={{ 
                rotateY: flippedIndex === index ? 0 : 180,
                opacity: flippedIndex === index ? 1 : 0 
              }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4">{album.title}</h3>
              <ul className="text-center">
                {album.tracks.map((track, idx) => (
                  <li key={idx} className="mb-2 text-gray-300">{track}</li>
                ))}
              </ul>
              <button className="mt-4 px-4 py-2 bg-transparent neon-border rounded-full text-sm">
                Stream
              </button>
            </motion.div>
            
            {/* Glow effect when flipped */}
            {flippedIndex === index && (
              <motion.div
                className="absolute inset-0 rounded-xl"
                initial={{ opacity: 0, boxShadow: '0 0 0px rgba(0, 255, 255, 0)' }}
                animate={{ 
                  opacity: 1,
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)'
                }}
                transition={{ 
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}