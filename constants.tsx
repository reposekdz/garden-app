
import React from 'react';
import { Trade, Language } from './types';

export const TRADES: Trade[] = [
  {
    id: 'sod',
    name: 'Software Development',
    code: 'SOD',
    description: 'Master full-stack development, mobile apps, and systems engineering.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    levels: [
      { id: 'sod3', name: 'Level 3 SOD', description: 'Fundamentals of computer systems and basic programming.' },
      { id: 'sod4', name: 'Level 4 SOD', description: 'Web development, database management, and UI design.' },
      { id: 'sod5', name: 'Level 5 SOD', description: 'Advanced software engineering, cloud computing, and mobile apps.' }
    ],
    tools: [
      { name: 'VS Code', description: 'Primary IDE for coding and debugging.' },
      { name: 'Git & GitHub', description: 'Version control and collaboration.' },
      { name: 'Docker', description: 'Containerization for modern deployment.' },
      { name: 'SQL Workbench', description: 'Database design and management.' }
    ],
    gallery: [
      'https://picsum.photos/1200/800?random=101',
      'https://picsum.photos/1200/800?random=102',
      'https://picsum.photos/1200/800?random=103',
      'https://picsum.photos/1200/800?random=104'
    ],
    coreModules: [
      'Data Structures & Algorithms',
      'Full-stack Web Frameworks',
      'Cloud Architecture (AWS/GCP)',
      'Mobile App Development (Native/Cross)',
      'Cybersecurity Fundamentals'
    ],
    careerProspects: [
      'Full Stack Developer',
      'DevOps Engineer',
      'Systems Architect',
      'Mobile App Specialist',
      'Quality Assurance Tester'
    ]
  },
  {
    id: 'bdc',
    name: 'Building Construction',
    code: 'BDC',
    description: 'Expert training in modern architecture, masonry, and sustainable techniques.',
    image: 'https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=2070&auto=format&fit=crop',
    levels: [
      { id: 'bdc3', name: 'Level 3 BDC', description: 'Basic masonry, site preparation, and safety.' },
      { id: 'bdc4', name: 'Level 4 BDC', description: 'Carpentry, plumbing basics, and blueprint reading.' },
      { id: 'bdc5', name: 'Level 5 BDC', description: 'Structural engineering, project management, and finishing.' }
    ],
    tools: [
      { name: 'Laser Level', description: 'Precision measurement for site layout.' },
      { name: 'Trowels', description: 'Specialized tools for brickwork and plastering.' },
      { name: 'Concrete Mixer', description: 'Industrial equipment for material preparation.' },
      { name: 'Theodolite', description: 'Advanced surveying and angle measurement.' }
    ],
    gallery: [
      'https://picsum.photos/1200/800?random=201',
      'https://picsum.photos/1200/800?random=202',
      'https://picsum.photos/1200/800?random=203',
      'https://picsum.photos/1200/800?random=204'
    ],
    coreModules: [
      'Architectural Blueprint Reading',
      'Structural Analysis & Design',
      'Sustainable Building Materials',
      'Plumbing & Electrical Integration',
      'Construction Project Management'
    ],
    careerProspects: [
      'Site Supervisor',
      'Structural Consultant',
      'Masonry Contractor',
      'Civil Engineering Technician',
      'Quantity Surveyor'
    ]
  },
  {
    id: 'auto',
    name: 'Automobile Technology',
    code: 'AUT',
    description: 'Leading edge diagnosis, repair, and innovation in automotive systems.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop',
    levels: [
      { id: 'aut3', name: 'Level 3 AUT', description: 'Engine fundamentals and basic maintenance.' },
      { id: 'aut4a', name: 'Level 4a AUT', description: 'Advanced Transmission systems and chassis mechanics.' },
      { id: 'aut4b', name: 'Level 4b AUT', description: 'Automotive electrical systems and sensors integration.' },
      { id: 'aut5a', name: 'Level 5a AUT', description: 'Electronic fuel injection and diagnostic scanning expert.' },
      { id: 'aut5b', name: 'Level 5b AUT', description: 'Electric vehicles, hybrid systems and green mobility.' }
    ],
    tools: [
      { name: 'OBD-II Scanner', description: 'Electronic diagnosis of vehicle subsystems.' },
      { name: 'Pneumatic Wrench', description: 'High-torque tools for heavy assembly.' },
      { name: 'Hydraulic Lift', description: 'Professional vehicle elevation for under-body work.' },
      { name: 'Engine Stand', description: 'Mobile mount for engine disassembly and repair.' }
    ],
    gallery: [
      'https://picsum.photos/1200/800?random=301',
      'https://picsum.photos/1200/800?random=302',
      'https://picsum.photos/1200/800?random=303',
      'https://picsum.photos/1200/800?random=304'
    ],
    coreModules: [
      'Engine Diagnostics & Repair',
      'Hybrid & Electric Drive Systems',
      'Electronic Control Units (ECU)',
      'Precision Braking Technology',
      'Advanced Chassis Dynamics'
    ],
    careerProspects: [
      'Auto Workshop Manager',
      'EV Systems Technician',
      'Diagnostics Specialist',
      'Fleet Maintenance Engineer',
      'Automotive Design Consultant'
    ]
  }
];

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    welcome: "Empowering Your Future at Garden TVET",
    tagline: "Skills for a Better Tomorrow",
    home: "Home",
    sports: "Sports",
    services: "Services",
    trades: "Trades",
    contact: "Contact Us",
    support: "Support",
    login: "Login",
    register: "Register",
    searchPlaceholder: "Search everything...",
    sod: "Software Development",
    bdc: "Building Construction",
    auto: "Automobile Tech"
  },
  fr: {
    welcome: "Valoriser votre avenir à Garden TVET",
    tagline: "Compétences pour un avenir meilleur",
    home: "Accueil",
    sports: "Sports",
    services: "Services",
    trades: "Métiers",
    contact: "Contactez-nous",
    support: "Support",
    login: "Connexion",
    register: "S'inscrire",
    searchPlaceholder: "Rechercher tout...",
    sod: "Développement Logiciel",
    bdc: "Construction de Bâtiments",
    auto: "Technologie Automobile"
  },
  rw: {
    welcome: "Ejo heza muri Garden TVET",
    tagline: "Ubumenyingiro ku ejo hazaza",
    home: "Ahabanza",
    sports: "Imikino",
    services: "Serivisi",
    trades: "Imyuga",
    contact: "Twandikire",
    support: "Ubufasha",
    login: "Injira",
    register: "Kwiyandikisha",
    searchPlaceholder: "Shakisha byose...",
    sod: "Gukora Porogaramu",
    bdc: "Ubwubatsi",
    auto: "Ikinyabiziga"
  },
  sw: {
    welcome: "Kukuza Baadaye Yako hapa Garden TVET",
    tagline: "Ujuzi kwa Kesho Bora",
    home: "Nyumbani",
    sports: "Michezo",
    services: "Huduma",
    trades: "Biashara",
    contact: "Wasiliana Nasi",
    support: "Msaada",
    login: "Ingia",
    register: "Jisajili",
    searchPlaceholder: "Tafuta kila kitu...",
    sod: "Maendeleo ya Programu",
    bdc: "Ujenzi wa Majengo",
    auto: "Teknolojia ya Magari"
  }
};
