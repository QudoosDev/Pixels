import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductValue from '@/components/ProductValue';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <ProductValue />
      <Testimonials />
      <Pricing />
      <Contact />
      <CTABanner />
      <Footer />
    </main>
  );
}
