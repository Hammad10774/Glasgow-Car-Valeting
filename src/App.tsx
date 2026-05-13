/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ServicePage } from "./pages/ServicePage";
import { LocationPage } from "./pages/LocationPage";
import { Blog } from "./pages/Blog";
import { ArticlePage } from "./pages/ArticlePage";
import { GlasgowWeatherCarPaint } from "./articles/GlasgowWeatherCarPaint";
import { CeramicCoatingGlasgow } from "./articles/CeramicCoatingGlasgow";
import { HowMuchCarValetCostGlasgow } from "./articles/HowMuchCarValetCostGlasgow";
import { ValetingVsDetailing } from "./articles/ValetingVsDetailing";
import { MachinePolishingGlasgow } from "./articles/MachinePolishingGlasgow";
import { PaintCorrectionGlasgow } from "./articles/PaintCorrectionGlasgow";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-dark text-white selection:bg-primary selection:text-white flex flex-col">
        <Header />
        
        <div className="flex-grow">
          <Routes>
            {/* Main Landing Page */}
            <Route path="/" element={<Home />} />
            
            {/* Dynamic SEO Service Pages */}
            <Route path="/services/:serviceId" element={<ServicePage />} />
            
            {/* Dynamic SEO Location Pages */}
            <Route path="/areas/:locationId" element={<LocationPage />} />
            
            {/* Content Marketing & Articles */}
            <Route path="/journal" element={<Blog />} />
            {/* Named article routes — real content */}
            <Route path="/journal/glasgow-weather-destroys-car-paint" element={<GlasgowWeatherCarPaint />} />
            <Route path="/journal/ceramic-coating-glasgow-is-it-worth-it" element={<CeramicCoatingGlasgow />} />
            <Route path="/journal/how-much-does-a-car-valet-cost-glasgow" element={<HowMuchCarValetCostGlasgow />} />
            <Route path="/journal/valeting-vs-detailing-glasgow" element={<ValetingVsDetailing />} />
            <Route path="/journal/machine-polishing-glasgow" element={<MachinePolishingGlasgow />} />
            <Route path="/journal/paint-correction-glasgow" element={<PaintCorrectionGlasgow />} />
            {/* Generic fallback for future articles */}
            <Route path="/journal/:articleId" element={<ArticlePage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
