"use client";
import { motion } from "framer-motion";
import { tourDates } from "@/data/tourDates";

export default function TourDates() {
  return (
    <section id="tour" className="py-16">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center neon-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Tour Dates
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        {tourDates.map((date, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-800 py-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ backgroundColor: "rgba(0, 255, 255, 0.05)" }}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">{date.date}</h3>
                <p className="text-gray-400">{date.venue}</p>
                <p className="text-gray-500">{date.location}</p>
              </div>
              <button className="px-4 py-2 bg-transparent neon-border rounded-full text-sm">
                Tickets
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
