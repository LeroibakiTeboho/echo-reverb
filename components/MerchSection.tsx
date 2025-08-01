'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const merchItems = [
  {
    id: 1,
    name: 'Coastal Echoes T-Shirt',
    price: 455.69,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Limited Edition Vinyl',
    price: 5460.82,
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Tour Hoodie',
    price: 820.24,
    imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Signed Poster',
    price: 364.55,
    imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function MerchSection() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  return (
    <section id="merch" className="py-16">
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center neon-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Official Merch
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {merchItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-gray-900 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            onHoverStart={() => setHoveredItem(item.id)}
            onHoverEnd={() => setHoveredItem(null)}
          >
            <div className="relative h-60">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{ 
                  backgroundImage: `url(${item.imageUrl})`,
                  transform: hoveredItem === item.id ? 'scale(1.05)' : 'scale(1)'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              {hoveredItem === item.id && (
                <motion.div 
                  className="absolute bottom-4 right-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <button className="px-4 py-2 bg-black bg-opacity-70 rounded-full neon-border">
                    Add to Cart
                  </button>
                </motion.div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-cyan-300">R{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}