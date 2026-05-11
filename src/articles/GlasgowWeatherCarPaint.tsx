import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

export function GlasgowWeatherCarPaint() {
  return (
    <main className="pt-32 pb-24 bg-background-dark min-h-screen text-white">
      <SEOHead
        title="How Glasgow's Weather Destroys Your Car Paint — And What to Do About It | Glasgow Car Valeting"
        description="Glasgow gets 170+ days of rain a year. Road salt, tree sap, acid rain and brake dust are silently destroying your paintwork. Here's exactly what's happening and how to stop it."
        canonical="/journal/glasgow-weather-destroys-car-paint"
        articleType={true}
        articleDate="2026-05-07"
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-12">

        <Link to="/journal" className="text-primary text-xs uppercase tracking-widest mb-8 inline-block hover:text-white transition-colors">
          ← Back to Journal
        </Link>

        {/* Meta / Intro */}
        <span className="text-primary text-xs uppercase tracking-widest mb-4 block">May 7, 2026 · 6 min read</span>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          How Glasgow's Weather Destroys Your Car Paint — And What to Do About It
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed mb-12 border-l-4 border-primary pl-6">
          Glasgow gets over 170 days of rain a year. Your car's paintwork is under attack every single day. Here's exactly what's happening, and how to stop the damage before it costs you thousands.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          The Problem: Glasgow's Climate is Brutal on Paintwork
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Most drivers in Glasgow don't realise their car's paint is silently deteriorating every week. It doesn't happen overnight. It's a slow, relentless process driven by the exact conditions that define our climate. By the time you notice the damage, it's expensive to fix.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Here's what's working against your paintwork right now:
        </p>

        {/* Threat 1 */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          1. Road Salt and Winter Grit
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Every winter, Glasgow City Council lays thousands of tonnes of road salt across the city's streets. It's essential for road safety, but devastating for your car.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Salt is corrosive. When it bonds to your paintwork (especially in the microscopic scratches and swirl marks already on the surface), it accelerates oxidation. The clear coat starts to dull. Then the base coat begins to fade. Left untreated, you're looking at rust on your bodywork within a few years.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          The danger zone isn't just the body panels. Your wheel arches, door sills, and the undercarriage take the worst of it. If you're driving through Glasgow in January and February, salt contamination is virtually guaranteed after every journey.
        </p>

        {/* Threat 2 */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          2. Acid Rain
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Scotland's west coast, including Glasgow, receives some of the highest levels of rainfall in the UK. But it's not just the volume of rain that's the problem. It's the chemistry.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Rainwater absorbs pollution and carbon dioxide from the atmosphere, forming a weak carbonic acid. Over time, this acid etches into your clear coat, creating tiny, permanent pits that dull the finish and destroy the depth of the paint.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          The effect is most visible on darker coloured cars. That dull, hazy finish you see on black or navy vehicles that haven't been properly protected? That's acid rain damage. It cannot be fixed with a simple wash.
        </p>

        {/* Threat 3 */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          3. Tree Sap and Bird Droppings
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Glasgow's streets are lined with trees, one of the things that makes areas like the West End and Bearsden so beautiful. But those same trees are a constant source of paint-damaging contamination.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Tree sap is highly acidic. Left on your paintwork in warm weather, it bonds to the clear coat and is nearly impossible to remove without specialist products. Bird droppings are even worse. The uric acid in bird waste is potent enough to etch through an unprotected clear coat in as little as 48 hours.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          A regular wash won't remove bonded sap or etching. You need a clay bar decontamination and, in serious cases, paint correction to restore the finish.
        </p>

        {/* Threat 4 */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          4. Brake Dust and Iron Contamination
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Every time you brake, your brake pads shed microscopic particles of iron. These particles are superheated, which means they embed themselves into your paintwork and wheels on contact. Once embedded, they oxidise, creating rust spots that grow over time.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Stop-start city driving around Glasgow's city centre and the M8 generates far more brake dust than motorway driving. If your alloys are always looking dirty within a day of washing, iron contamination is the reason.
        </p>

        {/* The Solution */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          The Solution: Professional Protection, Not Just Washing
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          A standard car wash removes surface dirt. It does nothing to address bonded contaminants, acid etching, or iron deposits. Protecting your car's paint from Glasgow's weather requires a professional, multi-stage approach.
        </p>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-white mb-4">What the professionals do:</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">01</span>
              <span><strong className="text-white">Clay Bar Decontamination</strong> — Removes bonded contaminants, tree sap, industrial fallout, and iron deposits from the paint surface. Essential before any protection is applied.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">02</span>
              <span><strong className="text-white">Machine Polishing</strong> — Removes existing swirl marks, acid etching, and light scratches. Restores the depth and gloss of the paintwork before protection is applied.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">03</span>
              <span><strong className="text-white">Ceramic Coating</strong> — A liquid polymer that bonds to the clear coat and creates a hard, hydrophobic shield. Ceramic coatings repel water, salt, bird droppings, and UV rays. A single application lasts 2–5 years and is the single most effective way to protect your car's paint from Scottish weather.</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          For cars that haven't been corrected in a while, we often recommend a full paint correction before ceramic coating. This ensures the coating locks in a clean, flawless finish rather than sealing existing swirls and scratches underneath.
        </p>

        {/* Who We Are */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          Glasgow Car Valeting — We Come to You
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          We are Glasgow's mobile car valeting and detailing specialists. We don't operate from a fixed unit. We bring our full professional setup directly to your driveway, your office car park, or wherever your car is parked.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Our team is fully insured and uses professional-grade products to deliver a spotless, protected finish. Whether you drive a BMW, a Range Rover, or a daily runaround, your car deserves protection from what Glasgow's weather throws at it.
        </p>

        {/* CTA Box */}
        <div className="mt-16 p-8 bg-[#111] border border-[var(--color-border-dark)] text-center">
          <h3 className="text-2xl font-heading mb-3 text-white">Protect Your Paint Before the Damage Sets In</h3>
          <p className="text-gray-400 mb-2">Book a professional decontamination, polish, or ceramic coating with Glasgow Car Valeting.</p>
          <p className="text-primary font-bold text-lg mb-6">Fully mobile. Fully professional. We come to your door.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07435740502" className="bg-primary hover:bg-white text-black px-8 py-4 font-bold tracking-widest text-xs uppercase inline-block transition-colors">
              Call 0743 574 0502
            </a>
            <Link to="/services/ceramic-coating" className="border border-white hover:border-primary text-white hover:text-primary px-8 py-4 font-bold tracking-widest text-xs uppercase inline-block transition-colors">
              View Ceramic Coating
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
