import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GlasgowWeatherCarPaint } from '../../../src/articles/GlasgowWeatherCarPaint';
import { CeramicCoatingGlasgow } from '../../../src/articles/CeramicCoatingGlasgow';
import { HowMuchCarValetCostGlasgow } from '../../../src/articles/HowMuchCarValetCostGlasgow';
import { ValetingVsDetailing } from '../../../src/articles/ValetingVsDetailing';
import { MachinePolishingGlasgow } from '../../../src/articles/MachinePolishingGlasgow';
import { PaintCorrectionGlasgow } from '../../../src/articles/PaintCorrectionGlasgow';
import { HowLongDoesCeramicCoatingLast } from '../../../src/articles/HowLongDoesCeramicCoatingLast';
import { MachinePolishingVsHandPolishing } from '../../../src/articles/MachinePolishingVsHandPolishing';
import { InteriorValetVsMiniValet } from '../../../src/articles/InteriorValetVsMiniValet';
import { SportsCarsDetailingGlasgow } from '../../../src/articles/SportsCarsDetailingGlasgow';
import { BMWM3PaintCorrectionBearsden } from '../../../src/articles/BMWM3PaintCorrectionBearsden';
import { CarCleaningMistakesGlasgow } from '../../../src/articles/CarCleaningMistakesGlasgow';

const articleRegistry: Record<
  string,
  { component: React.ComponentType; title: string; description: string; date: string }
> = {
  'glasgow-weather-destroys-car-paint': {
    component: GlasgowWeatherCarPaint,
    title: "How Glasgow's Weather Destroys Your Car Paint: And What to Do About It | Glasgow Car Valeting",
    description: 'Glasgow gets 170+ days of rain a year. Road salt, tree sap, acid rain and brake dust are silently destroying your paintwork. Here is exactly what is happening and how to stop it.',
    date: '2026-05-07',
  },
  'ceramic-coating-glasgow-is-it-worth-it': {
    component: CeramicCoatingGlasgow,
    title: 'Ceramic Coating Glasgow: Is It Worth It? | Glasgow Car Valeting',
    description: 'Thinking about ceramic coating in Glasgow? Here is the honest truth about what it costs, what it does, and whether it is worth every penny for your car.',
    date: '2026-05-08',
  },
  'how-much-does-a-car-valet-cost-glasgow': {
    component: HowMuchCarValetCostGlasgow,
    title: 'How Much Does a Car Valet Cost in Glasgow? (Honest 2026 Pricing Guide) | Glasgow Car Valeting',
    description: 'Most car valet websites in Glasgow hide their prices. We do not. Full 2026 pricing guide covering mini valet, full valet, detailing and ceramic coating prices by vehicle size.',
    date: '2026-05-09',
  },
  'valeting-vs-detailing-glasgow': {
    component: ValetingVsDetailing,
    title: "What's the Difference Between Valeting and Detailing? | Glasgow Car Valeting",
    description: 'Valeting cleans your car. Detailing restores it. Here is the honest breakdown of what each service actually involves, what it costs, and which one your car needs right now.',
    date: '2026-05-10',
  },
  'machine-polishing-glasgow': {
    component: MachinePolishingGlasgow,
    title: 'Machine Polishing Glasgow: What It Is, What It Fixes, and Whether Your Car Needs It | Glasgow Car Valeting',
    description: 'Your car paint looks dull, swirled, or hazy. Machine polishing is how you fix it. Here is exactly what the process involves, what it costs in Glasgow, and what results to expect.',
    date: '2026-05-11',
  },
  'paint-correction-glasgow': {
    component: PaintCorrectionGlasgow,
    title: 'Paint Correction Glasgow: What It Is, What It Costs, and When Your Car Needs It | Glasgow Car Valeting',
    description: 'Paint correction removes deep scratches, heavy swirl damage, and oxidation from your car paintwork. Full guide to the process, stages, pricing in Glasgow, and what results to expect.',
    date: '2026-05-13',
  },
  'how-long-does-ceramic-coating-last': {
    component: HowLongDoesCeramicCoatingLast,
    title: 'How Long Does Ceramic Coating Last? (Honest Answer for Glasgow Cars) | Glasgow Car Valeting',
    description: 'Ceramic coating lasts 2 to 5 years on most cars. But that number depends on what was applied, how it was prepped, and how the car is maintained. Here is the full picture.',
    date: '2026-05-14',
  },
  'machine-polishing-vs-hand-polishing': {
    component: MachinePolishingVsHandPolishing,
    title: 'Machine Polishing vs Hand Polishing: Which One Actually Works? | Glasgow Car Valeting',
    description: 'Machine polishing removes swirl marks and scratches. Hand polishing cannot. Here is the honest comparison every Glasgow car owner needs to read before spending money on a polish.',
    date: '2026-05-21',
  },
  'interior-valet-vs-mini-valet-glasgow': {
    component: InteriorValetVsMiniValet,
    title: 'Full Interior Valet vs Mini Valet: Which Does Your Car Actually Need? | Glasgow Car Valeting',
    description: 'A mini valet is a tidy-up. A full interior valet is a deep clean. Here is the honest difference, what each includes, and how to decide which your car needs in Glasgow.',
    date: '2026-05-24',
  },
  'sports-car-detailing-glasgow': {
    component: SportsCarsDetailingGlasgow,
    title: 'Why Sports Car Owners in Glasgow Choose Mobile Detailing | Glasgow Car Valeting',
    description: 'Sports car owners in Glasgow have specific reasons for choosing mobile detailing over a studio. Paint quality, security, low mileage cars and road conditions all factor in.',
    date: '2026-05-28',
  },
  'bmw-m3-paint-correction-bearsden': {
    component: BMWM3PaintCorrectionBearsden,
    title: 'BMW M3 Paint Correction in Bearsden: Before and After Case Study | Glasgow Car Valeting',
    description: 'A Bearsden BMW M3 Competition in Sapphire Black came to us with heavy swirl marks and two years of wash damage. Here is how the paint correction and ceramic coating transformed it.',
    date: '2026-06-03',
  },
  'car-cleaning-mistakes-glasgow': {
    component: CarCleaningMistakesGlasgow,
    title: 'The 5 Biggest Car Cleaning Mistakes Glasgow Drivers Make | Glasgow Car Valeting',
    description: 'Most paint damage on cars in Glasgow is caused by the owner cleaning their own car. These five mistakes cause swirl marks, scratches, water spot etching, and stripped protection.',
    date: '2026-06-07',
  },
};

export async function generateStaticParams() {
  return Object.keys(articleRegistry).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articleRegistry[slug];
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/journal/${slug}` },
    openGraph: {
      type: 'article',
      publishedTime: article.date,
      images: ['/hero-bg.jpg'],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleRegistry[slug];
  if (!article) notFound();
  const Component = article.component;
  return <Component />;
}
