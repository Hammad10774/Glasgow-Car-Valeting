import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

export function InteriorValetVsMiniValet() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in a full interior valet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A full interior valet includes a deep vacuum of all surfaces including under seats and in boot compartments, dashboard and console clean, door card clean, interior glass clean, hot water extraction shampoo of all fabric seats and carpets, leather clean and condition on leather interiors, fabric guard spray, and a fresh fragrance treatment. It is a thorough clean designed to remove embedded dirt, bacteria and odours rather than just surface grime.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a mini valet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A mini valet is a light service covering a quick exterior wash, a vacuum of the interior, and a wipe of the main dashboard surfaces. It is a maintenance clean designed for cars that are already in reasonable condition and need a refresh rather than a deep clean. It does not include seat shampooing, carpet extraction, door card cleaning or any form of paint decontamination.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I get a full interior valet in Glasgow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For a typical Glasgow driver using their car daily, a full interior valet once or twice a year is enough to maintain a genuinely clean cabin. Many drivers opt for one in spring to clear the winter accumulation of salt, moisture and grime, and one in autumn before the car is used extensively through the wet winter months. In between, a mini valet or a self-service vacuum is enough to keep the interior tidy.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does an interior valet cost in Glasgow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A full interior valet starts from £60 for small cars and ranges to £110 or more for large SUVs. A mini valet is typically £25 to £40. The full interior valet costs more because it takes significantly longer, a proper hot water extraction of seats and carpets alone takes 60 to 90 minutes, not including drying time.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a full interior valet remove pet hair?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Pet hair removal is one of the most common requests we receive from Glasgow dog owners, and it requires a full interior valet rather than a mini valet. We use specialist rubber pet hair tools to lift embedded hair from seat fabric before using hot water extraction to complete the clean. A mini valet vacuum will not remove hair embedded in fabric fibres.',
        },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Full Interior Valet vs Mini Valet: Which Does Your Car Actually Need? | Glasgow Car Valeting"
        description="A mini valet is a tidy-up. A full interior valet is a deep clean. Here is the honest difference, what each includes, and how to decide which your car needs in Glasgow."
        canonical="/journal/interior-valet-vs-mini-valet-glasgow"
        articleType={true}
        articleDate="2026-05-24"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="pt-32 pb-24 bg-background-dark text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">

          <div className="mb-12">
            <span className="text-primary text-xs uppercase tracking-widest mb-4 block">Glasgow Car Valeting Journal</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Full Interior Valet vs Mini Valet: Which Does Your Car Actually Need?
            </h1>
            <p className="text-gray-400 text-sm mb-6">Published 24 May 2026 · 7 min read</p>
            <p className="text-xl text-gray-300 leading-relaxed">
              The difference between a mini valet and a full interior valet is not just price. It is the difference between tidying a room and deep cleaning it. One removes what you can see. The other removes what has been building up for months. Here is how to decide which one your car actually needs.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-300 leading-relaxed">

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">What a mini valet actually covers</h2>
            <p>
              A mini valet is a light maintenance service. In most cases it covers a quick exterior wash, a vacuum of the seats, footwells and boot, a wipe of the main dashboard surfaces and a clean of the interior glass. Some operators include a tyre shine and a spray of air freshener. The whole thing takes 45 minutes to an hour.
            </p>
            <p>
              A mini valet is appropriate for a car that is already in decent condition and simply needs a regular refresh. If you clean your car every few weeks and your interior is generally tidy, a mini valet is a reasonable maintenance option between deeper cleans.
            </p>
            <p>
              It is not appropriate for removing pet hair, food smells, staining on fabric seats, mould in door seals, or any soiling that has had time to embed in the fabric. A vacuum does not extract what is in the fibres. It removes what sits on the surface, not what is embedded in the fibres.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">What a full interior valet actually covers</h2>
            <p>
              A full interior valet starts where a mini valet ends. It begins with the same vacuum, but more thorough, under every seat in every position, in every seat rail crevice, in every door pocket corner, in every boot compartment. Then the similarities end.
            </p>
            <p>
              Every hard surface in the cabin is cleaned individually. Dashboard, instrument binnacle, infotainment screen, vents, centre console, gear lever surround, door cards, door handles, grab handles, pillars, roof lining. Not sprayed and wiped as one surface, each cleaned with the appropriate product for that material type. Plastic trim, leather trim, piano black trim and alcantara all require different products. A general-purpose interior spray used on all surfaces simultaneously is the signature move of a fast but lazy clean.
            </p>
            <p>
              Then the extraction. Hot water extraction shampoo on all fabric seats and carpets means forcing hot water mixed with shampoo deep into the fabric fibres and immediately extracting it with high suction. The water pulls the soiling, bacteria and allergens out of the fibres with it. What comes out of a seat that looked clean is often noticeably dark. That is what a vacuum misses.
            </p>
            <p>
              Leather seats are cleaned with a dedicated pH-neutral leather cleaner, then conditioned to keep the leather supple. Interior glass is cleaned with a streak-free solution applied directly to the glass. The session closes with a fabric guard spray on all fabric surfaces to repel future soiling, and a fragrance treatment.
            </p>

            {/* Comparison table */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What each service includes</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 pr-6 text-white font-semibold uppercase tracking-wide">Service element</th>
                    <th className="py-3 pr-6 text-primary font-semibold uppercase tracking-wide">Full interior valet</th>
                    <th className="py-3 text-gray-400 font-semibold uppercase tracking-wide">Mini valet</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Interior vacuum', 'Deep, all crevices and boot', 'Basic'],
                    ['Dashboard and console clean', 'Full clean and dress', 'Wipe only'],
                    ['Door cards', 'Full clean', 'Not included'],
                    ['Interior glass', 'Streak-free clean', 'Sometimes'],
                    ['Seat shampoo (fabric)', 'Hot water extraction', 'Not included'],
                    ['Carpet extraction', 'Full extraction', 'Not included'],
                    ['Leather clean and condition', 'Yes (leather cars)', 'Not included'],
                    ['Fabric guard spray', 'Yes', 'Not included'],
                    ['Roof lining clean', 'Yes', 'Not included'],
                    ['Pet hair removal', 'Yes (specialist tools)', 'Not included'],
                    ['Odour elimination', 'Yes (removes source)', 'Air freshener only'],
                    ['Time required', '2 to 4 hours', '30 to 60 min'],
                    ['Starting price (small car)', 'From £60', 'From £25'],
                  ].map(([item, full, mini], i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="py-3 pr-6 text-gray-300">{item}</td>
                      <td className="py-3 pr-6 text-white font-medium">{full}</td>
                      <td className="py-3 text-gray-400">{mini}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">The smell problem that mini valets cannot solve</h2>
            <p>
              The most common complaint from Glasgow car owners after a mini valet is that the smell came back within a week. The reason is straightforward. Most unpleasant car odours come from bacteria living in the fabric of seats and carpets. Food spills, damp dog, wet shoes, cigarette smoke and everyday body odour all deposit bacteria in the fabric fibres over time. An air freshener masks the smell. Hot water extraction removes the bacteria that cause it.
            </p>
            <p>
              A mini valet can introduce additional fragrance and make the car smell fresh for a few days. But without extracting the contaminated fabric, the bacterial source remains. As the air freshener fades, the original smell returns.
            </p>
            <p>
              The same principle applies to staining on fabric seats. A wipe with an interior spray will shift surface soiling. A coffee spill that has dried into the weave of the fabric, or a child's sticky residue that has set, will not come out without pre-treatment and extraction.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">Glasgow-specific reasons your interior needs a proper clean</h2>
            <p>
              Glasgow's wet climate means car interiors take more punishment than in drier cities. Wet dogs, wet shoes, wet children, wet shopping. The interior of a Glasgow family car after a typical November is a different environment to the same car in August. Damp fabric stays damp longer in cool, humid conditions. Bacteria and mould thrive in damp fabric. The smells that result are something a vacuum and air freshener have no chance of addressing.
            </p>
            <p>
              Road salt tracked in on shoes from November through March deposits a white residue in carpet fibres and footwells. The salt is hygroscopic, it pulls moisture from the air and keeps the carpet slightly damp through the winter. By spring, footwells in cars that have not had an extraction clean since autumn can smell noticeably musty.
            </p>
            <p>
              The dog-owning population of Glasgow is large and active. Muddy walks in the Campsie Fells, Mugdock Country Park, Pollok Park and the East End parks are a weekly routine for a huge number of Glasgow households. The combination of wet dog, muddy paws and damp fabric creates interior conditions that only extraction can properly address.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">How to choose between the two</h2>
            <p>
              The decision is straightforward once you ask the right question. Is your car interior dirty, or does it just need freshening up?
            </p>
            <p>
              If the seats look clean, there are no persistent smells, no children or pets regularly use the car and you clean it regularly, a mini valet is a reasonable maintenance option.
            </p>
            <p>
              If there is a smell that does not go away, if children or pets use the car regularly, if the fabric seats have any staining, if the car has not had a proper interior clean in more than six months, or if you are preparing the car for sale, you need a full interior valet. A mini valet will not do what you are hoping it will do.
            </p>
            <p>
              For Glasgow drivers preparing a car for sale in particular, a full interior valet is a straightforward investment. A car that smells fresh, has clean seats and clean carpets will sell faster and for a higher price than one that has had a quick spray and vacuum. Buyers notice interior condition. Many walk away based on smell alone.
            </p>

            {/* Related */}
            <div className="bg-zinc-900 border border-white/10 p-6 mt-12">
              <h3 className="text-white font-bold text-lg mb-4">Related guides</h3>
              <ul className="space-y-2">
                <li><Link to="/journal/how-much-does-a-car-valet-cost-glasgow" className="text-primary hover:underline">How Much Does a Car Valet Cost in Glasgow?</Link></li>
                <li><Link to="/journal/valeting-vs-detailing-glasgow" className="text-primary hover:underline">What is the Difference Between Valeting and Detailing?</Link></li>
                <li><Link to="/journal/glasgow-weather-destroys-car-paint" className="text-primary hover:underline">How Glasgow's Weather Destroys Car Paint</Link></li>
              </ul>
            </div>

            {/* FAQs */}
            <h2 className="text-3xl font-bold text-white mt-12 mb-8">Frequently asked questions</h2>
            <div className="space-y-8">
              {[
                {
                  q: 'What is included in a full interior valet?',
                  a: 'A full interior valet includes a deep vacuum of all surfaces, dashboard and console clean and dress, door card clean, interior glass clean, hot water extraction shampoo of all fabric seats and carpets, leather clean and condition on leather interiors, fabric guard spray and a fresh fragrance treatment. It is designed to remove embedded dirt, bacteria and odours rather than just surface grime.',
                },
                {
                  q: 'What is a mini valet?',
                  a: 'A mini valet is a light service covering a quick exterior wash, a vacuum of the interior and a wipe of the main dashboard surfaces. It is a maintenance clean for cars already in reasonable condition that need a refresh rather than a deep clean. It does not include seat shampooing, carpet extraction or door card cleaning.',
                },
                {
                  q: 'How often should I get a full interior valet in Glasgow?',
                  a: 'For a typical Glasgow driver using the car daily, a full interior valet once or twice a year keeps the cabin in good condition. Many drivers do one in spring to clear the winter accumulation and one in autumn before the wet months. Between full valets, a basic vacuum or mini valet is enough to maintain tidiness.',
                },
                {
                  q: 'How much does an interior valet cost in Glasgow?',
                  a: 'A full interior valet starts from £60 for small cars and ranges to £110 or more for large SUVs. A mini valet is typically £25 to £40. The full valet costs more because the hot water extraction of seats and carpets alone takes 60 to 90 minutes, plus drying time.',
                },
                {
                  q: 'Can a full interior valet remove pet hair?',
                  a: 'Yes. Pet hair removal requires a full interior valet. We use specialist rubber tools to lift embedded hair from seat fabric before hot water extraction completes the clean. A mini valet vacuum will not remove hair embedded in fabric fibres.',
                },
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-8 last:border-0 last:pb-0">
                  <h3 className="text-white font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-zinc-900 border border-white/10 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Book an interior valet in Glasgow</h2>
            <p className="text-gray-300 mb-6">Fully mobile across Glasgow. We come to your home or workplace with all equipment, no drop-off needed.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:07435740502" className="bg-primary hover:bg-white text-black px-8 py-4 font-bold tracking-widest text-xs uppercase transition-colors">
                Call 0743 574 0502
              </a>
              <Link to="/services/interior-valet" className="border border-white/30 hover:border-white text-white px-8 py-4 font-bold tracking-widest text-xs uppercase transition-colors">
                Interior Valet Service
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
