export type SolutionDivision = 'pipe' | 'irrigation';

export interface SolutionPillar {
  icon: string;
  label: string;
  text: string;
}

export interface SolutionRelatedProduct {
  name: string;
  slug: string;
  categorySlug: string;
  image: string;
  shortDescription: string;
}

export interface Solution {
  slug: string;
  division: SolutionDivision;
  eyebrow: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  overview: string[];
  pillars: SolutionPillar[];
  whyChoose: string[];
  applications: string[];
  relatedProducts: SolutionRelatedProduct[];
}

const ADMIN = 'https://admin.kotharigroupindia.com/wp-content/uploads';

export const solutionsData: Solution[] = [
  // ── IRRIGATION ──────────────────────────────────────────────
  {
    slug: 'precision-irrigation',
    division: 'irrigation',
    eyebrow: 'Irrigation Division',
    heroImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2000&q=80',
    metaTitle: 'Precision Irrigation Solutions | Kothari Group',
    metaDescription:
      "Kothari Group's precision irrigation solutions deliver water directly to the root zone reducing waste and improving crop yield across Indian farms.",
    h1: 'Precision Irrigation',
    tagline: 'Deliver the right amount of water, exactly where your crop needs it.',
    overview: [
      'As a leading drip irrigation manufacturer in India, Kothari Group designs complete drip irrigation systems and micro drip irrigation systems for farms of every scale. Our irrigation system solutions combine durable driplines, drip irrigation filters, and drip irrigation fittings to deliver water directly to the root zone reducing waste while improving yield.',
      'Whether you need a simple drip watering system for a small plot or a fully automated irrigation system for commercial farmland, our micro irrigation range is built to perform — with clog-resistant emitters, uniform discharge and compatibility across filters, valves and automation controllers.',
    ],
    pillars: [
      {
        icon: 'Target',
        label: 'Targeted Delivery',
        text: 'Water reaches the root zone, not the soil surface',
      },
      {
        icon: 'Droplets',
        label: 'Water Efficiency',
        text: 'Reduces water consumption vs. flood irrigation',
      },
      {
        icon: 'Sprout',
        label: 'Yield Consistency',
        text: 'Even distribution reduces crop stress',
      },
      {
        icon: 'FlaskConical',
        label: 'Fertigation Ready',
        text: 'Compatible with dosing pumps & injectors for nutrient delivery',
      },
    ],
    whyChoose: [
      'UV-stabilized drip lines built for long field life under Indian sun',
      'Compatible with filters, valves, and automation controllers for a complete system',
      'Reduces weed growth by limiting water to the plant zone only',
      'Works across row crops, orchards, vineyards, and plantation crops',
      'Scalable from small landholdings to large commercial farms',
      'Backed by 35+ years of agri-piping manufacturing expertise',
    ],
    applications: [
      'Horticulture',
      'Orchards',
      'Vineyards',
      'Row Crops',
      'Plantation Crops',
      'Commercial Farms',
    ],
    relatedProducts: [
      {
        name: 'Thin Wall Dripline K-Super',
        slug: 'thin-wall-dripline-k-super',
        categorySlug: 'thinwall-drip-line',
        image: `${ADMIN}/2025/04/DRIPLINE-K-SUPER.webp`,
        shortDescription: 'Cylindrical drippers delivering uniform, clog-resistant irrigation across larger fields.',
      },
      {
        name: 'Turbo Dripper',
        slug: 'turbo-dripper',
        categorySlug: 'emitters-drippers',
        image: `${ADMIN}/2025/04/TURBO-DRIPPER-1.webp`,
        shortDescription: 'Clog-resistant drippers ensuring precise, uniform, low-waste irrigation performance.',
      },
      {
        name: 'Screen Filter',
        slug: 'screen-filter',
        categorySlug: 'filters',
        image: `${ADMIN}/2025/10/Screen-Filter.webp`,
        shortDescription: 'Durable 130-micron filters providing cost-effective irrigation water filtration.',
      },
      {
        name: 'Venturi Injector',
        slug: 'venturi-injector',
        categorySlug: 'dosing-pumps-and-fertilizer-injectors',
        image: `${ADMIN}/2025/10/Venturi-Injector.webp`,
        shortDescription: 'Efficient Venturi fertilizer injector ensuring uniform, energy-free crop nutrition.',
      },
      {
        name: 'Drip Poly Fittings',
        slug: 'drip-poly-fittings',
        categorySlug: 'polyfittings-and-accessories',
        image: `${ADMIN}/2025/04/DRIP-POLY-FITTINGS.webp`,
        shortDescription: 'Reinforced fittings providing durable, leak-proof, UV-resistant connections.',
      },
      {
        name: 'UPVC Pipes',
        slug: 'upvc-pipes',
        categorySlug: 'drip-agri-pvc-pipes',
        image: `${ADMIN}/2025/04/PVC-Selffit-pipe.webp`,
        shortDescription: 'Durable distribution pipes for flexible, cost-effective irrigation networks.',
      },
    ],
  },
  {
    slug: 'polyhouse-greenhouse-irrigation',
    division: 'irrigation',
    eyebrow: 'Irrigation Division',
    heroImage: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2000&q=80',
    metaTitle: 'Polyhouse (Greenhouse) Irrigation Solutions | Kothari Group',
    metaDescription:
      'Kothari Group polyhouse irrigation solutions combine micro sprinklers, foggers, drip lines and filtration for controlled-environment cultivation.',
    h1: 'Polyhouse (Greenhouse) Irrigation',
    tagline: 'Climate-smart watering for protected cultivation, all season long.',
    overview: [
      'Kothari Group designs complete polyhouse and greenhouse irrigation systems that pair gentle overhead micro irrigation with precise root-zone drip. Our micro sprinklers, foggers, drip lines and filtration units work together to hold temperature, humidity and soil moisture in the ideal band for high-value crops.',
      'From a single-bay polyhouse to multi-acre protected clusters, the system scales with inline filtration, fertigation dosing and automation controllers — so growers get uniform germination, faster cycles and export-grade produce quality.',
    ],
    pillars: [
      {
        icon: 'CloudFog',
        label: 'Climate Control',
        text: 'Foggers and misters manage heat and humidity',
      },
      {
        icon: 'Sprout',
        label: 'Gentle Coverage',
        text: 'Micro sprinklers suit seedlings and delicate crops',
      },
      {
        icon: 'FlaskConical',
        label: 'Precision Fertigation',
        text: 'Dosing units feed nutrients with irrigation water',
      },
      {
        icon: 'Cpu',
        label: 'Automation Ready',
        text: 'Controllers schedule zones without manual labour',
      },
    ],
    whyChoose: [
      'Purpose-built for polyhouse beds, benches and grow bags',
      'Foggers deliver fine mist for cooling without waterlogging',
      '130-micron filtration protects every emitter from clogging',
      'Compatible with timers, sensors and solenoid valves',
      'Low-pressure operation keeps energy costs down',
      'Single vendor for drip, micro irrigation, filters and fittings',
    ],
    applications: [
      'Polyhouses',
      'Greenhouses',
      'Nurseries',
      'Floriculture',
      'Exotic Vegetables',
      'Seedling Trays',
    ],
    relatedProducts: [
      {
        name: 'K-Mic Micro Sprinkler',
        slug: 'k-mic-micro-sprinkler',
        categorySlug: 'micro-sprinklers-and-assemblies',
        image: `${ADMIN}/2025/10/K-Mic-Micro-Sprinkler.webp`,
        shortDescription: 'High-pressure mist sprinklers providing gentle, customizable crop irrigation.',
      },
      {
        name: 'Thin Wall Dripline K-Smart',
        slug: 'thin-wall-dripline-k-smart',
        categorySlug: 'thinwall-drip-line',
        image: `${ADMIN}/2025/04/DRIPLINE-K-SMART.webp`,
        shortDescription: 'Durable dripline tubing ensuring precise, uniform, high-efficiency irrigation.',
      },
      {
        name: 'PC Dripper',
        slug: 'pc-dripper',
        categorySlug: 'emitters-drippers',
        image: `${ADMIN}/2025/04/PC-DRIPPER.webp`,
        shortDescription: 'Pressure-compensating dripper ensuring clog-resistant, uniform water distribution.',
      },
      {
        name: 'Screen Filter',
        slug: 'screen-filter',
        categorySlug: 'filters',
        image: `${ADMIN}/2025/10/Screen-Filter.webp`,
        shortDescription: 'Durable 130-micron filters providing cost-effective irrigation water filtration.',
      },
      {
        name: 'Gravity Drip Kit',
        slug: 'gravity-drip-kit',
        categorySlug: 'drip-gravity-kits',
        image: `${ADMIN}/2025/10/KOTHARI-GRAVITY-DRIP-KIT.webp`,
        shortDescription: 'Pump-free drip irrigation kits enabling easy, efficient low-pressure watering.',
      },
      {
        name: 'Drip Winder',
        slug: 'drip-winder',
        categorySlug: 'polyfittings-and-accessories',
        image: `${ADMIN}/2025/07/Drip-Winder.webp`,
        shortDescription: 'Portable reel enabling quick, efficient dripline handling between seasons.',
      },
    ],
  },
  {
    slug: 'agricultural-field-irrigation',
    division: 'irrigation',
    eyebrow: 'Irrigation Division',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80',
    metaTitle: 'Agricultural Field Irrigation Solutions | Kothari Group',
    metaDescription:
      'Kothari Group field irrigation solutions — sprinklers, rainguns, HDPE pipelines and drip systems for uniform coverage across open farmland.',
    h1: 'Agricultural Field Irrigation',
    tagline: 'Uniform coverage across every acre, whatever the crop.',
    overview: [
      'Kothari Group builds complete field irrigation systems for open farmland — combining impact sprinklers, rainguns, HDPE quick-coupling pipelines and drip laterals to match each crop, soil and water source. Our systems replace flood irrigation with measured, repeatable application.',
      'Quick-latch HDPE pipes, wide-throw sprinklers and clog-resistant drip options cut labour, save water and lift yields across cereals, pulses, vegetables, sugarcane and fodder — season after season.',
    ],
    pillars: [
      {
        icon: 'Waves',
        label: 'Wide Coverage',
        text: 'Sprinklers and rainguns cover large blocks fast',
      },
      {
        icon: 'Zap',
        label: 'Quick Setup',
        text: 'Quick-coupling HDPE pipes shift in minutes',
      },
      {
        icon: 'Droplets',
        label: 'Water Saving',
        text: 'Measured application replaces flood irrigation',
      },
      {
        icon: 'ShieldCheck',
        label: 'Field Tough',
        text: 'UV-stabilized pipes survive harsh field handling',
      },
    ],
    whyChoose: [
      'Matched sprinkler spacing and pressure for uniform distribution',
      'HDPE pipelines with quick couplers for fast shifting between plots',
      'Rainguns for wide-area coverage of fodder and field crops',
      'Drip options for row crops where precision pays',
      'Filters and valves sized for borewell and canal water',
      'Government subsidy-compatible micro irrigation range',
    ],
    applications: [
      'Cereals & Millets',
      'Pulses & Oilseeds',
      'Sugarcane',
      'Vegetables',
      'Fodder Crops',
      'Cotton',
    ],
    relatedProducts: [
      {
        name: 'Metal Sprinkler',
        slug: 'metal-sprinkler',
        categorySlug: 'metal-sprinkler',
        image: `${ADMIN}/2025/06/METAL-SPRINKLER.webp`,
        shortDescription: 'Durable ISI-certified impact sprinkler delivering uniform, wide-area coverage.',
      },
      {
        name: 'Raingun and Accessories',
        slug: 'raingun',
        categorySlug: 'raingun-and-accessories',
        image: `${ADMIN}/2025/04/Rainguns.webp`,
        shortDescription: 'Portable raingun sprinkler providing wide coverage and adjustable watering.',
      },
      {
        name: 'Sprinklers Pipes (QCPE)',
        slug: 'sprinklers-pipes-qcpe',
        categorySlug: 'hdpe-sprinkler-pipes-qcpe',
        image: `${ADMIN}/2025/07/QCPE-Spinklar-pipe.webp`,
        shortDescription: 'UV-resistant HDPE clamps ensuring smooth flow and flexible installation.',
      },
      {
        name: 'Pop-up Spray Heads and Rotors',
        slug: 'pop-up-spray-heads-and-rotors',
        categorySlug: 'garden-and-landscape-sprinklers',
        image: `${ADMIN}/2025/04/Pop-up-spray-heads-rotors.png`,
        shortDescription: 'Gear-driven rotor sprinkler delivering uniform, gentle, long-lasting coverage.',
      },
      {
        name: 'HDPE Piping',
        slug: 'hdpe-piping',
        categorySlug: 'pe-pipes-and-fittings',
        image: `${ADMIN}/2025/04/HDPE-PIPE-111.webp`,
        shortDescription: 'Flexible PE pipes delivering durable, leak-free water flow performance.',
      },
      {
        name: 'Mini Sprinkler',
        slug: 'mini-sprinkler',
        categorySlug: 'mini-sprinklers-and-assemblies',
        image: `${ADMIN}/2025/04/MINI-SPRINKLER.png`,
        shortDescription: 'Adjustable mini sprinklers delivering uniform, flexible, weather-resistant irrigation.',
      },
    ],
  },
  {
    slug: 'water-management',
    division: 'irrigation',
    eyebrow: 'Irrigation Division',
    heroImage: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=2000&q=80',
    metaTitle: 'Water Management Solutions | Kothari Group',
    metaDescription:
      'Kothari Group water management solutions — filtration, fertigation, controllers and valves for efficient farm water use.',
    h1: 'Water Management',
    tagline: 'Filter it, dose it, schedule it — control every drop.',
    overview: [
      'Kothari Group water management solutions bring the headworks of your farm together — hydrocyclone, sand, screen and disc filtration paired with venturi injectors, dosing pumps, controllers and control valves. Clean water, correct nutrients and precise scheduling from a single coordinated system.',
      'Built around Make-in-India filtration and IoT-ready automation, the range protects emitters, cuts fertilizer waste and lets you irrigate by time, volume or sensor — from a single plot to fully automated command areas.',
    ],
    pillars: [
      {
        icon: 'Filter',
        label: 'Complete Filtration',
        text: 'Hydrocyclone to disc filters for every water source',
      },
      {
        icon: 'FlaskConical',
        label: 'Exact Fertigation',
        text: 'Venturi and dosing pumps meter nutrients precisely',
      },
      {
        icon: 'Cpu',
        label: 'Smart Scheduling',
        text: 'Controllers automate zones by time or sensor',
      },
      {
        icon: 'Gauge',
        label: 'Pressure Control',
        text: 'Valves hold every zone at design pressure',
      },
    ],
    whyChoose: [
      'Multi-stage filtration down to 130 microns protects emitters',
      'Hydrocyclone pre-separation extends filter cleaning intervals',
      'Proportional dosing keeps EC/pH uniform across zones',
      'IoT controllers with remote monitoring and alerts',
      'Corrosion-proof polymer housings for fertilizer duty',
      'Modular headworks that grow with your command area',
    ],
    applications: [
      'Drip Command Areas',
      'Borewell Sources',
      'Canal Water',
      'Fertigation Stations',
      'Automated Farms',
      'Community Schemes',
    ],
    relatedProducts: [
      {
        name: 'Hydrocyclone Filter',
        slug: 'hydrocyclone-filter',
        categorySlug: 'filters',
        image: `${ADMIN}/2025/10/Hydrocyclone-Filter.webp`,
        shortDescription: 'Hydrodynamic filter providing efficient particle separation and extended filtration.',
      },
      {
        name: 'Sand Filter',
        slug: 'sand-filter',
        categorySlug: 'filters',
        image: `${ADMIN}/2025/04/SAND-FILTER-1.webp`,
        shortDescription: 'Advanced sand filters delivering ultra-fine, low-loss water filtration.',
      },
      {
        name: 'Nutrijet Fertigation Machines',
        slug: 'nutrijet-fertigation-machines',
        categorySlug: 'fertigation-machines',
        image: `${ADMIN}/2025/10/NUTRIJET.webp`,
        shortDescription: 'IoT-enabled fertigation system delivering precise, automated nutrient management.',
      },
      {
        name: 'Irribeat Controllers',
        slug: 'irribeat-controllers',
        categorySlug: 'controllers',
        image: `${ADMIN}/2025/10/IRRIBEAT.webp`,
        shortDescription: 'Smart IoT irrigation controller enabling remote, expandable multi-zone management.',
      },
      {
        name: 'Dosing Pump',
        slug: 'dozing-pump',
        categorySlug: 'dosing-pumps-and-fertilizer-injectors',
        image: `${ADMIN}/2025/10/DOZING-PUMP.webp`,
        shortDescription: 'Adjustable fertilizer injector delivering precise, efficient nutrient application.',
      },
      {
        name: 'GSI (Galcon Smart Irrigation) Controller',
        slug: 'gsi-galcon-smart-irrigation-controller',
        categorySlug: 'controllers',
        image: `${ADMIN}/2025/04/GSI-Galcon-Smart-Irrigation.webp`,
        shortDescription: 'Compact IoT controller enabling remote, customizable irrigation and fertigation.',
      },
    ],
  },
  // ── PIPE ────────────────────────────────────────────────────
  {
    slug: 'residential-commercial-plumbing',
    division: 'pipe',
    eyebrow: 'Pipe Division',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000&q=80',
    metaTitle: 'Residential & Commercial Plumbing Solutions | Kothari Group',
    metaDescription:
      'Kothari Group plumbing solutions — CPVC hot & cold water systems and UPVC piping for leak-free residential and commercial buildings.',
    h1: 'Residential & Commercial Plumbing Solutions',
    tagline: 'Leak-free water, floor after floor, year after year.',
    overview: [
      'Kothari Group plumbing solutions cover the complete hot and cold water network of modern buildings — CPVC systems rated to 93°C for hot lines and geysers, plus heavy-duty UPVC for cold-water distribution. Lead-free compounds, precision solvent joints and a full fitting range keep every bathroom, kitchen and riser dependable.',
      'From apartments and villas to hospitals, hotels and towers, our systems install fast, resist scaling and corrosion, and carry BIS and ASTM compliance — backed by technical catalogues, CAD support and on-site guidance.',
    ],
    pillars: [
      {
        icon: 'Thermometer',
        label: 'Hot & Cold Rated',
        text: 'CPVC handles 0°C to 93°C service with ease',
      },
      {
        icon: 'ShieldCheck',
        label: 'Safe Water',
        text: 'Lead-free, non-toxic compounds for potable lines',
      },
      {
        icon: 'Wrench',
        label: 'Fast Jointing',
        text: 'One-step solvent cement for reliable joints',
      },
      {
        icon: 'Building2',
        label: 'High-Rise Ready',
        text: 'Pressure classes sized for towers and risers',
      },
    ],
    whyChoose: [
      'CPVC to IS 15778 / ASTM for hot-water duty up to 93°C',
      'UPVC Schedule 40 & 80 options for cold-water networks',
      'Smooth bore resists scaling, biofilm and pressure loss',
      'Complete elbows, tees, valves and transition fittings',
      'Fire-safe, self-extinguishing material behaviour',
      '50+ year design life with negligible maintenance',
    ],
    applications: [
      'Apartments',
      'Villas',
      'Hospitals',
      'Hotels',
      'Commercial Towers',
      'Institutions',
    ],
    relatedProducts: [
      {
        name: 'CPVC Pipes & Fittings',
        slug: 'cpvc-hot-and-cold-water-piping-system',
        categorySlug: 'cpvc',
        image: `${ADMIN}/2025/04/CPVC-PIPES-FITTINGS.webp`,
        shortDescription: 'Hot & cold water piping system rated for Indian building conditions.',
      },
      {
        name: 'UPVC Pipes & Fittings',
        slug: 'upvc-astm-plumbing-piping-system',
        categorySlug: 'upvc',
        image: `${ADMIN}/2025/04/UPVC-PIPES-FITTINGS.webp`,
        shortDescription: 'Trusted cold-water plumbing pipe with lead-free compound.',
      },
      {
        name: 'CPVC Solvent Cement',
        slug: 'cpvc-solvent-cement',
        categorySlug: 'cpvc',
        image: `${ADMIN}/2025/06/cpvc.webp`,
        shortDescription: 'High-strength cement for strong, leak-proof CPVC joints.',
      },
      {
        name: 'Single & Double Union PVC Ball Valve',
        slug: 'single-and-double-union-pvc-ball-valve',
        categorySlug: 'valves',
        image: `${ADMIN}/2025/04/Single-Double-Union-PVC.webp`,
        shortDescription: 'Easy-maintenance flow control for building plumbing lines.',
      },
    ],
  },
  {
    slug: 'urban-drainage-sewerage',
    division: 'pipe',
    eyebrow: 'Pipe Division',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80',
    metaTitle: 'Urban Drainage & Sewerage Network Solutions | Kothari Group',
    metaDescription:
      'Kothari Group urban drainage solutions — SWR, UDS underground and DWC piping networks for cities and campuses.',
    h1: 'Urban Drainage & Sewerage Networks',
    tagline: 'Cities that drain right, stay right.',
    overview: [
      'Kothari Group urban drainage and sewerage solutions span the full below- and above-ground network — SWR soil, waste and rainwater stacks for buildings, solid-wall and foamcore UDS underground drainage, DWC corrugated sewers and low-noise PP systems for sensitive occupancies.',
      'Rubber-ring and solvent joints go in fast even in wet trenches, while smooth bores resist clogging and abrasion. The range suits municipal sewerage, housing layouts, campuses and commercial basements with BIS-backed standards.',
    ],
    pillars: [
      {
        icon: 'Waves',
        label: 'Complete Drainage',
        text: 'Soil, waste, storm and sewer in one system family',
      },
      {
        icon: 'Volume2',
        label: 'Low Noise',
        text: 'PP systems hush drainage in hospitals and hotels',
      },
      {
        icon: 'Layers',
        label: 'Ring Stiffness',
        text: 'SN 2 / SN 4 / SN 8 classes for every burial depth',
      },
      {
        icon: 'ShieldCheck',
        label: 'Rodent Resistant',
        text: 'uPVC formulation deters site damage',
      },
    ],
    whyChoose: [
      'SWR Type A & B to IS 13592 for building stacks',
      'Solid-wall UDS 63–400 mm with elastomeric ring joints',
      'Foamcore multilayer option — lighter, economical',
      'DWC corrugated sewers flex with ground movement',
      'Smooth hydraulic bore resists siltation and blockage',
      'Interchangeable with standard PVC fittings on site',
    ],
    applications: [
      'Municipal Sewerage',
      'Housing Layouts',
      'High-Rise Stacks',
      'Hospitals & Hotels',
      'Campuses',
      'Basements',
    ],
    relatedProducts: [
      {
        name: 'SWR (Soil, Waste & Rainwater) Piping System',
        slug: 'swr-pipes-and-fittings-for-drainage-systems',
        categorySlug: 'soil-waste-and-rainwater-pipes-and-fittings',
        image: `${ADMIN}/2025/04/SWR-PIPES-FITTINGS.webp`,
        shortDescription: 'Complete soil, waste and rainwater drainage for buildings.',
      },
      {
        name: 'UPVC Underground Drainage Piping System (solid wall UDS)',
        slug: 'upvc-underground-drainage-piping-system',
        categorySlug: 'underground-pipe-and-fittings',
        image: `${ADMIN}/2025/04/UDS-PIPES-FITTINGS.webp`,
        shortDescription: 'Solid-wall pipe for underground drainage networks.',
      },
      {
        name: 'PP Low Noise Drainage System',
        slug: 'pp-low-noise-drainage-system',
        categorySlug: 'soil-waste-and-rainwater-pipes-and-fittings',
        image: `${ADMIN}/2025/10/PP-Low-Noise-Drainage-System.webp`,
        shortDescription: 'Silent-flow drainage for noise-sensitive buildings.',
      },
      {
        name: 'Sub-Surface Drainage System',
        slug: 'sub-surface-drainage-system',
        categorySlug: 'underground-pipe-and-fittings',
        image: `${ADMIN}/2025/11/Sub-Surface-Drainage-System.webp`,
        shortDescription: 'Perforated pipe for smart field and site drainage.',
      },
    ],
  },
  {
    slug: 'groundwater-access',
    division: 'pipe',
    eyebrow: 'Pipe Division',
    heroImage: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=2000&q=80',
    metaTitle: 'Groundwater Access Solutions | Kothari Group',
    metaDescription:
      'Kothari Group groundwater solutions — column pipes, casing pipes and screen pipes for reliable borewell water extraction.',
    h1: 'Groundwater Access Solutions',
    tagline: 'Reliable water from every depth.',
    overview: [
      'Kothari Group groundwater access solutions protect the bore and lift the water — precision-threaded column pipes with locking couplers for submersible pumps, plus casing, ribbed and screen (slotted) pipes that stabilize the bore and filter entry water.',
      'Corrosion-proof uPVC replaces rust-prone metal strings, holding pump weight and torque while smooth bores maximize discharge. The range covers shallow farm wells to deep community and industrial borewells.',
    ],
    pillars: [
      {
        icon: 'Lock',
        label: 'Locking Joints',
        text: 'Square-thread couplers hold pump and column weight',
      },
      {
        icon: 'ShieldCheck',
        label: 'Corrosion Proof',
        text: 'uPVC outlasts metal in aggressive groundwater',
      },
      {
        icon: 'Filter',
        label: 'Clean Entry',
        text: 'Slotted screens admit water, hold back sand',
      },
      {
        icon: 'Gauge',
        label: 'Torque Rated',
        text: 'Heavy and super-heavy classes for deep sets',
      },
    ],
    whyChoose: [
      'Precision square threads with EPDM sealing for zero back-leakage',
      'Medium, heavy and super-heavy column classes to 35 kg/cm²',
      'Ribbed casing options for unstable strata',
      'Screen pipes sized for clean, sand-free discharge',
      'Hygienic, non-toxic strings safe for drinking water',
      'Lower friction bore raises hourly water yield',
    ],
    applications: [
      'Farm Borewells',
      'Community Water Supply',
      'Industrial Wells',
      'Housing Societies',
      'Irrigation Wells',
      'Dewatering',
    ],
    relatedProducts: [
      {
        name: 'Column Pipes',
        slug: 'column-pipes-with-ss',
        categorySlug: 'column-pipes',
        image: `${ADMIN}/2025/04/coloum-pipe.webp`,
        shortDescription: 'Locking column pipe for submersible borewell sets.',
      },
      {
        name: 'Casing Pipes',
        slug: 'casing-pipes-fittings',
        categorySlug: 'casing-pipes',
        image: `${ADMIN}/2025/04/CASING-PIPE.webp`,
        shortDescription: 'Trusted borewell protection pipe in multiple classes.',
      },
      {
        name: 'Screen Pipe/Slotted Pipe',
        slug: 'screen-pipe-slotted-pipe',
        categorySlug: 'casing-pipes',
        image: `${ADMIN}/2025/10/Screen-Pipe-Slotted-Pipe-n.webp`,
        shortDescription: 'Clean water entry with protected pump systems.',
      },
      {
        name: 'Ribbed Casing Pipe',
        slug: 'ribbed-casing-pipe',
        categorySlug: 'casing-pipes',
        image: `${ADMIN}/2025/10/Ribbed-Casing-Pipe.png`,
        shortDescription: 'Rugged pipe for aggressive groundwater conditions.',
      },
    ],
  },
  {
    slug: 'farm-infrastructure-piping',
    division: 'pipe',
    eyebrow: 'Pipe Division',
    heroImage: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=2000&q=80',
    metaTitle: 'Farm Infrastructure Piping Solutions | Kothari Group',
    metaDescription:
      'Kothari Group farm piping solutions — UPVC pressure pipes, HDPE coils, valves and fittings for dependable farm water networks.',
    h1: 'Farm Infrastructure Piping Solutions',
    tagline: 'The backbone pipework every farm runs on.',
    overview: [
      'Kothari Group farm infrastructure piping carries water from source to field — rigid UPVC pressure mains, flexible HDPE coils for uneven terrain, MDPE service lines, compression fittings and a full valve range for sectional control.',
      'High pressure classes, chemical resistance to fertilizers and quick rubber-ring or compression jointing keep lift, drip-main and flood-feeder networks running with fewer joints, fewer leaks and lower pumping cost.',
    ],
    pillars: [
      {
        icon: 'Gauge',
        label: 'Pressure Rated',
        text: 'PN 2.5 to PN 12.5 classes for every duty',
      },
      {
        icon: 'Spline',
        label: 'Terrain Flexible',
        text: 'HDPE coils ride undulation without joints',
      },
      {
        icon: 'FlaskConical',
        label: 'Agri-Chemical Safe',
        text: 'Resists fertilizers and field chemicals',
      },
      {
        icon: 'Wrench',
        label: 'Fast Jointing',
        text: 'Ring and compression joints go in quickly',
      },
    ],
    whyChoose: [
      'UPVC to IS 4985 in Class 1–5 pressure ratings',
      'HDPE PE 80 / PE 100 coils to 500 m cut joint counts',
      'Butt-fusion and compression options for zero leakage',
      'Valves for sectional control, air release and flushing',
      'Smooth bore trims friction and diesel/power cost',
      'One system from pump outlet to field hydrant',
    ],
    applications: [
      'Lift Irrigation',
      'Drip Mainlines',
      'Sprinkler Mains',
      'Farm Ponds',
      'Cattle & Dairy',
      'Agro Processing',
    ],
    relatedProducts: [
      {
        name: 'HDPE Piping',
        slug: 'hdpe-piping',
        categorySlug: 'pe-pipes-and-fittings',
        image: `${ADMIN}/2025/04/HDPE-PIPE-111.webp`,
        shortDescription: 'Durable multi-grade irrigation pipe for farm mains.',
      },
      {
        name: 'HDPE Coils',
        slug: 'hdpe-coils',
        categorySlug: 'pe-pipes-and-fittings',
        image: `${ADMIN}/2025/04/HDPE-Coils.webp`,
        shortDescription: 'Flexible pipe for smooth pumping over terrain.',
      },
      {
        name: 'UPVC Pipes',
        slug: 'upvc-pipes',
        categorySlug: 'drip-agri-pvc-pipes',
        image: `${ADMIN}/2025/04/PVC-Selffit-pipe.webp`,
        shortDescription: 'Rigid pressure pipes for farm distribution networks.',
      },
      {
        name: 'Single & Double Union PVC Ball Valve',
        slug: 'single-and-double-union-pvc-ball-valve',
        categorySlug: 'valves',
        image: `${ADMIN}/2025/04/Single-Double-Union-PVC.webp`,
        shortDescription: 'Easy-maintenance flow control for field lines.',
      },
      {
        name: 'Compression Fittings',
        slug: 'compression-fittings',
        categorySlug: 'pe-pipes-and-fittings',
        image: `${ADMIN}/2025/07/MDPE-Pipes-Fittings.webp`,
        shortDescription: 'Leak-proof fittings for PE pipe networks.',
      },
      {
        name: 'LD Krishi Pipe (Lay Flat Tubes)',
        slug: 'ld-krishi-pipe-lay-flat-tubes',
        categorySlug: 'pe-pipes-and-fittings',
        image: `${ADMIN}/2025/04/LD-Krishi.webp`,
        shortDescription: 'Lightweight pipe for field water delivery.',
      },
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutionsData.find((s) => s.slug === slug);
}
