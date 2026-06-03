import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Auto Care Journal | Car Valeting Tips & Guides | Glasgow Car Valeting',
  description: 'Expert car care advice, detailing guides, ceramic coating tips and honest service breakdowns from Glasgow\'s premier mobile valeting specialists.',
  alternates: { canonical: '/journal' },
};

const articles = [
  {
    id: 'bmw-m3-paint-correction-bearsden',
    title: 'BMW M3 Paint Correction in Bearsden: Before and After Case Study',
    excerpt: 'A Sapphire Black M3 Competition came to us with two years of automated car wash damage. Heavy swirls, bird drop etching, water spots. Here is the full correction and ceramic coating process.',
    date: 'June 3, 2026',
  },
  {
    id: 'sports-car-detailing-glasgow',
    title: 'Why Sports Car Owners in Glasgow Choose Mobile Detailing',
    excerpt: 'Owners of Porsches, BMWs and Ferraris choose mobile detailing for paint quality, security and practicality. Here is why it is the better option for any sports car in Glasgow.',
    date: 'May 28, 2026',
  },
  {
    id: 'interior-valet-vs-mini-valet-glasgow',
    title: 'Full Interior Valet vs Mini Valet: Which Does Your Car Actually Need?',
    excerpt: 'A mini valet is a tidy-up. A full interior valet removes embedded dirt, bacteria and odours from the fabric itself. Here is the honest difference and how to choose.',
    date: 'May 24, 2026',
  },
  {
    id: 'machine-polishing-vs-hand-polishing',
    title: 'Machine Polishing vs Hand Polishing: Which One Actually Works?',
    excerpt: 'Machine polishing removes swirl marks permanently. Hand polishing cannot. Here is the honest comparison every Glasgow car owner needs before spending money on a polish.',
    date: 'May 21, 2026',
  },
  {
    id: 'how-long-does-ceramic-coating-last',
    title: 'How Long Does Ceramic Coating Last?',
    excerpt: 'Professional ceramic coatings last 2 to 5 years. Consumer spray-ons last 3 to 6 months. The gap between those outcomes is determined by the product, the paint prep, and how the car is maintained.',
    date: 'May 14, 2026',
  },
  {
    id: 'paint-correction-glasgow',
    title: 'Paint Correction Glasgow: What It Is, What It Costs, and When Your Car Needs It',
    excerpt: 'Paint correction removes deep scratches, heavy swirl marks, and years of accumulated paint damage permanently. Here is the full guide: what the process involves, which stage your car needs, and what it costs in Glasgow.',
    date: 'May 13, 2026',
  },
  {
    id: 'machine-polishing-glasgow',
    title: 'Machine Polishing Glasgow: What It Is, What It Fixes, and Whether Your Car Needs It',
    excerpt: 'Your paint is clean but flat. Swirl marks catch the light at every angle. No amount of washing fixes that. Machine polishing does. Here is exactly what the process involves, what it costs, and what results to expect.',
    date: 'May 11, 2026',
  },
  {
    id: 'how-much-does-a-car-valet-cost-glasgow',
    title: 'How Much Does a Car Valet Cost in Glasgow? (Honest 2026 Pricing Guide)',
    excerpt: 'Most car valet websites in Glasgow hide their prices. We do not. Here is exactly what a professional mobile valet costs, what drives the price, and how to make sure you are getting genuine value.',
    date: 'May 9, 2026',
  },
  {
    id: 'valeting-vs-detailing-glasgow',
    title: "What's the Difference Between Valeting and Detailing?",
    excerpt: 'Most people use the words interchangeably. They are not the same thing. One cleans your car. The other restores it. Here is exactly what separates them and which one your car actually needs.',
    date: 'May 10, 2026',
  },
  {
    id: 'ceramic-coating-glasgow-is-it-worth-it',
    title: 'Ceramic Coating Glasgow: Is It Worth It?',
    excerpt: 'Is ceramic coating worth the investment in Glasgow? We break down exactly what it does, what it costs, how long it lasts, and give you our honest professional answer without the sales pitch.',
    date: 'May 8, 2026',
  },
  {
    id: 'glasgow-weather-destroys-car-paint',
    title: "How Glasgow's Weather Destroys Your Car Paint: And What to Do About It",
    excerpt: 'Glasgow gets 170+ days of rain a year. Road salt, acid rain, tree sap, and brake dust are silently destroying your car paint. Here is exactly what is happening and how to stop it.',
    date: 'May 7, 2026',
  },
];

export default function JournalPage() {
  return (
    <main className="pt-32 pb-24 bg-background-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-5xl font-heading text-white mb-4">
          Auto Care <span className="text-primary italic">Journal</span>
        </h1>
        <p className="text-gray-400 mb-16 text-lg">
          Expert advice, case studies, and insights from Glasgow's premier detailing specialists.
        </p>

        <div className="space-y-12">
          {articles.map((article) => (
            <article key={article.id} className="border-b border-[var(--color-border-dark)] pb-12 group">
              <span className="text-primary text-xs uppercase tracking-widest mb-3 block">{article.date}</span>
              <Link href={`/journal/${article.id}`}>
                <h2 className="text-3xl text-white font-bold mb-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">{article.excerpt}</p>
              <Link
                href={`/journal/${article.id}`}
                className="text-white text-sm tracking-widest uppercase border-b border-white pb-1 hover:border-primary transition-colors"
              >
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
