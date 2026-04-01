export const profile = {
  name: 'Christian E. Dutton',
  phone: '(470) 658-8006',
  email: 'christianedutton@gmail.com',
  location: 'Atlanta, Georgia',
  citizenship: 'US Citizen',
  objective:
    'To obtain a Summer 2026 internship where I can apply experience from prior engineering work and current coursework to grow as an aspiring computer engineer.',
}

export const education = {
  school: 'Georgia Institute of Technology',
  degree: 'Bachelor of Science in Computer Engineering',
  start: 'August 2025',
  expectedGraduation: 'May 2028',
  gpa: '4.00',
}

export const skillGroups = [
  {
    title: 'Programming',
    items: [
      'Java (Gradle)',
      'Python',
      'C/C++',
      'C#',
      'JavaScript',
      'React',
      'RISC-V Assembly',
      'Matlab',
      'SystemVerilog',
    ],
  },
  {
    title: 'Platforms',
    items: ['Linux (Ubuntu, Debian, RedHat)', 'Windows', 'Azure Cloud'],
  },
  {
    title: 'Hardware',
    items: ['Raspberry Pi', 'Arduino', 'FPGAs', 'Oscilloscope', 'Logic Analyzer', 'ESP32'],
  },
  {
    title: 'Tools and Technologies',
    items: ['Android Studio', 'Altera Quartus II', 'SolidWorks', 'Git', 'GitHub', 'SQLite', 'OAuth'],
  },
  {
    title: 'Communication',
    items: ['Technical reports', 'Instruction manuals', 'Presentations for large and small audiences'],
  },
]

export const coursework = [
  {
    area: 'Digital Design',
    topics: 'CMOS logic, gate-level design, FPGA programming',
  },
  {
    area: 'Circuit Analysis',
    topics: 'Linear, first-order and second-order circuits, op-amps, circuit design, multimeters',
  },
  {
    area: 'Data Structures and Algorithms',
    topics:
      'Arrays, linked lists, binary search trees, sorting algorithms, string searching, Dijkstra\'s algorithm, graph traversal',
  },
  {
    area: 'Signal Processing',
    topics: 'Sampling, Fourier transform, z-transform, FIR/IIR filters, Matlab',
  },
  {
    area: 'Programming Hardware/Software Systems',
    topics: 'RISC-V assembly, ESP32 programming, C/C++ systems programming',
  },
]

export const experiences = [
  {
    role: 'Controls Engineering Intern',
    company: 'Siemens Energy',
    location: 'Alpharetta, Georgia',
    dateRange: 'August 2024 - May 2025',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/f/f2/Siemens_Energy_logo.svg',
    imageAlt: 'Siemens Energy logo',
    bullets: [
      'Engineered control systems for power plants using Siemens Energy T3000.',
      'Simulated edge-case operating conditions to validate control logic behavior before deployment.',
      'Designed operator-facing interfaces to support efficient and reliable plant control workflows.',
      'Collaborated directly with clients to tailor software behavior to operational preferences.',
      'Verified software and hardware integration for functionality and client compliance.',
    ],
  },
]

export const activities = [
  {
    role: 'Lead Programmer',
    org: 'Journey to Arduous Star (VGDev at Georgia Tech)',
    dateRange: 'Fall 2025 - Present',
    imageUrl:
      'src/assets/jtas_splash_art.png',
    imageAlt: 'Image of game menu',
    bullets: [
      'Coordinated with team leads to keep project scope and schedule aligned through the semester.',
      'Reviewed teammate code and provided feedback that improved quality and integration speed.',
      'Designed and implemented finite state machine logic for in-game character behavior.',
      'Investigated and resolved gameplay bugs, improving player stability and experience.',
    ],
  },
  {
    role: 'Volunteer',
    org: 'FIRST Robotics',
    dateRange: 'Spring 2023 - Present',
    imageUrl:
      'src/assets/FIRST_Horz_RGB.png',
    imageAlt: 'FIRST Robotics logo',
    bullets: [
      'Served as a referee at FIRST Lego League events and mentored student teams in competition settings.',
      'Supported tournament operations as both field staff and AV technician.',
      'Helped maintain a positive public-facing event environment for teams, families, and organizers.',
      'Adapted to rapidly changing tournament needs to ensure smooth event execution.',
    ],
  },
]

