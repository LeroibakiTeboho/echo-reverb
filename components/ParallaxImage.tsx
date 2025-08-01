'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ParallaxImage({ 
  src, 
  alt, 
  className = "",
  speed = 0.3 
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ y }} className={className}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}