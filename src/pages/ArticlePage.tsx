import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function ArticlePage() {
  return (
    <main className="pt-32 pb-24 bg-background-dark min-h-screen text-white">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Article Not Found | Glasgow Car Valeting</title>
      </Helmet>
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <span className="text-primary text-xs uppercase tracking-widest mb-6 block">Journal</span>
        <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
        <p className="text-gray-400 mb-8 text-lg">
          This article doesn't exist. Browse all our guides below.
        </p>
        <Link
          to="/journal"
          className="bg-primary hover:bg-white text-black px-8 py-4 font-bold tracking-widest text-xs uppercase inline-block transition-colors"
        >
          Browse All Articles
        </Link>
      </div>
    </main>
  );
}
