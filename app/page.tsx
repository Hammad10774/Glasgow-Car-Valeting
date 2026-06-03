import { Hero } from '../src/components/Hero';
import { About } from '../src/components/About';
import { Services } from '../src/components/Services';
import { Reviews } from '../src/components/Reviews';
import { Features } from '../src/components/Features';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Features />
    </main>
  );
}
