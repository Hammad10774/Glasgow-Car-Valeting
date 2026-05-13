import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

export function PaintCorrectionGlasgow() {
  return (
    <main className="pt-32 pb-24 bg-background-dark min-h-screen text-white">
      <SEOHead
        title="Paint Correction Glasgow: What It Is, What It Costs, and When Your Car Needs It | Glasgow Car Valeting"
        description="Paint correction removes deep scratches, heavy swirl damage, and oxidation from your car's paintwork. Full guide to the process, stages, pricing in Glasgow, and what results to expect."
        canonical="/journal/paint-correction-glasgow"
        articleType={true}
        articleDate="2026-05-13"
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-12">

        <Link to="/journal" className="text-primary text-xs uppercase tracking-widest mb-8 inline-block hover:text-white transition-colors">
          ← Back to Journal
        </Link>

        <span className="text-primary text-xs uppercase tracking-widest mb-4 block">May 13, 2026 · 8 min read</span>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Paint Correction Glasgow: What It Is, What It Costs, and When Your Car Needs It
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed mb-12 border-l-4 border-primary pl-6">
          Paint correction is the process of removing paint defects permanently rather than hiding them. It covers everything from swirl removal to full multi-stage restoration on heavily damaged paintwork. This guide covers the process, the stages, realistic prices in Glasgow, and how to know whether your car needs it.
        </p>

        {/* Intro */}
        <p className="text-gray-300 leading-relaxed mb-6">
          Most car care products hide paint damage. Detailing sprays, glazes, and cheap waxes fill in scratches and swirl marks temporarily, making the paint look better for a few weeks until the product wears off. The damage underneath stays exactly where it was.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Paint correction removes the damage. The defects come out of the clear coat permanently. What you see after a correction session is what the paint actually looks like once the years of accumulated damage are gone.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          It's the highest standard of paint restoration work available without respraying. For cars that have been washed at automated car washes, parked under trees, or simply had years of normal use in Glasgow's conditions, it's often the only way to get the paint back to what it should look like.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          What Is Paint Correction?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Paint correction is a multi-stage machine polishing process that works through progressively finer compounds to remove defects from the clear coat layer of your car's paint. Each stage removes a microscopic amount of clear coat to level the surface, eliminating the scratches, swirl marks, and oxidation sitting in it.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          The distinction between paint correction and a standard machine polish is depth of work. A single-stage machine polish handles light defects: mild swirl marks, minor water spots, and surface haze. Paint correction refers to multi-stage work on paint with moderate to severe defects, where one pass with a cutting compound isn't enough to achieve full correction.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          A full two-stage paint correction removes 80 to 90 percent of paint defects. A three-stage correction, which involves wet sanding before polishing, can achieve 95 percent or better on paint with heavy scratching or severe oxidation. The remaining percentage covers defects too deep to polish out without removing an unsafe amount of clear coat.
        </p>

        {/* Section 2 — What it fixes */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          What Paint Correction Fixes
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Paint correction addresses defects that live within or on the clear coat. These are the most common ones we see on Glasgow cars:
        </p>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-6 mb-8">
          <ul className="space-y-5 text-gray-300">
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">01</span>
              <div>
                <strong className="text-white block mb-1">Heavy Swirl Marks</strong>
                Years of automated car washes, dirty cloths, and improper washing technique leave dense circular scratch patterns across the entire car. Under sunlight or artificial light, the paint looks grey and webbed rather than deep and reflective. Paint correction removes them completely.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">02</span>
              <div>
                <strong className="text-white block mb-1">Deep Clear Coat Scratches</strong>
                Scratches that a single-stage polish can't fully remove. These sit deeper in the clear coat and require a more aggressive cutting compound followed by a refining stage to restore gloss. As long as the scratch hasn't cut through to the base coat, paint correction can eliminate or dramatically reduce it.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">03</span>
              <div>
                <strong className="text-white block mb-1">Oxidation</strong>
                The chalky, faded appearance on cars that have been exposed to UV without adequate protection. The top layer of clear coat degrades and loses its ability to reflect light. Paint correction cuts through the oxidised layer and exposes the undamaged paint underneath. On older cars, this can produce a transformation that looks like a respray.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">04</span>
              <div>
                <strong className="text-white block mb-1">Water Spot Etching</strong>
                Mineral deposits from rain and tap water that bond to the clear coat and etch into it as they dry. Glasgow's rainfall keeps most cars exposed to this constantly. Light water spots polish out in one stage. Etched water spots that have been left for months require a more aggressive correction approach.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">05</span>
              <div>
                <strong className="text-white block mb-1">Bird Drop Etching</strong>
                Bird droppings are acidic. Left on paint in warm weather, they etch into the clear coat within hours. The mark left behind after removing the dropping is a dull patch shaped like the original deposit. Correction polishes it out.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">06</span>
              <div>
                <strong className="text-white block mb-1">Hologram Marks / Buffer Trails</strong>
                Swirling holographic marks left by previous machine polishing done incorrectly, typically with a rotary machine at the wrong speed or with an unsuitable compound. A proper multi-stage correction removes them.
              </div>
            </li>
          </ul>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          Paint correction won't fix scratches or chips that have cut through the clear coat and base coat down to the primer or bare metal. Those need touch-up paint or a body shop before any polishing work. If you're unsure whether a scratch is correctable, send us a photo before booking.
        </p>

        {/* Section 3 — Stages */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          The Three Stages of Paint Correction
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Not every car needs the same level of work. The right stage depends on the severity of the defects and the condition of the paint thickness.
        </p>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg overflow-hidden mb-8">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-[var(--color-border-dark)]">
                <th className="p-4 text-primary uppercase tracking-widest text-xs font-bold">Stage</th>
                <th className="p-4 text-white uppercase tracking-widest text-xs font-bold">Work Involved</th>
                <th className="p-4 text-gray-400 uppercase tracking-widest text-xs font-bold">Defect Removal</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 divide-y divide-[var(--color-border-dark)]">
              <tr>
                <td className="p-4 font-medium text-white">Enhancement Polish<br/><span className="text-xs text-gray-500 font-normal">(1 stage)</span></td>
                <td className="p-4">Single pass with a light cutting or finishing compound. Removes light swirls and surface haze.</td>
                <td className="p-4 font-bold text-primary">50–70%</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Full Paint Correction<br/><span className="text-xs text-gray-500 font-normal">(2 stage)</span></td>
                <td className="p-4">Cutting compound to remove defects, then a finishing compound to refine the surface and maximise gloss. Handles most defected paint.</td>
                <td className="p-4 font-bold text-primary">80–90%</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Intensive Correction<br/><span className="text-xs text-gray-500 font-normal">(3 stage)</span></td>
                <td className="p-4">Wet sanding to level severe defects or orange peel texture, followed by cut and finish stages. For paint in poor condition where polishing alone can't achieve full correction.</td>
                <td className="p-4 font-bold text-primary">90–95%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          Most cars we see in Glasgow need a two-stage correction. Cars that have been well maintained or have only light swirl damage can often be treated with an enhancement polish. Cars with severe scratching, heavy oxidation, or years of automated car wash damage typically need the full two-stage approach.
        </p>

        {/* Section 4 — Why Glasgow */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          Why Glasgow Cars Need Paint Correction More Than Most
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Glasgow combines several factors that accelerate paint damage faster than most UK cities.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          The weather drives people to wash their cars more often, and most people use either an automated brush wash or poor hand washing technique. Both generate swirl marks on every wash. By the time a car is three years old and has been through a drive-through car wash 50 times, the paint typically carries hundreds of fine scratches across every panel.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Tree-lined streets in the West End, Hyndland, and Bearsden deposit sap and organic matter onto paintwork throughout spring and summer. Sap bonds to the clear coat quickly and becomes increasingly difficult to remove without mechanical action. The acid rain Scotland receives leaves water spots that etch into the clear coat over months.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Road salt from October through March coats the underside and lower panels. Iron particles from brake dust embed into the clear coat across the wheels and rear bumpers. The combination of contamination, washing damage, and environmental exposure means most Glasgow cars that haven't been professionally treated carry significant paintwork damage by their third or fourth year.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Paint correction undoes all of it. One thorough session restores the paint to a condition it likely hasn't been in since the car left the showroom.
        </p>

        {/* Section 5 — The process */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          The Paint Correction Process, Step by Step
        </h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          A paint correction session takes between four and eight hours depending on the size of the car and the level of work required. This is what happens at each stage:
        </p>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-6 mb-8">
          <ul className="space-y-6 text-gray-300">
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">01</span>
              <div>
                <strong className="text-white block mb-1">Wash and Full Decontamination</strong>
                The car gets a thorough two-bucket wash, followed by a dedicated iron fallout remover to dissolve bonded iron particles from brake dust. A clay bar then removes any remaining bonded contamination the wash didn't reach. The surface must be perfectly clean before polishing begins. Polishing over contamination grinds it further into the clear coat.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">02</span>
              <div>
                <strong className="text-white block mb-1">Paint Depth Measurement</strong>
                We check every panel with a paint depth gauge before touching the car with a machine. This tells us the thickness of the clear coat on each section, identifies any previously resprayed panels, and guides how aggressive we can work on each area. Thin panels or re-sprayed sections need a lighter approach.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">03</span>
              <div>
                <strong className="text-white block mb-1">Test Panel</strong>
                Before committing to the full car, we test the compound and pad combination on a small section to confirm the results match expectations. Different paint types and paint conditions respond differently to the same products. The test panel sets the approach for the rest of the car.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">04</span>
              <div>
                <strong className="text-white block mb-1">Cutting Stage</strong>
                A dual-action or rotary machine fitted with a cutting pad and cutting compound works across each panel systematically. The compound breaks down as it works, cutting into the clear coat to level out the defects. This stage removes the bulk of the scratches and swirl marks.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">05</span>
              <div>
                <strong className="text-white block mb-1">Refining Stage</strong>
                The cutting stage leaves micro-marring in the surface. A finer finishing compound and softer pad removes this, refining the surface to maximum gloss. This is what takes the paint from "corrected" to "showroom."
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">06</span>
              <div>
                <strong className="text-white block mb-1">Panel Wipe and Inspection</strong>
                All compound residue is removed with an IPA panel wipe. The paint is then inspected under a correction light to check for any remaining defects. Any areas that need additional work are addressed before the car is considered complete.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-primary font-bold text-lg mt-0.5 leading-none">07</span>
              <div>
                <strong className="text-white block mb-1">Protection Applied</strong>
                After correction, the paint is bare and vulnerable. A wax, paint sealant, or ceramic coating is applied to seal the corrected surface. Without protection, new defects start forming immediately. We always recommend a ceramic coating after paint correction to lock in the results long-term.
              </div>
            </li>
          </ul>
        </div>

        {/* Section 6 — Paint Correction vs Machine Polish */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          Paint Correction vs Machine Polishing
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The terms are often used interchangeably. They describe different levels of the same category of work.
        </p>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg overflow-hidden mb-8">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-[var(--color-border-dark)]">
                <th className="p-4 text-primary uppercase tracking-widest text-xs font-bold">Factor</th>
                <th className="p-4 text-gray-400 uppercase tracking-widest text-xs font-bold">Machine Polish (1 stage)</th>
                <th className="p-4 text-white uppercase tracking-widest text-xs font-bold">Paint Correction (2–3 stage)</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 divide-y divide-[var(--color-border-dark)]">
              <tr>
                <td className="p-4 font-medium text-white">Defect severity</td>
                <td className="p-4">Light swirls, mild haze, surface water spots</td>
                <td className="p-4 text-primary font-medium">Heavy swirls, deeper scratches, oxidation, etching</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Stages</td>
                <td className="p-4">1</td>
                <td className="p-4 text-primary font-medium">2–3</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Defect removal</td>
                <td className="p-4">50–70%</td>
                <td className="p-4 text-primary font-medium">80–95%</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Time</td>
                <td className="p-4">3–5 hours</td>
                <td className="p-4 text-primary font-medium">5–10 hours</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Best for</td>
                <td className="p-4">Cars in good condition wanting a refresh or prep for coating</td>
                <td className="p-4 text-primary font-medium">Cars with years of accumulated damage, preparing for sale, or going under ceramic coating</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          If you're applying a{' '}
          <Link to="/services/ceramic-coating" className="text-primary hover:text-white transition-colors underline underline-offset-4">
            ceramic coating
          </Link>
          {' '}afterwards, paint correction beforehand is worth the investment. The ceramic coating locks in whatever the paint looks like when you apply it. Correct the paint first and the coating preserves that result for years. Apply the coating over defects and those defects are sealed in permanently.
        </p>

        {/* Section 7 — Pricing */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          Paint Correction Prices in Glasgow
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Price varies based on vehicle size, paint condition, and the number of stages required. Here's a realistic guide to what you should expect to pay in Glasgow:
        </p>

        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg overflow-hidden mb-8">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-[var(--color-border-dark)]">
                <th className="p-4 text-primary uppercase tracking-widest text-xs font-bold">Service</th>
                <th className="p-4 text-white uppercase tracking-widest text-xs font-bold">Price Range</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 divide-y divide-[var(--color-border-dark)]">
              <tr>
                <td className="p-4">
                  <strong className="text-white block">Enhancement Polish (1 stage)</strong>
                  <span className="text-xs text-gray-500">Light defects, surface swirls, gloss improvement</span>
                </td>
                <td className="p-4 font-bold text-white">£150 – £250</td>
              </tr>
              <tr>
                <td className="p-4">
                  <strong className="text-white block">Full Paint Correction (2 stage)</strong>
                  <span className="text-xs text-gray-500">Heavy swirls, scratches, oxidation: cut and refine stages</span>
                </td>
                <td className="p-4 font-bold text-white">£300 – £500</td>
              </tr>
              <tr>
                <td className="p-4">
                  <strong className="text-white block">Intensive Correction (3 stage)</strong>
                  <span className="text-xs text-gray-500">Severe damage: wet sand + cut + refine for near-full correction</span>
                </td>
                <td className="p-4 font-bold text-white">£500 – £800</td>
              </tr>
              <tr>
                <td className="p-4">
                  <strong className="text-white block">Paint Correction + Ceramic Coating</strong>
                  <span className="text-xs text-gray-500">Full correction then ceramic applied to protect the finish</span>
                </td>
                <td className="p-4 font-bold text-white">£600 – £1,200+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          SUVs and larger vehicles take longer than hatchbacks and small saloons, which moves the price towards the top of the range. All quotes follow an inspection. We won't give you a price until we've looked at the car in person or assessed photos.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          If you see a quote for a "full paint correction" on a large car for under £150, it's either a single-stage enhancement relabelled as correction, or the work will be rushed. Proper two-stage correction on a full-size car takes most of a working day. Price below a certain threshold means something is being skipped.
        </p>

        {/* Section 8 — Do you need it? */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          Does Your Car Need Paint Correction?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Wash and dry your car, then take it into direct sunlight or shine a detailing torch at a low angle across the bonnet or roof. If you see circular scratch patterns, a dull haze, or colour that looks washed out rather than deep and reflective, the paint is carrying defects that washing won't shift.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-5">
            <h3 className="text-white font-bold mb-3 text-base">Book paint correction if...</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex gap-2"><span className="text-primary">·</span> Heavy swirl marks across multiple panels</li>
              <li className="flex gap-2"><span className="text-primary">·</span> Paint is dull, faded, or oxidised</li>
              <li className="flex gap-2"><span className="text-primary">·</span> Scratches visible in daylight that polishing hasn't removed</li>
              <li className="flex gap-2"><span className="text-primary">·</span> Preparing to apply ceramic coating</li>
              <li className="flex gap-2"><span className="text-primary">·</span> Selling the car and want maximum value</li>
              <li className="flex gap-2"><span className="text-primary">·</span> High-value car you want fully restored</li>
            </ul>
          </div>
          <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-5">
            <h3 className="text-white font-bold mb-3 text-base">Consider an enhancement polish if...</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex gap-2"><span className="text-primary">·</span> Paint is in good condition with only mild defects</li>
              <li className="flex gap-2"><span className="text-primary">·</span> Car is relatively new with light surface swirls only</li>
              <li className="flex gap-2"><span className="text-primary">·</span> Budget is tighter and defects are minor</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6">
          If you're applying a ceramic coating regardless, go with full correction first. The coating lasts two to five years. Whatever the paint looks like when the ceramic goes on is what you're living with for the next few years.
        </p>

        {/* Section 9 — How long does it last */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-l-4 border-primary pl-4">
          How Long Do the Results Last?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Paint correction removes existing defects permanently. The swirl marks, scratches, and oxidation that get polished out are gone. New damage, however, starts accumulating the moment the car goes back on the road.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Without protection, the corrected paint will accumulate new swirl marks from washing and new contamination from Glasgow's roads within months. With a wax or sealant applied after correction, the results hold longer. With a ceramic coating, the corrected paint sits behind a sacrificial hard layer that repels contamination and resists light scratching. The correction lasts as long as the coating is maintained.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Cars that get a full correction followed by a{' '}
          <Link to="/services/ceramic-coating" className="text-primary hover:text-white transition-colors underline underline-offset-4">
            ceramic coating
          </Link>
          {' '}can go two to three years between correction sessions, provided the car is washed correctly. That's the right way to protect the investment in the work.
        </p>

        {/* Internal links */}
        <div className="bg-[#111] border border-[var(--color-border-dark)] rounded-lg p-6 mb-8">
          <h3 className="text-white font-bold mb-4">Related guides</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/journal/machine-polishing-glasgow" className="text-primary hover:text-white transition-colors">
                Machine Polishing Glasgow: What It Is and What It Fixes →
              </Link>
            </li>
            <li>
              <Link to="/journal/ceramic-coating-glasgow-is-it-worth-it" className="text-primary hover:text-white transition-colors">
                Ceramic Coating Glasgow: Is It Worth It? →
              </Link>
            </li>
            <li>
              <Link to="/journal/glasgow-weather-destroys-car-paint" className="text-primary hover:text-white transition-colors">
                How Glasgow's Weather Destroys Your Car Paint →
              </Link>
            </li>
            <li>
              <Link to="/journal/valeting-vs-detailing-glasgow" className="text-primary hover:text-white transition-colors">
                Valeting vs Detailing: What's the Difference? →
              </Link>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-white mt-12 mb-6 border-l-4 border-primary pl-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mb-12">
          {[
            {
              q: "How long does paint correction take?",
              a: "A two-stage full correction on a mid-size car takes five to eight hours. Smaller cars can be completed in four to six hours. SUVs and larger vehicles may take a full day. The time depends on paint condition, vehicle size, and the number of stages required. We always confirm the expected duration when we inspect the car."
            },
            {
              q: "Can paint correction damage my car?",
              a: "Not when done by someone who checks paint thickness before starting. The risk with paint correction is removing too much clear coat from panels that are already thin, either from age or previous respray work. We measure every panel with a paint depth gauge before picking up the machine. This protects the car and guides how aggressively we can work on each section."
            },
            {
              q: "Is paint correction worth it on an older car?",
              a: "Yes, provided the car has enough clear coat remaining. We've seen significant transformations on ten-year-old cars with heavy oxidation where the correction essentially gave the paint a second life. The paint depth gauge tells us what's possible before we commit. On cars with extremely thin or failing clear coat, we'll tell you honestly what correction can and can't achieve."
            },
            {
              q: "Do I need paint correction before ceramic coating?",
              a: "You don't need it, but it's the right approach if the paint has any defects worth correcting. Ceramic coating amplifies what the paint looks like when it's applied. If the paint has swirl marks and scratches before the coating goes on, the coating amplifies those too. If you're spending money on a ceramic coating, correcting the paint first protects that investment."
            },
            {
              q: "Do you offer paint correction across Glasgow?",
              a: "Yes. We cover all of Glasgow and surrounding areas including the West End, Bearsden, Newton Mearns, Southside, Milngavie, and beyond. All services are fully mobile. We come to your home or workplace with everything we need. No garage drop-off required."
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
          <h3 className="text-2xl font-heading mb-3 text-white">Book Paint Correction in Glasgow</h3>
          <p className="text-gray-400 mb-2">Send us a few photos or give us a call. We'll tell you exactly what stage of correction your paint needs and what results to expect.</p>
          <p className="text-primary font-bold text-lg mb-6">Fully mobile. We come to your door across Glasgow.</p>
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
              Paint Correction Service
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
