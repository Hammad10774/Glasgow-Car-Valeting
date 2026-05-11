import { Hero } from "../components/Hero";
import { SEOHead } from "../components/SEOHead";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Reviews } from "../components/Reviews";
import { Features } from "../components/Features";

export function Home() {
  return (
    <main>
      <SEOHead
        title="Glasgow Car Valeting | Premium Mobile Car Valeting & Detailing Glasgow"
        description="Glasgow's premier mobile car valeting & detailing service. We come to your door across Glasgow, Bearsden, Newton Mearns & beyond. Ceramic coating, machine polishing, full valet & more. Call 0743 574 0502."
        canonical="/"
      />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Features />
    </main>
  );
}
