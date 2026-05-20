import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Reviews } from '../components/Reviews';

/* ─── SEO meta ─────────────────────────────────────────────── */
const serviceMeta: Record<string, { title: string; description: string }> = {
  'ceramic-coating': {
    title: 'Ceramic Coating Glasgow | Professional Mobile Application | Glasgow Car Valeting',
    description: 'Professional ceramic coating in Glasgow from £250. 9H hardness, 2-5 year protection. We come to your door. Fully mobile, fully insured. Call 0743 574 0502.',
  },
  'machine-polishing': {
    title: 'Machine Polishing Glasgow | Swirl & Scratch Removal | Glasgow Car Valeting',
    description: 'Expert machine polishing in Glasgow. Remove swirl marks, light scratches and oxidation and restore your paintwork to a flawless finish. Mobile service. Call 0743 574 0502.',
  },
  'paint-correction': {
    title: 'Paint Correction Glasgow | Restore Your Paintwork | Glasgow Car Valeting',
    description: 'Professional paint correction in Glasgow. Multi-stage correction that brings dull, scratched paintwork back to showroom condition. Fully mobile. Call 0743 574 0502.',
  },
  'full-valet': {
    title: 'Full Valet Glasgow | Complete Interior & Exterior Clean | Glasgow Car Valeting',
    description: 'Full car valet in Glasgow from £100. Deep clean inside and out: seats shampooed, paintwork decontaminated, hand wax applied. We come to you. Call 0743 574 0502.',
  },
  'interior-valet': {
    title: 'Interior Car Valet Glasgow | Deep Clean & Shampoo | Glasgow Car Valeting',
    description: 'Professional interior car valet in Glasgow. Seats shampooed, carpets extracted, dashboard detailed. Fully mobile. We come to your door. Call 0743 574 0502.',
  },
};

