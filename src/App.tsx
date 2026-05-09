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
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
