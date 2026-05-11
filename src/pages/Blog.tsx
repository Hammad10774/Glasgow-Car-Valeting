import { Link } from 'react-router-dom';

const articles = [
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
    id: "how-much-does-a-car-valet-cost-glasgow",
    title: "How Much Does a Car Valet Cost in Glasgow? (Honest 2026 Pricing Guide)",
    excerpt: "Most car valet websites in Glasgow hide their prices. We don't. Here's exactly what a professional mobile valet costs, what drives the price, and how to make sure you're getting genuine value.",
    date: "May 9, 2026"
  },
  {
    id: "mobile-valeting-benefits",
    title: "Why Mobile Valeting is Replacing Traditional Hand Car Washes",
    excerpt: "Time is money. See why busy professionals in Glasgow are switching to mobile valeting services.",
    date: "Coming Soon"
  }
];

export function Blog() {
  return (
    <main className="pt-32 pb-24 bg-background-dark min-h-screen">
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
