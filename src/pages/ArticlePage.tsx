import { useParams, Link } from 'react-router-dom';

export function ArticlePage() {
  const { articleId } = useParams();
  
  // Format the ID back to a readable title for the template
  const title = articleId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="pt-32 pb-24 bg-background-dark min-h-screen text-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <Link to="/journal" className="text-primary text-xs uppercase tracking-widest mb-8 inline-block hover:text-white transition-colors">
          ← Back to Journal
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{title}</h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 leading-relaxed mb-6">
            This is a dynamically generated SEO article for <strong>{title}</strong>. In a full production environment, this content would be pulled from a CMS like Sanity or directly from markdown files.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            By publishing high-quality content targeting specific search queries that your customers are looking for, you build immense domain authority. This signals to Google that you are an expert in your field, not just a service provider.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-l-4 border-primary pl-4">The Solution</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            The ultimate solution is our premium mobile valeting service. We use high-end Autoglym products and deliver the service directly to your driveway anywhere in Glasgow.
          </p>
        </div>
        
        <div className="mt-16 p-8 bg-[#111] border border-[var(--color-border-dark)] rounded-lg text-center">
          <h3 className="text-2xl font-heading mb-4 text-white">Ready for a Premium Clean?</h3>
          <p className="text-gray-400 mb-6">Book your mobile valet today and experience the difference.</p>
          <a href="/#book" className="bg-primary hover:bg-white text-black px-8 py-4 font-bold tracking-widest text-xs uppercase inline-block transition-colors">
            Book Now
          </a>
        </div>
      </div>
    </main>
  );
}
