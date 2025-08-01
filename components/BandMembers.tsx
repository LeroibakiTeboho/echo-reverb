'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const members = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Guitar, Synths',
    bio: 'Founder and primary composer. Alex crafts the atmospheric textures that define Echo Reverb\'s sound.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Jamie Chen',
    role: 'Drums, Percussion',
    bio: 'Rhythmic architect who builds the dynamic foundations. Jamie\'s precision and feel drive the band\'s intensity.',
    image: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Riley Thompson',
    role: 'Bass, Electronics',
    bio: 'The low-end specialist who bridges rhythm and melody. Riley adds depth and experimental elements to the mix.',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Taylor Reed',
    role: 'Visuals, Production',
    bio: 'Creates the immersive visual experiences. Taylor designs the light shows and projections that accompany performances.',
    image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function BandMembers() {
  const [activeMember, setActiveMember] = useState<number | null>(null);
  
  return (
    <section id="band" className="py-16">
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center neon-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Band
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            className="relative bg-gray-900 rounded-xl overflow-hidden h-96"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setActiveMember(member.id)}
            onHoverEnd={() => setActiveMember(null)}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{ 
                backgroundImage: `url(${member.image})`,
                transform: activeMember === member.id ? 'scale(1.05)' : 'scale(1)'
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-cyan-300">{member.role}</p>
              
              <motion.div
                className="mt-3 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeMember === member.id ? 'auto' : 0,
                  opacity: activeMember === member.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-gray-300">{member.bio}</p>
              </motion.div>
            </div>
            
            {/* Social links */}
            <div className="absolute top-4 right-4 flex space-x-2">
              {['twitter', 'instagram'].map((platform) => (
                <a 
                  key={platform}
                  href="#"
                  className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}