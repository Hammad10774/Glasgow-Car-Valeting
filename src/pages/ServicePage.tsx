import { useParams } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Reviews } from '../components/Reviews';

// This is a dynamic template that will render different content based on the URL (e.g., /services/ceramic-coating)
export function ServicePage() {
  const { serviceId } = useParams();
  
  // In a real app, you would fetch data for this specific service from a database or a config file
  const serviceName = serviceId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Our Service';

  return (
    <main>
      <section className="pt-32 pb-16 bg-background-dark text-white text-center">
        <h1 className="text-4xl font-bold mb-4">{serviceName} in Glasgow</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Premium {serviceName.toLowerCase()} delivered right to your door. Our Autoglym registered operators ensure a flawless finish.
        </p>
      </section>
      
      {/* We can reuse the Reviews component here to build trust! */}
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
