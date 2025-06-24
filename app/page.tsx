import Hero from '@/components/Hero';
import MusicSection from '@/components/MusicSection';
import TourDates from '@/components/TourDates';
import PressSlider from '@/components/PressSlider';
import Discography from '@/components/Discography';
import AboutSection from '@/components/AboutSection';
import MerchSection from '@/components/MerchSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <MusicSection />
        <AboutSection />
        <TourDates />
        <PressSlider />
        <Discography />
        <MerchSection />
        <Newsletter />
      </div>
      <Footer />
    </main>
  );
}