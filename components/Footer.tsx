'use client';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 neon-text">Echo Reverb</h3>
            <p className="text-gray-400 mb-4">
              Ambient post-rock from the Pacific coast
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube', 'spotify'].map((platform) => (
                <div key={platform} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors">
                  <span className="sr-only">{platform}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'Music', 'Tour', 'Press', 'Discography', 'Merch'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-cyan-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              {['Contact', 'FAQ', 'Shipping', 'Returns', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Seattle, WA</p>
              <p>info@echoreverb.com</p>
              <p>Booking: booking@echoreverb.com</p>
              <p>Press: press@echoreverb.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Echo Reverb. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Designed with passion in the Pacific Northwest
          </p>
        </div>
      </div>
    </footer>
  );
}