/* ─── FAQ JSON-LD schema ────────────────────────────────────── */
const serviceFaqs: Record<string, { q: string; a: string }[]> = {
  'ceramic-coating': [
    { q: 'How long does ceramic coating last in Glasgow?', a: 'A professionally applied ceramic coating lasts 2 to 5 years depending on the product grade. Our entry-level coating provides 2 years of protection. Our premium coating is rated for 5 years. Glasgow\'s climate, acid rain, road salt and tree sap, is why a coating matters more here than in drier parts of the UK.' },
    { q: 'How much does ceramic coating cost in Glasgow?', a: 'Our ceramic coating packages start from £250 for small cars. Mid-size cars typically fall in the £300 to £400 range. SUVs and larger vehicles range from £400 to £600+. The price includes a full decontamination wash, clay bar treatment and paint wipe-down before application.' },
    { q: 'Can ceramic coating be applied at my home in Glasgow?', a: 'Yes. We are a fully mobile service and come to your home, workplace or anywhere you can park the car off a public road. We bring all equipment including a water supply. You do not need a garage or driveway, just a covered or shaded area where possible.' },
    { q: 'Do I need paint correction before ceramic coating?', a: 'If your paintwork has swirl marks, scratches or oxidation, yes. A ceramic coating locks in whatever condition the paint is in. Any existing defects will still be visible under the coating\'s gloss. We offer a combined machine polish and ceramic coating package so the paint is flawless before the coating goes on.' },
    { q: 'How long does the ceramic coating application take?', a: 'A full ceramic coating application takes 4 to 8 hours depending on vehicle size and condition. This includes the prep work, application and initial cure time. We ask that the car is not driven for at least 12 hours after application, and kept dry for 48 hours.' },
  ],
  'machine-polishing': [
    { q: 'What defects does machine polishing remove?', a: 'Machine polishing removes swirl marks, light scratches, water spot etching, minor oxidation and buffer trails. It works by using a machine polisher and abrasive compounds to level the clear coat so that light reflects evenly across the panel. Deeper scratches that go through the clear coat cannot be removed by polishing alone.' },
    { q: 'How much does machine polishing cost in Glasgow?', a: 'A single-stage machine polish for a small car starts from £150. Full two-stage correction (cut and refine) for a standard car ranges from £200 to £350. SUVs and larger vehicles are priced higher. We provide a free quote after assessing the condition of your paint.' },
    { q: 'How long does machine polishing last?', a: 'The physical defect removal is permanent: once swirl marks are polished out, they are gone. However, your paint is left exposed and will collect new defects over time through washing and environmental exposure. We recommend applying a ceramic coating or quality paint sealant immediately after polishing to protect the corrected finish.' },
    { q: 'Will machine polishing thin my clear coat?', a: 'Machine polishing does remove a very thin layer of clear coat. A properly applied single-stage polish removes a minimal amount, far less than a scratch would. Most modern vehicles have enough clear coat depth for multiple polishes over their lifetime. We use a paint depth gauge before polishing to ensure there is enough clear coat to work safely.' },
    { q: 'Can machine polishing be done at my home?', a: 'Yes. We are fully mobile and bring all equipment to your location across Glasgow and surrounding areas including Bearsden, Newton Mearns, the West End and Milngavie. You simply need a suitable parking space where we can work around the vehicle.' },
  ],
  'paint-correction': [
    { q: 'What is the difference between paint correction and machine polishing?', a: 'Machine polishing is a single-stage process using a medium compound to improve gloss and remove light defects. Paint correction is a multi-stage process that can involve wet sanding, a heavy cut stage and a refining stage. Paint correction targets deeper defects and can restore up to 95% of the paint\'s original condition. It is the highest level of paintwork restoration short of a respray.' },
    { q: 'How much does paint correction cost in Glasgow?', a: 'Paint correction pricing depends on the number of correction stages needed. A single-stage enhancement starts from £150 for small cars. A full two-stage correction ranges from £300 to £500. An intensive three-stage correction for heavily damaged paint ranges from £500 to £1,200+ depending on vehicle size. All quotes are free and based on a paint depth assessment.' },
    { q: 'How long does paint correction last?', a: 'The correction itself is permanent. Once defects are removed from the clear coat they do not return unless the paint is re-damaged. However the corrected paint needs protection to stay in that condition. We always recommend applying a ceramic coating immediately after paint correction to lock in the results and protect against future damage.' },
    { q: 'Does paint correction remove deep scratches?', a: 'Paint correction can remove or significantly reduce clear coat scratches, specifically scratches that have not broken through to the base coat or primer. If you can feel a scratch with your fingernail, it has likely broken through the clear coat and correction alone will not fully eliminate it. During our assessment we will tell you exactly what is achievable before any work begins.' },
    { q: 'How long does paint correction take?', a: 'A single-stage enhancement on a standard car takes 3 to 5 hours. A full two-stage correction takes 6 to 10 hours. An intensive multi-stage correction on a larger vehicle can take a full day or more. We will confirm the expected time when we provide your quote after the initial assessment.' },
  ],
  'full-valet': [
    { q: 'What is included in a full valet?', a: 'A full valet covers both the exterior and interior. Exterior work includes a two-bucket hand wash, clay bar decontamination, wheel and tyre clean, glass clean and a hand-applied wax or sealant. Interior work includes a full vacuum, dashboard wipe-down, door card clean, seat shampoo on fabric seats or leather condition on leather seats, carpet extraction and a final fragrance treatment.' },
    { q: 'How long does a full valet take?', a: 'A full valet on a standard family car takes 4 to 6 hours. SUVs and larger vehicles may take 6 to 8 hours. The time depends on the condition of the car going in. A car that has not been cleaned in several months will take longer than one that receives regular maintenance washes.' },
    { q: 'How much does a full valet cost in Glasgow?', a: 'A full valet starts from £100 for small cars. Standard family cars are typically £120 to £160. SUVs and 4x4s range from £160 to £220+. If the interior is in particularly heavy condition with pet hair, deep staining or significant soiling, there may be an additional charge which we will confirm before starting.' },
    { q: 'Do you come to my home for a full valet?', a: 'Yes. We are a mobile service and come to your home or workplace across Glasgow and surrounding areas. We bring everything we need including water and a power supply. There is no need for you to take your car anywhere. We do all the work while you carry on with your day.' },
    { q: 'How often should I get a full valet?', a: 'For most Glasgow drivers, a full valet twice a year with regular maintenance washes in between works well. If you use your car daily, have pets, carry children or drive in heavy rain regularly, a quarterly full valet will keep the interior and exterior in the best condition year-round.' },
  ],
  'interior-valet': [
    { q: 'What does an interior valet include?', a: 'Our interior valet covers a full vacuum of all surfaces including under seats and in boot compartments, dashboard and console wipe-down, door card cleaning, window cleaning from the inside, a hot water extraction shampoo of all fabric seats and carpets, and a leather clean and condition on leather interiors. We finish with a protective fabric guard spray and a fresh fragrance treatment.' },
    { q: 'How much does an interior valet cost in Glasgow?', a: 'An interior valet starts from £60 for small cars. Standard cars are typically £70 to £90. SUVs and larger vehicles range from £90 to £130+. If there is heavy pet hair, significant staining or a long period since the last clean, there may be an additional charge which we will confirm upfront.' },
    { q: 'How long does the interior take to dry after shampooing?', a: 'After hot water extraction, fabric seats and carpets are damp for 2 to 4 hours under normal conditions. We use extraction equipment that removes the majority of moisture during the clean. We recommend leaving the windows slightly open while the car dries. If you need the car sooner, we can use air movers to speed up the drying process.' },
    { q: 'Can you remove pet hair from car interiors?', a: 'Yes. Pet hair removal is one of the most common requests we get from Glasgow dog owners. We use specialist rubber pet hair tools and a high-powered vacuum to remove embedded pet hair from seats, footwells and boot areas before shampooing. Heavy pet hair may be quoted at a slightly higher rate due to the additional time required.' },
    { q: 'Can you get rid of bad smells inside a car?', a: 'Yes. Most odours in cars come from bacteria living in the fabric of seats and carpets. Our hot water extraction shampoo removes the bacteria along with the dirt, which eliminates the odour at the source rather than masking it. For severe smoke odours or food spills, we may recommend an ozone treatment as an additional service.' },
  ],
};

