import { useParams } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Reviews } from '../components/Reviews';
import { SEOHead } from '../components/SEOHead';

const serviceMeta: Record<string, { title: string; description: string }> = {
  'ceramic-coating': {
    title: 'Ceramic Coating Glasgow | Professional Mobile Application | Glasgow Car Valeting',
    description: 'Professional ceramic coating in Glasgow from £250. 9H hardness, 2–5 year protection. We come to your door — fully mobile, fully insured. Call 0743 574 0502 for a free quote.',
  },
  'machine-polishing': {
    title: 'Machine Polishing Glasgow | Swirl & Scratch Removal | Glasgow Car Valeting',
    description: 'Expert machine polishing in Glasgow. Remove swirl marks, light scratches and oxidation and restore your paintwork to a flawless finish. Mobile service. Call 0743 574 0502.',
  },
  'paint-correction': {
    title: 'Paint Correction Glasgow | Restore Your Paintwork | Glasgow Car Valeting',
    description: 'Professional paint correction in Glasgow. Multi-stage correction that brings dull, scratched paintwork back to showroom condition. Fully mobile. Call 0743 574 0502.',
  },
  'full-valet': {
    title: 'Full Valet Glasgow | Complete Interior & Exterior Clean | Glasgow Car Valeting',
    description: 'Full car valet in Glasgow from £100. Deep clean inside and out — seats shampooed, paintwork decontaminated, hand wax applied. We come to you. Call 0743 574 0502.',
  },
  'interior-valet': {
    title: 'Interior Car Valet Glasgow | Deep Clean & Shampoo | Glasgow Car Valeting',
    description: 'Professional interior car valet in Glasgow. Seats shampooed, carpets extracted, dashboard detailed. Fully mobile — we come to your door. Call 0743 574 0502.',
  },
};

export function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const meta = serviceId ? serviceMeta[serviceId] : null;
  const serviceName = serviceId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Our Service';

  const title = meta?.title || `${serviceName} Glasgow | Glasgow Car Valeting`;
  const description = meta?.description || `Premium ${serviceName.toLowerCase()} in Glasgow. Fully mobile — we come to your door. Fully insured. Call 0743 574 0502.`;

  return (
    <main>
      <SEOHead
        title={title}
        description={description}
        canonical={`/services/${serviceId}`}
      />
      <section className="pt-32 pb-16 bg-background-dark text-white text-center">
        <h1 className="text-4xl font-bold mb-4">{serviceName} in Glasgow</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Premium {serviceName.toLowerCase()} delivered right to your door. Our Autoglym registered operators ensure a flawless finish.
        </p>
      </section>
      <Reviews />
      <section className="py-16 px-4 max-w-4xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-6">Why choose our {serviceName} service?</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-300 text-lg">
          <li>Autoglym Registered & Fully Insured</li>
          <li>We come to you - fully mobile service</li>
          <li>Eco-friendly products ensuring maximum protection</li>
          <li>Competitive pricing for premium quality</li>
        </ul>
      </section>
    </main>
  );
}
