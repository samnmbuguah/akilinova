import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  );
}