/* ─── Rich page content ─────────────────────────────────────── */
interface ServiceSection {
  heading: string;
  body: string;
}

interface PricingRow {
  vehicle: string;
  price: string;
  includes: string;
}

interface ServiceContent {
  intro: string;
  why: string;
  sections: ServiceSection[];
  pricing: PricingRow[];
  included: string[];
}

const serviceContent: Record<string, ServiceContent> = {
  'ceramic-coating': {
    intro: `Ceramic coating is the most effective long-term paint protection available for any vehicle. Unlike wax, which sits on top of the paint and washes off within weeks, a ceramic coating forms a chemical bond with the clear coat, creating a semi-permanent layer of protection that repels water, blocks UV damage, resists bird drop etching and makes every future wash faster and safer.

Glasgow's climate makes ceramic coating particularly valuable. Acid rain, industrial fallout from the M8 corridor, tree sap from the West End and Bearsden, and months of road salt from November through March all attack bare paint continuously. A properly applied ceramic coating stops that damage before it starts.

Our operators are Autoglym registered and apply professional-grade coatings rated for 2 to 5 years of protection. Every application includes a full decontamination wash, clay bar treatment and panel wipe-down before a single drop of coating touches the paint. We are fully mobile across Glasgow and surrounding areas. We come to your home, your office or anywhere you can safely park the car.`,
    why: `Glasgow drivers choose ceramic coating over wax or paint sealant for one simple reason: longevity. A quality wax lasts 6 to 12 weeks. A paint sealant lasts 4 to 6 months. A professional ceramic coating lasts 2 to 5 years. Over a three-year period, the cost of repeated wax applications exceeds the cost of a single coating. None of those wax applications provide the chemical resistance, scratch resistance or UV protection that ceramic delivers.`,
    sections: [
      {
        heading: 'What ceramic coating actually does to your paint',
        body: `A ceramic coating is a liquid polymer that chemically bonds with your vehicle's factory clear coat when applied correctly. Once cured, it creates a hardened protective shell with a rating of 9H on the pencil hardness scale, harder than your paint and softer than glass. This hardness means light contaminants such as dust, bird droppings and industrial fallout sit on top of the coating rather than bonding with your paint.

The hydrophobic properties of a ceramic coating cause water to bead and roll off the surface, taking dirt with it. This self-cleaning effect means your car stays cleaner for longer between washes, and when you do wash it, a two-bucket hand wash is all that is needed. The days of clay bars, polish and wax after every wash are over once a coating is applied.`,
      },
      {
        heading: 'Our ceramic coating process',
        body: `Every ceramic coating we apply follows a strict preparation process. Rushing any stage produces an uneven, shorter-lasting result. That is why our process takes a full day.

We start with a thorough two-bucket hand wash to remove loose contaminants. The paint then goes through a chemical decontamination stage using an iron fallout remover and tar remover to dissolve bonded contamination. A clay bar treatment follows, physically removing any remaining bonded particles that the chemicals could not lift. The panels are then wiped with an isopropyl alcohol-based panel wipe to remove any wax, oil or polish residue from the surface.

Only once the paint is perfectly clean and bare do we apply the coating. We work panel by panel, applying the liquid polymer with an applicator block and buffing off the flash residue before moving on. The coating is then left to cure for a minimum of 12 hours before the vehicle is moved, and must stay dry for 48 hours for a full cure.`,
      },
    ],
    pricing: [
      { vehicle: 'Small car (e.g. VW Polo, Mini, Audi A1)', price: 'From £250', includes: '2-year entry coating + prep' },
      { vehicle: 'Standard car (e.g. BMW 3 Series, Audi A4, VW Golf)', price: 'From £300', includes: '2-year entry coating + prep' },
      { vehicle: 'SUV / 4x4 (e.g. BMW X5, Range Rover Sport)', price: 'From £400', includes: '2-year entry coating + prep' },
      { vehicle: 'Premium 5-year coating (any vehicle)', price: '+£100-200', includes: 'Upgraded coating rated 5 years' },
    ],
    included: [
      'Full two-bucket hand wash',
      'Iron fallout and tar remover decontamination',
      'Clay bar treatment',
      'Panel wipe with IPA solution',
      'Professional-grade ceramic coating application',
      'Initial cure time on site',
      '12-month aftercare advice',
    ],
  },

  'machine-polishing': {
    intro: `Machine polishing is the most effective way to restore clarity to paintwork that has been dulled by swirl marks, light scratches, water spot etching and oxidation. Unlike hand polishing, a machine polisher uses a rotating or oscillating pad to work an abrasive compound into the clear coat in a consistent, controlled way, removing a microscopic layer of clear coat to level the surface and eliminate the defects living within it.

The result is paint that reflects light cleanly again. Swirl marks vanish. The dull, hazy look caused by automatic car washes and incorrect hand washing disappears. Under sunlight, the paint looks deep, wet and sharp, the way it did when the car left the factory.

Glasgow cars suffer from swirl marks more than almost anywhere in the UK. The wet weather means people wash their cars frequently, often using incorrect techniques or automatic car washes that introduce new scratches with every pass. Our mobile machine polishing service corrects the damage and sets the paint up for long-term protection.`,
    why: `Most Glasgow car owners do not realise their car has swirl marks until they see it in direct sunlight. Those circular scratching patterns across the bonnet and roof are not from stone chips or parking scrapes. They come from every wash the car has ever had. Chamois leathers, automatic car wash brushes, dirty sponges and poor wash technique all deposit fine scratches in the clear coat over time.

Machine polishing removes those scratches permanently. One session corrects years of washing damage and restores the paint to a condition that cannot be achieved any other way. Pair the correction with a ceramic coating and the paint will stay in that condition for years.`,
    sections: [
      {
        heading: 'What machine polishing can and cannot fix',
        body: `Machine polishing works within the clear coat layer of your vehicle's paint. The clear coat is typically 40 to 100 microns thick on a new vehicle. Polishing removes a controlled amount of this layer to eliminate defects that live within it.

Swirl marks, light scratches, water spot etching, minor oxidation, buffer trails and hologram marks from poor machine polishing are all within the correction zone. A single-stage light polish can remove 50 to 70 percent of these defects. A two-stage cut-and-refine process removes 85 to 95 percent.

Scratches that break through the clear coat into the base coat or primer cannot be removed by polishing. If you can feel a scratch with your fingernail, it has broken through the clear coat. Stone chips that expose the base coat also fall outside what polishing can fix. We assess every vehicle before starting and will always tell you exactly what is achievable.`,
      },
      {
        heading: 'Our machine polishing process',
        body: `We begin with a full decontamination wash, the same prep process used before ceramic coating. A contaminated panel holds abrasive particles that cause more damage during polishing, so the paint must be perfectly clean before a pad touches it.

We then measure paint depth on each panel using a paint depth gauge. This tells us exactly how much clear coat is present and confirms it is safe to polish. On panels with very thin clear coat, we reduce the aggressiveness of the process to protect the paint.

A test panel is always polished first. We work a small area and inspect it under a strong inspection light before committing to the full vehicle. This confirms the correct pad and compound combination for your specific paint.

We then work systematically across the vehicle, panel by panel, using the appropriate machine speed, pad pressure and compound. Once the cutting stage is complete, we refine with a softer pad and finishing polish to remove any haze left by the compound and maximise gloss. The completed panels are wiped with an IPA panel wipe to reveal the true corrected finish before protection is applied.`,
      },
    ],
    pricing: [
      { vehicle: 'Small car (e.g. VW Polo, MINI, Ford Fiesta)', price: 'From £150', includes: 'Single-stage polish + panel wipe' },
      { vehicle: 'Standard car (e.g. BMW 3 Series, VW Golf, Audi A4)', price: 'From £200', includes: 'Single-stage polish + panel wipe' },
      { vehicle: 'Two-stage cut and refine, standard car', price: 'From £300', includes: 'Heavy cut + refine + panel wipe' },
      { vehicle: 'SUV / 4x4 (e.g. BMW X5, Range Rover)', price: 'From £350', includes: 'Pricing varies by stage count' },
    ],
    included: [
      'Full decontamination wash before polishing',
      'Paint depth measurement on all panels',
      'Test panel before committing to full vehicle',
      'Machine polish, single or multi-stage',
      'IPA panel wipe to reveal corrected finish',
      'Inspection under LED lighting',
      'Optional ceramic coating or sealant to protect results',
    ],
  },

  'paint-correction': {
    intro: `Paint correction is the highest level of paintwork restoration available outside of a body shop respray. It is a multi-stage machine process that targets deeper paint defects, heavy swirl marks, deep clear coat scratches, oxidation, water spot etching, bird drop etching and hologram marks, and systematically removes them to bring the paint back to a condition that exceeds its factory finish.

The word "correction" is used precisely. Unlike a polish that improves the surface, paint correction removes defects entirely from within the clear coat. A properly executed full correction on a Glasgow car will eliminate 80 to 95 percent of visible defects, leaving paint that looks cleaner, sharper and more reflective than it has in years.

We bring the full correction process to your door. No transport to a body shop. No courtesy car required. Our operators work on your vehicle at your home or workplace and return it corrected, protected and ready to hold that condition for years with the right maintenance.`,
    why: `Paint correction is the right choice when the damage has gone beyond what a single-stage polish can address. If your car has visible scratches in sunlight, a hazy or dull look that washing cannot shift, oxidation that makes the paint feel rough, or etching from bird drops or industrial fallout, a polish will improve things but correction will fix them.

It is also the essential first step before a ceramic coating on any car with imperfect paint. A ceramic coating magnifies whatever is underneath it. Applying a coating over scratched paint locks those scratches in under a high-gloss layer where they become more visible, not less. Correction first, coating second is the only professional approach.`,
    sections: [
      {
        heading: 'The three stages of paint correction',
        body: `Paint correction is graded into three stages based on the severity of the defects and the depth of correction required.

Stage 1 (Enhancement Polish): A single-stage process using a medium compound and a cutting pad. This removes 50 to 70 percent of light defects and significantly improves gloss and clarity. It is appropriate for newer vehicles with light swirling and minor washing scratches.

Stage 2 (Full Correction): A two-stage process using a heavier cutting compound followed by a refining polish. This removes 80 to 90 percent of defects including heavier swirls, deeper washing scratches and minor water spot etching. This is the most common correction level for Glasgow cars in typical condition.

Stage 3 (Intensive Correction): A multi-stage process that may include wet sanding on particularly damaged panels before the machine stages. This achieves up to 95 percent defect removal and is reserved for vehicles with severe paint damage, long-neglected paintwork or show car preparation.`,
      },
      {
        heading: 'Why Glasgow paint needs correction more than most',
        body: `Glasgow's combination of wet weather, industrial fallout and widespread use of automatic car washes creates ideal conditions for paint damage to accumulate quickly.

Automatic car washes are the biggest single contributor to paint defects in Glasgow. The brushes in a standard automatic car wash are heavily contaminated with dirt from every car that has gone through before yours. Each pass deposits fine scratches across your clear coat. Regular use of an automatic car wash over two or three years can leave paint that looks visibly aged and dull even on a relatively new vehicle.

The city's damp air also contributes to water spot etching. Rainwater in Glasgow contains dissolved minerals and dissolved pollutants from the urban environment. When that water evaporates on a sun-warmed panel, it leaves a mineral deposit behind that etches into the clear coat over time. In areas with heavy tree cover, the West End, Bearsden, Milngavie, tree sap falling onto the paint causes chemical etching that polish cannot reach.`,
      },
    ],
    pricing: [
      { vehicle: 'Stage 1 enhancement, small car', price: 'From £150', includes: 'Single-stage polish, 50-70% defect removal' },
      { vehicle: 'Stage 2 full correction, standard car', price: 'From £300', includes: 'Cut + refine, 80-90% defect removal' },
      { vehicle: 'Stage 2 full correction, SUV / 4x4', price: 'From £450', includes: 'Cut + refine, 80-90% defect removal' },
      { vehicle: 'Stage 3 intensive correction', price: 'From £500', includes: 'Multi-stage, up to 95% defect removal' },
    ],
    included: [
      'Full paint depth measurement before any work begins',
      'Decontamination wash and clay bar prep',
      'Test panel to confirm correction level',
      'Multi-stage machine correction (stage count as agreed)',
      'Panel wipe to reveal true corrected finish',
      'Inspection under LED lighting on every panel',
      'Ceramic coating applied on request to lock in results',
    ],
  },

  'full-valet': {
    intro: `A full valet is a complete, professional clean of your car from top to bottom, exterior and interior, carried out by hand using professional products and techniques. It is not a drive-through wash. Every surface is cleaned individually, decontaminated and protected. The result is a car that looks and smells completely renewed, inside and out.

Glasgow cars need a proper full valet more often than drivers realise. The city's damp climate means moss and algae build up in seals and sills over winter. Road salt from November through March gets embedded in wheel arches, door shuts and carpet fibres. The combination of urban grime, industrial fallout and frequent rainfall leaves paintwork with a layer of bonded contamination that no jet wash removes.

We are fully mobile. We come to your home or workplace anywhere across Glasgow, including Bearsden, Newton Mearns, the West End, Southside and Milngavie, and carry out the full valet at your location. No queuing at a car wash, no driving to a detailing studio. We do all the work while you carry on with your day.`,
    why: `A full valet is what your car needs when it has not had a professional clean in several months, when it is being prepared for sale, when you want to refresh it ahead of a long journey or special event, or when the interior has accumulated months of everyday use, crumbs in seats, dust on the dash, grime in door pockets.

It is also the practical choice for Glasgow drivers who do not have time to manage separate exterior and interior cleans. A single full valet session covers everything in one visit and brings the car back to a standard that maintenance washing can then keep up easily.`,
    sections: [
      {
        heading: 'What is included in a full valet',
        body: `Our full valet covers every surface of the car, inside and out. On the exterior we carry out a pre-rinse to knock off loose dirt, followed by a two-bucket hand wash with professional car shampoo. The wheels and wheel arches receive a dedicated clean with a wheel cleaner and brushes. Tyres are dressed. Door shuts and sills are cleaned individually. The glass is cleaned with a streak-free window cleaner.

Once the exterior is clean, we carry out a chemical decontamination using an iron fallout remover to dissolve brake dust and bonded metallic particles from the paint. A clay bar treatment follows to physically lift any remaining bonded contamination. The paint is then finished with a hand-applied wax or sealant to add protection and gloss.

On the interior we begin with a thorough vacuum of all surfaces, getting into every seat rail, footwell corner and boot crevice. Fabric seats are hot-water extracted and shampooed. Leather seats are cleaned and conditioned. Carpets are extracted. All hard surfaces, dashboard, door cards, centre console, vents, are cleaned and dressed. The interior glass is cleaned. The session closes with a fresh fragrance treatment.`,
      },
      {
        heading: 'How we do it differently',
        body: `Most car cleaning services in Glasgow use the same products and shortcuts on every car. We do not. Before we start, we check the paint type, interior material and condition of the car so we can use the right products throughout.

On leather interiors, we use a dedicated leather cleaner and a pH-neutral conditioner, not a general-purpose interior spray that can dry leather out over time. On alloy wheels, we choose the correct wheel cleaner strength based on whether the wheels are painted, bare or polished, so there is no risk of chemical damage to the finish.

We also carry out the full decontamination and clay bar stage on every full valet. Most valeters skip this. The result is that our exterior finish has genuine depth and the wax bonds to a clean surface rather than sitting on top of contamination, so it lasts weeks longer.`,
      },
    ],
    pricing: [
      { vehicle: 'Small car (e.g. VW Polo, MINI, Ford Fiesta)', price: 'From £100', includes: 'Full exterior + interior as described' },
      { vehicle: 'Standard car (e.g. BMW 3 Series, VW Golf, Seat Leon)', price: 'From £120', includes: 'Full exterior + interior as described' },
      { vehicle: 'Large car / estate (e.g. BMW 5 Series, Volvo V90)', price: 'From £150', includes: 'Full exterior + interior as described' },
      { vehicle: 'SUV / 4x4 (e.g. BMW X5, Range Rover, Audi Q7)', price: 'From £180', includes: 'Full exterior + interior as described' },
    ],
    included: [
      'Two-bucket hand wash with professional shampoo',
      'Wheel and arch clean with dedicated wheel cleaner',
      'Iron fallout decontamination and clay bar treatment',
      'Hand-applied wax or sealant',
      'Full interior vacuum including boot',
      'Fabric seat and carpet hot-water extraction shampoo',
      'Leather clean and condition (leather interiors)',
      'Dashboard, door cards and console clean and dress',
      'Interior and exterior glass clean',
      'Tyre dressing and fresh fragrance treatment',
    ],
  },

  'interior-valet': {
    intro: `An interior valet is a thorough, professional deep clean of your car's cabin. Not a quick hoover and a wipe-down, a proper interior valet extracts years of embedded dirt from seat fibres, carpets and headliners, removes the bacteria causing stale odours, treats leather properly and leaves every surface in the cabin cleaned, protected and fresh.

Glasgow drivers tend to neglect interior cleaning more than exterior cleaning because the results are not immediately visible from outside. But the interior is where you spend your time. Breathing recirculated air inside a cabin that has not been properly cleaned in months means breathing bacteria, dust mite debris, pet dander and mould spores that live in damp seat fabric and carpet. Glasgow's climate makes this worse than in drier cities, damp clothing, wet shoes and high ambient humidity mean interior fabrics stay slightly damp for longer, giving bacteria the conditions they need to grow.

Our mobile interior valet service comes to your home or workplace. The car does not need to go anywhere. We bring our hot water extraction machine, specialist cleaning products and all equipment to your location and carry out the full interior clean at your door.`,
    why: `An interior valet is the right call when you cannot remember the last time the seats were properly cleaned, when there is a persistent smell that air fresheners have not shifted, when you have recently had the car with children or pets, when you are preparing the car for sale, or simply when you want the satisfaction of a truly clean cabin.

It is also a practical choice ahead of winter. Deep cleaning the interior in October removes the summer's accumulation of dust, sunscreen residue and organic material that would otherwise sit in the fabric through months of damp weather. Starting winter with a clean, fabric-sealed interior makes a noticeable difference to how the cabin smells and feels through the colder months.`,
    sections: [
      {
        heading: 'What an interior valet includes',
        body: `We begin with a systematic vacuum of the entire interior, every seat in every position, all footwells, under all seats, boot compartment, boot liner and any cargo areas. We use crevice tools and detailing brushes to get into seat rails, between cushions and into the corners of door pockets where a standard vacuum cannot reach.

All hard surfaces are next. We clean the dashboard, instrument binnacle, infotainment screen, centre console, gear selector surround, door cards, door handles, grab handles, roof lining and pillars using appropriate products for each surface. We do not spray an interior dressing and wipe, we clean first, then protect.

Fabric seats and carpets are cleaned with our hot water extraction machine. We apply a pre-treatment shampoo to lift the dirt from the fibres, then extract it using hot water and high-suction. This removes the bacteria, allergens and bonded soiling that vacuuming alone cannot address. The result is a genuinely clean fabric rather than a freshened one.

Leather seats receive a dedicated clean using a pH-neutral leather cleaner, followed by a conditioner that keeps the leather supple and prevents the cracking that comes from dried-out leather left untreated. Interior glass is cleaned with a streak-free solution applied to the glass itself, not sprayed into the cabin. The session finishes with a fabric guard spray on all fabric surfaces and a fresh fragrance treatment.`,
      },
      {
        heading: 'Dealing with common Glasgow interior problems',
        body: `Pet hair is one of the most frequent requests we receive from Glasgow dog owners. Standard vacuuming cannot remove embedded pet hair from seat fabric. We use specialist rubber pet hair removal tools that generate static to lift the hair from fibres before vacuuming, followed by full hot water extraction to remove what the tools lift.

Smoke odour is another common request. Tobacco and cannabis smoke bonds to fabric fibres and hard surfaces and cannot be removed with deodorising sprays. Our extraction process removes the bonded compounds from the fabric. For heavy smoking interiors, we can also provide an ozone treatment as an additional service to eliminate residual odour from surfaces the extraction machine cannot reach.

Mould in door seals and boot areas is common on Glasgow cars that sit in damp conditions. We treat active mould with an anti-mould solution before cleaning the affected area, then dry the surface thoroughly to prevent regrowth.`,
      },
    ],
    pricing: [
      { vehicle: 'Small car (e.g. VW Polo, MINI, Ford Fiesta)', price: 'From £60', includes: 'Full interior valet as described' },
      { vehicle: 'Standard car (e.g. BMW 3 Series, VW Golf, Seat Leon)', price: 'From £75', includes: 'Full interior valet as described' },
      { vehicle: 'Large car / estate', price: 'From £90', includes: 'Full interior valet as described' },
      { vehicle: 'SUV / 4x4 (e.g. BMW X5, Range Rover)', price: 'From £110', includes: 'Full interior valet as described' },
    ],
    included: [
      'Full deep vacuum including all crevices and boot',
      'Dashboard, console and door card clean and dress',
      'Interior glass clean',
      'Fabric seat hot-water extraction shampoo',
      'Carpet extraction shampoo',
      'Leather clean and condition (leather interiors)',
      'Fabric guard protective spray on all fabric surfaces',
      'Headliner and pillar clean',
      'Fresh fragrance treatment',
    ],
  },
};

