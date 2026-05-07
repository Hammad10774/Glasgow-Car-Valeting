/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark text-white selection:bg-primary selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
      </main>

      <Footer />
    </div>
  );
}