export const homeSummaryBullets = [
  'Computer Engineering student at Georgia Tech focused on embedded systems, controls, and software reliability.',
  'Internship experience in industrial controls at Siemens Energy with hands-on client collaboration.',
  'Active technical leader in student game development and a long-term FIRST Robotics volunteer.',
  'Building a portfolio that connects coursework to real engineering impact and career direction.',
]

export const aboutNarrative = [
  'I am Christian E. Dutton, a Computer Engineering student at the Georgia Institute of Technology with a strong interest in building systems that are dependable in both software and hardware contexts. I enjoy working on projects that live at the intersection of code quality, user experience, and physical-world constraints. My current focus areas include controls engineering, embedded programming, and technical communication that helps teams ship reliable work.',
  'My recent internship at Siemens Energy gave me direct experience with engineering in a high-responsibility environment. I worked with control systems for power plants, simulated operational scenarios, and helped validate control logic and integration behavior. That experience taught me the value of precision, disciplined testing, and clear communication with stakeholders who depend on stable system behavior. It also confirmed that I enjoy environments where small design decisions can have large operational consequences.',
  'At Georgia Tech, I am continuing to build depth through coursework in digital design, circuits, algorithms, and signal processing. Outside of classes, I serve as a lead programmer for Journey to Arduous Star in VGDev, where I coordinate with cross-functional teams and build finite state machine logic for game systems. I also volunteer with FIRST Robotics, mentoring younger students and supporting competition infrastructure. These activities sharpen both my technical execution and leadership style.',
  'This ePortfolio is designed as a long-term engineering roadmap. It documents the work I have already done, the skills I am actively developing, and the opportunities I am pursuing next. My goal is to keep this site practical and recruiter-friendly: each section highlights evidence of growth, concrete project outcomes, and the steps I am taking to become a high-impact engineer in complex systems environments.',
]

export const goals = {
  shortTerm:
    'Secure a Summer 2026 internship where I can contribute to embedded, controls, or systems software projects while learning from a high-performance engineering team.',
  longTerm:
    'Develop into a computer engineer who can lead cross-disciplinary technical programs that connect software reliability, hardware constraints, and user-centered interface design.',
  timeline: [
    {
      period: 'Spring 2026',
      milestone: 'Prepare for internship recruiting and complete portfolio-ready project artifacts.',
    },
    {
      period: 'Summer 2026',
      milestone: 'Complete a technical internship and document measurable engineering contributions.',
    },
    {
      period: '2026-2027',
      milestone: 'Deepen embedded and controls expertise through advanced coursework and project leadership.',
    },
    {
      period: '2027-2028',
      milestone: 'Graduate with a strong project portfolio, leadership evidence, and a systems-focused engineering profile.',
    },
  ],
  actionSteps: [
    'Apply to internship roles aligned with controls, embedded systems, and software-hardware integration; tailor resume and project stories for each company.',
    'Complete at least one major project per semester with measurable outcomes, technical writeups, and clean repository documentation.',
    'Expand practical hardware experience by building and debugging systems with ESP32, FPGA, and instrumentation tools.',
    'Continue leadership and mentorship through VGDev to strengthen communication and team execution.',
    'Refine interview readiness with structured practice in algorithms, system thinking, and engineering design tradeoffs.',
  ],
}

