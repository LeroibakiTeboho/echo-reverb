'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';


export default function LiveSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  
  return (
    <section id="live" className="py-16">
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center neon-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Live Experience
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative rounded-xl overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-video bg-black relative">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover opacity-90"
              poster="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              muted
              loop
            >
              <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={handlePlay}
                className="w-16 h-16 rounded-full bg-black bg-opacity-50 flex items-center justify-center border-2 border-cyan-400 hover:bg-opacity-70 transition-all"
              >
                <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h3 className="text-xl font-bold">Live at The Paramount</h3>
            <p className="text-gray-400">Seattle, WA | June 15, 2025</p>
          </div>
        </motion.div>
        
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold">Immersive Performances</h3>
          <p>
            Experience Echo Reverb in concert - a multi-sensory journey blending atmospheric soundscapes with 
            mesmerizing visuals. Our live shows are carefully crafted to transport audiences to another dimension.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🎸', title: 'Live Guitar Looping' },
              { icon: '🎨', title: 'Visual Projections' },
              { icon: '🔊', title: 'Spatial Audio' },
              { icon: '💡', title: 'Dynamic Lighting' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-900 rounded-lg">
                <span className="text-2xl">{item.icon}</span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
          <button className="mt-4 px-6 py-3 bg-transparent neon-border rounded-lg hover:bg-opacity-10 transition-all">
            View Full Performance
          </button>
        </motion.div>
      </div>
    </section>
  );
}