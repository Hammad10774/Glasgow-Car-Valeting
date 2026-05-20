import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Reviews } from '../components/Reviews';

/* ─── SEO meta ─────────────────────────────────────────────── */
const locationMeta: Record<string, { title: string; description: string }> = {
  'west-end-car-valeting': {
    title: 'Car Valeting West End Glasgow | Mobile Service at Your Door | Glasgow Car Valeting',
    description: 'Premium mobile car valeting in the West End of Glasgow. Serving Hyndland, Dowanhill, Hillhead and Partick. We come to you. Fully insured. Call 0743 574 0502.',
  },
  'bearsden-car-valeting': {
    title: 'Car Valeting Bearsden | Premium Mobile Detailing | Glasgow Car Valeting',
    description: 'Professional mobile car valeting and detailing in Bearsden. We come to your home or workplace. Ceramic coating, machine polishing, full valet. Call 0743 574 0502.',
  },
  'newton-mearns-car-valeting': {
    title: 'Car Valeting Newton Mearns | Mobile Detailing Service | Glasgow Car Valeting',
    description: 'Premium mobile car valeting in Newton Mearns. Expert detailing delivered to your door: full valet, ceramic coating and more. Fully insured. Call 0743 574 0502.',
  },
  'southside-car-valeting': {
    title: 'Mobile Car Valeting Southside Glasgow | Glasgow Car Valeting',
    description: 'Professional mobile car valeting on the Southside of Glasgow. Serving Shawlands, Pollokshields, Giffnock and surrounding areas. We come to you. Call 0743 574 0502.',
  },
  'milngavie-car-valeting': {
    title: 'Car Detailing Milngavie | Premium Mobile Valeting | Glasgow Car Valeting',
    description: 'Expert mobile car detailing and valeting in Milngavie. Ceramic coating, machine polishing, full valet, all delivered to your door. Fully insured. Call 0743 574 0502.',
  },
};