/* ─── Component ─────────────────────────────────────────────── */
export function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const meta = serviceId ? serviceMeta[serviceId] : null;
  const content = serviceId ? serviceContent[serviceId] : null;
  const faqs = serviceId ? serviceFaqs[serviceId] : null;

  const serviceName = serviceId
    ?.split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ') || 'Service';

  const title = meta?.title || `${serviceName} Glasgow | Glasgow Car Valeting`;
  const description = meta?.description || `Premium ${serviceName.toLowerCase()} in Glasgow. Fully mobile. We come to your door. Call 0743 574 0502.`;

  // Build FAQ JSON-LD
  const faqSchema = faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  if (!content) {
    // Fallback for unknown service IDs, noindex
    return (
      <main className="pt-32 pb-24 bg-background-dark min-h-screen text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-8">Browse our available services below.</p>
          <Link to="/" className="bg-primary hover:bg-white text-black px-8 py-4 font-bold tracking-widest text-xs uppercase inline-block transition-colors">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background-dark text-white">
      <SEOHead title={title} description={description} canonical={`/services/${serviceId}`} />

      {/* FAQ Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="pt-32 pb-16 bg-background-dark text-white text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <span className="text-primary text-xs uppercase tracking-widest mb-4 block">Glasgow Car Valeting</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{serviceName} in Glasgow</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {meta?.description}
          </p>
          <a
            href="tel:07435740502"
            className="bg-primary hover:bg-white text-black px-8 py-4 font-bold tracking-widest text-xs uppercase inline-block transition-colors"
          >
            Call 0743 574 0502
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {content.intro.split('\n\n').map((para, i) => (
            <p key={i} className="text-gray-300 text-lg leading-relaxed mb-6">{para.trim()}</p>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="py-16 bg-zinc-900 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Glasgow drivers choose this service</h2>
          {content.why.split('\n\n').map((para, i) => (
            <p key={i} className="text-gray-300 text-lg leading-relaxed mb-4">{para.trim()}</p>
          ))}
        </div>
      </section>

      {/* Detailed sections */}
      {content.sections.map((section, i) => (
        <section key={i} className={`py-16 border-b border-white/10 ${i % 2 === 0 ? '' : 'bg-zinc-900'}`}>
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-white mb-6">{section.heading}</h2>
            {section.body.split('\n\n').map((para, j) => (
              <p key={j} className="text-gray-300 text-lg leading-relaxed mb-4">{para.trim()}</p>
            ))}
          </div>
        </section>
      ))}

      {/* What's included */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-white mb-8">What is included</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.included.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <span className="text-primary font-bold mt-0.5">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-zinc-900 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-white mb-4">Pricing</h2>
          <p className="text-gray-400 mb-8">All prices are guide prices. We provide a confirmed quote before any work begins.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 pr-6 text-white font-semibold text-sm uppercase tracking-wide">Vehicle</th>
                  <th className="py-3 pr-6 text-primary font-semibold text-sm uppercase tracking-wide">Price</th>
                  <th className="py-3 text-white font-semibold text-sm uppercase tracking-wide">Includes</th>
                </tr>
              </thead>
              <tbody>
                {content.pricing.map((row, i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="py-4 pr-6 text-gray-300">{row.vehicle}</td>
                    <td className="py-4 pr-6 text-primary font-bold">{row.price}</td>
                    <td className="py-4 text-gray-400 text-sm">{row.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* FAQs */}
      {faqs && (
        <section className="py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-white mb-10">Frequently asked questions</h2>
            <div className="space-y-8">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/10 pb-8 last:border-0 last:pb-0">
                  <h3 className="text-white font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-zinc-900 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Get a free quote today</h2>
          <p className="text-gray-300 mb-8">Fully mobile across Glasgow, we come to your home or workplace. No garage drop-off required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07435740502"
              className="bg-primary hover:bg-white text-black px-8 py-4 font-bold tracking-widest text-xs uppercase transition-colors"
            >
              Call 0743 574 0502
            </a>
            <Link
              to="/journal"
              className="border border-white/30 hover:border-white text-white px-8 py-4 font-bold tracking-widest text-xs uppercase transition-colors"
            >
              Read Our Guides
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
