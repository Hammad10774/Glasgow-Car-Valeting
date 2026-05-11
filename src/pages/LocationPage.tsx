import { useParams } from 'react-router-dom';
import { Services } from '../components/Services';
import { Reviews } from '../components/Reviews';
import { SEOHead } from '../components/SEOHead';

const locationMeta: Record<string, { title: string; description: string }> = {
  'west-end-car-valeting': {
    title: 'Car Valeting West End Glasgow | Mobile Service at Your Door | Glasgow Car Valeting',
    description: 'Premium mobile car valeting in the West End of Glasgow. Serving Hyndland, Dowanhill, Hillhead & Partick. We come to you — fully insured. Call 0743 574 0502.',
  },
  'bearsden-car-valeting': {
    title: 'Car Valeting Bearsden | Premium Mobile Detailing | Glasgow Car Valeting',
    description: 'Professional mobile car valeting & detailing in Bearsden. We come to your home or workplace. Ceramic coating, machine polishing, full valet. Call 0743 574 0502.',
  },
  'newton-mearns-car-valeting': {
    title: 'Car Valeting Newton Mearns | Mobile Detailing Service | Glasgow Car Valeting',
    description: 'Premium mobile car valeting in Newton Mearns. Expert detailing delivered to your door — full valet, ceramic coating & more. Fully insured. Call 0743 574 0502.',
  },
  'southside-car-valeting': {
    title: 'Mobile Car Valeting Southside Glasgow | Glasgow Car Valeting',
    description: 'Professional mobile car valeting on the Southside of Glasgow. Serving Shawlands, Pollokshields & surrounding areas. We come to you. Call 0743 574 0502.',
  },
  'milngavie-car-valeting': {
    title: 'Car Detailing Milngavie | Premium Mobile Valeting | Glasgow Car Valeting',
    description: 'Expert mobile car detailing & valeting in Milngavie. Ceramic coating, machine polishing, full valet — delivered to your door. Fully insured. Call 0743 574 0502.',
  },
};

export function LocationPage() {
  const { locationId } = useParams<{ locationId: string }>();
  const meta = locationId ? locationMeta[locationId] : null;
  const rawLocation = locationId?.replace('-car-valeting', '') || 'Glasgow';
  const locationName = rawLocation.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const title = meta?.title || `Car Valeting ${locationName} | Mobile Service | Glasgow Car Valeting`;
  const description = meta?.description || `Premium mobile car valeting & detailing in ${locationName}. We come to your door — fully insured, professional-grade. Call 0743 574 0502.`;

  return (
    <main>
      <SEOHead
        title={title}
        description={description}
        canonical={`/areas/${locationId}`}
      />
      <section className="pt-32 pb-16 bg-background-dark text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Mobile Car Valeting in {locationName}</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          We bring Glasgow's premier car valeting and detailing directly to you in {locationName}.
        </p>
      </section>
      <Services />
      <Reviews />
    </main>
  );
}
