
import React from 'react';
import { Trade, Language } from './types';

export const TRADES: Trade[] = [
  {
    id: 'sod',
    name: 'Gukora Porogaramu',
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
      { url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070', caption: 'Abanyeshuri bafatanya mu mushinga wa porogaramu.' },
      { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071', caption: 'Inyigisho ku miterere y’imbuga nkoranyambaga.' },
      { url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070', caption: 'Gusuzuma uburyo sisitemu zikora mu buryo bwa kijyambere.' },
      { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070', caption: 'Gupima porogaramu z’imfashanyigisho kuri telefone.' }
    ],
    coreModules: [
      'Uburyo Porogaramu Zubakwa',
      'Gukora I mbuga za Web',
      'Ikoranabuhanga rya Cloud',
      'Gukora Porogaramu za Telefone',
      'Umutekano w’Ikoranabuhanga'
    ],
    careerProspects: [
      'Umukanishi wa Porogaramu',
      'Injeniyeri wa Cloud',
      'Ushinzwe Umutekano w’Ikoranabuhanga',
      'Umwubatsi w’Imbuga za Web',
      'Ushinzwe Ubuziranenge bwa Porogaramu'
    ]
  },
  {
    id: 'bdc',
    name: 'Ubwubatsi',
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
      { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070', caption: 'Uburyo bwiza bwo kubaka inkuta.' },
      { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070', caption: 'Gusoma igishushanyo mbonera cy’inyubako.' },
      { url: 'https://images.unsplash.com/photo-1589939705384-5185138a04b9?q=80&w=2070', caption: 'Gusoza imirimo y’ubwubatsi.' },
      { url: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2070', caption: 'Igisenge kijyanye n’ibidukikije.' }
    ],
    coreModules: [
      'Gusoma I bishushanyo Mbonera',
      'Inganda n’Ubwubatsi',
      'Ibikoresho biramba by’ubwubatsi',
      'Uburyo bwo gushyira amazi n’amashanyarazi mu nzu',
      'Gucunga Imishinga y’Ubwubatsi'
    ],
    careerProspects: [
      'Ushinzwe ubugenzuzi bw’inyubako',
      'Injeniyeri w’ubwubatsi',
      'RWiyemezamirimo mu bwubatsi',
      'Umujyanama mu bwubatsi',
      'Ushinzwe kugena ingano y’ibikenewe'
    ]
  },
  {
    id: 'auto',
    name: 'Ikinyabiziga',
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
      { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070', caption: 'Gusuzuma no gusana moteri.' },
      { url: 'https://images.unsplash.com/photo-1493238507129-15510bfad190?q=80&w=2070', caption: 'Gukoresha mudasobwa mu gusuzuma imodoka.' },
      { url: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072', caption: 'Imodoka zikoresha amashanyarazi.' },
      { url: 'https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?q=80&w=2070', caption: 'Uburyo bwo gusuzuma feri n’imikorere y’imodoka.' }
    ],
    coreModules: [
      'Gusuzuma no Gusana Moteri',
      'Imodoka zikoresha Amashanyarazi',
      'Sisitemu z’Ikoranabuhanga mu modoka',
      'Ikoranabuhanga rya Feri',
      'Uburyo imodoka ihagarara'
    ],
    careerProspects: [
      'Ushinzwe igaraje ry’imodoka',
      'Umukanishi w’imodoka z’amashanyarazi',
      'Ushinzwe gusuzuma ibinyabiziga',
      'Injeniyeri w’imodoka',
      'Umujyanama mu by’imodoka'
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
    auto: "Automobile Tech",
    testimonialsTitle: "What Parents & Students Say",
    testimonialsTag: "Community Voices",
    campusLifeTitle: "Campus Experience",
    campusLifeTag: "Beyond Academics",
    loginTitle: "Welcome Back",
    loginSubtitle: "Login to your account to continue",
    registerTitle: "Join Our Community",
    registerSubtitle: "Start your journey today",
    roleSelectionTitle: "Select Your Profile"
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
    auto: "Technologie Automobile",
    testimonialsTitle: "Ce que disent les parents et les élèves",
    testimonialsTag: "Voix de la communauté",
    campusLifeTitle: "Vie sur le campus",
    campusLifeTag: "Au-delà de l'académique",
    loginTitle: "Bon retour",
    loginSubtitle: "Connectez-vous pour continuer",
    registerTitle: "Rejoignez notre communauté",
    registerSubtitle: "Commencez votre voyage aujourd'hui",
    roleSelectionTitle: "Sélectionnez votre profil"
  },
  rw: {
    welcome: "Wubake Ejo Hazaza muri Garden TVET",
    tagline: "Ubumenyingiro ku Ejo Hazaza Heza",
    home: "Ahabanza",
    sports: "Imikino",
    services: "Serivisi",
    trades: "Imyuga",
    contact: "Twandikire",
    support: "Ubufasha",
    login: "Injira",
    register: "Kwiyandikisha",
    searchPlaceholder: "Shakisha...",
    sod: "Gukora Porogaramu",
    bdc: "Ubwubatsi",
    auto: "Ikinyabiziga",
    testimonialsTitle: "Ibyo Ababyeyi N'Abanyeshuri Bavuga",
    testimonialsTag: "Ubuhamya Bwacu",
    campusLifeTitle: "Ubuzima Bwa Kaminuza",
    campusLifeTag: "Hanze y'Ishuri",
    loginTitle: "Murakaza Neza",
    loginSubtitle: "Injira kugira ngo ukomeze",
    registerTitle: "Injira mu muryango",
    registerSubtitle: "Tangira urugendo rwawe uyu munsi",
    roleSelectionTitle: "Hitamo Umwirondoro Wawe"
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
    searchPlaceholder: "Tafuta...",
    sod: "Maendeleo ya Programu",
    bdc: "Ujenzi wa Majengo",
    auto: "Teknolojia ya Magari",
    testimonialsTitle: "Nini Wazazi na Wanafunzi Wanasema",
    testimonialsTag: "Sauti za Jamii",
    campusLifeTitle: "Uzoefu wa Kampasi",
    campusLifeTag: "Zaidi ya Masomo",
    loginTitle: "Karibu Tena",
    loginSubtitle: "Ingia ili uendelee",
    registerTitle: "Jiunge na Jamii yetu",
    registerSubtitle: "Anza safari yako leo",
    roleSelectionTitle: "Chagua Wasifu Wako"
  }
};