/* ─── FAQs per location ─────────────────────────────────────── */
const locationFaqs: Record<string, { q: string; a: string }[]> = {
  'west-end-car-valeting': [
    { q: 'Do you offer mobile car valeting in the West End of Glasgow?', a: 'Yes. We cover the entire West End including Hyndland, Dowanhill, Hillhead, Kelvinside, Partick and Broomhill. We come to your home, tenement close with street parking or workplace. You do not need a driveway or garage. A legal parking space where we can work around the vehicle is all that is needed.' },
    { q: 'Why do West End cars suffer from more tree sap damage?', a: 'The West End of Glasgow has one of the densest concentrations of mature trees in any urban area in Scotland. Lime trees, horse chestnuts and sycamores are common along residential streets throughout Hyndland, Kelvinside and Dowanhill. These trees produce a sticky honeydew secretion, a sugary sap that drops onto parked cars below. If left for more than a few days in warm weather, sap etches into the clear coat and cannot be removed by washing alone. Machine polishing or paint correction is required.' },
    { q: 'What is the best paint protection for a car parked on the street in Hyndland?', a: 'For a car parked on a residential street under trees, a professional ceramic coating is the most effective protection available. The coating creates a hardened, hydrophobic surface that tree sap cannot bond with as aggressively as it does with bare paint. When sap lands on a coated car, it is far easier to remove with a gentle clean before it has time to etch. We apply ceramic coatings at your door across the West End.' },
    { q: 'Can you carry out a full valet at a tenement address in the West End?', a: 'Yes. We regularly work in tenement streets across Hyndland, Dowanhill and Hillhead. We bring our own water supply so there is no need for access to a garden tap. A standard parking space on the street is sufficient for us to carry out a full valet or interior deep clean.' },
    { q: 'How often should I get my car valeted if I park outside in the West End?', a: 'For cars that live on the street in the West End, a full valet twice a year keeps the paintwork and interior in good condition. In practice, we recommend one at the start of spring to remove the winter salt and grime, and one in October before the worst of the autumn leaves and sap season. Between full valets, a maintenance wash every 4 to 6 weeks prevents grime from bonding to the paint.' },
  ],
  'bearsden-car-valeting': [
    { q: 'Do you cover Bearsden for mobile car valeting?', a: 'Yes. Bearsden is one of our most active areas. We regularly work throughout Bearsden and the surrounding areas of Milngavie, Westerton, Canniesburn and Boclair. We come to your home driveway or workplace and carry out the full service at your location. Most Bearsden properties have driveways which makes the working conditions ideal.' },
    { q: 'Why do Bearsden cars need ceramic coating more than city centre cars?', a: 'Bearsden\'s tree coverage is exceptional. The mature residential streets throughout Bearsden have large canopy trees, limes, sycamores, horse chestnuts and oaks, all of which produce sap, aphid honeydew and seed debris for months of the year. Bearsden cars parked on driveways under trees can accumulate sap within hours during peak season. A ceramic coating is the most effective way to prevent the sap from etching the clear coat, and is far cheaper than the cost of paint correction to address the damage it causes.' },
    { q: 'What services do you offer in Bearsden?', a: 'We offer our full range of services in Bearsden including professional ceramic coating, machine polishing, paint correction, full valet and interior valet. Paint correction is particularly in demand from Bearsden owners of premium vehicles (BMWs, Range Rovers, Porsches and Audis) where the paint condition reflects directly on the vehicle\'s value and the owner\'s standards.' },
    { q: 'How much does mobile car valeting cost in Bearsden?', a: 'Our pricing in Bearsden is the same as our standard pricing. An interior valet starts from £60 for small cars. A full valet starts from £100. Machine polishing starts from £150. Ceramic coating starts from £250. We provide a free quote before any work begins and there are no travel surcharges for Bearsden.' },
    { q: 'Do you offer ceramic coating for Porsche and BMW in Bearsden?', a: 'Yes. We work on premium vehicles regularly in Bearsden. Our operators are trained in paint depth measurement and pre-coating assessment to ensure the coating is applied correctly on high-value paintwork. We understand the paint systems on vehicles from BMW, Porsche, Audi, Mercedes and Range Rover and approach them with the appropriate care and products.' },
  ],
  'newton-mearns-car-valeting': [
    { q: 'Do you cover Newton Mearns for mobile car valeting?', a: 'Yes. Newton Mearns is a core part of our service area. We cover the full postcode area including Eastwood, Mearns, Waterfoot and surrounding streets. Most Newton Mearns properties have driveways which gives us ideal conditions to work and complete all services to the highest standard.' },
    { q: 'What is the most popular car detailing service in Newton Mearns?', a: 'Ceramic coating and paint correction are our most requested services in Newton Mearns. The area has a high concentration of premium vehicles. BMW, Mercedes, Audi, Range Rover and Porsche are all common, and their owners want a professional-grade service that matches the vehicle. Ceramic coating in particular is popular as a long-term protection solution that keeps the car looking new between our visits.' },
    { q: 'Why is mobile car valeting particularly useful in Newton Mearns?', a: 'Newton Mearns is a suburban area without the same density of car cleaning options as the city centre. The nearest quality detailing studios are a significant drive away. Our mobile service removes that inconvenience entirely. We come to your driveway and carry out the full service while you work from home, spend time with family or simply get on with your day. There is no drop-off, no collection and no wasted journey.' },
    { q: 'Do Newton Mearns cars suffer from paint damage?', a: 'Newton Mearns experiences the same damp climate and road salt issues as the rest of the greater Glasgow area. Winter road treatments from November through March leave salt deposits on wheel arches and paint that accelerate corrosion if not removed properly. The area\'s suburban roads also produce more stone chip exposure than city streets. Regular maintenance washing, annual paint protection renewal and periodic machine polishing keep the paint in good condition over the vehicle\'s lifetime.' },
    { q: 'Can you carry out paint correction on a Range Rover in Newton Mearns?', a: 'Yes. Range Rover paint correction is one of our specialist areas. Range Rover vehicles, particularly Defender, Sport and Vogue models, use specific paint finishes that require the right products and technique. We carry out a paint depth assessment before any correction work and confirm the safe working range for your specific paint system. Full paint correction for a Range Rover Sport or Vogue in Newton Mearns is typically quoted between £450 and £800 depending on the correction stage required.' },
  ],
  'southside-car-valeting': [
    { q: 'Do you cover the Southside of Glasgow for mobile car valeting?', a: 'Yes. We cover the full Southside of Glasgow including Shawlands, Pollokshields, Giffnock, Newlands, Cathcart, Langside, Mount Florida, Kings Park and surrounding areas. We come to your home or workplace across the Southside and carry out the full service at your location.' },
    { q: 'What areas on the Southside do you cover?', a: 'We cover all Southside postcodes including G41 (Pollokshields), G43 (Shawlands), G44 (King\'s Park, Mount Florida), G45 (Castlemilk), G46 (Giffnock, Thornliebank) and surrounding areas. If you are unsure whether we cover your specific postcode, call 0743 574 0502 and we will confirm immediately.' },
    { q: 'What is the most common car cleaning request on the Southside?', a: 'Interior valeting and full valets are most common on the Southside, particularly among family car owners and those with pets. The Southside has a large population of families who use their cars daily for school runs, commuting and weekend activities. Interior cleaning (seat shampooing, carpet extraction, pet hair removal) is the most frequently requested service. We also carry out a significant number of ceramic coatings on the Southside for owners who want long-term paint protection without repeated waxing.' },
    { q: 'Can you remove pet hair from car seats on the Southside?', a: 'Yes. Pet hair removal is one of the most common interior requests we receive from Southside clients. We use specialist rubber pet hair tools to lift embedded hair from seat fabric before using hot water extraction to complete the clean. Heavy pet hair coverage takes additional time and we may quote slightly higher for heavily affected interiors. We always confirm the price before starting.' },
    { q: 'Is there a minimum spend for mobile valeting on the Southside?', a: 'No minimum spend. Our interior valet starts from £60 for small cars on the Southside, the same as anywhere else in our service area. We do not charge travel fees for the Southside. We quote per service based on vehicle size and condition, all confirmed before any work begins.' },
  ],
  'milngavie-car-valeting': [
    { q: 'Do you offer mobile car valeting in Milngavie?', a: 'Yes. Milngavie is part of our regular service area. We cover the full Milngavie area including Craigdhu, Baldernock, Douglas Drive and surrounding streets. We come to your home driveway and carry out all services at your location. Most Milngavie properties have driveway access which gives us ideal working conditions.' },
    { q: 'Why is Milngavie particularly prone to tree sap paint damage?', a: 'Milngavie sits at the edge of open countryside with significant tree coverage across residential streets and surrounding woodland. The combination of mature street trees and nearby open land means Milngavie cars face consistent exposure to tree sap, seed debris and organic fallout. During spring and early summer, lime trees and sycamores produce heavy sap and aphid honeydew that settles on paintwork within hours. We treat a significant number of Milngavie cars for sap etching each year. A ceramic coating is the most effective way to prevent this damage.' },
    { q: 'What premium detailing services do you offer in Milngavie?', a: 'We offer our full range of premium services in Milngavie including professional ceramic coating rated for 2 to 5 years, multi-stage paint correction, machine polishing for swirl removal, full valeting and deep interior cleaning. Paint correction followed by ceramic coating is a popular combination among Milngavie owners of prestige vehicles who want showroom-level results maintained at their door.' },
    { q: 'How much does a full valet cost in Milngavie?', a: 'Our pricing in Milngavie is the same as our standard pricing with no travel surcharge. A full valet starts from £100 for small cars, £120 for standard family cars and £180+ for large SUVs and 4x4s. An interior-only valet starts from £60. Ceramic coating starts from £250. All prices are confirmed in a free quote before any work begins.' },
    { q: 'Can you prepare a car for sale in Milngavie?', a: 'Yes. Pre-sale preparation is a common request in Milngavie. A well-presented car sells faster and commands a higher price. Our pre-sale valet package combines a full exterior and interior valet with a machine polish to remove swirl marks and restore paint gloss. For higher-value vehicles, we can add a ceramic coating that transfers to the new owner as a selling point. We will assess the car and recommend the best preparation package for the price point you are targeting.' },
  ],
};

