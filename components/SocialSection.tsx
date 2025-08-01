'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const socialPosts = [
  {
    id: 1,
    platform: 'Instagram',
    content: 'Behind the scenes at our studio session today. New sounds coming soon!',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2 hours ago'
  },
  {
    id: 2,
    platform: 'Twitter',
    content: 'Just announced: Special acoustic set at @CapitolHillBlockParty. Tickets going fast!',
    image: null,
    date: '1 day ago'
  },
  {
    id: 3,
    platform: 'YouTube',
    content: 'Full performance of "Coastal Echoes" from our Seattle show is now live!',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '3 days ago'
  }
];

export default function SocialSection() {
  return (
    <section className="py-16">
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center neon-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Connect With Us
      </motion.h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { name: 'Instagram', icon: '📷', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
            { name: 'Twitter', icon: '🐦', color: 'bg-gradient-to-r from-blue-400 to-cyan-400' },
            { name: 'YouTube', icon: '▶️', color: 'bg-gradient-to-r from-red-600 to-red-400' }
          ].map((platform, index) => (
            <motion.a
              key={platform.name}
              href="#"
              className={`${platform.color} p-6 rounded-xl flex items-center space-x-4 hover:opacity-90 transition-opacity`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-3xl">{platform.icon}</span>
              <div>
                <h3 className="font-bold">{platform.name}</h3>
                <p className="text-sm opacity-80">Follow for updates</p>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="bg-gray-900 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Latest Posts</h3>
          
          <div className="space-y-6">
            {socialPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-gray-800 rounded-lg p-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-3">
                  <span className="px-2 py-1 bg-gray-700 rounded text-sm mr-3">{post.platform}</span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                
                <p className="mb-4">{post.content}</p>
                
                {post.image && (
                  <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt="Social media post"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}