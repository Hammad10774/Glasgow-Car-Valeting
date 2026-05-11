import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

export function ValetingVsDetailing() {
  return (
    <main className="pt-32 pb-24 bg-background-dark min-h-screen text-white">
      <SEOHead
        title="What's the Difference Between Valeting and Detailing? | Glasgow Car Valeting"
        description="Valeting cleans your car. Detailing restores it. Here's the honest breakdown of what each service actually involves, what it costs, and which one your car needs right now."
        canonical="/journal/valeting-vs-detailing-glasgow"
        articleType={true}
        articleDate="2026-05-10"
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-12">

        <Link to="/journal" className="text-primary text-xs uppercase tracking-widest mb-8 inline-block hover:text-white transition-colors">
          ← Back to Journal
        </Link>

        <span className="text-primary text-xs uppercase tracking-widest mb-4 block">May 10, 2026 · 7 min read</span>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          What's the Difference Between Valeting and Detailing?
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed mb-12 border-l-4 border-primary pl-6">
          Most people use the words interchangeably. They're not the same thing. One cleans your car. The other restores it. Here's exactly what separates them — and which one your car actually needs.
        </p>

        {/* Intro */}
        <p className="text-gray-300 leading-relaxed mb-6">
          If you've ever tried to book a car clean in Glasgow and found yourself confused by the terminology — valeting, detailing, mini valet, full detail, paint correction — you're not alone. The car care industry isn't exactly consistent with its language.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          But the distinction between valeting and detailing is actually important, because it determines what work gets done on your car, how long it takes, and what you should expect to pay. Getting the wrong service wastes money. Getting the right one can transform your car.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Let's clear it up once and for all.
        </p>

        {/* Section 1 — What is valeting */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          What Is Car Valeting?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Car valeting is a thorough clean — inside and out. The focus is on <strong className="text-white">removing dirt, grime, and general build-up</strong> to leave the car looking fresh, tidy, and presentable. Think of it as a deep clean rather than a restoration.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          A professional valet typically covers:
        </p>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-widest">Exterior</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex gap-2"><span className="text-primary">·</span> Pre-wash & snow foam</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Two-bucket hand wash</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Wheel & tyre clean</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Door shuts & jambs</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Glass cleaned inside & out</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Tyre dressing applied</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Wax or quick sealant finish</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-widest">Interior</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex gap-2"><span className="text-primary">·</span> Full vacuum (seats, carpets, boot)</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Dashboard & trim wipe-down</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Door cards cleaned</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Centre console detailed</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Interior glass polished</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Air freshener</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          A mini valet is a lighter version of the above — usually exterior-only, or exterior plus a quick interior tidy. A full valet goes deeper, often including seat shampooing and carpet extraction.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Valeting is about <strong className="text-white">maintenance and cleanliness</strong>. It doesn't address the condition of the paint itself — scratches, swirl marks, and oxidation are still there after a valet. The car is clean, but its paintwork is untouched.
        </p>

        {/* Section 2 — What is detailing */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          What Is Car Detailing?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Car detailing goes further. It's a <strong className="text-white">restoration and protection process</strong> that addresses the actual condition of your paintwork, not just the surface dirt on top of it. A full detail doesn't just clean your car — it corrects it, refines it, and then seals that condition in.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Detailing typically involves some combination of:
        </p>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-6 mb-8">
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">01</span>
              <div>
                <strong className="text-white block mb-1">Decontamination</strong>
                Iron fallout removal, tar removal, and clay bar treatment — pulling bonded contamination out of your paint pores that a regular wash can't touch.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">02</span>
              <div>
                <strong className="text-white block mb-1">Paint Correction / Machine Polishing</strong>
                Using rotary or dual-action polishers to remove swirl marks, light scratches, water spots, and oxidation from the clear coat. This is what makes old, dull paint look new again.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">03</span>
              <div>
                <strong className="text-white block mb-1">Paint Protection</strong>
                Applying a durable layer of protection — wax, paint sealant, or ceramic coating — to lock in the corrected finish and protect against future contamination.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">04</span>
              <div>
                <strong className="text-white block mb-1">Interior Detailing (if included)</strong>
                Deep cleaning of fabrics and leather, steam cleaning vents and trim, leather conditioning, and odour elimination — far beyond what a standard interior valet covers.
              </div>
            </li>
          </ul>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          Detailing takes significantly more time — a full detail on a medium-sized car can take a full day or more. It requires specialist equipment and trained hands. And it produces a result that's in a completely different league to a valet alone.
        </p>

        {/* Section 3 — Side by side */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          Valeting vs Detailing — Side by Side
        </h2>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg overflow-hidden mb-8">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-[var(--color-border-dark)]">
                <th className="p-4 text-primary uppercase tracking-widest text-xs font-bold">Factor</th>
                <th className="p-4 text-gray-400 uppercase tracking-widest text-xs font-bold">Valeting</th>
                <th className="p-4 text-white uppercase tracking-widest text-xs font-bold">Detailing</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 divide-y divide-[var(--color-border-dark)]">
              <tr>
                <td className="p-4 font-medium text-white">Goal</td>
                <td className="p-4">Clean the car</td>
                <td className="p-4 text-primary font-medium">Restore & protect the car</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Paint condition</td>
                <td className="p-4">Unchanged</td>
                <td className="p-4 text-primary font-medium">Corrected & improved</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Swirl marks / scratches</td>
                <td className="p-4">Still there after</td>
                <td className="p-4 text-primary font-medium">Removed or reduced</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Time required</td>
                <td className="p-4">1–4 hours</td>
                <td className="p-4 text-primary font-medium">4–12+ hours</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Price range</td>
                <td className="p-4">£40 – £270</td>
                <td className="p-4 text-primary font-medium">£150 – £800+</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">How often needed</td>
                <td className="p-4">Every 4–8 weeks</td>
                <td className="p-4 text-primary font-medium">Once or twice a year</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Result</td>
                <td className="p-4">Clean, fresh car</td>
                <td className="p-4 text-primary font-medium">Showroom-condition finish</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 4 — Which do you need */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          Which One Does Your Car Actually Need?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The honest answer depends on two things: the current condition of your paintwork, and what outcome you're after.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-5">
            <h3 className="text-white font-bold mb-3">Go with a Valet if...</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex gap-2"><span className="text-primary">·</span> Your paint is in good condition already</li>
              <li className="flex gap-2"><span className="text-primary">·</span> You just want it clean and fresh</li>
              <li className="flex gap-2"><span className="text-primary">·</span> It's a routine maintenance clean</li>
              <li className="flex gap-2"><span className="text-primary">·</span> You're prepping for a sale (quick refresh)</li>
              <li className="flex gap-2"><span className="text-primary">·</span> Budget is the primary concern</li>
            </ul>
          </div>
          <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-5">
            <h3 className="text-white font-bold mb-3">Go with Detailing if...</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex gap-2"><span className="text-primary">·</span> Paint looks dull, hazy, or swirled</li>
              <li className="flex gap-2"><span className="text-primary">·</span> You want showroom-level results</li>
              <li className="flex gap-2"><span className="text-primary">·</span> You're applying ceramic coating</li>
              <li className="flex gap-2"><span className="text-primary">·</span> The car hasn't been properly treated in years</li>
              <li className="flex gap-2"><span className="text-primary">·</span> You drive a premium or collector vehicle</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          A common approach we recommend for Glasgow car owners is to <strong className="text-white">start with a detail to restore the baseline condition</strong>, then maintain it with regular valeting. Think of the detail as the reset — and the valet as the ongoing upkeep.
        </p>

        {/* Section 5 — Glasgow context */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          What This Means for Glasgow Drivers Specifically
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Glasgow's climate makes this distinction more relevant than in most UK cities. The combination of heavy rainfall, road salt from October to March, tree sap on residential streets, and the stop-start city traffic means Glasgow cars accumulate contamination faster than average.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Most cars we see in Glasgow that haven't been professionally treated have paintwork that's been neglected past the point where a valet alone will cut it. The paint is dulled by oxidation, covered in swirl marks from improper washing, and loaded with bonded iron and tar deposits.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          That's not a valet job. That's a detail job — specifically a{' '}
          <Link to="/services/machine-polishing" className="text-primary hover:text-white transition-colors underline underline-offset-4">machine polish</Link>
          {' '}or{' '}
          <Link to="/services/paint-correction" className="text-primary hover:text-white transition-colors underline underline-offset-4">paint correction</Link>
          {' '}followed by a protective coating. After that, regular valeting keeps it maintained.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          If you're unsure which your car needs, the best thing to do is call us. We'll give you an honest assessment — not just the more expensive option.
        </p>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-l-4 border-primary pl-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mb-12">
          {[
            {
              q: "Is detailing just a more expensive valet?",
              a: "No — they're fundamentally different services. A valet cleans your car's surfaces. Detailing works on the paintwork itself, removing defects and applying protection. Paying for a detail expecting a clean car is like paying for a car service expecting a car wash. Related but not interchangeable."
            },
            {
              q: "Can I get both valeting and detailing done together?",
              a: "Yes — and it's often the right call. A detail always starts with a thorough clean (similar to a full valet), then goes further into paint correction and protection. If you book a full detail, the cleaning is included in the process."
            },
            {
              q: "How often should I get my car valeted in Glasgow?",
              a: "Every 4–8 weeks is a good cadence for most Glasgow drivers given the road conditions. If your car sits under trees or does high mileage, monthly is sensible. Regular valeting prevents contamination from bonding into the paint and makes each clean quicker."
            },
            {
              q: "How often does my car need a full detail?",
              a: "Once or twice a year is typical for a well-maintained car. If your car has ceramic coating applied, annual maintenance details keep the coating performing at its best. Cars that haven't been detailed in years may need a more intensive correction first."
            },
            {
              q: "Do you offer both valeting and detailing services in Glasgow?",
              a: "Yes. Glasgow Car Valeting offers the full range — from mini valet and full valet through to machine polishing, paint correction, and ceramic coating. All services are fully mobile — we come to your home or workplace across Glasgow and surrounding areas."
            },
          ].map((faq, i) => (
            <div key={i} className="border-b border-[var(--color-border-dark)] pb-6">
              <h3 className="text-white font-bold mb-2">{faq.q}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#111] border border-[var(--color-border-dark)] text-center">
          <h3 className="text-2xl font-heading mb-3 text-white">Not Sure What Your Car Needs?</h3>
          <p className="text-gray-400 mb-2">Call us and we'll tell you honestly — valet, detail, or both.</p>
          <p className="text-primary font-bold text-lg mb-6">Fully mobile across Glasgow. We come to your door.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07435740502"
              className="bg-primary hover:bg-white text-black px-8 py-4 font-bold tracking-widest text-xs uppercase inline-block transition-colors"
            >
              Call 0743 574 0502
            </a>
            <Link
              to="/services/paint-correction"
              className="border border-white hover:border-primary text-white hover:text-primary px-8 py-4 font-bold tracking-widest text-xs uppercase inline-block transition-colors"
            >
              View Paint Correction
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
