'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    console.log('Subscribed with:', email);
    setSubmitted(true);
    setEmail('');
    
    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };
  
  return (
    <section className="py-16">
      <motion.div 
        className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 p-8 rounded-2xl neon-border"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 neon-text">Join the Echo</h2>
          <p className="mb-6 text-gray-300">
            Subscribe to our newsletter for exclusive content, early access to tickets, 
            and behind-the-scenes updates.
          </p>
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-4"
            >
              <p className="text-green-400 font-medium">
                Thanks for subscribing! Check your email for confirmation.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-transparent neon-border rounded-lg hover:bg-opacity-10 transition-all"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}