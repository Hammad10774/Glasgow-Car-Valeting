import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

const articles = [
  {
    id: "how-long-does-ceramic-coating-last",
    title: "How Long Does Ceramic Coating Last?",
    excerpt: "Professional ceramic coatings last 2–5 years. Consumer spray-ons last 3–6 months. The gap between those outcomes is determined by the product, the paint prep, and how the car is maintained. Here's the full breakdown.",
    date: "May 14, 2026"
  },
  {
    id: "paint-correction-glasgow",
    title: "Paint Correction Glasgow: What It Is, What It Costs, and When Your Car Needs It",
    excerpt: "Paint correction removes deep scratches, heavy swirl marks, and years of accumulated paint damage permanently. Here's the full guide: what the process involves, which stage your car needs, and what it costs in Glasgow.",
    date: "May 13, 2026"
  },
  {
    id: "glasgow-weather-destroys-car-paint",
    title: "How Glasgow's Weather Destroys Your Car Paint — And What to Do About It",
    excerpt: "Glasgow gets 170+ days of rain a year. Road salt, acid rain, tree sap, and brake dust are silently destroying your car's paint. Here's exactly what's happening and how to stop it.",
    date: "May 7, 2026"
  },
  {
    id: "ceramic-coating-glasgow-is-it-worth-it",
    title: "Ceramic Coating Glasgow — Is It Worth It?",
    excerpt: "Is ceramic coating worth the investment in Glasgow? We break down exactly what it does, what it costs, how long it lasts, and give you our honest professional answer — without the sales pitch.",
    date: "May 8, 2026"
  },
  {
    id: "valeting-vs-detailing-glasgow",
    title: "What's the Difference Between Valeting and Detailing?",
    excerpt: "Most people use the words interchangeably — they're not the same thing. One cleans your car. The other restores it. Here's exactly what separates them and which one your car actually needs.",
    date: "May 10, 2026"
  },
  {
    id: "how-much-does-a-car-valet-cost-glasgow",
    title: "How Much Does a Car Valet Cost in Glasgow? (Honest 2026 Pricing Guide)",
    excerpt: "Most car valet websites in Glasgow hide their prices. We don't. Here's exactly what a professional mobile valet costs, what drives the price, and how to make sure you're getting genuine value.",
    date: "May 9, 2026"
  },
  {
    id: "machine-polishing-glasgow",
    title: "Machine Polishing Glasgow: What It Is, What It Fixes, and Whether Your Car Needs It",
    excerpt: "Your paint is clean but flat. Swirl marks catch the light at every angle. No amount of washing fixes that. Machine polishing does. Here's exactly what the process involves, what it costs, and what results to expect.",
    date: "May 11, 2026"
  }
];

export function Blog() {
  return (
    <main className="pt-32 pb-24 bg-background-dark min-h-screen">
      <SEOHead
        title="Auto Care Journal | Car Valeting Tips & Guides | Glasgow Car Valeting"
        description="Expert car care advice, detailing guides, ceramic coating tips and honest service breakdowns from Glasgow's premier mobile valeting specialists."
        canonical="/journal"
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-5xl font-heading text-white mb-4">Auto Care <span className="text-primary italic">Journal</span></h1>
        <p className="text-gray-400 mb-16 text-lg">Expert advice, case studies, and insights from Glasgow's premier detailing specialists.</p>
        
        <div className="space-y-12">
          {articles.map((article) => (
            <article key={article.id} className="border-b border-[var(--color-border-dark)] pb-12 group">
              <span className="text-primary text-xs uppercase tracking-widest mb-3 block">{article.date}</span>
              <Link to={`/journal/${article.id}`}>
                <h2 className="text-3xl text-white font-bold mb-4 group-hover:text-primary transition-colors">{article.title}</h2>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">{article.excerpt}</p>
              <Link to={`/journal/${article.id}`} className="text-white text-sm tracking-widest uppercase border-b border-white pb-1 group-hover:border-primary transition-colors">
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
