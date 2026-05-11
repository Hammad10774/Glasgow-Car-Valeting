import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  articleDate?: string;
  articleType?: boolean;
}

const SITE_NAME = 'Glasgow Car Valeting';
const SITE_URL = 'https://www.glasgowcarvaleting.co.uk';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const PHONE = '0743 574 0502';

export function SEOHead({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  articleDate,
  articleType = false,
}: SEOHeadProps) {
  const fullCanonical = `${SITE_URL}${canonical}`;
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDesc = ogDescription || description;

  return (
    <Helmet>
      {/* Core */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={articleType ? 'article' : 'website'} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDesc} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={OG_IMAGE} />
      {articleDate && <meta property="article:published_time" content={articleDate} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDesc} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Extra signals */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={SITE_NAME} />
      <meta name="geo.region" content="GB-GLG" />
      <meta name="geo.placename" content="Glasgow" />
    </Helmet>
  );
}
