import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Reviews } from "../components/Reviews";
import { Features } from "../components/Features";

export function Home() {
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
