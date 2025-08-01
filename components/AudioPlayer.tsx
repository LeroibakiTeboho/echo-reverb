'use client';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    
    audio.addEventListener('timeupdate', updateProgress);
    
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, []);
  
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 max-w-md">
      <motion.div 
        className="bg-gray-900 rounded-xl p-4 neon-border"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex items-center">
          <button 
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-cyan-900/30 flex items-center justify-center mr-4 hover:bg-cyan-900/50 transition-colors"
          >
            {isPlaying ? (
              <svg className="w-6 h-6 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <div className="flex-grow">
            <div className="font-bold">Coastal Echoes</div>
            <div className="text-sm text-gray-400">Echo Reverb</div>
          </div>
          
          <div className="text-sm text-gray-400 ml-4">
            3:45
          </div>
        </div>
        
        <div className="mt-3">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-cyan-500"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
        
        <audio ref={audioRef} src="https://sample-videos.com/audio/mp3/crowd-cheering.mp3" />
      </motion.div>
    </div>
  );
}