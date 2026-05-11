import { Link } from 'react-router-dom';

export function CeramicCoatingGlasgow() {
  return (
    <main className="pt-32 pb-24 bg-background-dark min-h-screen text-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">

        <Link to="/journal" className="text-primary text-xs uppercase tracking-widest mb-8 inline-block hover:text-white transition-colors">
          ← Back to Journal
        </Link>

        {/* Meta / Intro */}
        <span className="text-primary text-xs uppercase tracking-widest mb-4 block">May 8, 2026 · 8 min read</span>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ceramic Coating Glasgow — Is It Worth It?
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed mb-12 border-l-4 border-primary pl-6">
          Glasgow's weather is brutal on your car's paintwork. If you care about your vehicle looking flawless all year round, ceramic coating might be the smartest investment you ever make.
        </p>

        {/* Intro */}
        <p className="text-gray-300 leading-relaxed mb-6">
          Whether you've heard the buzz from a car forum, seen it on a detailing YouTube channel, or a mate recommended it after getting his Audi done — you're probably asking the same question: <em>is ceramic coating actually worth it in Glasgow?</em>
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Short answer: <strong className="text-white">yes — if it's done right.</strong> Here's everything you need to know, without the jargon.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          What Is Ceramic Coating?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Ceramic coating is a liquid polymer applied by hand to the exterior of your vehicle. Once it cures, it chemically bonds with the factory paint and creates a hard, hydrophobic (water-repellent) layer of protection that doesn't wash off like wax or sealant.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Think of it as a second skin for your car — invisible, ultra-hard, and extraordinarily durable. Unlike a traditional wax job that needs to be re-applied every few months, a properly applied ceramic coating in Glasgow can last <strong className="text-white">2 to 5 years</strong> — and premium-grade coatings even longer.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          Why Glasgow Cars Need Ceramic Coating More Than Most
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Let's be honest about where we live. Glasgow gets <strong className="text-white">over 170 days of rain per year</strong>. Road salt in winter, tree sap in summer, bird droppings year-round — your car's paintwork is under constant assault. Add in the stop-start traffic of Byres Road, the M8 grime, and the general muck of Scottish roads, and you've got a recipe for dull, damaged paint.
        </p>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-white mb-4">What ceramic coating protects against:</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">01</span>
              <span><strong className="text-white">Rain & road spray</strong> — water beads and rolls straight off instantly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">02</span>
              <span><strong className="text-white">Road salt corrosion</strong> — the 9H hard layer resists winter grit and salt bonding</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">03</span>
              <span><strong className="text-white">Bird droppings & tree sap</strong> — acidic contaminants can't etch into the coating</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">04</span>
              <span><strong className="text-white">UV oxidation</strong> — stops fading and colour loss on paint exposed to sunlight</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">05</span>
              <span><strong className="text-white">Everyday grime</strong> — dirt doesn't bond to the slick surface the same way, making cleaning effortless</span>
            </li>
          </ul>
        </div>

        {/* Section 3 — Comparison */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          Ceramic Coating vs Wax — What's the Difference?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          This is where a lot of people get confused. Here's a straight comparison:
        </p>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg overflow-hidden mb-8">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-[var(--color-border-dark)]">
                <th className="p-4 text-primary uppercase tracking-widest text-xs font-bold">Feature</th>
                <th className="p-4 text-gray-400 uppercase tracking-widest text-xs font-bold">Wax / Sealant</th>
                <th className="p-4 text-white uppercase tracking-widest text-xs font-bold">Ceramic Coating</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 divide-y divide-[var(--color-border-dark)]">
              <tr>
                <td className="p-4 font-medium text-white">Durability</td>
                <td className="p-4">1–3 months</td>
                <td className="p-4 text-primary font-bold">2–5 years</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Hardness</td>
                <td className="p-4">Soft — scratches easily</td>
                <td className="p-4 text-primary font-bold">9H — extremely hard</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Water repellency</td>
                <td className="p-4">Good</td>
                <td className="p-4 text-primary font-bold">Exceptional</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">UV protection</td>
                <td className="p-4">Moderate</td>
                <td className="p-4 text-primary font-bold">Superior</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Scratch resistance</td>
                <td className="p-4">Minimal</td>
                <td className="p-4 text-primary font-bold">High</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Long-term value</td>
                <td className="p-4">Re-apply every few weeks</td>
                <td className="p-4 text-primary font-bold">Set and forget for years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          The bottom line? <strong className="text-white">Wax is a temporary fix. Ceramic coating is a long-term investment.</strong> If you're driving a newer car, a luxury vehicle, or anything you take pride in — ceramic coating in Glasgow is the intelligent choice.
        </p>

        {/* Section 4 — Pricing */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          How Much Does Ceramic Coating Cost in Glasgow?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          We'll be straight with you. Ceramic coating isn't the cheapest service on the menu — but the value-per-year calculation changes the story entirely.
        </p>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg overflow-hidden mb-6">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-[var(--color-border-dark)]">
                <th className="p-4 text-primary uppercase tracking-widest text-xs font-bold">Vehicle Type</th>
                <th className="p-4 text-white uppercase tracking-widest text-xs font-bold">Estimated Price</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 divide-y divide-[var(--color-border-dark)]">
              <tr>
                <td className="p-4">Small (e.g. VW Polo, Mini)</td>
                <td className="p-4 font-bold text-white">£250 – £400</td>
              </tr>
              <tr>
                <td className="p-4">Medium (e.g. BMW 3 Series, Audi A4)</td>
                <td className="p-4 font-bold text-white">£350 – £550</td>
              </tr>
              <tr>
                <td className="p-4">Large / SUV (e.g. Range Rover, Tesla X)</td>
                <td className="p-4 font-bold text-white">£500 – £800+</td>
              </tr>
              <tr>
                <td className="p-4">Sports / Exotic</td>
                <td className="p-4 font-bold text-primary">POA</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          <strong className="text-white">Important:</strong> The price reflects far more than just the coating itself. A professional ceramic coating job includes thorough prep work — decontamination, clay bar treatment, machine polishing or paint correction — to ensure the surface is perfectly clean before the coating bonds. If someone is quoting you £80 for a ceramic coat, they're cutting corners. Badly.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          At Glasgow Car Valeting, we never skip the prep. Your coating is only as good as the surface underneath it.
        </p>

        {/* Section 5 — Process */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          What Happens During a Professional Ceramic Coating?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Here's exactly what you can expect when you book a ceramic coating with us:
        </p>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-6 mb-8">
          <ul className="space-y-6 text-gray-300">
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">01</span>
              <div>
                <strong className="text-white block mb-1">Deep Wash & Decontamination</strong>
                A thorough pre-wash removes loose dirt, then iron decontamination and clay bar treatment pulls out all bonded contamination from your paint pores. Non-negotiable.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">02</span>
              <div>
                <strong className="text-white block mb-1">Paint Inspection & Correction</strong>
                We examine every panel under specialist lighting for swirl marks, scratches, and oxidation. Machine polishing or paint correction is carried out as needed to achieve a flawless base.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">03</span>
              <div>
                <strong className="text-white block mb-1">Panel Wipe Down</strong>
                Every panel is wiped with an isopropyl alcohol solution to remove oils and polishing residue. The surface must be 100% clean before any coating is applied.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">04</span>
              <div>
                <strong className="text-white block mb-1">Ceramic Coating Application</strong>
                The coating is applied panel by panel, buffed in, and allowed to flash. This requires skill, precision, and the right ambient conditions — not a job for a windy Glasgow afternoon.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">05</span>
              <div>
                <strong className="text-white block mb-1">Cure & Final Inspection</strong>
                The coating is allowed to cure fully. A final inspection under lighting ensures uniform coverage, zero high spots, and a mirror-like finish.
              </div>
            </li>
          </ul>
        </div>

        {/* Section 6 — Longevity */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          How Long Does Ceramic Coating Last?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          This depends on the grade of product used and how well you maintain it afterwards:
        </p>
        <ul className="space-y-2 text-gray-300 mb-6 pl-4">
          <li className="flex gap-3"><span className="text-primary font-bold">·</span><span><strong className="text-white">Entry-level coatings:</strong> 12–18 months</span></li>
          <li className="flex gap-3"><span className="text-primary font-bold">·</span><span><strong className="text-white">Mid-grade professional coatings:</strong> 2–3 years</span></li>
          <li className="flex gap-3"><span className="text-primary font-bold">·</span><span><strong className="text-white">Premium / multi-layer coatings:</strong> 4–5+ years</span></li>
        </ul>
        <p className="text-gray-300 leading-relaxed mb-6">
          With proper aftercare — using a pH-neutral shampoo, avoiding automated brush car washes, and booking an annual maintenance wash — your ceramic coating can last significantly longer. We provide a full aftercare guide with every coating we apply.
        </p>

        {/* Section 7 — Honest Answer */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          Is Ceramic Coating Worth It? Our Honest Answer.
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          We're going to give you the honest professional answer — not just the one that sells a service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-5">
            <h3 className="text-white font-bold mb-3 text-base">✅ Worth it if...</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>You're keeping the car 2+ years</li>
              <li>You care about resale value</li>
              <li>You drive a mid-to-high value vehicle</li>
              <li>You're tired of re-waxing every 8 weeks</li>
              <li>You hate hand-washing in the Glasgow rain</li>
            </ul>
          </div>
          <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-5">
            <h3 className="text-white font-bold mb-3 text-base">❌ Skip it if...</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>You're about to sell the car</li>
              <li>It's a £500 runaround you're replacing soon</li>
              <li>Paint condition genuinely doesn't matter to you</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          For the vast majority of Glasgow car owners who take pride in what they drive — <strong className="text-white">ceramic coating is absolutely worth every pound.</strong>
        </p>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-l-4 border-primary pl-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mb-12">
          {[
            {
              q: "Can ceramic coating be applied to any car?",
              a: "Yes. Ceramic coating works on any car regardless of age, colour, or manufacturer. Older cars may require more prep work — paint correction — first."
            },
            {
              q: "Does ceramic coating prevent scratches?",
              a: "It significantly reduces light scratches and swirl marks, but it's not scratch-proof. The 9H hardness layer is harder than your car's factory clear coat and absorbs a lot of what would otherwise damage the paint."
            },
            {
              q: "Can I wash my car after ceramic coating?",
              a: "Yes, but wait at least 7 days after application for the coating to fully cure. After that, use a pH-neutral car shampoo and avoid automated brush car washes."
            },
            {
              q: "Do you come to my home for ceramic coating in Glasgow?",
              a: "Absolutely. Glasgow Car Valeting is fully mobile — we come to your home, workplace, or anywhere convenient across Glasgow and surrounding areas. No need to drop your car off anywhere."
            },
            {
              q: "Do you cover areas outside Glasgow city centre?",
              a: "Yes. We cover Bearsden, Newton Mearns, Milngavie, the West End, Southside, and surrounding areas. Get in touch to confirm your postcode."
            },
          ].map((faq, i) => (
            <div key={i} className="border-b border-[var(--color-border-dark)] pb-6">
              <h3 className="text-white font-bold mb-2">{faq.q}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 p-8 bg-[#111] border border-[var(--color-border-dark)] text-center">
          <h3 className="text-2xl font-heading mb-3 text-white">Book Ceramic Coating in Glasgow Today</h3>
          <p className="text-gray-400 mb-2">Your car deserves better than a £12 jet wash.</p>
          <p className="text-primary font-bold text-lg mb-6">We come to your door — fully mobile, fully professional.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07435740502"
              className="bg-primary hover:bg-white text-black px-8 py-4 font-bold tracking-widest text-xs uppercase inline-block transition-colors"
            >
              Call 0743 574 0502
            </a>
            <Link
              to="/services/ceramic-coating"
              className="border border-white hover:border-primary text-white hover:text-primary px-8 py-4 font-bold tracking-widest text-xs uppercase inline-block transition-colors"
            >
              View Ceramic Coating
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