/* ─── Rich page content ─────────────────────────────────────── */
interface LocationContent {
  intro: string;
  areasServed: string[];
  localContext: string;
  services: { name: string; desc: string; link: string }[];
}

const locationContent: Record<string, LocationContent> = {
  'west-end-car-valeting': {
    intro: `The West End of Glasgow is one of the most car-hostile parking environments in the city. Residential streets throughout Hyndland, Dowanhill, Kelvinside and Broomhill are lined with mature lime trees, horse chestnuts and sycamores that shed sap, seed debris and aphid honeydew onto parked cars for months of the year. Add to that the dense street parking, the frequency of door dings in tight residential spaces and the proximity to the M8 corridor, which generates significant industrial fallout, and you have paint that ages faster than it should.

Our mobile car valeting and detailing service covers the entire West End. We come to you. Whether you are parked on a residential street in Hyndland, on a drive in Kelvinside or in a workplace car park near the University of Glasgow, we bring all equipment to your location and carry out the full service at your door. No journey required. No drop-off. No collection.

Every service we provide, from a quick interior valet to a full multi-stage paint correction and ceramic coating, uses professional-grade products and technique. We are Autoglym registered and fully insured. The same standard of work regardless of whether you drive a five-year-old hatchback or a prestige BMW or Range Rover.`,
    areasServed: ['Hyndland', 'Dowanhill', 'Hillhead', 'Kelvinside', 'Broomhill', 'Partick', 'Finnieston', 'Yorkhill', 'Thornwood'],
    localContext: `Tree sap is the defining paint problem in the West End. The mature street trees on roads throughout Hyndland and Kelvinside produce sap that drips onto parked cars directly below. When temperatures climb in spring and summer, the sap bakes onto the clear coat within hours. Left on the paint for more than a day or two, it begins to chemically etch into the clear coat and cannot be removed by washing alone.

The fix is either machine polishing if the etching is minor, or paint correction if the damage has gone deeper. The prevention is a ceramic coating, which creates a surface the sap cannot bond with as aggressively, making removal easy before the damage has a chance to occur.

West End cars also suffer from urban grime accumulation. The area sits immediately adjacent to the M8, which generates brake dust and exhaust particulates that bond to paintwork and wheels. Brake dust on alloy wheels is particularly common on cars parked near the motorway and requires a dedicated iron remover to break down safely without damaging the wheel finish.`,
    services: [
      { name: 'Ceramic Coating', desc: 'Permanent protection against West End tree sap, acid rain and industrial fallout. 2 to 5 year rated.', link: '/services/ceramic-coating' },
      { name: 'Machine Polishing', desc: 'Remove swirl marks and light scratches from street parking and incorrect washing.', link: '/services/machine-polishing' },
      { name: 'Paint Correction', desc: 'Multi-stage correction for sap etching, deep scratches and oxidation.', link: '/services/paint-correction' },
      { name: 'Full Valet', desc: 'Complete exterior and interior clean. Perfect after a winter on Glasgow streets.', link: '/services/full-valet' },
      { name: 'Interior Valet', desc: 'Deep clean of seats, carpets and all interior surfaces.', link: '/services/interior-valet' },
    ],
  },

  'bearsden-car-valeting': {
    intro: `Bearsden is one of the most affluent and car-conscious areas in the greater Glasgow region. The residential streets throughout Bearsden are lined with premium vehicles. BMWs, Range Rovers, Porsches, Audis and Mercedes are the norm rather than the exception, and their owners expect a level of care and attention that matches the vehicles themselves.

Our mobile car valeting and detailing service covers the full Bearsden area. We come to your driveway, bring all equipment and products, and carry out the full service at your home. Most Bearsden properties have driveways or private parking, which gives us ideal working conditions compared to the challenging street parking of the city centre. The result is consistently better work. We have space, access to sheltered conditions where possible, and no parking restrictions to manage around.

We carry out everything from a basic interior valet through to multi-stage paint correction and professional ceramic coating application on high-value vehicles. Our operators are experienced with the paint systems and interior materials used by BMW, Porsche, Land Rover and Audi. We approach every vehicle with the product knowledge and technique that the manufacturer's specifications require.`,
    areasServed: ['Bearsden', 'Westerton', 'Canniesburn', 'Boclair', 'New Kilpatrick', 'Killermont', 'Roman Road area'],
    localContext: `Bearsden's exceptional tree coverage is the dominant environmental factor affecting paint condition in the area. The mature residential streets throughout Bearsden have large canopy trees, including limes, sycamores, horse chestnuts and ornamental species, that produce sap and aphid honeydew from April through October. Bearsden cars left on driveways under tree cover can accumulate sticky deposits within a matter of hours on warm days.

Sap left on paint for more than 24 to 48 hours in warm conditions begins to chemically etch into the clear coat. The cost of paint correction to remove that etching is significantly higher than the cost of a ceramic coating that would have prevented it. This is why ceramic coating is consistently our most requested service in Bearsden, owners of premium vehicles understand the economics.

Road salt is a secondary concern. The A809 and surrounding roads serving Bearsden are salted from November through March. Salt deposits build up in wheel arches, door shuts and the lower sections of bodywork. Our full valet process includes dedicated decontamination of these areas to remove salt before it causes lasting damage to the underside and painted surfaces.`,
    services: [
      { name: 'Ceramic Coating', desc: 'The essential protection for Bearsden driveways under tree coverage. 2 to 5 year rated.', link: '/services/ceramic-coating' },
      { name: 'Paint Correction', desc: 'Multi-stage correction for sap etching and swirl marks on premium vehicles.', link: '/services/paint-correction' },
      { name: 'Machine Polishing', desc: 'Swirl removal and gloss restoration for BMWs, Porsches and prestige cars.', link: '/services/machine-polishing' },
      { name: 'Full Valet', desc: 'Complete exterior and interior detailing at your Bearsden driveway.', link: '/services/full-valet' },
      { name: 'Interior Valet', desc: 'Deep clean of leather, carpets and all cabin surfaces.', link: '/services/interior-valet' },
    ],
  },

  'newton-mearns-car-valeting': {
    intro: `Newton Mearns is a premier suburban area on the south side of Glasgow with one of the highest concentrations of premium vehicles in the region. The broad residential streets, generous driveways and high proportion of executive and luxury vehicles make it one of our most active service areas, and one where the standard of detailing work expected is consistently high.

Our mobile car valeting and detailing service covers the full Newton Mearns area. We come to your driveway with all equipment and products and carry out every service at your home. There is no need to take your car anywhere. No queuing at a valeting centre. No leaving the car with someone you do not know. We work at your property while you are there, and you can see the work in progress if you want to.

Newton Mearns drivers tend to know what they want and why. Many of our regular clients in the area have come to us after experiencing the limitations of a supermarket car wash or a budget hand car wash that leaves swirl marks on dark paint. Once you have seen the difference that professional machine polishing and a ceramic coating make to the paintwork of an executive saloon or a large SUV, there is no going back.`,
    areasServed: ['Newton Mearns', 'Mearns', 'Eastwood', 'Waterfoot', 'Broom', 'Maidenhill', 'Whitecraigs'],
    localContext: `Newton Mearns sits at the edge of the East Renfrewshire countryside, meaning the road surfaces and environmental conditions differ from the city centre. Country roads connecting Newton Mearns to surrounding areas produce more stone chip exposure than urban streets, loose chippings from farm roads and rural B-roads are a genuine hazard for lower body panels and bonnets. Many Newton Mearns owners of prestige vehicles apply a paint protection film to the front end specifically because of this exposure.

The area's cold winters and proximity to higher ground means road salt is applied more aggressively and for longer than in central Glasgow. Salt accumulation on wheel arches and door sills is a serious concern for any vehicle regularly driven on the A77 or surrounding roads in winter. Our decontamination process specifically addresses salt bonded to painted surfaces and the metalwork of wheel arches.

The high proportion of dark-coloured executive saloons in Newton Mearns, black BMWs, dark grey Range Rovers, navy Audis, makes swirl marks particularly visible. Dark paint amplifies every swirl and scratch under sunlight in a way that lighter colours conceal. Machine polishing to remove swirl marks from dark paint is one of our most frequent requests from Newton Mearns clients.`,
    services: [
      { name: 'Ceramic Coating', desc: 'Long-term paint protection for executive and luxury vehicles. 2 to 5 year rated.', link: '/services/ceramic-coating' },
      { name: 'Paint Correction', desc: 'Multi-stage defect removal for dark-coloured prestige vehicles.', link: '/services/paint-correction' },
      { name: 'Machine Polishing', desc: 'Swirl mark and scratch removal on BMWs, Range Rovers and Audis.', link: '/services/machine-polishing' },
      { name: 'Full Valet', desc: 'Complete exterior and interior clean at your Newton Mearns driveway.', link: '/services/full-valet' },
      { name: 'Interior Valet', desc: 'Deep clean of leather and fabric interiors including hot-water extraction.', link: '/services/interior-valet' },
    ],
  },

  'southside-car-valeting': {
    intro: `The Southside of Glasgow is a diverse and densely populated urban area covering some of the city's most popular residential postcodes, Shawlands, Pollokshields, Giffnock, Newlands, Langside, Cathcart and beyond. It is home to a broad mix of vehicles and drivers: young families with child seats and pet hair, professionals with executive saloons, young drivers with their first financed hatchback. What they share is the same Glasgow climate, damp, grimy and hard on paintwork.

Our mobile car valeting and detailing service covers the entire Southside. We come to your home, your street parking space or your workplace. Whether you have a driveway in Giffnock or park on the street in Shawlands, we bring everything we need to your location and carry out the full service there. No travel. No drop-off. No waiting.

The Southside has historically been underserved by quality mobile detailing. Budget hand car washes that cause more damage than they fix have been the main option for most Southside drivers. We offer a professional alternative, properly trained operators using the right products and technique, at prices that are competitive with what those budget operations charge.`,
    areasServed: ['Shawlands', 'Pollokshields', 'Giffnock', 'Newlands', 'Langside', 'Cathcart', 'King\'s Park', 'Mount Florida', 'Battlefield', 'Thornliebank'],
    localContext: `The Southside is a high-density urban environment. Street parking is the reality for most Shawlands and Pollokshields residents, and that brings the same exposure to door dings, environmental fallout and incorrect washing that affects any densely parked urban vehicle. The M77 and surrounding arterial roads through the Southside generate brake dust and exhaust particulates that bond to paintwork and alloy wheels.

The Southside has a significant dog-owning population. Pet hair embedded in car seats and carpets is one of the most frequent interior requests we receive from Southside clients. Regular daily use, school runs, shopping, commuting, means interiors accumulate grime, food residue and crumbs faster than a vehicle used only for leisure. Our interior valet process using hot water extraction removes the embedded dirt that a standard vacuum leaves behind.

Giffnock and Newlands, on the outer edge of the Southside, share some characteristics with Newton Mearns, more driveway access, more premium vehicles, more interest in ceramic coating and machine polishing. We see a similar mix of services requested from these areas as we do from Newton Mearns.`,
    services: [
      { name: 'Interior Valet', desc: 'Deep interior clean with seat shampoo, carpet extraction and pet hair removal.', link: '/services/interior-valet' },
      { name: 'Full Valet', desc: 'Complete exterior and interior clean, ideal for family cars and daily drivers.', link: '/services/full-valet' },
      { name: 'Ceramic Coating', desc: 'Long-term protection for urban paint exposure. 2 to 5 year rated.', link: '/services/ceramic-coating' },
      { name: 'Machine Polishing', desc: 'Swirl mark removal and gloss restoration for all vehicle types.', link: '/services/machine-polishing' },
      { name: 'Paint Correction', desc: 'Multi-stage correction for deeper paint defects and scratches.', link: '/services/paint-correction' },
    ],
  },

  'milngavie-car-valeting': {
    intro: `Milngavie sits at the northern gateway to the Campsie Fells, combining suburban residential streets with direct access to open countryside. It is a quiet, prosperous town with a high proportion of family vehicles and prestige cars, and paint conditions that reflect the dual character of its environment: the organic fallout of a heavily treed residential area combined with the road salt and stone chip exposure of a town that sits on the route to open moorland roads.

Our mobile car valeting and detailing service covers the full Milngavie area. We come to your driveway with all equipment and products and carry out every service at your home. Milngavie properties almost universally have private parking or driveway access, which makes for ideal working conditions. We have space to work properly, and the shelter of a garage or carport where available gives us the conditions needed for tasks like ceramic coating application that benefit from being out of direct sunlight.

Milngavie is a compact enough town that we know it well. We work here regularly. We understand the specific paint problems that come with tree-lined streets, the cold winters, and the kind of vehicles that Milngavie residents tend to drive.`,
    areasServed: ['Milngavie', 'Craigdhu', 'Baldernock', 'Douglas Drive area', 'Craigton', 'Mugdock area'],
    localContext: `Tree sap is the number one paint problem in Milngavie. The residential streets have mature tree coverage throughout, and the proximity to Mugdock Country Park and the Campsie Fells means airborne organic matter, pollen, seed debris, aphid honeydew and bird droppings, is a year-round presence on paintwork. Spring is the worst period: lime trees begin producing honeydew from April, and the combination of warm days and sticky deposits means sap can begin etching clear coat within 24 hours of landing on an untreated surface.

Ceramic coating is the definitive solution for Milngavie cars regularly exposed to tree sap. The hydrophobic surface of a ceramic coating prevents sap from bonding as aggressively with the clear coat, and makes removal far easier, typically a gentle pre-rinse is enough to lift fresh sap before it has time to etch. On bare or waxed paint, the same sap can require machine polishing or paint correction to remove if it has been present for more than a few days.

The roads connecting Milngavie to the rest of Glasgow, the A81, A810 and B8050, are salted heavily from October through March. These are exposed roads that see treatment earlier and more frequently than city centre streets. Salt accumulation in wheel arches and on lower bodywork panels is a particular concern for SUVs and higher-riding vehicles that see more winter road splash.`,
    services: [
      { name: 'Ceramic Coating', desc: 'The definitive protection against Milngavie tree sap and country road debris. 2 to 5 year rated.', link: '/services/ceramic-coating' },
      { name: 'Paint Correction', desc: 'Multi-stage correction for sap etching, oxidation and deeper paint damage.', link: '/services/paint-correction' },
      { name: 'Machine Polishing', desc: 'Swirl removal and gloss restoration at your Milngavie driveway.', link: '/services/machine-polishing' },
      { name: 'Full Valet', desc: 'Complete exterior and interior clean, excellent for pre-sale preparation.', link: '/services/full-valet' },
      { name: 'Interior Valet', desc: 'Deep interior clean with seat shampoo and carpet extraction.', link: '/services/interior-valet' },
    ],
  },
};

