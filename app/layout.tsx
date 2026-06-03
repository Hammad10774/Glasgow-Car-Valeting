import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.glasgowcarvaleting.co.uk'),
  title: 'Glasgow Car Valeting | Premium Mobile Car Valeting & Detailing Glasgow',
  description: "Glasgow's premier mobile car valeting & detailing service. We come to your door across Glasgow, Bearsden, Newton Mearns & beyond. Ceramic coating, machine polishing, full valet & more. Call 0743 574 0502.",
  openGraph: {
    siteName: 'Glasgow Car Valeting',
    images: ['/hero-bg.jpg'],
  },
  other: {
    'geo.region': 'GB-GLG',
    'geo.placename': 'Glasgow',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Glasgow Car Valeting',
              url: 'https://www.glasgowcarvaleting.co.uk/',
              logo: 'https://www.glasgowcarvaleting.co.uk/hero-bg.jpg',
              image: 'https://www.glasgowcarvaleting.co.uk/hero-bg.jpg',
              description: "Glasgow's premier mobile car valeting & detailing service.",
              telephone: '+447435740502',
              email: 'info@glasgowcarvaleting.co.uk',
              priceRange: '££',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Glasgow',
                addressRegion: 'Scotland',
                addressCountry: 'GB',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '55.8642',
                longitude: '-4.2518',
              },
              areaServed: [
                { '@type': 'City', name: 'Glasgow' },
                { '@type': 'City', name: 'Bearsden' },
                { '@type': 'City', name: 'Newton Mearns' },
                { '@type': 'City', name: 'Milngavie' },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '06:00',
                  closes: '21:00',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background-dark text-white flex flex-col">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
