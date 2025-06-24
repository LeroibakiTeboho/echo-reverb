'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-80 md:h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Echo Reverb musician"
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-xl"></div>
          <div className="absolute bottom-4 left-4">
            <h3 className="text-xl font-bold">Alex Morgan</h3>
            <p className="text-gray-400">Founder & Lead Guitarist</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 neon-text">Our Story</h2>
          <p className="mb-4">
            Echo Reverb emerged from the misty shores of the Pacific Northwest, blending ambient textures with 
            post-rock intensity. Founded in 2018 by guitarist Alex Morgan, the project began as a solo experiment 
            in soundscapes and evolved into a collective of musicians exploring the boundaries of instrumental music.
          </p>
          <p className="mb-4">
            Our sound is characterized by layered guitars, atmospheric synths, and dynamic rhythms that build from 
            delicate whispers to powerful crescendos. Drawing inspiration from the natural beauty of the coast, 
            our music invites listeners on an immersive journey.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1 bg-gray-800 rounded-full">Ambient</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">Post-Rock</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">Instrumental</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">Shoegaze</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}