/* ─── Component ─────────────────────────────────────────────── */
export function LocationPage() {
  const { locationId } = useParams<{ locationId: string }>();
  const meta = locationId ? locationMeta[locationId] : null;
  const content = locationId ? locationContent[locationId] : null;
  const faqs = locationId ? locationFaqs[locationId] : null;

  const rawLocation = locationId?.replace('-car-valeting', '') || 'Glasgow';
  const locationName = rawLocation
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  const title = meta?.title || `Car Valeting ${locationName} | Mobile Service | Glasgow Car Valeting`;
  const description = meta?.description || `Premium mobile car valeting in ${locationName}. We come to your door, fully insured. Call 0743 574 0502.`;

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
    return (
      <main className="pt-32 pb-24 bg-background-dark min-h-screen text-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Area Not Found</h1>
          <p className="text-gray-400 mb-8">Browse all areas we cover.</p>
          <Link to="/" className="bg-primary hover:bg-white text-black px-8 py-4 font-bold tracking-widest text-xs uppercase inline-block transition-colors">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background-dark text-white">
      <SEOHead title={title} description={description} canonical={`/areas/${locationId}`} />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <span className="text-primary text-xs uppercase tracking-widest mb-4 block">Mobile Car Valeting Glasgow</span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Mobile Car Valeting in {locationName}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">{description}</p>
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

      {/* Areas served */}
      <section className="py-16 bg-zinc-900 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-white mb-6">Areas we cover in {locationName}</h2>
          <div className="flex flex-wrap gap-3">
            {content.areasServed.map((area, i) => (
              <span key={i} className="border border-white/20 text-gray-300 px-4 py-2 text-sm">{area}</span>
            ))}
          </div>
          <p className="text-gray-400 mt-6">Not sure if we cover your postcode? Call <a href="tel:07435740502" className="text-primary hover:underline">0743 574 0502</a> and we will confirm immediately.</p>
        </div>
      </section>

      {/* Local context */}
      <section className="py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-white mb-6">Paint conditions in {locationName}</h2>
          {content.localContext.split('\n\n').map((para, i) => (
            <p key={i} className="text-gray-300 text-lg leading-relaxed mb-4">{para.trim()}</p>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-zinc-900 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-white mb-8">Services available in {locationName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.services.map((service, i) => (
              <Link
                key={i}
                to={service.link}
                className="border border-white/10 hover:border-primary p-6 transition-colors group"
              >
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* FAQs */}
      {faqs && (
        <section className="py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-white mb-10">Questions about car valeting in {locationName}</h2>
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
          <h2 className="text-3xl font-bold text-white mb-4">Book your valet in {locationName}</h2>
          <p className="text-gray-300 mb-8">We come to your door across {locationName} and the greater Glasgow area. Fully mobile, fully insured. No garage drop-off needed.</p>
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