export const projects = [
  {
    id: 'offbeat',
    title: 'OffBeat',
    subtitle: 'Backend engineering, VPS deployment, and containerized routing',
    tags: ['Backend Engineering', 'Docker', 'Traefik', 'PocketBase'],
    repoUrl: 'https://github.com/sahithrajesh/OffBeat',
    image: 'src/assets/offbeat.png',
    overview: [
      'OffBeat was conceptualized as a web application designed to systematically analyze the underlying moods of user-generated Spotify playlists. During the initial project phase, the team defined a comprehensive feature set focused on clustering songs into distinct mood categories, identifying anomalous tracks that deviated from the primary cluster, and generating targeted musical recommendations. To achieve this, we designed a multi-layered system that integrates standard Spotify track metadata with advanced audio features—sourced via the ReccoBeats API—and community-driven social tags from Last.fm.',
      'The project commenced with rigorous architectural planning. The team formally mapped the complete data pipeline, detailing the programmatic ingestion of user playlists, the asynchronous integration with external APIs for acoustic and energy analysis, and the subsequent data transformations. This process produced a formal blueprint of the application flow, spanning from the user-facing React frontend to the backend Python and Sphinx-based analysis notebooks, which governed the data science logic.',
      'Following the systems design phase, the engineering workload was divided by technical specialty. I assumed responsibility for the backend architecture, database integration, and deployment infrastructure. My primary objective was to construct an API layer capable of concurrently processing frontend requests, orchestrating external API calls, and managing the resulting data models. Ensuring backend performance and scalability was a priority, given the requirement to process large volumes of track metadata efficiently.',
      'For the database architecture, I selected and integrated PocketBase. This implementation involved designing relational schemas to securely store user sessions, playlist metadata, and cached mood clustering results. I optimized database queries to minimize read and write latency and facilitate rapid retrieval of previously analyzed playlists, ensuring the backend logic remained modular, secure, and easily extensible.',
      'Finally, I managed the end-to-end deployment of the application. I containerized the full software stack utilizing Docker, explicitly separating the backend services, frontend application, and database into distinct, isolated containers to guarantee environmental consistency across development and production. After provisioning a cloud-based Virtual Private Server (VPS), I deployed the containerized stack and configured Traefik to serve as a reverse proxy. This infrastructure securely routed incoming web traffic, automated SSL certificate management for HTTPS compliance, and provided a highly reliable hosting environment for the production application.'
    ],
  },
  {
    id: 'journey-to-arduous-star',
    title: 'Journey to Arduous Star',
    subtitle: 'Lead programming, game systems development, and team collaboration',
    tags: ['Game Development', 'State Machines', 'Team Leadership'],
    repoUrl: 'https://github.com/NoShenGG/project-star/',
    image: 'src/assets/JTAS_Poster.png',
    overview: [
      'My involvement with Journey to Arduous Star began as a software contributor within Georgia Tech\'s VGDev community. Initially, my focus was directed toward understanding the existing codebase, assisting with general game systems design, and completing foundational implementation tasks. This preliminary phase allowed me to acclimate to the team\'s version control workflow and identify specific areas for architectural improvement within the game\'s core loop.',
      'As development progressed and character behaviors increased in complexity, it became evident that the existing logic required a more rigorous structure. Consequently, I designed and implemented core architectural systems, specifically the player and entity state machines. Transitioning the character logic to a finite state machine model made state changes strictly deterministic, reduced edge-case bugs associated with overlapping inputs or concurrent animations, and substantially improved overall codebase maintainability.',
      'Following the initial development of these systems, I collaborated with the engineering and design teams to integrate the state machines into the broader game mechanics. This process involved writing comprehensive technical documentation and establishing clear, accessible APIs to facilitate use by other developers without requiring them to parse the underlying routing logic. Furthermore, I instituted and conducted regular code reviews to ensure that all new character features adhered to the established state machine patterns, thereby preventing regressions and maintaining architectural integrity.',
      'Recognizing my contributions to the core systems, the development team appointed me as Lead Programmer. In this management capacity, my responsibilities expanded to include project-wide technical direction. I coordinated implementation priorities with other discipline leads, managed our agile sprint objectives, and ensured that the engineering team\'s output aligned strictly with the project\'s design requirements.',
      'While serving in a leadership role, I maintained an active presence in software development. I assisted peers in implementing complex enemy behaviors and specialized character abilities using the state machine architecture. Additionally, I acted as the primary engineer for defect resolution. I was responsible for debugging complex logic errors and ensuring stable, reliable builds were delivered on schedule for all major milestone playtests.'
    ],
  },
];

export const visuals = [
  {
    title: 'Hero engineering workspace image',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    source: 'Unsplash',
  },
  {
    title: 'Game development workspace image',
    url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1500&q=80',
    source: 'Unsplash',
  },
  {
    title: 'Controls engineering image',
    url: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1500&q=80',
    source: 'Unsplash',
  },
  {
    title: 'Student robotics image',
    url: 'https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=1400&q=80',
    source: 'Unsplash',
  },
  {
    title: 'Circuit board closeup image',
    url: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=1500&q=80',
    source: 'Unsplash',
  },
  {
    title: 'Systems planning notebook image',
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80',
    source: 'Unsplash',
  },
]

export const links = {
  linkedin: 'https://www.linkedin.com/in/christian-dutton/',
  github: 'https://github.com/cdutton07/',
}
