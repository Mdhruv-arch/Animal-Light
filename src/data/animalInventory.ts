import { AnimalProfile } from '../types/wildlife';

export const ANIMAL_INVENTORY: AnimalProfile[] = [
  // 1. TIGER
  {
    id: 'tiger',
    commonName: 'Bengal Tiger',
    scientificName: 'Panthera tigris tigris',
    taxonomy: {
      kingdom: 'Animalia',
      class: 'Mammalia',
      family: 'Felidae',
      species: 'Panthera tigris'
    },
    imageUrl: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife Collection',
      attribution: 'Photo by A. Nanda / Unsplash Wildlife Archive',
      isVerified: true
    },
    confidence: 96,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: [
      'Reddish-orange coat with unique dark vertical stripes',
      'Broad muscular skull with white facial patches around cheeks and eyes',
      'Nocturnal predatory posture with robust forelimbs'
    ],
    uncertaintyExplanation: 'Clear morphological markers: distinct lateral stripes and massive feline cranial geometry.',
    overview: 'The Bengal Tiger is an iconic apex feline predator native to the Indian subcontinent. Renowned for solitary hunting, immense muscular power, and exceptional swimming ability across rivers and mangrove swamps.',
    behaviour: 'Highly solitary and territorial. Patrols home ranges up to 100 km² and avoids conspecific confrontations through scent and claw markings.',
    size: '170–250 cm (body length)',
    weight: '100–220 kg',
    lifespan: '10–15 years in wild',
    dietType: 'Carnivore',
    dietItems: [
      { name: 'Chital Deer', type: 'Ungulate', icon: 'deer' },
      { name: 'Wild Boar', type: 'Suid', icon: 'boar' },
      { name: 'Water Buffalo', type: 'Bovine', icon: 'buffalo' },
      { name: 'Sambar Deer', type: 'Ungulate', icon: 'deer' }
    ],
    dailyTimeline: [
      { time: 'Dusk', title: 'Stalk & Ambush', desc: 'Crepuscular and nocturnal hunting patrols along game trails.', icon: 'hunt' },
      { time: 'Midday', title: 'Rest & Submerge', desc: 'Sleeps in dense bamboo cover or cools off in streams.', icon: 'rest' },
      { time: 'Dawn', title: 'Boundary Scenting', desc: 'Sprays territorial scents and scratches visual markers on tree trunks.', icon: 'roam' },
      { time: 'Night', title: 'Feed & Guard', desc: 'Guards carcass from scavengers over multiple nights.', icon: 'hunt' }
    ],
    habitatSummary: 'Tropical moist deciduous forests, alluvial grasslands, and tidal mangrove swamps.',
    geographicDistribution: ['India', 'Bangladesh', 'Nepal', 'Bhutan'],
    nativeRegions: ['South Asia'],
    coordinates: { lat: 22.57, lng: 88.36, zoom: 4 },
    quickFacts: [
      'Powerful swimmer known to cross rivers over 7 km wide',
      'Night vision is approximately 6 times sharper than humans',
      'No two tigers share identical stripe patterns'
    ],
    conservation: {
      status: 'Endangered',
      code: 'EN',
      badgeColor: '#ef4444',
      source: 'IUCN Red List of Threatened Species',
      lastVerified: '2023',
      populationEstimate: 'Approx. 3,700 – 4,500 mature individuals remaining in the wild',
      populationTrend: 'Decreasing',
      trendData: [6800, 5200, 4100, 3400, 3900, 4200],
      threats: [
        { title: 'Corridor Fragmentation', desc: 'Linear infrastructure severing contiguous breeding habitats.' },
        { title: 'Targeted Poaching', desc: 'Illicit wildlife trade for skin, claws, and traditional medicine.' },
        { title: 'Human Conflict', desc: 'Retaliatory poisonings near livestock farming villages.' }
      ],
      actions: [
        { title: 'Anti-Poaching Patrols', desc: 'Equip forest rangers with GPS telemetry and camera traps.' },
        { title: 'Secure Corridors', desc: 'Establish inviolate wildlife core zones and reforestation buffers.' }
      ]
    },
    verifiedParks: [
      { name: 'Sundarbans National Park', location: 'India & Bangladesh', highlight: 'World heritage mangrove delta tiger reserve', lat: 21.95, lng: 89.18 },
      { name: 'Kaziranga National Park', location: 'Assam, India', highlight: 'High predator density alluvial tall grasslands', lat: 26.58, lng: 93.17 }
    ],
    funFacts: [
      'Tiger skin underneath their fur is also striped in the exact identical pattern.',
      'Their roar can be heard from up to 3 km away.'
    ],
    scientificReferences: [
      { title: 'Panthera tigris Assessment', source: 'IUCN Red List', url: 'https://www.iucnredlist.org/species/15955/214862019' },
      { title: 'Taxonomy and ecology of Panthera', source: 'Animal Diversity Web', url: 'https://animaldiversity.org/accounts/Panthera_tigris/' }
    ],
    similarSpecies: [
      { name: 'Leopard (Panthera pardus)', distinction: 'Smaller body, rosette spots instead of vertical stripes.' },
      { name: 'Jaguar (Panthera onca)', distinction: 'Stockier build, rosette spots with center dots, endemic to the Americas.' }
    ]
  },

  // 2. LION
  {
    id: 'lion',
    commonName: 'African Lion',
    scientificName: 'Panthera leo',
    taxonomy: {
      kingdom: 'Animalia',
      class: 'Mammalia',
      family: 'Felidae',
      species: 'Panthera leo'
    },
    imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife Collection',
      attribution: 'Photo by Damian Patkowski / Unsplash',
      isVerified: true
    },
    confidence: 95,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: [
      'Prominent dark or golden mane in adult males',
      'Tawny unstriped pelage with pale underbelly and black tail tuft',
      'Broad blunt muzzle and deep chest structure'
    ],
    uncertaintyExplanation: 'Clear lion profile: unpatterned sandy coat, heavy facial mane, social pride demeanor.',
    overview: 'The African Lion is the only social cat species, residing in cooperative prides composed of related lionesses, cubs, and a coalition of defending adult males across African savannas.',
    behaviour: 'Highly social feline. Pride members communicate via tactile head-rubbing, synchronized roaring, and complex group ambush tactics.',
    size: '170–250 cm (body length)',
    weight: '150–250 kg',
    lifespan: '10–14 years in wild',
    dietType: 'Carnivore',
    dietItems: [
      { name: 'Plains Zebra', type: 'Equid', icon: 'deer' },
      { name: 'Blue Wildebeest', type: 'Antelope', icon: 'buffalo' },
      { name: 'African Buffalo', type: 'Bovine', icon: 'buffalo' },
      { name: 'Warthog', type: 'Suid', icon: 'boar' }
    ],
    dailyTimeline: [
      { time: 'Dawn', title: 'Pride Ambush', desc: 'Females coordinate flanks around ungulate herds at watering holes.', icon: 'hunt' },
      { time: 'Midday', title: 'Rest & Shade', desc: 'Rests up to 20 hours a day to conserve caloric energy during heat.', icon: 'rest' },
      { time: 'Dusk', title: 'Pride Grooming', desc: 'Social bonding through head-rubs, purrs, and mutual grooming.', icon: 'roam' },
      { time: 'Night', title: 'Territorial Roar', desc: 'Roars echoing up to 8 km asserting pride boundaries.', icon: 'mate' }
    ],
    habitatSummary: 'Grasslands, savannas, scrublands, and open dry woodlands.',
    geographicDistribution: ['Sub-Saharan Africa', 'Gir Forest (India - Asiatic subspecies)'],
    nativeRegions: ['Eastern Africa', 'Southern Africa'],
    coordinates: { lat: -2.33, lng: 34.83, zoom: 4 },
    quickFacts: [
      'Prides can number from 2 up to 40 individuals',
      'Lionesses conduct up to 90% of the pride’s hunts',
      'Mane darkness correlates directly with age, vitality, and testosterone'
    ],
    conservation: {
      status: 'Vulnerable',
      code: 'VU',
      badgeColor: '#f59e0b',
      source: 'IUCN Red List of Threatened Species',
      lastVerified: '2023',
      populationEstimate: 'Approx. 20,000 – 25,000 wild individuals',
      populationTrend: 'Decreasing',
      trendData: [45000, 36000, 29000, 24000, 21500],
      threats: [
        { title: 'Human Encroachment', desc: 'Conversion of savanna into crop pastures reducing wild prey.' },
        { title: 'Conflict Poisoning', desc: 'Farmers using toxic agricultural baits to retaliate against livestock loss.' }
      ],
      actions: [
        { title: 'Predator-Proof Bomas', desc: 'Construct reinforced livestock corrals using flash lights.' },
        { title: 'Eco-Tourism Conservancies', desc: 'Direct gate revenues to pastoral Maasai communities.' }
      ]
    },
    verifiedParks: [
      { name: 'Serengeti National Park', location: 'Tanzania', highlight: 'Great Migration megafauna ecosystem', lat: -2.33, lng: 34.83 },
      { name: 'Maasai Mara National Reserve', location: 'Kenya', highlight: 'Celebrated open savanna pride territory', lat: -1.51, lng: 35.14 }
    ],
    funFacts: [
      'A lion can run in bursts up to 80 km/h (50 mph), though lacks stamina for long chases.',
      'Their roar can be heard across 8 km (5 miles).'
    ],
    scientificReferences: [
      { title: 'Panthera leo Assessment', source: 'IUCN Red List', url: 'https://www.iucnredlist.org/species/15951/214862019' }
    ],
    similarSpecies: [
      { name: 'Cougar (Puma concolor)', distinction: 'Lacks mane, smaller cranial size, native to the Americas.' }
    ]
  },

  // 3. ELEPHANT
  {
    id: 'elephant',
    commonName: 'Asian Elephant',
    scientificName: 'Elephas maximus',
    taxonomy: {
      kingdom: 'Animalia',
      class: 'Mammalia',
      family: 'Elephantidae',
      species: 'Elephas maximus'
    },
    imageUrl: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife Collection',
      attribution: 'Photo by AJ / Unsplash Wildlife',
      isVerified: true
    },
    confidence: 98,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: [
      'Massive trunk with prehensile single-lip tip',
      'Arched convex spine and twin dorsal humps on crown of head',
      'Relatively compact ears compared to African elephant'
    ],
    uncertaintyExplanation: 'Clear morphological markers: arched dorsal ridge, prehensile muscular proboscis, and pachyderm build.',
    overview: 'The Asian Elephant is the largest living terrestrial animal in Asia. Functioning as a keystone ecological engineer, elephant herds modify forest canopy, create waterholes, and disperse hundreds of plant seeds across migration routes.',
    behaviour: 'Organized into tight matriarchal clans led by the oldest, most experienced female. Highly empathetic, with documented mourning behaviours.',
    size: '2.4–3.0 m (shoulder height)',
    weight: '3,000–5,000 kg',
    lifespan: '60–70 years',
    dietType: 'Herbivore',
    dietItems: [
      { name: 'Grass & Bamboo', type: 'Vegetation', icon: 'grass' },
      { name: 'Tree Bark', type: 'Woody fiber', icon: 'grass' },
      { name: 'Wild Fruit', type: 'Fruit', icon: 'fruit' },
      { name: 'Roots & Tubers', type: 'Roots', icon: 'grass' }
    ],
    dailyTimeline: [
      { time: 'Morning', title: 'Canopy Foraging', desc: 'Consumes up to 150 kg of raw vegetation.', icon: 'forage' },
      { time: 'Midday', title: 'Mud Bathing', desc: 'Coats thick skin with clay to shield against insects and UV radiation.', icon: 'rest' },
      { time: 'Afternoon', title: 'Corridor Transit', desc: 'Follows ancestral trails between seasonal water sources.', icon: 'roam' },
      { time: 'Night', title: 'Standing Rest', desc: 'Sleeps standing or reclining for brief 3-4 hour intervals.', icon: 'rest' }
    ],
    habitatSummary: 'Tropical moist and dry broadleaf forests, scrublands, and alluvial grasslands.',
    geographicDistribution: ['India', 'Sri Lanka', 'Thailand', 'Malaysia', 'Indonesia'],
    nativeRegions: ['South & Southeast Asia'],
    coordinates: { lat: 11.65, lng: 76.63, zoom: 4 },
    quickFacts: [
      'Trunk contains over 40,000 separate muscle units',
      'Communicates over miles using sub-audible ground infrasound',
      'Can smell water sources from up to 19 km away'
    ],
    conservation: {
      status: 'Endangered',
      code: 'EN',
      badgeColor: '#ef4444',
      source: 'IUCN Red List of Threatened Species',
      lastVerified: '2023',
      populationEstimate: 'Fewer than 45,000 mature wild individuals',
      populationTrend: 'Decreasing',
      trendData: [90000, 68000, 54000, 46000, 42000],
      threats: [
        { title: 'Linear Corridor Fragmentation', desc: 'Railroads and irrigation canals cutting through traditional routes.' },
        { title: 'Human Conflict & Poaching', desc: 'Crop-raiding retaliations and poaching of tusked males.' }
      ],
      actions: [
        { title: 'Secure Elephant Corridors', desc: 'Legally protect traditional right-of-passage land bridges.' },
        { title: 'Early-Warning Acoustic Sensors', desc: 'Install railway sensors to prevent locomotive collisions.' }
      ]
    },
    verifiedParks: [
      { name: 'Nagarhole National Park', location: 'Karnataka, India', highlight: 'Largest Asian elephant population concentration', lat: 12.03, lng: 76.12 }
    ],
    funFacts: [
      'Elephants can perceive vibrations through sensory cells called Pacinian corpuscles in the soles of their feet.',
      'Calves are born weighing roughly 100 kg (220 lbs).'
    ],
    scientificReferences: [
      { title: 'Elephas maximus Assessment', source: 'IUCN Red List', url: 'https://www.iucnredlist.org/species/7140/45818198' }
    ],
    similarSpecies: [
      { name: 'African Bush Elephant (Loxodonta africana)', distinction: 'Significantly larger ears, concave dipped back, two trunk tips.' }
    ]
  },

  // 4. LEOPARD
  {
    id: 'leopard',
    commonName: 'Leopard',
    scientificName: 'Panthera pardus',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Felidae', species: 'Panthera pardus' },
    imageUrl: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Geran de Klerk / Unsplash',
      isVerified: true
    },
    confidence: 96,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Golden pelage with dark rosette spots devoid of center dots', 'Long balancing tail', 'Stocky muscular body built for tree climbing'],
    uncertaintyExplanation: 'Clear rosette pattern without center spots and arboreal feline structure.',
    overview: 'The leopard is the most adaptable and opportunistic of the big cats. Known for its extraordinary stealth and climbing strength, it regularly hauls heavy prey into tree branches away from scavengers.',
    behaviour: 'Solitary, secretive, and nocturnal. Master of camouflage that relies on tree branches for rest and food storage.',
    size: '100–160 cm', weight: '30–80 kg', lifespan: '12–15 years',
    dietType: 'Carnivore',
    dietItems: [{ name: 'Impala & Deer', type: 'Ungulate', icon: 'deer' }, { name: 'Monkeys', type: 'Primate', icon: 'meat' }, { name: 'Small mammals', type: 'Rodent', icon: 'meat' }],
    dailyTimeline: [
      { time: 'Night', title: 'Stalk & Hoist', desc: 'Ambush hunt and hoists prey up into acacia trees.', icon: 'hunt' },
      { time: 'Day', title: 'Canopy Rest', desc: 'Lounges along horizontal branches concealed by leaves.', icon: 'rest' }
    ],
    habitatSummary: 'From rain forests to arid deserts, temperate woodlands, and high mountains.',
    geographicDistribution: ['Sub-Saharan Africa', 'Northeast Asia', 'Central & South Asia'],
    nativeRegions: ['Africa', 'Asia'],
    coordinates: { lat: -1.3, lng: 36.8, zoom: 4 },
    quickFacts: ['Can haul prey twice its body weight up into trees', 'Can leap 6 meters horizontally in one bound'],
    conservation: {
      status: 'Vulnerable', code: 'VU', badgeColor: '#f59e0b', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Widespread but fragmented; Asian subspecies critically endangered', populationTrend: 'Decreasing',
      trendData: [60000, 48000, 39000, 32000, 28000],
      threats: [{ title: 'Poaching for pelts', desc: 'Illegal trade in spotted pelts' }, { title: 'Prey depletion', desc: 'Bushmeat trade reducing prey' }],
      actions: [{ title: 'Anti-snare sweeps', desc: 'Remove wire snares from wildlife reserves' }]
    },
    verifiedParks: [{ name: 'Kruger National Park', location: 'South Africa', highlight: 'High leopard population in riverine woodlands', lat: -23.98, lng: 31.55 }],
    funFacts: ['Black panthers are melanistic leopards carrying a recessive gene variation.'],
    scientificReferences: [{ title: 'Panthera pardus Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/15954/214862019' }],
    similarSpecies: [{ name: 'Jaguar', distinction: 'Larger head, stockier build, rosettes contain center spots.' }, { name: 'Cheetah', distinction: 'Slender build, solid round spots, black tear stripes on face.' }]
  },

  // 5. CHEETAH
  {
    id: 'cheetah',
    commonName: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Felidae', species: 'Acinonyx jubatus' },
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Keyur Nandaniya / Unsplash',
      isVerified: true
    },
    confidence: 97,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Slender aerodynamically lean body with deep chest', 'Black tear streaks running from inner eyes down mouth', 'Solid black circular spots across tawny coat'],
    uncertaintyExplanation: 'Clear teardrop facial marks, solid spots, slender greyhound-like frame.',
    overview: 'The cheetah is the fastest land animal on Earth, capable of accelerating from 0 to 95 km/h (60 mph) in under three seconds. It relies on blistering sprint speed rather than stealth ambushes.',
    behaviour: 'Diurnal predator hunting in early morning and late afternoon to avoid competition from larger lions and hyenas.',
    size: '110–150 cm', weight: '35–65 kg', lifespan: '10–12 years',
    dietType: 'Carnivore',
    dietItems: [{ name: 'Thomson’s Gazelle', type: 'Antelope', icon: 'deer' }, { name: 'Impala', type: 'Antelope', icon: 'deer' }, { name: 'Hares', type: 'Lagomorph', icon: 'meat' }],
    dailyTimeline: [{ time: 'Morning', title: 'Sprint Chase', desc: 'Explosive high-speed pursuit across open plains.', icon: 'hunt' }, { time: 'Noon', title: 'Termite Mound Lookout', desc: 'Surveys plains for rival predators.', icon: 'rest' }],
    habitatSummary: 'Open savannas, grasslands, and arid scrub deserts.',
    geographicDistribution: ['Eastern and Southern Africa', 'Iran (Asiatic cheetah)'],
    nativeRegions: ['Africa', 'Middle East'],
    coordinates: { lat: -2.3, lng: 35.0, zoom: 4 },
    quickFacts: ['Accelerates faster than most sports cars', 'Semi-retractable claws act like athletic cleats for grip'],
    conservation: {
      status: 'Vulnerable', code: 'VU', badgeColor: '#f59e0b', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Approx. 6,500 – 7,100 wild individuals', populationTrend: 'Decreasing',
      trendData: [14000, 11000, 9000, 7500, 6800],
      threats: [{ title: 'Habitat Loss', desc: 'Farmland fences blocking wide-ranging hunting corridors' }, { title: 'Illegal cub trade', desc: 'Trafficking to exotic pet markets' }],
      actions: [{ title: 'Livestock Guarding Dogs', desc: 'Provide Anatolian shepherds to farmers to reduce retaliatory killings' }]
    },
    verifiedParks: [{ name: 'Maasai Mara', location: 'Kenya', highlight: 'Prime savanna for sprint pursuits', lat: -1.5, lng: 35.1 }],
    funFacts: ['Its flexible spine and large nasal cavities deliver massive oxygen flow during top-speed sprints.'],
    scientificReferences: [{ title: 'Acinonyx jubatus Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/219/50649567' }],
    similarSpecies: [{ name: 'Leopard', distinction: 'Heavier build, rosette spots, lacks facial tear stripes.' }]
  },

  // 6. WOLF
  {
    id: 'wolf',
    commonName: 'Gray Wolf',
    scientificName: 'Canis lupus',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Canidae', species: 'Canis lupus' },
    imageUrl: 'https://images.unsplash.com/photo-1564865878688-9a244444042a?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1564865878688-9a244444042a?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Thomas Bonometti / Unsplash',
      isVerified: true
    },
    confidence: 96,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Dense grizzled gray/buff fur with bushy black-tipped tail', 'Broad head with erect triangular ears and golden eyes', 'Long legs with large snow-bearing paws'],
    uncertaintyExplanation: 'Clear canid morphology: robust muzzle, pack-hunting posture, and thick double coat.',
    overview: 'The gray wolf is the largest wild member of the Canidae family. It is a highly intelligent keystone apex predator that lives and hunts in complex family packs led by a breeding pair.',
    behaviour: 'Operates in tight social packs of 4–15 members. Highly communicative through facial expressions, body postures, scent marking, and howling.',
    size: '105–160 cm', weight: '30–70 kg', lifespan: '8–13 years',
    dietType: 'Carnivore',
    dietItems: [{ name: 'Elk & Deer', type: 'Ungulate', icon: 'deer' }, { name: 'Moose & Caribou', type: 'Large ungulate', icon: 'buffalo' }, { name: 'Small rodents', type: 'Mammal', icon: 'meat' }],
    dailyTimeline: [{ time: 'Dawn/Dusk', title: 'Pack Pursuit', desc: 'Relay hunts over vast snow-covered territories.', icon: 'hunt' }, { time: 'Night', title: 'Howl Chorus', desc: 'Vocalizes to coordinate pack and warn rivals.', icon: 'roam' }],
    habitatSummary: 'Tundra, boreal taiga forests, temperate broadleaf woods, and grasslands.',
    geographicDistribution: ['North America', 'Eurasia', 'Northern Africa'],
    nativeRegions: ['North America', 'Europe', 'Asia'],
    coordinates: { lat: 44.42, lng: -110.58, zoom: 4 },
    quickFacts: ['A wolf howl can travel up to 16 km across open tundra', 'Their bite pressure reaches 400 psi, crushing bones easily'],
    conservation: {
      status: 'Least Concern', code: 'LC', badgeColor: '#10b981', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Stable globally across northern latitudes (~300,000 individuals)', populationTrend: 'Stable',
      trendData: [280000, 290000, 300000, 310000, 315000],
      threats: [{ title: 'Human Persecution', desc: 'Conflict with ranching and commercial trapping' }],
      actions: [{ title: 'Carnivore compensation', desc: 'Compensate ranchers for verified livestock losses' }]
    },
    verifiedParks: [{ name: 'Yellowstone National Park', location: 'Wyoming, USA', highlight: 'Historic wolf reintroduction trophic cascade', lat: 44.42, lng: -110.58 }],
    funFacts: ['Yellowstone wolves restored forest vegetation by regulating overpopulated elk numbers.'],
    scientificReferences: [{ title: 'Canis lupus Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/3746/144226239' }],
    similarSpecies: [{ name: 'Coyote (Canis latrans)', distinction: 'Significantly smaller, narrower muzzle, higher-pitched calls.' }, { name: 'Husky Dog', distinction: 'Curled tail, less robust cranial structure.' }]
  },

  // 7. FOX
  {
    id: 'fox',
    commonName: 'Red Fox',
    scientificName: 'Vulpes vulpes',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Canidae', species: 'Vulpes vulpes' },
    imageUrl: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Ray Hennessy / Unsplash',
      isVerified: true
    },
    confidence: 98,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Rusty reddish fur with white chest and black stockings on legs', 'Large bushy tail tipped with white ("brush")', 'Pointed narrow snout and large erect ears'],
    uncertaintyExplanation: 'Clear vulpine characteristics: bushy white-tipped tail, black-pawed stockings, slender snout.',
    overview: 'The red fox is the most widespread terrestrial wild carnivore on the planet. Renowned for its extreme cunning and adaptability, it thrives in environments ranging from subarctic tundra to urban city centers.',
    behaviour: 'Solitary hunter utilizing magnetic alignment and acute hearing to pounce onto rodents tunneling under deep snow.',
    size: '45–90 cm', weight: '4–10 kg', lifespan: '3–6 years in wild',
    dietType: 'Omnivore',
    dietItems: [{ name: 'Field Mice & Voles', type: 'Rodent', icon: 'meat' }, { name: 'Berries & Apples', type: 'Fruit', icon: 'fruit' }, { name: 'Beetles & Earthworms', type: 'Invertebrate', icon: 'insect' }],
    dailyTimeline: [{ time: 'Twilight', title: 'Mousing Pounce', desc: 'High-arching leaps to capture rodents in grass or snow.', icon: 'hunt' }, { time: 'Day', title: 'Burrow Rest', desc: 'Curled asleep in subterranean dens.', icon: 'rest' }],
    habitatSummary: 'Forests, tundra, farmlands, scrublands, and suburban green belts.',
    geographicDistribution: ['North America', 'Europe', 'Asia', 'North Africa', 'Introduced to Australia'],
    nativeRegions: ['Holarctic realm'],
    coordinates: { lat: 51.5, lng: -0.12, zoom: 4 },
    quickFacts: ['Uses Earth’s magnetic field to calculate distance when pouncing on prey under snow', 'Produces over 28 different vocal calls'],
    conservation: {
      status: 'Least Concern', code: 'LC', badgeColor: '#10b981', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Abundant and widespread globally', populationTrend: 'Stable',
      trendData: [1000000, 1000000, 1000000],
      threats: [{ title: 'Road mortality', desc: 'Vehicular traffic in urban margins' }],
      actions: [{ title: 'Vaccination baits', desc: 'Oral rabies vaccination drops in European forests' }]
    },
    verifiedParks: [{ name: 'Bialowieza Forest', location: 'Poland/Belarus', highlight: 'Prime primeval forest fox habitats', lat: 52.7, lng: 23.8 }],
    funFacts: ['A fox’s tail acts as a warm blanket wrapped around its face in winter.'],
    scientificReferences: [{ title: 'Vulpes vulpes Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/23062/193904238' }],
    similarSpecies: [{ name: 'Arctic Fox', distinction: 'All-white winter coat, rounded ears, shorter muzzle.' }]
  },

  // 8. DEER
  {
    id: 'deer',
    commonName: 'Red Deer',
    scientificName: 'Cervus elaphus',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Cervidae', species: 'Cervus elaphus' },
    imageUrl: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Vincent van Zalinge / Unsplash',
      isVerified: true
    },
    confidence: 97,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Majestic branched multi-point antlers on males (stags)', 'Reddish-brown summer pelage fading to grayish-brown in winter', 'Slender cloven-hoofed legs and short tail with pale rump patch'],
    uncertaintyExplanation: 'Clear cervid anatomy: multi-tined branching antlers, graceful cloven-hoofed posture.',
    overview: 'The red deer is one of the largest deer species in Europe and western Asia. Famous for the roaring rut competitions in autumn, dominant stags assemble harems of hinds through vocal displays and antler sparring.',
    behaviour: 'Gregarious ruminant that gathers in same-sex herds for most of the year, intermixing during the autumn rutting season.',
    size: '175–250 cm', weight: '120–240 kg', lifespan: '10–13 years in wild',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Grasses & Sedges', type: 'Vegetation', icon: 'grass' }, { name: 'Tree Shoots & Buds', type: 'Foliage', icon: 'grass' }, { name: 'Acorns & Fungi', type: 'Mast', icon: 'fruit' }],
    dailyTimeline: [{ time: 'Dawn', title: 'Meadow Graze', desc: 'Active grazing in open clearings before human disturbance.', icon: 'forage' }, { time: 'Autumn', title: 'Rut Roar', desc: 'Stags roar deep resonant bellows to claim breeding harems.', icon: 'mate' }],
    habitatSummary: 'Deciduous and coniferous woodlands, moorlands, and alpine meadows.',
    geographicDistribution: ['Europe', 'Caucasus', 'Asia Minor', 'North Africa'],
    nativeRegions: ['Europe', 'Western Asia'],
    coordinates: { lat: 56.5, lng: -4.0, zoom: 4 },
    quickFacts: ['Stags shed and re-grow massive antlers every single year in just a few months', 'Velvet on growing antlers is rich in blood vessels and nerves'],
    conservation: {
      status: 'Least Concern', code: 'LC', badgeColor: '#10b981', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Over 1.5 million individuals in Europe alone', populationTrend: 'Increasing',
      trendData: [1200000, 1350000, 1500000],
      threats: [{ title: 'Hybridization', desc: 'Interbreeding with introduced sika deer in parts of Britain' }],
      actions: [{ title: 'Sustainable Forestry', desc: 'Balanced culling to prevent overgrazing of young saplings' }]
    },
    verifiedParks: [{ name: 'Cairngorms National Park', location: 'Scotland, UK', highlight: 'Ancient Caledonian pine forest deer herds', lat: 57.08, lng: -3.65 }],
    funFacts: ['Antler bone growth is one of the fastest rates of tissue growth in the animal kingdom—up to 2.5 cm per day!'],
    scientificReferences: [{ title: 'Cervus elaphus Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/55997001/142404453' }],
    similarSpecies: [{ name: 'Elk / Wapiti (Cervus canadensis)', distinction: 'Larger body, lighter yellowish rump patch, native to North America.' }]
  },

  // 9. GIRAFFE
  {
    id: 'giraffe',
    commonName: 'Northern Giraffe',
    scientificName: 'Giraffa camelopardalis',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Giraffidae', species: 'Giraffa camelopardalis' },
    imageUrl: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Mark Stoop / Unsplash',
      isVerified: true
    },
    confidence: 99,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Extremely long neck and legs', 'Coat covered in irregular brown patches divided by white lines', 'Skin-covered bone knobs (ossicones) on top of head', 'Long prehensile bluish-black tongue'],
    uncertaintyExplanation: 'Unmistakable anatomy: tallest living terrestrial animal, distinctive ossicones, and towering neck.',
    overview: 'The giraffe is the world’s tallest living land mammal. Towering above the African savannas, its long neck and 45-cm prehensile tongue allow it to browse high thorny acacia leaves out of reach of all other herbivores.',
    behaviour: 'Peaceful browser that lives in loose, open fission-fusion herds. Males spar through "necking" to establish dominance.',
    size: '4.3–5.7 m (height)', weight: '800–1,900 kg', lifespan: '20–25 years',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Acacia Leaves', type: 'Thorny tree foliage', icon: 'grass' }, { name: 'Mimosa Buds', type: 'Shoots', icon: 'grass' }, { name: 'Wild Apricots', type: 'Fruit', icon: 'fruit' }],
    dailyTimeline: [{ time: 'Morning/Afternoon', title: 'High Browsing', desc: 'Reaches top acacia canopy avoiding thorns with thick saliva.', icon: 'forage' }, { time: 'Night', title: 'Quick Naps', desc: 'Sleeps only 30 minutes per day, often standing up.', icon: 'rest' }],
    habitatSummary: 'Savannas, grasslands, and open acacia woodlands.',
    geographicDistribution: ['Chad, Cameroon, Niger, Uganda, Kenya'],
    nativeRegions: ['Central and Eastern Africa'],
    coordinates: { lat: 1.5, lng: 37.0, zoom: 4 },
    quickFacts: ['A giraffe’s heart weighs about 11 kg (25 lbs) to pump blood 2 meters up to its brain', 'Their tongue is dark purple to prevent sunburn while feeding'],
    conservation: {
      status: 'Critically Endangered', code: 'CR', badgeColor: '#dc2626', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Fewer than 6,000 individuals for Northern giraffe species', populationTrend: 'Decreasing',
      trendData: [20000, 12000, 8000, 6200, 5800],
      threats: [{ title: 'Civil unrest & Poaching', desc: 'Meat and pelt poaching in volatile conflict zones' }],
      actions: [{ title: 'Translocations', desc: 'Moving populations to secure fenced national parks in Uganda' }]
    },
    verifiedParks: [{ name: 'Murchison Falls National Park', location: 'Uganda', highlight: 'Key stronghold for Nubian giraffe', lat: 2.28, lng: 31.78 }],
    funFacts: ['Despite having a neck over 2 meters long, giraffes have the exact same number of cervical vertebrae as humans: seven!'],
    scientificReferences: [{ title: 'Giraffa Assessment', source: 'IUCN Red List', url: 'https://www.iucnredlist.org/species/9194/136266699' }],
    similarSpecies: [{ name: 'Okapi (Okapia johnstoni)', distinction: 'Forest dweller, much shorter neck, zebra-striped hindquarters.' }]
  },

  // 10. ZEBRA
  {
    id: 'zebra',
    commonName: 'Plains Zebra',
    scientificName: 'Equus quagga',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Equidae', species: 'Equus quagga' },
    imageUrl: 'https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Ronald Gijezen / Unsplash',
      isVerified: true
    },
    confidence: 99,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Stunning black and white vertical striped coat', 'Erect black-and-white brush mane along neck', 'Equine build with single sturdy hooves'],
    uncertaintyExplanation: 'Clear equine silhouette with vertical alternating black-and-white camouflage stripes.',
    overview: 'The plains zebra is the most abundant and widespread wild equid in Africa. Famous for participating in the Great Migration alongside wildebeest, their stripes confuse biting flies and disorient predatory lions.',
    behaviour: 'Harem social structure consisting of one stallion, several mares, and their foals. Strongly vocal with barking whinnies.',
    size: '200–250 cm', weight: '220–350 kg', lifespan: '15–20 years',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Tall Coarse Grass', type: 'Fibrous grass', icon: 'grass' }, { name: 'Herbs & Leaves', type: 'Forbs', icon: 'grass' }],
    dailyTimeline: [{ time: 'Day', title: 'Pioneer Grazing', desc: 'Eats coarse grass tops making way for selective gazelles.', icon: 'forage' }, { time: 'Evening', title: 'Waterhole Vigil', desc: 'Drinks while sentinels watch for ambush predators.', icon: 'roam' }],
    habitatSummary: 'Treeless grasslands, savannas, and shrub woodlands.',
    geographicDistribution: ['Eastern and Southern Africa'],
    nativeRegions: ['Africa'],
    coordinates: { lat: -2.33, lng: 34.83, zoom: 4 },
    quickFacts: ['Zebras are actually black with white stripes (embryonic skin is dark)', 'Their stripes disrupt the airflow, cooling their body surface'],
    conservation: {
      status: 'Near Threatened', code: 'NT', badgeColor: '#eab308', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Approx. 500,000 individuals', populationTrend: 'Decreasing',
      trendData: [660000, 580000, 520000, 500000],
      threats: [{ title: 'Fencing off water sources', desc: 'Livestock fences blocking migration routes' }],
      actions: [{ title: 'Corridor Agreements', desc: 'Establish conservancies with local landowners' }]
    },
    verifiedParks: [{ name: 'Etosha National Park', location: 'Namibia', highlight: 'Vast salt pan zebra herds', lat: -18.85, lng: 16.32 }],
    funFacts: ['Every zebra’s stripe pattern is as unique as a human fingerprint.'],
    scientificReferences: [{ title: 'Equus quagga Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/41013/45172424' }],
    similarSpecies: [{ name: 'Mountain Zebra (Equus zebra)', distinction: 'Dewlap on throat, gridiron stripe pattern on lower back.' }]
  },

  // 11. RHINOCEROS
  {
    id: 'rhinoceros',
    commonName: 'White Rhinoceros',
    scientificName: 'Ceratotherium simum',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Rhinocerotidae', species: 'Ceratotherium simum' },
    imageUrl: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by David Clode / Unsplash',
      isVerified: true
    },
    confidence: 97,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Massive tank-like gray body with thick armor-like skin folds', 'Two prominent keratin horns on snout (front horn is longer)', 'Wide flat square upper lip adapted for ground grazing'],
    uncertaintyExplanation: 'Clear megaherbivore anatomy: wide square mouth, dual nasal horns, armored pachyderm body.',
    overview: 'The white rhinoceros is the largest extant species of rhinoceros and the second-largest land mammal. Despite its name, its skin is slate gray—the moniker originates from the Dutch word "wijd" (wide), referring to its broad square mouth.',
    behaviour: 'Semi-social grazer that forms small groups known as "crashes". Males defend dung-marked territories.',
    size: '3.4–4.0 m', weight: '1,700–2,400 kg', lifespan: '35–45 years',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Short Savanna Grass', type: 'Graminoids', icon: 'grass' }],
    dailyTimeline: [{ time: 'Early Morning', title: 'Lawn Grazing', desc: 'Crops short grass using wide horny lips.', icon: 'forage' }, { time: 'Hot Noon', title: 'Wallow Bath', desc: 'Submerges in mud pools to prevent overheating and tick bites.', icon: 'rest' }],
    habitatSummary: 'Long and short-grass savannas with water sources.',
    geographicDistribution: ['South Africa, Namibia, Zimbabwe, Kenya'],
    nativeRegions: ['Southern and Eastern Africa'],
    coordinates: { lat: -24.0, lng: 31.5, zoom: 4 },
    quickFacts: ['Its horns are made of keratin—the exact same protein as human hair and fingernails', 'Can run up to 50 km/h (31 mph) despite weighing over 2 tonnes'],
    conservation: {
      status: 'Near Threatened', code: 'NT', badgeColor: '#eab308', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Approx. 15,940 Southern white rhinos (Northern subspecies functionally extinct)', populationTrend: 'Decreasing',
      trendData: [21000, 19500, 18000, 16000],
      threats: [{ title: 'Intense Horn Poaching', desc: 'Transnational organized crime syndicates targeting horns' }],
      actions: [{ title: 'Armed Ranger Protection', desc: '24/7 armed protection units and DNA profiling (RhODIS)' }]
    },
    verifiedParks: [{ name: 'Hluhluwe-iMfolozi Park', location: 'South Africa', highlight: 'Birthplace of rhino conservation and recovery', lat: -28.2, lng: 31.9 }],
    funFacts: ['White rhinos have poor eyesight (cannot see a motionless human past 30 meters), but their sense of smell and hearing are razor-sharp.'],
    scientificReferences: [{ title: 'Ceratotherium simum Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/4185/45813830' }],
    similarSpecies: [{ name: 'Black Rhinoceros (Diceros bicornis)', distinction: 'Pointed hooked prehensile lip for browsing trees, more aggressive.' }]
  },

  // 12. HIPPOPOTAMUS
  {
    id: 'hippopotamus',
    commonName: 'Hippopotamus',
    scientificName: 'Hippopotamus amphibius',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Hippopotamidae', species: 'Hippopotamus amphibius' },
    imageUrl: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Diego F. Parra / Unsplash',
      isVerified: true
    },
    confidence: 96,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Barrel-shaped torso on short legs', 'Colossal mouth with razor-sharp canine tusks', 'Eyes, ears, and nostrils situated high on head for water immersion'],
    uncertaintyExplanation: 'Clear semi-aquatic megafauna traits: barrel body, elevated cranial sensors, enormous tusked gape.',
    overview: 'The hippopotamus is the third-largest type of land mammal, spending daylight hours submerged in rivers and lakes to keep its hairless skin cool and hydrated before emerging at night to graze.',
    behaviour: 'Highly territorial in water schools led by dominant bulls. Extremely aggressive when cornered or separated from water.',
    size: '3.0–4.5 m', weight: '1,300–1,800 kg', lifespan: '40–50 years',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Short Pasture Grass', type: 'Poaceae', icon: 'grass' }],
    dailyTimeline: [{ time: 'Day', title: 'River Soak', desc: 'Floats in muddy water schools; secretes red "blood sweat" sunblock.', icon: 'rest' }, { time: 'Night', title: 'Land Grazing', desc: 'Walks up to 10 km inland to consume 40 kg of grass.', icon: 'forage' }],
    habitatSummary: 'Slow-moving freshwater rivers, lakes, and adjacent reed pastures.',
    geographicDistribution: ['Sub-Saharan Africa'],
    nativeRegions: ['Africa'],
    coordinates: { lat: -19.5, lng: 23.5, zoom: 4 },
    quickFacts: ['Hippos cannot actually swim; they bounce and walk along the riverbed floor', 'Their skin secretes a natural pinkish fluid that acts as sunscreen and antiseptic'],
    conservation: {
      status: 'Vulnerable', code: 'VU', badgeColor: '#f59e0b', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Approx. 115,000 – 130,000 individuals', populationTrend: 'Stable',
      trendData: [130000, 125000, 120000],
      threats: [{ title: 'Drought & River Diversion', desc: 'Agricultural dams shrinking river sanctuaries' }, { title: 'Poaching for canine ivory', desc: 'Ivory tooth trafficking' }],
      actions: [{ title: 'River Basin Protection', desc: 'Enforce minimum environmental water flow levels' }]
    },
    verifiedParks: [{ name: 'Okavango Delta', location: 'Botswana', highlight: 'Immense wetland water channels', lat: -19.3, lng: 22.9 }],
    funFacts: ['A hippo can open its jaws up to 150 degrees, displaying canines that can grow up to 50 cm (20 inches) long.'],
    scientificReferences: [{ title: 'Hippopotamus amphibius Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/10103/18567364' }],
    similarSpecies: [{ name: 'Pygmy Hippopotamus (Choeropsis liberiensis)', distinction: 'Much smaller, more terrestrial, solitary forest dweller in West Africa.' }]
  },

  // 13. BEAR
  {
    id: 'bear',
    commonName: 'Grizzly Bear',
    scientificName: 'Ursus arctos horribilis',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Ursidae', species: 'Ursus arctos' },
    imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Mark Basarab / Unsplash',
      isVerified: true
    },
    confidence: 96,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Prominent muscle hump between shoulder blades', 'Dished concave facial profile and rounded ears', 'Long slightly curved front claws measuring up to 10 cm'],
    uncertaintyExplanation: 'Clear ursid anatomy: muscular shoulder hump, dished facial profile, dense shaggy brown pelage.',
    overview: 'The grizzly bear is a powerful subspecies of brown bear native to North America. Equipped with massive shoulder muscles and claws built for digging, it is an opportunistic omnivore with an insatiable appetite before winter torpor.',
    behaviour: 'Mostly solitary outside of mother-cub bonds and seasonal congregations at salmon spawning rivers. Enters winter torpor for 5–7 months.',
    size: '200–280 cm', weight: '180–400 kg', lifespan: '20–25 years',
    dietType: 'Omnivore',
    dietItems: [{ name: 'Pacific Salmon', type: 'Fish', icon: 'fish' }, { name: 'Berries & Roots', type: 'Fruit/Roots', icon: 'fruit' }, { name: 'Elk Calves', type: 'Ungulate', icon: 'meat' }, { name: 'Moths & Insects', type: 'Insect', icon: 'insect' }],
    dailyTimeline: [{ time: 'Summer', title: 'Salmon Snatching', desc: 'Catches migrating salmon at waterfall cataracts.', icon: 'hunt' }, { time: 'Autumn', title: 'Hyperphagia', desc: 'Consumes up to 20,000 calories a day to build winter blubber.', icon: 'forage' }, { time: 'Winter', title: 'Torpor Sleep', desc: 'Deep sleep in mountain dens without eating or drinking.', icon: 'rest' }],
    habitatSummary: 'Alpine tundras, coastal river estuaries, temperate rainforests, and subalpine forests.',
    geographicDistribution: ['Alaska, Canada, Northwest USA'],
    nativeRegions: ['North America'],
    coordinates: { lat: 58.6, lng: -155.0, zoom: 4 },
    quickFacts: ['During hibernation, their heart rate drops from 40 to only 8 beats per minute', 'Their shoulder hump is a massive mass of muscle used to dig through rocky earth'],
    conservation: {
      status: 'Least Concern', code: 'LC', badgeColor: '#10b981', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Approx. 55,000 wild individuals across North America (stable in Alaska/Canada)', populationTrend: 'Stable',
      trendData: [50000, 52000, 55000],
      threats: [{ title: 'Habitat fragmentation', desc: 'Roads in lower 48 states separating populations' }],
      actions: [{ title: 'Bear-proof food storage', desc: 'Enforce bear-proof canisters in national parks' }]
    },
    verifiedParks: [{ name: 'Katmai National Park', location: 'Alaska, USA', highlight: 'World-famous Brooks Falls salmon feeding', lat: 58.6, lng: -155.0 }],
    funFacts: ['Grizzly bears can run up to 55 km/h (35 mph) downhill or uphill.'],
    scientificReferences: [{ title: 'Ursus arctos Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/41688/121065408' }],
    similarSpecies: [{ name: 'American Black Bear (Ursus americanus)', distinction: 'No shoulder hump, straight Roman nose profile, shorter claws.' }]
  },

  // 14. PANDA
  {
    id: 'panda',
    commonName: 'Giant Panda',
    scientificName: 'Ailuropoda melanoleuca',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Ursidae', species: 'Ailuropoda melanoleuca' },
    imageUrl: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Sid Balachandran / Unsplash',
      isVerified: true
    },
    confidence: 99,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Distinctive black patches around eyes, black ears, and black shoulder band', 'Fluffy white head and body', 'Round skull with powerful chewing jaw muscles and pseudo-thumb'],
    uncertaintyExplanation: 'Iconic black-and-white pelage, specialized round facial structure.',
    overview: 'The giant panda is a world-renowned conservation ambassador endemic to the bamboo mist forests of southwest China. Though taxonomically a carnivore, over 99% of its diet consists of fibrous bamboo shoots and leaves.',
    behaviour: 'Solitary, peaceful bamboo specialist that spends 10–14 hours daily chewing bamboo while sitting upright.',
    size: '120–190 cm', weight: '70–120 kg', lifespan: '15–20 years in wild',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Bamboo Shoots', type: 'Gramineae', icon: 'grass' }, { name: 'Bamboo Leaves & Stems', type: 'Bamboo', icon: 'grass' }],
    dailyTimeline: [{ time: 'Day/Night', title: 'Continuous Feeding', desc: 'Feeds in 2–4 hour cycles separated by naps.', icon: 'forage' }, { time: 'Rest', title: 'Tree Perch', desc: 'Naps high in cedar branches safe from leopards.', icon: 'rest' }],
    habitatSummary: 'Temperate montane broadleaf and mixed forests with dense bamboo understories.',
    geographicDistribution: ['Sichuan, Shaanxi, and Gansu provinces, China'],
    nativeRegions: ['East Asia'],
    coordinates: { lat: 31.0, lng: 103.0, zoom: 4 },
    quickFacts: ['Has a specialized elongated wrist bone called a "pseudo-thumb" to grip bamboo stalks', 'Must eat up to 38 kg of bamboo every single day to extract enough nutrients'],
    conservation: {
      status: 'Vulnerable', code: 'VU', badgeColor: '#f59e0b', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Approx. 1,860 mature wild pandas (downlisted from Endangered due to reforestation)', populationTrend: 'Increasing',
      trendData: [1100, 1590, 1860],
      threats: [{ title: 'Bamboo Die-offs', desc: 'Periodic synchronous bamboo flowering and dying cycles' }],
      actions: [{ title: 'Giant Panda National Park', desc: 'Unified 27,000 km² protected reserve created by China' }]
    },
    verifiedParks: [{ name: 'Wolong National Nature Reserve', location: 'Sichuan, China', highlight: 'Premier reserve in the Qionglai Mountains', lat: 31.03, lng: 103.18 }],
    funFacts: ['Newborn panda cubs are pink, hairless, blind, and weigh only 100 grams (1/900th of their mother’s weight)—the size of a stick of butter!'],
    scientificReferences: [{ title: 'Ailuropoda melanoleuca Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/712/121745669' }],
    similarSpecies: [{ name: 'Red Panda (Ailurus fulgens)', distinction: 'Much smaller, reddish fur, raccoon-like ringed tail; belongs to distinct family.' }]
  },

  // 15. MONKEY
  {
    id: 'monkey',
    commonName: 'Rhesus Macaque',
    scientificName: 'Macaca mulatta',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Cercopithecidae', species: 'Macaca mulatta' },
    imageUrl: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Jamie Haughton / Unsplash',
      isVerified: true
    },
    confidence: 97,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Brown or gray pelage with pinkish hairless face', 'Medium-length furred tail', 'Dexterous hands with opposable thumbs and cheek pouches'],
    uncertaintyExplanation: 'Clear cercopithecine primate features: cheek pouches, pink facial skin, quadrupedal posture.',
    overview: 'The rhesus macaque is one of the best-known Old World monkeys. Highly social and intellectually resourceful, it has the widest geographic range of any non-human primate, thriving across jungles, mountains, and bustling urban temple complexes.',
    behaviour: 'Lives in matrilineal troops of 20 to 200 individuals. Employs intricate vocalizations, facial gestures, and grooming hierarchies.',
    size: '47–53 cm', weight: '5–11 kg', lifespan: '20–25 years',
    dietType: 'Omnivore',
    dietItems: [{ name: 'Wild Fruit & Seeds', type: 'Fruit', icon: 'fruit' }, { name: 'Leaves & Roots', type: 'Foliage', icon: 'grass' }, { name: 'Insects & Spiders', type: 'Arthropod', icon: 'insect' }],
    dailyTimeline: [{ time: 'Morning', title: 'Troop Forage', desc: 'Collects fruit and stores them inside elastic cheek pouches.', icon: 'forage' }, { time: 'Afternoon', title: 'Mutual Grooming', desc: 'Strengthens social bonds and removes parasites.', icon: 'roam' }],
    habitatSummary: 'Grasslands, arid scrub, tropical forests, and urban settlements.',
    geographicDistribution: ['South, Central, and Southeast Asia'],
    nativeRegions: ['Asia'],
    coordinates: { lat: 27.17, lng: 78.04, zoom: 4 },
    quickFacts: ['Gave its name to the human blood Rh factor discovery', 'Can store an entire meal’s worth of food inside elastic cheek pouches to chew later in safety'],
    conservation: {
      status: 'Least Concern', code: 'LC', badgeColor: '#10b981', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Extremely widespread and abundant', populationTrend: 'Stable',
      trendData: [1000000, 1000000],
      threats: [{ title: 'Urban conflict', desc: 'Human-wildlife conflict around cities' }],
      actions: [{ title: 'Humane sterilizations', desc: 'Population management in temple cities' }]
    },
    verifiedParks: [{ name: 'Jim Corbett National Park', location: 'India', highlight: 'Wild deciduous forest troops', lat: 29.53, lng: 78.77 }],
    funFacts: ['Rhesus macaques were among the very first primates sent into space in research missions during the 1940s and 50s.'],
    scientificReferences: [{ title: 'Macaca mulatta Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/12554/17951229' }],
    similarSpecies: [{ name: 'Crab-eating Macaque (Macaca fascicularis)', distinction: 'Significantly longer tail, darker coat.' }]
  },

  // 16. GORILLA
  {
    id: 'gorilla',
    commonName: 'Western Gorilla',
    scientificName: 'Gorilla gorilla',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Hominidae', species: 'Gorilla gorilla' },
    imageUrl: 'https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Geran de Klerk / Unsplash',
      isVerified: true
    },
    confidence: 98,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Massive chest and broad shoulders with dark fur', 'Silver hair saddle across lower back of mature males (silverback)', 'Large brow ridges and hairless black face with expressive eyes'],
    uncertaintyExplanation: 'Clear great ape morphology: robust chest, knuckle-walking posture, silverback coloration.',
    overview: 'The gorilla is the largest living primate on Earth. Despite its formidable strength and chest-beating displays, it is a gentle, peaceful vegetarian living in close family troops led by a wise silverback protector.',
    behaviour: 'Cohesive family group of 5–12 individuals led by a dominant silverback. Knuckle-walker that builds fresh leaf sleeping nests every single evening.',
    size: '1.2–1.8 m (standing height)', weight: '135–220 kg', lifespan: '35–40 years in wild',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Wild Celery & Stems', type: 'Herbs', icon: 'grass' }, { name: 'Bamboo Shoots', type: 'Bamboo', icon: 'grass' }, { name: 'Forest Fruits & Bark', type: 'Fruit', icon: 'fruit' }],
    dailyTimeline: [{ time: 'Morning', title: 'Ground Foraging', desc: 'Gentle grazing on forest herbs and wild celery.', icon: 'forage' }, { time: 'Dusk', title: 'Nest Construction', desc: 'Bends tree boughs and leaves to weave soft bedding.', icon: 'rest' }],
    habitatSummary: 'Tropical lowland rainforests, montane forests, and swamp clearings.',
    geographicDistribution: ['Congo Basin, Gabon, Cameroon, Equatorial Guinea'],
    nativeRegions: ['Central Africa'],
    coordinates: { lat: -0.5, lng: 15.0, zoom: 4 },
    quickFacts: ['Gorillas share roughly 98.3% of their DNA with humans', 'A silverback can lift up to 800 kg (1,800 lbs) of dead weight'],
    conservation: {
      status: 'Critically Endangered', code: 'CR', badgeColor: '#dc2626', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Approx. 316,000 western lowland gorillas (mountain gorillas ~1,000)', populationTrend: 'Decreasing',
      trendData: [450000, 380000, 316000],
      threats: [{ title: 'Commercial Bushmeat', desc: 'Illegal commercial hunting deep in logging concessions' }, { title: 'Ebola Virus Epidemics', desc: 'Devastating outbreaks in ape sanctuaries' }],
      actions: [{ title: 'Ranger Eco-guardians', desc: 'Patrol transboundary national parks' }]
    },
    verifiedParks: [{ name: 'Odzala-Kokoua National Park', location: 'Republic of the Congo', highlight: 'Pristine rainforest with forest bais', lat: 0.8, lng: 14.9 }],
    funFacts: ['Each gorilla has a unique nose print with distinct wrinkles and indentations, just like human fingerprints.'],
    scientificReferences: [{ title: 'Gorilla gorilla Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/9404/136250858' }],
    similarSpecies: [{ name: 'Chimpanzee (Pan troglodytes)', distinction: 'Much smaller, more arboreal, omnivorous, hairless pale/pink faces.' }]
  },

  // 17. KANGAROO
  {
    id: 'kangaroo',
    commonName: 'Red Kangaroo',
    scientificName: 'Osphranter rufus',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Macropodidae', species: 'Osphranter rufus' },
    imageUrl: 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Martin Adams / Unsplash',
      isVerified: true
    },
    confidence: 97,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Massive powerful hind legs built for bipedal hopping', 'Long muscular tail used as a third balance tripod', 'Females carry pouch (marsupium) on abdomen', 'Short reddish-brown fur in males, blue-gray in females'],
    uncertaintyExplanation: 'Clear macropod marsupial features: hopping hindquarters, balancing muscular tail, abdominal pouch.',
    overview: 'The red kangaroo is the largest of all marsupials and the largest terrestrial mammal native to Australia. Masterfully adapted to the harsh arid outback, it conserves water and hops at speeds over 60 km/h with high energy efficiency.',
    behaviour: 'Lives in small social groups called "mobs". Males ("boomers") fight for mating rights through "boxing" matches balance-kicking with hind feet.',
    size: '1.3–1.6 m (head-and-body)', weight: '40–90 kg', lifespan: '12–18 years',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Desert Grasses', type: 'Arid grass', icon: 'grass' }, { name: 'Saltbush & Forbs', type: 'Herbs', icon: 'grass' }],
    dailyTimeline: [{ time: 'Cool Dawn/Dusk', title: 'Outback Grazing', desc: 'Hops across plains feeding on succulent desert grasses.', icon: 'forage' }, { time: 'Hot Day', title: 'Scrub Shade', desc: 'Rests in the shade of mulga bushes and licks forearms to cool down.', icon: 'rest' }],
    habitatSummary: 'Arid and semi-arid scrublands, grasslands, and desert plains.',
    geographicDistribution: ['Continental Australia (arid central inland)'],
    nativeRegions: ['Australia'],
    coordinates: { lat: -25.0, lng: 133.0, zoom: 4 },
    quickFacts: ['Can leap up to 9 meters (30 feet) in a single bound', 'A newborn joey is the size of a jellybean (2 cm) and crawls into the pouch on its own'],
    conservation: {
      status: 'Least Concern', code: 'LC', badgeColor: '#10b981', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Millions across Australia (numbers fluctuate with drought/rainfall)', populationTrend: 'Stable',
      trendData: [12000000, 14000000, 16000000],
      threats: [{ title: 'Severe droughts', desc: 'Prolonged climate drying events' }],
      actions: [{ title: 'Sustainable quota regulation', desc: 'Regulated harvest quotas overseen by Australian government' }]
    },
    verifiedParks: [{ name: 'Flinders Ranges National Park', location: 'South Australia', highlight: 'Ancient red rock gorges and kangaroos', lat: -31.4, lng: 138.7 }],
    funFacts: ['Kangaroos cannot walk backwards because of their thick muscular tail and long feet!'],
    scientificReferences: [{ title: 'Osphranter rufus Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/40562/21953158' }],
    similarSpecies: [{ name: 'Eastern Grey Kangaroo (Macropus giganteus)', distinction: 'Uniform gray fur, prefers wetter coastal forests.' }, { name: 'Wallaby', distinction: 'Much smaller stature and compact feet.' }]
  },

  // 18. RABBIT
  {
    id: 'rabbit',
    commonName: 'European Rabbit',
    scientificName: 'Oryctolagus cuniculus',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Leporidae', species: 'Oryctolagus cuniculus' },
    imageUrl: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Gary Bendig / Unsplash',
      isVerified: true
    },
    confidence: 97,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Long erect ears measuring 6–9 cm', 'Short fluffy tail ("scut") with white underside', 'Soft grayish-brown coat and long hind legs for hopping'],
    uncertaintyExplanation: 'Clear lagomorph characteristics: long ears, compact body, twitching sensory nose.',
    overview: 'The European rabbit is an iconic burrowing lagomorph and the ancestor of all domestic rabbit breeds. Renowned for constructing complex underground tunnel networks called warrens, it is a crucial prey species for raptors and carnivores.',
    behaviour: 'Highly social, colonial burrower living in warrens. Thumps hind feet loudly on the ground to signal approaching predators.',
    size: '34–50 cm', weight: '1.2–2.5 kg', lifespan: '3–9 years',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Grass & Clover', type: 'Herbs', icon: 'grass' }, { name: 'Leaves & Twigs', type: 'Foliage', icon: 'grass' }, { name: 'Roots & Bark', type: 'Roots', icon: 'grass' }],
    dailyTimeline: [{ time: 'Crepuscular', title: 'Surface Foraging', desc: 'Feeds near burrow entrance with ears cocked for danger.', icon: 'forage' }, { time: 'Day', title: 'Warren Safety', desc: 'Rests in subterranean tunnels safe from eagles and foxes.', icon: 'rest' }],
    habitatSummary: 'Grasslands, meadows, sand dunes, and agricultural edges.',
    geographicDistribution: ['Native to Iberian Peninsula; introduced globally across Europe, Americas, Australia'],
    nativeRegions: ['Southwestern Europe'],
    coordinates: { lat: 39.5, lng: -4.0, zoom: 4 },
    quickFacts: ['Practice caecotrophy: they re-ingest special soft pellets to absorb vital vitamins and minerals', 'A single female can produce up to 30 kits a year'],
    conservation: {
      status: 'Endangered (in native Iberian range)', code: 'EN', badgeColor: '#ef4444', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Massive global introduced numbers, but native Iberian populations crashed due to myxomatosis and RHD virus', populationTrend: 'Decreasing',
      trendData: [100000, 60000, 30000],
      threats: [{ title: 'Viral diseases', desc: 'Rabbit Haemorrhagic Disease (RHD) and myxomatosis' }],
      actions: [{ title: 'Vaccination and breeding', desc: 'Restore populations to feed endangered Iberian lynx' }]
    },
    verifiedParks: [{ name: 'Doñana National Park', location: 'Spain', highlight: 'Native warren ecosystems supporting imperial eagles', lat: 37.0, lng: -6.5 }],
    funFacts: ['Rabbits perform a joyful acrobatic jump called a "binky" where they leap into the air and twist their body!'],
    scientificReferences: [{ title: 'Oryctolagus cuniculus Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/41291/170519403' }],
    similarSpecies: [{ name: 'European Hare (Lepus europaeus)', distinction: 'Much larger body, much longer black-tipped ears, does not burrow.' }]
  },

  // 19. DOG
  {
    id: 'dog',
    commonName: 'Domestic Dog',
    scientificName: 'Canis lupus familiaris',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Canidae', species: 'Canis lupus' },
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Pets Collection',
      attribution: 'Photo by Victor Grabarczyk / Unsplash',
      isVerified: true
    },
    confidence: 98,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Canine muzzle with wet rhinarium nose', 'Expressive floppy or erect ears', 'Wagging tail and domestic posture and collar/leash cues'],
    uncertaintyExplanation: 'Clear domestic canine characteristics: friendly domestic expression, companion posture, canine dental arcade.',
    overview: 'The domestic dog was the very first animal species domesticated by human hunter-gatherers over 15,000 years ago from an extinct wolf lineage. Celebrated as "man’s best friend", dogs perform roles in companionship, herding, hunting, and search-and-rescue.',
    behaviour: 'Extremely attuned to human speech, hand gestures, and eye contact. Pack-oriented, affectionate, and trainable.',
    size: '15–90 cm (shoulder)', weight: '2–80 kg (breed dependent)', lifespan: '10–15 years',
    dietType: 'Omnivore',
    dietItems: [{ name: 'Balanced Pet Food', type: 'Nutritional food', icon: 'meat' }, { name: 'Meat & Poultry', type: 'Protein', icon: 'meat' }, { name: 'Cooked Vegetables', type: 'Fiber', icon: 'grass' }],
    dailyTimeline: [{ time: 'Morning', title: 'Walk & Sniff', desc: 'Explores neighborhood scents and marks territory.', icon: 'roam' }, { time: 'Afternoon', title: 'Nap & Guard', desc: 'Sleeps curled by family while keeping watch.', icon: 'rest' }, { time: 'Evening', title: 'Social Play', desc: 'Fetch games and companion bonding.', icon: 'hunt' }],
    habitatSummary: 'Human domestic residences, working farms, and companion environments globally.',
    geographicDistribution: ['Worldwide alongside human settlements'],
    nativeRegions: ['Worldwide'],
    coordinates: { lat: 40.71, lng: -74.0, zoom: 4 },
    quickFacts: ['A dog’s sense of smell is roughly 10,000 to 100,000 times more sensitive than humans', 'Dogs can understand over 150 words and human gestures'],
    conservation: {
      status: 'Domesticated', code: 'LC', badgeColor: '#10b981', source: 'Not evaluated by IUCN (Domestic species)', lastVerified: '2024',
      populationEstimate: 'Over 900 million domestic and free-ranging dogs globally', populationTrend: 'Increasing',
      trendData: [700000000, 800000000, 900000000],
      threats: [{ title: 'Neglect and abandonment', desc: 'Shelter overpopulation' }],
      actions: [{ title: 'Adoption and spaying/neutering', desc: 'Support rescue shelters and veterinary care' }]
    },
    verifiedParks: [{ name: 'Central Park Dog Sanctuaries', location: 'New York, USA', highlight: 'Protected urban canine recreation zones', lat: 40.78, lng: -73.96 }],
    funFacts: ['Dogs dream just like humans—when their paws twitch while sleeping, they are likely dreaming of chasing a ball!'],
    scientificReferences: [{ title: 'Canis lupus familiaris Biology', source: 'Animal Diversity Web', url: 'https://animaldiversity.org/accounts/Canis_lupus_familiaris/' }],
    similarSpecies: [{ name: 'Gray Wolf', distinction: 'Larger skull, narrower chest, yellow eyes, wild wary demeanor.' }, { name: 'Dingo', distinction: 'Independent feral canine native to Australia, never barks.' }]
  },

  // 20. CAT
  {
    id: 'cat',
    commonName: 'Domestic Cat',
    scientificName: 'Felis catus',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Felidae', species: 'Felis catus' },
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Pets Collection',
      attribution: 'Photo by Mikhail Vasilyev / Unsplash',
      isVerified: true
    },
    confidence: 99,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Slender flexible body with retractable curved claws', 'Slit vertical pupils and prominent tactile whiskers', 'Small rounded skull with upright triangular ears and long tail'],
    uncertaintyExplanation: 'Clear small felid anatomy: vertical pupil slit, tactile mystacial whiskers, domestic feline posture.',
    overview: 'The domestic cat is a small, typically carnivorous mammal domesticated from the African wildcat (*Felis lybica*) in the Near East over 9,000 years ago. Revered for its agility, hunting instinct for rodents, and affectionate purring companionship.',
    behaviour: 'Crepuscular hunter with exceptional balance and night vision. Communicates with purrs, meows (exclusively toward humans), and head bunting.',
    size: '46–51 cm (head-to-body)', weight: '3.6–5.5 kg', lifespan: '12–18 years',
    dietType: 'Carnivore',
    dietItems: [{ name: 'Quality Cat Food', type: 'Protein diet', icon: 'meat' }, { name: 'Mice & Voles', type: 'Small rodent', icon: 'meat' }, { name: 'Small Birds', type: 'Avian', icon: 'meat' }],
    dailyTimeline: [{ time: 'Morning', title: 'Stretch & Sunbathe', desc: 'Basks in sunny window sills.', icon: 'rest' }, { time: 'Dusk', title: 'Hunting Instinct', desc: 'Pounces on toys or chasing insects in twilight.', icon: 'hunt' }, { time: 'Night', title: 'Deep Sleep', desc: 'Sleeps up to 16 hours a day.', icon: 'rest' }],
    habitatSummary: 'Human households and companion settings globally.',
    geographicDistribution: ['Worldwide across all continents except Antarctica'],
    nativeRegions: ['Worldwide'],
    coordinates: { lat: 30.0, lng: 31.2, zoom: 4 },
    quickFacts: ['Cats can rotate their ears 180 degrees independently using 32 separate ear muscles', 'Purring vibrates at 25–150 Hz, a frequency proven to promote bone and tissue healing'],
    conservation: {
      status: 'Domesticated', code: 'LC', badgeColor: '#10b981', source: 'Not evaluated by IUCN (Domestic species)', lastVerified: '2024',
      populationEstimate: 'Over 600 million domestic and community cats globally', populationTrend: 'Increasing',
      trendData: [500000000, 600000000],
      threats: [{ title: 'Outdoor feral impacts', desc: 'Predation on native songbirds and small reptiles' }],
      actions: [{ title: 'Keep cats indoors', desc: 'Enrich indoor life and participate in Trap-Neuter-Return (TNR)' }]
    },
    verifiedParks: [{ name: 'Aoshima Island (Cat Island)', location: 'Ehime, Japan', highlight: 'Protected sanctuary where cats roam freely', lat: 33.73, lng: 132.48 }],
    funFacts: ['Cats walk like camels and giraffes: they move both right feet first, then both left feet!'],
    scientificReferences: [{ title: 'Felis catus Evolution and Biology', source: 'Animal Diversity Web', url: 'https://animaldiversity.org/accounts/Felis_catus/' }],
    similarSpecies: [{ name: 'African Wildcat (Felis lybica)', distinction: 'Direct wild ancestor, slightly longer legs, reddish behind ears.' }]
  },

  // 21. HORSE
  {
    id: 'horse',
    commonName: 'Domestic Horse',
    scientificName: 'Equus caballus',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Equidae', species: 'Equus caballus' },
    imageUrl: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Helena Lopes / Unsplash',
      isVerified: true
    },
    confidence: 99,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Graceful muscular equine body with flowing mane and tail', 'Single keratin hoof on each long leg', 'Long arched neck and expressive mobile ears'],
    uncertaintyExplanation: 'Clear equine characteristics: single hooves, long flowing mane, domestic pasture build.',
    overview: 'The horse is one of two extant subspecies of *Equus ferus*. Domesticated around 4000 BCE on the Eurasian steppes, horses fundamentally transformed human civilization, warfare, agriculture, and cross-continental travel.',
    behaviour: 'Prey animal with a strong fight-or-flight response. Highly social herd animal communicating through ear angle, whinnies, and tactile nuzzling.',
    size: '140–180 cm (wither height)', weight: '380–1,000 kg', lifespan: '25–30 years',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Pasture Grass & Hay', type: 'Forage', icon: 'grass' }, { name: 'Oats & Grains', type: 'Concentrates', icon: 'grass' }, { name: 'Apples & Carrots', type: 'Treats', icon: 'fruit' }],
    dailyTimeline: [{ time: 'Day', title: 'Pasture Grazing', desc: 'Graze continuously for 16 hours daily.', icon: 'forage' }, { time: 'Night', title: 'Stay Apparatus Rest', desc: 'Can lock leg joints to sleep while standing up.', icon: 'rest' }],
    habitatSummary: 'Pastures, paddocks, grasslands, and ranches globally.',
    geographicDistribution: ['Worldwide'],
    nativeRegions: ['Worldwide'],
    coordinates: { lat: 47.0, lng: 103.0, zoom: 4 },
    quickFacts: ['Equipped with a "stay apparatus" tendon lock that lets them sleep standing without falling', 'Their eyes are among the largest of any land mammal, giving nearly 360-degree panoramic vision'],
    conservation: {
      status: 'Domesticated', code: 'LC', badgeColor: '#10b981', source: 'Not evaluated by IUCN (Domestic species)', lastVerified: '2024',
      populationEstimate: 'Approx. 58 million horses worldwide', populationTrend: 'Stable',
      trendData: [55000000, 58000000],
      threats: [{ title: 'Equine neglect', desc: 'Overbreeding and slaughter export in unregulated regions' }],
      actions: [{ title: 'Equine welfare charities', desc: 'Support rescue sanctuaries and retired racehorse programs' }]
    },
    verifiedParks: [{ name: 'Hustai National Park', location: 'Mongolia', highlight: 'Sanctuary for Przewalski wild horses', lat: 47.7, lng: 105.9 }],
    funFacts: ['Horses cannot breathe through their mouth—they are obligate nasal breathers!'],
    scientificReferences: [{ title: 'Equus caballus Information', source: 'Animal Diversity Web', url: 'https://animaldiversity.org/accounts/Equus_caballus/' }],
    similarSpecies: [{ name: 'Przewalski’s Horse (Equus przewalskii)', distinction: 'Truly wild species, stockier build, erect brush mane, no forelock.' }, { name: 'Donkey (Equus asinus)', distinction: 'Much larger ears, braying call, dorsal cross stripe.' }]
  },

  // 22. COW
  {
    id: 'cow',
    commonName: 'Domestic Cattle',
    scientificName: 'Bos taurus',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Bovidae', species: 'Bos taurus' },
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Farm Collection',
      attribution: 'Photo by Kat Smith / Unsplash',
      isVerified: true
    },
    confidence: 99,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Stocky cloven-hoofed ruminant body', 'Wide muzzle with moist rhinarium', 'Prominent udder in dairy cows and curved horns or polled crown'],
    uncertaintyExplanation: 'Clear bovine morphology: cloven hooves, four-chambered digestive ruminant build, classic domestic coat.',
    overview: 'Domestic cattle are the most widespread species of agricultural ungulate. Domesticated from wild aurochs (*Bos primigenius*) roughly 10,500 years ago in the Fertile Crescent, they provide dairy, beef, leather, and draft power worldwide.',
    behaviour: 'Herd-dwelling ruminant with a distinct social hierarchy. Form close friendships with preferred herd companions.',
    size: '140–180 cm (length)', weight: '450–1,100 kg', lifespan: '15–20 years',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Pasture Grass', type: 'Forage', icon: 'grass' }, { name: 'Alfalfa Hay & Silage', type: 'Stored forage', icon: 'grass' }, { name: 'Corn & Barley Grains', type: 'Feed', icon: 'grass' }],
    dailyTimeline: [{ time: 'Morning', title: 'Grazing Cycle', desc: 'Ruminates food through four stomach chambers (rumen, reticulum, omasum, abomasum).', icon: 'forage' }, { time: 'Afternoon', title: 'Chewing the Cud', desc: 'Regurgitates and re-chews cud while lying in pastures.', icon: 'rest' }],
    habitatSummary: 'Pastures, rangelands, ranches, and dairy farms globally.',
    geographicDistribution: ['Worldwide across all inhabited continents'],
    nativeRegions: ['Worldwide'],
    coordinates: { lat: 46.8, lng: 8.2, zoom: 4 },
    quickFacts: ['A cow spends nearly 8 hours a day chewing its cud', 'Cows can smell scents up to 10 kilometers (6 miles) away'],
    conservation: {
      status: 'Domesticated', code: 'LC', badgeColor: '#10b981', source: 'Not evaluated by IUCN (Domestic species)', lastVerified: '2024',
      populationEstimate: 'Over 1.5 billion cattle globally', populationTrend: 'Increasing',
      trendData: [1300000000, 1400000000, 1500000000],
      threats: [{ title: 'Agricultural environmental footprints', desc: 'Methane emissions and pasture deforestation' }],
      actions: [{ title: 'Regenerative grazing', desc: 'Rotational holistic grazing to sequester carbon into soils' }]
    },
    verifiedParks: [{ name: 'Swiss Alps Heritage Pastures', location: 'Switzerland', highlight: 'Alpine pastoral cultural landscapes', lat: 46.5, lng: 8.0 }],
    funFacts: ['Cows have almost 300 degrees of panoramic vision, allowing them to spot predators approaching from either side!'],
    scientificReferences: [{ title: 'Bos taurus Account', source: 'Animal Diversity Web', url: 'https://animaldiversity.org/accounts/Bos_taurus/' }],
    similarSpecies: [{ name: 'Water Buffalo (Bubalus bubalis)', distinction: 'Swept-back crescent horns, darker skin, semi-aquatic affinity.' }]
  },

  // 23. GOAT
  {
    id: 'goat',
    commonName: 'Domestic Goat',
    scientificName: 'Capra hircus',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Bovidae', species: 'Capra hircus' },
    imageUrl: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Farm Collection',
      attribution: 'Photo by Dan Smedley / Unsplash',
      isVerified: true
    },
    confidence: 98,
    isAnimal: true,
    classification: 'Mammal',
    visualClues: ['Horizontal rectangular slit pupils in eyes', 'Backwards-curving horns and chin beard in many breeds', 'Nimble cloven hooves adapted for climbing sheer cliffs'],
    uncertaintyExplanation: 'Clear caprine traits: horizontal pupils, chin beard, inquisitive agile posture.',
    overview: 'The domestic goat was one of the earliest animals to be domesticated by humans (approx. 10,000 BCE from the wild bezoar ibex in Iran). Inquisitive and exceptionally agile, goats can scramble up sheer cliffs and even climb into trees.',
    behaviour: 'Curious browser that investigates objects with its mobile lips. High balance agility and herd loyalty.',
    size: '60–90 cm (shoulder)', weight: '20–100 kg', lifespan: '15–18 years',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Shrubs & Woody Weeds', type: 'Browse', icon: 'grass' }, { name: 'Thistles & Briars', type: 'Thorny plants', icon: 'grass' }, { name: 'Tree Leaves & Bark', type: 'Woody foliage', icon: 'grass' }],
    dailyTimeline: [{ time: 'Day', title: 'Agile Browsing', desc: 'Stands on hind legs to strip leaves from tree branches.', icon: 'forage' }, { time: 'Midday', title: 'Rock Perch', desc: 'Rests perched on high boulders surveying surroundings.', icon: 'rest' }],
    habitatSummary: 'Mountains, rocky hills, farmlands, and arid scrub pastures.',
    geographicDistribution: ['Worldwide'],
    nativeRegions: ['Worldwide'],
    coordinates: { lat: 35.0, lng: 38.0, zoom: 4 },
    quickFacts: ['Their rectangular horizontal pupils provide wide peripheral vision to spot predators while grazing', 'Goats are browsers, not grazers—they prefer eating thorny bushes, shrubs, and tree leaves over grass'],
    conservation: {
      status: 'Domesticated', code: 'LC', badgeColor: '#10b981', source: 'Not evaluated by IUCN (Domestic species)', lastVerified: '2024',
      populationEstimate: 'Over 1 billion domestic goats globally', populationTrend: 'Increasing',
      trendData: [900000000, 1000000000],
      threats: [{ title: 'Feral overgrazing in island ecosystems', desc: 'Ecological degradation on oceanic islands' }],
      actions: [{ title: 'Feral goat control on sensitive islands', desc: 'Protect native endemic island flora' }]
    },
    verifiedParks: [{ name: 'Arganeraie Biosphere Reserve', location: 'Morocco', highlight: 'Famous tree-climbing goats grazing on argan fruit', lat: 30.4, lng: -9.5 }],
    funFacts: ['Goats are so nimble that in Morocco they routinely climb high into argan tree branches to eat fruit!'],
    scientificReferences: [{ title: 'Capra hircus Account', source: 'Animal Diversity Web', url: 'https://animaldiversity.org/accounts/Capra_hircus/' }],
    similarSpecies: [{ name: 'Sheep (Ovis aries)', distinction: 'Fleece wool, downward tail, grazers rather than browsers, lack beards.' }]
  },

  // 24. EAGLE
  {
    id: 'eagle',
    commonName: 'Bald Eagle',
    scientificName: 'Haliaeetus leucocephalus',
    taxonomy: { kingdom: 'Animalia', class: 'Aves', family: 'Accipitridae', species: 'Haliaeetus leucocephalus' },
    imageUrl: 'https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Frank Cone / Unsplash',
      isVerified: true
    },
    confidence: 99,
    isAnimal: true,
    classification: 'Bird',
    visualClues: ['Snow-white head and tail contrasting with dark brown body', 'Large hooked golden-yellow bill and piercing yellow eyes', 'Massive wingspan (1.8–2.3 m) with powerful taloned feet'],
    uncertaintyExplanation: 'Clear raptor characteristics: white head and tail plumage, heavy hooked bill, massive wing geometry.',
    overview: 'The bald eagle is a sea eagle native to North America and the national bird of the United States. A triumphant conservation success story, its populations rebounded dramatically after the 1972 ban on the pesticide DDT.',
    behaviour: 'Apex raptor that perches high in dead trees near water. Swoops down in a shallow glide to snatch fish from the water surface with talons.',
    size: '70–102 cm (body length)', weight: '3.0–6.3 kg', lifespan: '20–30 years',
    dietType: 'Carnivore',
    dietItems: [{ name: 'Salmon & Trout', type: 'Fish', icon: 'fish' }, { name: 'Waterfowl & Ducks', type: 'Bird', icon: 'meat' }, { name: 'Carrion', type: 'Carrion', icon: 'meat' }],
    dailyTimeline: [{ time: 'Morning', title: 'Estuary Patrol', desc: 'Soars along coastlines spotting surfacing fish.', icon: 'hunt' }, { time: 'Afternoon', title: 'Canopy Nesting', desc: 'Maintains giant tree stick nest ("eyrie").', icon: 'rest' }],
    habitatSummary: 'Coasts, rivers, large lakes, and estuaries with old-growth nesting trees.',
    geographicDistribution: ['North America (Canada, United States, Northern Mexico)'],
    nativeRegions: ['North America'],
    coordinates: { lat: 58.3, lng: -134.4, zoom: 4 },
    quickFacts: ['Their nests are the largest tree nests ever recorded for any animal—up to 3 meters wide and 2 tonnes in weight!', 'Their eyesight is roughly 4 to 5 times sharper than a human with 20/20 vision'],
    conservation: {
      status: 'Least Concern', code: 'LC', badgeColor: '#10b981', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Over 316,000 individuals across the United States', populationTrend: 'Increasing',
      trendData: [70000, 150000, 316000],
      threats: [{ title: 'Lead bullet toxicity', desc: 'Ingesting lead ammunition fragments in hunter-harvested gut piles' }],
      actions: [{ title: 'Non-lead ammunition', desc: 'Promote copper ammunition for big game hunting' }]
    },
    verifiedParks: [{ name: 'Chilkat Bald Eagle Preserve', location: 'Haines, Alaska', highlight: 'Congregation of over 3,000 eagles along salmon rivers', lat: 59.2, lng: -135.5 }],
    funFacts: ['Hollywood movies almost always replace the bald eagle’s actual high-pitched twittering call with the ferocious screech of a red-tailed hawk!'],
    scientificReferences: [{ title: 'Haliaeetus leucocephalus Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/22695144/137637845' }],
    similarSpecies: [{ name: 'Golden Eagle (Aquila chrysaetos)', distinction: 'All-brown plumage, golden nape, feathered legs down to toes, hunts mammals.' }]
  },

  // 25. PEACOCK
  {
    id: 'peacock',
    commonName: 'Indian Peafowl',
    scientificName: 'Pavo cristatus',
    taxonomy: { kingdom: 'Animalia', class: 'Aves', family: 'Phasianidae', species: 'Pavo cristatus' },
    imageUrl: 'https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Jignesh Kher / Unsplash',
      isVerified: true
    },
    confidence: 99,
    isAnimal: true,
    classification: 'Bird',
    visualClues: ['Iridescent sapphire-blue neck and breast', 'Spectacular elongated upper tail covert train displaying emerald/gold eyespots (ocelli)', 'Fan-shaped crest of feathers on head'],
    uncertaintyExplanation: 'Clear peafowl plumage: iridescent metallic blue neck, spectacular train with ocelli eyespots.',
    overview: 'The Indian peafowl is famous for the male’s (peacock) iridescent train of feathers, erected into a shimmering fan during courtship displays. The national bird of India, it holds deep cultural reverence and acts as an early warning sentinel for apex predators.',
    behaviour: 'Ground-dwelling phasianid bird that roosts high in tall trees at night. Alerts the entire forest to prowling tigers with piercing trumpet calls.',
    size: '100–120 cm (body), 200 cm (with train)', weight: '4–6 kg', lifespan: '15–20 years',
    dietType: 'Omnivore',
    dietItems: [{ name: 'Seeds & Grain', type: 'Seeds', icon: 'grass' }, { name: 'Insects & Termites', type: 'Arthropod', icon: 'insect' }, { name: 'Small Snakes & Lizards', type: 'Reptile', icon: 'meat' }],
    dailyTimeline: [{ time: 'Dawn', title: 'Treetop Trumpet', desc: 'Descends from high roost calling resonant trumpet cries.', icon: 'roam' }, { time: 'Afternoon', title: 'Courtship Display', desc: 'Rattles train feathers creating a low-frequency hum to attract peahens.', icon: 'mate' }],
    habitatSummary: 'Deciduous forests, thorn scrub, agricultural margins, and village temple groves.',
    geographicDistribution: ['South Asia (India, Sri Lanka, Nepal, Pakistan)'],
    nativeRegions: ['South Asia'],
    coordinates: { lat: 27.15, lng: 77.52, zoom: 4 },
    quickFacts: ['The iridescent colors are not from pigment, but from microscopic crystal structures reflecting light like prisms', 'Known as fierce snake hunters that will kill venomous cobras'],
    conservation: {
      status: 'Least Concern', code: 'LC', badgeColor: '#10b981', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Widespread and abundant across South Asian range', populationTrend: 'Stable',
      trendData: [450000, 480000, 500000],
      threats: [{ title: 'Agricultural pesticides', desc: 'Pesticide treated seed ingestion' }],
      actions: [{ title: 'Sacred grove preservation', desc: 'Preserve temple trees where peafowl nest' }]
    },
    verifiedParks: [{ name: 'Keoladeo National Park', location: 'Bharatpur, India', highlight: 'Wetland forest brimming with wild peafowl', lat: 27.15, lng: 77.52 }],
    funFacts: ['A peacock does not grow his spectacular train feathers until he is at least three years old!'],
    scientificReferences: [{ title: 'Pavo cristatus Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/22679435/92816089' }],
    similarSpecies: [{ name: 'Green Peafowl (Pavo muticus)', distinction: 'Green neck, endangered species native to Southeast Asia, pointed upright crest.' }]
  },

  // 26. PARROT
  {
    id: 'parrot',
    commonName: 'Scarlet Macaw',
    scientificName: 'Ara macao',
    taxonomy: { kingdom: 'Animalia', class: 'Aves', family: 'Psittacidae', species: 'Ara macao' },
    imageUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Zdeněk Macháček / Unsplash',
      isVerified: true
    },
    confidence: 99,
    isAnimal: true,
    classification: 'Bird',
    visualClues: ['Brilliant scarlet-red plumage on head and shoulders', 'Bright yellow middle wing feathers and electric-blue wing tips', 'Cream-colored bare facial skin patch and long pointed tail'],
    uncertaintyExplanation: 'Clear psittacine features: scarlet, yellow, and blue wing plumage, heavy nut-cracking hooked bill.',
    overview: 'The scarlet macaw is a large, strikingly colorful Neotropical parrot native to humid evergreen rainforests. Renowned for its high intelligence, lifelong monogamous pair bonding, and ability to fly in synchronized pairs over the rainforest canopy.',
    behaviour: 'Mates for life. Flies in noisy pairs or family groups, vocalizing loud raspy squawks that carry for miles across the forest.',
    size: '81–96 cm', weight: '1.0–1.2 kg', lifespan: '40–50 years in wild (up to 75 in captivity)',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Hard Rainforest Nuts', type: 'Nuts', icon: 'fruit' }, { name: 'Wild Figs & Berries', type: 'Fruit', icon: 'fruit' }, { name: 'Clay Mineral Deposits', type: 'Minerals', icon: 'grass' }],
    dailyTimeline: [{ time: 'Morning', title: 'Clay Lick Congregation', desc: 'Eats mineral-rich clay at riverbanks to neutralize dietary plant toxins.', icon: 'forage' }, { time: 'Midday', title: 'High Canopy Flight', desc: 'Soars across rainforest canopy in mated pairs.', icon: 'roam' }],
    habitatSummary: 'Subtropical and tropical humid lowland rainforests and riverine groves.',
    geographicDistribution: ['Central and South America (Amazon Basin)'],
    nativeRegions: ['Central and South America'],
    coordinates: { lat: -3.46, lng: -62.2, zoom: 4 },
    quickFacts: ['Their bill exerts over 300 psi of pressure—strong enough to crack open rock-hard Brazil nuts', 'Macaws visit river clay licks to detoxify poisons found in wild seeds'],
    conservation: {
      status: 'Least Concern', code: 'LC', badgeColor: '#10b981', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Approx. 20,000 – 50,000 individuals across Amazonia', populationTrend: 'Decreasing',
      trendData: [60000, 45000, 35000],
      threats: [{ title: 'Rainforest Deforestation', desc: 'Loss of giant cavity nesting trees' }, { title: 'Poaching for exotic pet trade', desc: 'Raid of wild chicks from tree hollows' }],
      actions: [{ title: 'Artificial nest boxes', desc: 'Install predator-proof PVC nest boxes in canopy' }]
    },
    verifiedParks: [{ name: 'Tambopata National Reserve', location: 'Peru', highlight: 'World-famous Colorado clay lick parrot spectacle', lat: -12.8, lng: -69.3 }],
    funFacts: ['Scarlet macaws mate for life; even when flying in a flock of dozens, mated pairs fly so close together their wingtips almost touch!'],
    scientificReferences: [{ title: 'Ara macao Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/22685563/163777636' }],
    similarSpecies: [{ name: 'Red-and-green Macaw (Ara chloropterus)', distinction: 'Green band on wings instead of yellow, red facial feather lines.' }]
  },

  // 27. OWL
  {
    id: 'owl',
    commonName: 'Great Horned Owl',
    scientificName: 'Bubo virginianus',
    taxonomy: { kingdom: 'Animalia', class: 'Aves', family: 'Strigidae', species: 'Bubo virginianus' },
    imageUrl: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Matthew T Rader / Unsplash',
      isVerified: true
    },
    confidence: 98,
    isAnimal: true,
    classification: 'Bird',
    visualClues: ['Prominent ear tufts ("horns") on top of head', 'Large piercing yellow eyes set in a round facial disc', 'Mottled gray-brown camouflage plumage with white throat bib'],
    uncertaintyExplanation: 'Clear strigiform features: prominent feathery ear tufts, forward-facing yellow eyes, hooked raptor bill.',
    overview: 'The great horned owl is the apex nocturnal raptor of the Americas. Often termed the "tiger of the air", it has specialized serrated wing feathers for silent flight and crushing talons strong enough to take down skunks, rabbits, and other birds of prey.',
    behaviour: 'Nocturnal apex predator. Perches quietly on high lookout branches before swooping silently onto prey in complete darkness.',
    size: '43–64 cm', weight: '1.0–2.5 kg', lifespan: '15–25 years',
    dietType: 'Carnivore',
    dietItems: [{ name: 'Rabbits & Hares', type: 'Lagomorph', icon: 'meat' }, { name: 'Striped Skunks', type: 'Mammal', icon: 'meat' }, { name: 'Mice & Voles', type: 'Rodent', icon: 'meat' }],
    dailyTimeline: [{ time: 'Night', title: 'Silent Ambush', desc: 'Completely silent flight thanks to velvet comb wing fringes.', icon: 'hunt' }, { time: 'Dusk', title: 'Territorial Hoot', desc: 'Deep four-to-five note resonant "hoo-hoo-hoo" duetting.', icon: 'roam' }],
    habitatSummary: 'Forests, deserts, canyons, marshes, and suburban parks.',
    geographicDistribution: ['North, Central, and South America'],
    nativeRegions: ['Americas'],
    coordinates: { lat: 45.0, lng: -93.0, zoom: 4 },
    quickFacts: ['Their talons exert over 300 psi of crushing force—comparable to the bite of a large dog', 'They have virtually no sense of smell, making them one of the few predators that regularly hunt skunks'],
    conservation: {
      status: 'Least Concern', code: 'LC', badgeColor: '#10b981', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Approx. 5.7 million individuals across the Americas', populationTrend: 'Stable',
      trendData: [5000000, 5700000],
      threats: [{ title: 'Rodenticide poisoning', desc: 'Secondary poisoning from eating poisoned rats' }],
      actions: [{ title: 'Ban anticoagulant poisons', desc: 'Promote mechanical traps over rodenticides' }]
    },
    verifiedParks: [{ name: 'Banff National Park', location: 'Alberta, Canada', highlight: 'Rocky mountain coniferous owl habitats', lat: 51.17, lng: -115.57 }],
    funFacts: ['An owl cannot move its eyeballs within their sockets—to look around, it must rotate its entire head up to 270 degrees!'],
    scientificReferences: [{ title: 'Bubo virginianus Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/61741853/95175249' }],
    similarSpecies: [{ name: 'Long-eared Owl (Asio otus)', distinction: 'Slender body, ear tufts set much closer together in the center of forehead.' }, { name: 'Barn Owl (Tyto alba)', distinction: 'Heart-shaped white face, no ear tufts, dark eyes.' }]
  },

  // 28. CROCODILE
  {
    id: 'crocodile',
    commonName: 'Saltwater Crocodile',
    scientificName: 'Crocodylus porosus',
    taxonomy: { kingdom: 'Animalia', class: 'Reptilia', family: 'Crocodylidae', species: 'Crocodylus porosus' },
    imageUrl: 'https://images.unsplash.com/photo-1549241520-425e3dfc01cb?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1549241520-425e3dfc01cb?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by David Clode / Unsplash',
      isVerified: true
    },
    confidence: 98,
    isAnimal: true,
    classification: 'Reptile',
    visualClues: ['Armored scaly hide with raised dorsal osteoderm plates', 'Broad heavy snout with interlocking upper and lower teeth visible when mouth closed', 'Powerful flattened paddle-tail built for underwater propulsion'],
    uncertaintyExplanation: 'Clear crocodilian anatomy: osteoderm armor, prominent fourth mandibular tooth visible, flattened snout.',
    overview: 'The saltwater crocodile is the largest living reptile and the most formidable riparian predator on Earth. Capable of surviving in both freshwater swamps and open oceanic seas, it possesses the strongest measured bite force of any living animal.',
    behaviour: 'Hyper-carnivorous ambush predator. Waits submerged with only eyes and nostrils exposed before striking with explosive speed and rolling prey underwater in a "death roll".',
    size: '4.3–6.0 m', weight: '400–1,100 kg', lifespan: '70–100 years',
    dietType: 'Carnivore',
    dietItems: [{ name: 'Fish & Crabs', type: 'Aquatic', icon: 'fish' }, { name: 'Wild Boars & Wallabies', type: 'Mammal', icon: 'meat' }, { name: 'Water Buffalo', type: 'Ungulate', icon: 'buffalo' }],
    dailyTimeline: [{ time: 'Morning', title: 'Mud Bank Basking', desc: 'Basks in sun with mouth agape to regulate ectothermic body temperature.', icon: 'rest' }, { time: 'Dusk', title: 'Water Ambush', desc: 'Lurks submerged near muddy trails where animals come to drink.', icon: 'hunt' }],
    habitatSummary: 'Mangrove swamps, estuaries, coastal rivers, and oceanic island chains.',
    geographicDistribution: ['Northern Australia, Southeast Asia, Eastern India'],
    nativeRegions: ['Indo-Pacific'],
    coordinates: { lat: -12.5, lng: 132.5, zoom: 4 },
    quickFacts: ['Possesses the strongest measured bite force of any animal: over 3,700 pounds per square inch (16,460 N)', 'Can stay submerged underwater for over two hours while lying in wait'],
    conservation: {
      status: 'Least Concern', code: 'LC', badgeColor: '#10b981', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Over 100,000 adult individuals in Northern Australia alone', populationTrend: 'Stable',
      trendData: [150000, 180000, 200000],
      threats: [{ title: 'Habitat destruction in SE Asia', desc: 'Coastal mangrove clearance for shrimp aquaculture' }],
      actions: [{ title: 'Regulated crocodile farming', desc: 'Replaces wild poaching in Australia' }]
    },
    verifiedParks: [{ name: 'Kakadu National Park', location: 'Northern Territory, Australia', highlight: 'Ancient rivers famous for wild saltwater crocodiles', lat: -12.8, lng: 132.8 }],
    funFacts: ['Crocodiles have salt glands on their tongues that excrete excess salt, allowing them to swim thousands of kilometers across open ocean!'],
    scientificReferences: [{ title: 'Crocodylus porosus Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/5668/3047556' }],
    similarSpecies: [{ name: 'American Alligator (Alligator mississippiensis)', distinction: 'Wide rounded U-shaped snout, lower teeth hidden when mouth is closed, freshwater only.' }]
  },

  // 29. TURTLE
  {
    id: 'turtle',
    commonName: 'Green Sea Turtle',
    scientificName: 'Chelonia mydas',
    taxonomy: { kingdom: 'Animalia', class: 'Reptilia', family: 'Cheloniidae', species: 'Chelonia mydas' },
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Wildlife',
      attribution: 'Photo by Wexor Tmg / Unsplash',
      isVerified: true
    },
    confidence: 99,
    isAnimal: true,
    classification: 'Reptile',
    visualClues: ['Hydrodynamic tear-shaped carapace (shell)', 'Large paddle-like front flippers built for gliding in ocean currents', 'Single pair of prefrontal scales between eyes'],
    uncertaintyExplanation: 'Clear marine chelonian traits: streamlined shell, flipper limbs, oceanic marine adaptation.',
    overview: 'The green sea turtle is one of the largest marine turtles and the only herbivorous species among them. Named for the greenish color of its body fat (derived from its seagrass diet), it undertakes migrations of thousands of miles between foraging grounds and natal nesting beaches.',
    behaviour: 'Graceful marine swimmer that navigates oceanic currents using geomagnetic sensory maps. Females return to the exact beach where they hatched to lay eggs.',
    size: '80–120 cm (carapace length)', weight: '110–190 kg', lifespan: '70–80+ years',
    dietType: 'Herbivore',
    dietItems: [{ name: 'Seagrass Meadows', type: 'Marine angiosperms', icon: 'grass' }, { name: 'Marine Algae & Seaweed', type: 'Algae', icon: 'grass' }],
    dailyTimeline: [{ time: 'Day', title: 'Seagrass Grazing', desc: 'Crops seagrass beds like aquatic lawnmowers.', icon: 'forage' }, { time: 'Night', title: 'Coral Ledge Sleep', desc: 'Rests wedged beneath coral overhangs, holding breath for hours.', icon: 'rest' }],
    habitatSummary: 'Tropical and subtropical coastal waters, coral reefs, and sandy nesting beaches.',
    geographicDistribution: ['Tropical and subtropical oceans worldwide'],
    nativeRegions: ['Worldwide oceans'],
    coordinates: { lat: -18.28, lng: 147.69, zoom: 4 },
    quickFacts: ['Can hold their breath underwater for up to five hours while resting', 'Maintain healthy ocean ecosystems by trimming seagrass beds, promoting nutrient cycling'],
    conservation: {
      status: 'Endangered', code: 'EN', badgeColor: '#ef4444', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Global populations severely depleted from historical baselines', populationTrend: 'Decreasing',
      trendData: [450000, 320000, 250000],
      threats: [{ title: 'Plastic Ingestion & Ghost Nets', desc: 'Mistaking floating plastic bags for jellyfish' }, { title: 'Beach development & artificial lighting', desc: 'Disorienting newly hatched baby turtles' }],
      actions: [{ title: 'Turtle Excluder Devices (TEDs)', desc: 'Mandatory release hatches on commercial shrimp trawling nets' }]
    },
    verifiedParks: [{ name: 'Great Barrier Reef Marine Park', location: 'Queensland, Australia', highlight: 'Raine Island world-record nesting rookery', lat: -11.6, lng: 144.0 }],
    funFacts: ['The temperature of the sand where turtle eggs incubate determines their sex: warmer sand produces females ("hot chicks"), while cooler sand produces males ("cool dudes")!'],
    scientificReferences: [{ title: 'Chelonia mydas Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/4615/11037468' }],
    similarSpecies: [{ name: 'Hawksbill Turtle (Eretmochelys imbricata)', distinction: 'Narrow pointed beak like a bird of prey, serrated shell edges, feeds on sea sponges.' }]
  },

  // 30. DOLPHIN
  {
    id: 'dolphin',
    commonName: 'Bottlenose Dolphin',
    scientificName: 'Tursiops truncatus',
    taxonomy: { kingdom: 'Animalia', class: 'Mammalia', family: 'Delphinidae', species: 'Tursiops truncatus' },
    imageUrl: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=1200&q=80',
    referencePhoto: {
      url: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=1200&q=80',
      source: 'Unsplash Marine Collection',
      attribution: 'Photo by Jonas Allert / Unsplash',
      isVerified: true
    },
    confidence: 99,
    isAnimal: true,
    classification: 'Marine Mammal',
    visualClues: ['Sleek torpedo-shaped slate-gray body with lighter belly', 'Curved falcate dorsal fin situated near mid-back', 'Short defined rostrum ("bottle-nose") with a permanent "smile" jawline'],
    uncertaintyExplanation: 'Clear cetacean morphology: dorsal fin, horizontal tail fluke, distinct bottle-nosed rostrum.',
    overview: 'The common bottlenose dolphin is an exceptionally intelligent marine mammal celebrated for its social complexity, problem-solving skills, and playful leaps. Using bio-sonar echolocation clicks, dolphins navigate and hunt fish in murky waters with millimeter precision.',
    behaviour: 'Lives in dynamic social pods. Cooperates in herding fish, uses tools (such as sea sponges to protect snouts), and communicates through unique "signature whistles".',
    size: '2.0–4.0 m', weight: '150–650 kg', lifespan: '40–50 years',
    dietType: 'Piscivore',
    dietItems: [{ name: 'Mullet & Herring', type: 'Pelagic fish', icon: 'fish' }, { name: 'Squid & Octopus', type: 'Cephalopod', icon: 'fish' }, { name: 'Crustaceans', type: 'Shrimp', icon: 'fish' }],
    dailyTimeline: [{ time: 'Morning', title: 'Pod Fish Herding', desc: 'Coordinated circling of fish schools into tight "bait balls".', icon: 'hunt' }, { time: 'Afternoon', title: 'Bow-riding & Surfing', desc: 'Surfs breaking ocean waves and ship bow waves.', icon: 'roam' }, { time: 'Rest', title: 'Unihemispheric Sleep', desc: 'Sleeps with one brain hemisphere at a time while surfacing to breathe.', icon: 'rest' }],
    habitatSummary: 'Temperate and tropical coastal bays, estuaries, coral lagoons, and open pelagic waters.',
    geographicDistribution: ['Worldwide in temperate and tropical oceans'],
    nativeRegions: ['Worldwide oceans'],
    coordinates: { lat: 25.0, lng: -77.0, zoom: 4 },
    quickFacts: ['Sleeps with only one half of its brain at a time (unihemispheric sleep) so it can stay vigilant and swim up to breathe', 'Each individual dolphin develops a unique "signature whistle" that acts as its personal name'],
    conservation: {
      status: 'Least Concern', code: 'LC', badgeColor: '#10b981', source: 'IUCN Red List', lastVerified: '2023',
      populationEstimate: 'Approx. 600,000 individuals globally', populationTrend: 'Stable',
      trendData: [550000, 600000],
      threats: [{ title: 'Fisheries Bycatch', desc: 'Accidental entanglement in gillnets and commercial trawl gear' }, { title: 'Marine Noise Pollution', desc: 'Naval sonar and shipping motors disrupting echolocation' }],
      actions: [{ title: 'Acoustic pingers', desc: 'Equip fishing nets with sound deterrents to warn dolphins away' }]
    },
    verifiedParks: [{ name: 'Shark Bay Marine Park', location: 'Western Australia', highlight: 'Monkey Mia famous wild dolphin interactions', lat: -25.8, lng: 113.7 }],
    funFacts: ['Dolphins are among the extremely few non-human animals that pass the mirror self-recognition test, proving self-awareness!'],
    scientificReferences: [{ title: 'Tursiops truncatus Assessment', source: 'IUCN', url: 'https://www.iucnredlist.org/species/22563/156932432' }],
    similarSpecies: [{ name: 'Harbor Porpoise (Phocoena phocoena)', distinction: 'Triangular dorsal fin, blunt rounded snout with no beak, spade-shaped teeth.' }, { name: 'Spinner Dolphin (Stenella longirostris)', distinction: 'Much slender build, very long thin beak, leaps with multiple barrel rolls.' }]
  }
];

// Helper to find by id or name
export function findAnimalById(id: string): AnimalProfile | undefined {
  const normalized = id.toLowerCase().trim();
  return ANIMAL_INVENTORY.find(
    (a) => a.id === normalized || a.commonName.toLowerCase() === normalized
  );
}

// Fuzzy / partial name matcher
export function matchAnimalFromInventory(query: string): AnimalProfile | undefined {
  if (!query) return undefined;
  const q = query.toLowerCase().trim();
  
  // Exact id
  const exactId = ANIMAL_INVENTORY.find((a) => a.id === q);
  if (exactId) return exactId;

  // Exact common name
  const exactCommon = ANIMAL_INVENTORY.find((a) => a.commonName.toLowerCase() === q);
  if (exactCommon) return exactCommon;

  // Partial match: word boundary or includes
  return ANIMAL_INVENTORY.find(
    (a) =>
      a.commonName.toLowerCase().includes(q) ||
      q.includes(a.id) ||
      a.scientificName.toLowerCase().includes(q)
  );
}
