import { useParams } from 'react-router-dom';
import { Services } from '../components/Services';
import { Reviews } from '../components/Reviews';

// This is a dynamic template that will render different content based on the URL (e.g., /areas/west-end-car-valeting)
export function LocationPage() {
  const { locationId } = useParams();
  
  const rawLocation = locationId?.replace('-car-valeting', '') || 'Glasgow';
  const locationName = rawLocation.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main>
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
