export type Language = "en" | "es" | "nl"

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    hero: {
      headline: "Junior Developer with a security mindset.",
      subheadline:
        "I build modern web experiences, practical automations, and AI-powered solutions for real businesses.",
      location: "Currently based in Sint-Niklaas, Belgium",
      proofBullets: [
        "Higher Technical Degree in Software Development (DAM)",
        "Full-stack academic experience (ASP.NET + SQL) + modern web (React/Next)",
        "Automation + AI tools to speed up delivery and improve workflows",
      ],
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    about: {
      title: "About Me",
      description:
        "DAM graduate (Higher Technical Degree in Software Development) currently completing an English Computer Science top-up (online). I focus on development, automation, applied AI, and cybersecurity foundations to deliver business-oriented solutions.",
      highlight1Title: "Security Mindset",
      highlight1Desc: "OWASP basics, safer input handling, least-privilege thinking",
      highlight2Title: "Fast Learning & Adaptability",
      highlight2Desc: "Ship MVPs fast and iterate with feedback",
      highlight3Title: "Business-Oriented Solutions",
      highlight3Desc: "Conversion-focused UI + automation to save time",
      whatIDoTitle: "What I Do",
      whatIDo: [
        {
          title: "Web Development",
          items: ["React/Next.js responsive UI", "Clean, reusable components"],
        },
        {
          title: "Backend & Databases",
          items: ["SQL, REST APIs, JPA/Hibernate", "ASP.NET academic experience"],
        },
        {
          title: "Automation & Applied AI",
          items: ["Make/n8n concepts, chatbots", "AI-assisted workflows & integrations"],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      viewCase: "View Case Study",
      liveDemo: "Live Demo",
      github: "GitHub",
      inProgress: "In Progress",
      live: "Live",
      demo: "Demo",
      problem: "Problem",
      solution: "Solution",
      outcome: "Outcome",
      techStack: "Tech Stack",
      keyFeatures: "Key Features",
      project1: {
        name: "Altaira Labs",
        tagline: "AI & Automation Solutions Agency",
        status: "Live",
        description: "Helping small businesses digitalize and scale through automation, chatbots and AI workflows.",
        problem:
          "Small businesses struggle to adopt AI and automation technologies due to complexity and cost barriers.",
        solution:
          "Built a comprehensive platform showcasing automation services, AI chatbots, and workflow solutions with clear, accessible value propositions for non-technical business owners.",
        outcome:
          "Designed to serve as a scalable agency foundation with lead capture, service showcases, and future case study integration.",
        highlights: [
          "Service catalog for automation/chatbots/web solutions",
          "Lead capture & contact flow",
          "Scalable structure for future case studies and onboarding",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Automation (Concept)"],
        liveUrl: "https://v0-altaira-labs-homepage.vercel.app/",
        githubUrl: "https://github.com/Adnanne-Bourhayal/Altaira-Labs",
      },
      project2: {
        name: "Nova Detailing",
        tagline: "Booking Website",
        status: "Live",
        description: "Conversion-focused website showcasing services, pricing and streamlined booking requests.",
        problem:
          "Local detailing business needed a professional online presence to attract customers and streamline appointment requests.",
        solution:
          "Created an elegant, mobile-optimized website with service catalog, transparent pricing, and frictionless booking flow to reduce customer hesitation.",
        outcome:
          "Clean UX designed to reduce booking friction and build trust through FAQ, service area, and before/after placeholders.",
        highlights: [
          "Services + pricing breakdown",
          "Appointment request/contact flow",
          "Trust elements: FAQ, service area, before/after placeholders",
        ],
        tech: ["Next.js", "React", "Tailwind", "Vercel"],
        liveUrl: "https://novadetail.vercel.app/",
        githubUrl: "https://github.com/Adnanne-Bourhayal/Nova-Detailing",
      },
      project3: {
        name: "Import Your Dream",
        tagline: "Vehicle Import/Export",
        status: "In Progress",
        description: "Landing + quote workflow concept for vehicle import/export services (Spain-focused).",
        problem:
          "Vehicle import process is complex and customers need clear information and easy quote requests to make informed decisions.",
        solution:
          "Designing a streamlined landing page with lead capture, multi-step quote request system, and SEO-friendly content structure.",
        outcome:
          "Planned to simplify the vehicle import/export process with future automation for confirmations and CRM sync.",
        highlights: [
          "Quote request form concept",
          "SEO-friendly structure planned",
          "Future automation: confirmations + CRM sync",
        ],
        tech: ["Next.js", "TypeScript", "Tailwind", "Automation (Planned)"],
        liveUrl: undefined,
        githubUrl: undefined,
      },
    },
    skills: {
      title: "Skills & Technologies",
      strong: "Strong",
      familiar: "Familiar",
      learning: "Learning",
      aiTools: "AI Tools",
      strongSkills: [
        "Java",
        "SQL (PostgreSQL/MySQL)",
        "HTML/CSS",
        "JavaScript",
        "Git/GitHub",
        "Bootstrap",
        "JUnit",
        "JPA/Hibernate",
      ],
      familiarSkills: ["React", "Next.js", "MongoDB", "Tailwind", "Vercel", "WordPress"],
      learningSkills: ["Spring Boot", "TypeScript", "Docker", "CI/CD (GitHub Actions)", "Cypress/Selenium", "Linux"],
      aiToolsList: ["ChatGPT", "GitHub Copilot", "Gemini"],
      note: "I learn fast and adapt to new stacks quickly.",
    },
    experience: {
      title: "Experience",
      job1: {
        title: "Full Stack Developer (Academic)",
        company: "UDIT",
        location: "Madrid, Spain",
        period: "Oct 2023 – Jun 2024",
        highlights: [
          "Developed university resource/classroom booking portal to prevent scheduling conflicts and manage resources using ASP.NET, Bootstrap, SQL, Visual Studio, and Git",
          "Proposed AI-assisted workflows to speed iteration and improve quality checks during development cycles",
        ],
      },
      job2: {
        title: "Postal Operator",
        company: "bpost",
        location: "Belgium",
        period: "Jun 2024 – Sep 2024",
        highlights: [
          "Fast-paced logistics operations with strict accuracy requirements",
          "Demonstrated reliability and process discipline in high-pressure environment",
        ],
      },
      job3: {
        title: "Logistics Operator",
        company: "Nike / Maersk",
        location: "Belgium",
        period: "2023",
        highlights: [
          "Operations management in global logistics environment",
          "Maintained high standards for accuracy and efficiency in fast-paced operations",
        ],
      },
    },
    education: {
      title: "Education",
      degree1: {
        title: "Computer Science Top-Up",
        institution: "UCAM + IBES",
        location: "Online (English)",
        period: "Oct 2025 – Jun 2026",
        description:
          "Advanced computer science program delivered in English, focusing on modern software development practices.",
      },
      degree2: {
        title: "Higher Technical Degree (DAM)",
        institution: "Multiplatform Application Development",
        location: "Spain",
        period: "2022 – 2024",
        description:
          "Comprehensive program covering Java, databases, web development, mobile apps, and software engineering.",
      },
      degree3: {
        title: "Science & Technology + Business Baccalaureate",
        institution: "High School",
        location: "Spain",
        period: "2020 – 2022",
        description: "Combined science, technology and business curriculum.",
      },
      languages: {
        title: "Languages",
        spanish: "Spanish",
        spLevel: "Native",
        english: "English",
        enLevel: "B2 Advanced — C1 in progress",
        french: "French",
        frLevel: "Basic",
        dutch: "Dutch",
        nlLevel: "Basic",
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Open to junior roles in Belgium (English-friendly) and remote opportunities.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    },
    footer: {
      tagline: "Build. Automate. Improve.",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      contact: "Contacto",
      downloadCV: "Descargar CV",
    },
    hero: {
      headline: "Desarrollador Junior con mentalidad de seguridad.",
      subheadline:
        "Creo experiencias web modernas, automatizaciones prácticas y soluciones con IA para negocios reales.",
      location: "Actualmente en Sint-Niklaas, Bélgica",
      proofBullets: [
        "Grado Superior en Desarrollo de Software (DAM)",
        "Experiencia académica full-stack (ASP.NET + SQL) + web moderna (React/Next)",
        "Automatización + herramientas IA para acelerar entregas y mejorar flujos de trabajo",
      ],
      viewProjects: "Ver Proyectos",
      contactMe: "Contactar",
    },
    about: {
      title: "Sobre Mí",
      description:
        "Graduado en DAM (Grado Superior en Desarrollo de Software), actualmente completando un grado en Informática en inglés (online). Me enfoco en desarrollo, automatización, IA aplicada y fundamentos de ciberseguridad para ofrecer soluciones orientadas al negocio.",
      highlight1Title: "Mentalidad de Seguridad",
      highlight1Desc: "OWASP básico, manejo seguro de entradas, pensamiento de mínimo privilegio",
      highlight2Title: "Aprendizaje Rápido y Adaptabilidad",
      highlight2Desc: "Entrego MVPs rápido e itero con feedback",
      highlight3Title: "Soluciones Orientadas al Negocio",
      highlight3Desc: "UI enfocada en conversión + automatización para ahorrar tiempo",
      whatIDoTitle: "Lo Que Hago",
      whatIDo: [
        {
          title: "Desarrollo Web",
          items: ["React/Next.js UI responsive", "Componentes limpios y reutilizables"],
        },
        {
          title: "Backend y Bases de Datos",
          items: ["SQL, APIs REST, JPA/Hibernate", "Experiencia académica con ASP.NET"],
        },
        {
          title: "Automatización e IA Aplicada",
          items: ["Conceptos Make/n8n, chatbots", "Flujos de trabajo asistidos por IA e integraciones"],
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      viewCase: "Ver Caso de Estudio",
      liveDemo: "Demo en Vivo",
      github: "GitHub",
      inProgress: "En Progreso",
      live: "En Vivo",
      demo: "Demo",
      problem: "Problema",
      solution: "Solución",
      outcome: "Resultado",
      techStack: "Stack Tecnológico",
      keyFeatures: "Características Clave",
      project1: {
        name: "Altaira Labs",
        tagline: "Agencia de Soluciones de IA y Automatización",
        status: "En Vivo",
        description:
          "Ayudando a pequeñas empresas a digitalizarse y escalar mediante automatización, chatbots y flujos de trabajo con IA.",
        problem:
          "Las pequeñas empresas tienen dificultades para adoptar tecnologías de IA y automatización debido a barreras de complejidad y coste.",
        solution:
          "Construí una plataforma completa que muestra servicios de automatización, chatbots de IA y soluciones de flujo de trabajo con propuestas de valor claras y accesibles para propietarios de negocios no técnicos.",
        outcome:
          "Diseñado para servir como base de agencia escalable con captura de leads, exhibición de servicios e integración futura de casos de estudio.",
        highlights: [
          "Catálogo de servicios para automatización/chatbots/soluciones web",
          "Captura de leads y flujo de contacto",
          "Estructura escalable para futuros casos de estudio e incorporación",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Automatización (Concepto)"],
        liveUrl: "https://v0-altaira-labs-homepage.vercel.app/",
        githubUrl: "https://github.com/Adnanne-Bourhayal/Altaira-Labs",
      },
      project2: {
        name: "Nova Detailing",
        tagline: "Sitio Web de Reservas",
        status: "En Vivo",
        description: "Sitio web enfocado en conversión con servicios, precios y solicitudes de reserva optimizadas.",
        problem:
          "Negocio local de detailing necesitaba presencia online profesional para atraer clientes y agilizar solicitudes de citas.",
        solution:
          "Creé un sitio web elegante y optimizado para móvil con catálogo de servicios, precios transparentes y flujo de reserva sin fricciones para reducir la indecisión del cliente.",
        outcome:
          "UX limpia diseñada para reducir la fricción en las reservas y generar confianza mediante FAQ, área de servicio y placeholders de antes/después.",
        highlights: [
          "Servicios + desglose de precios",
          "Flujo de solicitud de cita/contacto",
          "Elementos de confianza: FAQ, área de servicio, placeholders de antes/después",
        ],
        tech: ["Next.js", "React", "Tailwind", "Vercel"],
        liveUrl: "https://novadetail.vercel.app/",
        githubUrl: "https://github.com/Adnanne-Bourhayal/Nova-Detailing",
      },
      project3: {
        name: "Import Your Dream",
        tagline: "Importación/Exportación de Vehículos",
        status: "En Progreso",
        description:
          "Landing + concepto de flujo de cotización para servicios de importación/exportación de vehículos (enfoque España).",
        problem:
          "El proceso de importación de vehículos es complejo y los clientes necesitan información clara y solicitudes de cotización fáciles para tomar decisiones informadas.",
        solution:
          "Diseñando una landing optimizada con captura de leads, sistema de solicitud de cotización multipaso y estructura de contenido SEO-friendly.",
        outcome:
          "Planificado para simplificar el proceso de importación/exportación de vehículos con automatización futura para confirmaciones y sincronización CRM.",
        highlights: [
          "Concepto de formulario de solicitud de cotización",
          "Estructura SEO-friendly planificada",
          "Automatización futura: confirmaciones + sincronización CRM",
        ],
        tech: ["Next.js", "TypeScript", "Tailwind", "Automatización (Planificada)"],
        liveUrl: undefined,
        githubUrl: undefined,
      },
    },
    skills: {
      title: "Habilidades y Tecnologías",
      strong: "Fuerte",
      familiar: "Familiar",
      learning: "Aprendiendo",
      aiTools: "Herramientas IA",
      strongSkills: [
        "Java",
        "SQL (PostgreSQL/MySQL)",
        "HTML/CSS",
        "JavaScript",
        "Git/GitHub",
        "Bootstrap",
        "JUnit",
        "JPA/Hibernate",
      ],
      familiarSkills: ["React", "Next.js", "MongoDB", "Tailwind", "Vercel", "WordPress"],
      learningSkills: ["Spring Boot", "TypeScript", "Docker", "CI/CD (GitHub Actions)", "Cypress/Selenium", "Linux"],
      aiToolsList: ["ChatGPT", "GitHub Copilot", "Gemini"],
      note: "Aprendo rápido y me adapto a nuevas tecnologías fácilmente.",
    },
    experience: {
      title: "Experiencia",
      job1: {
        title: "Desarrollador Full Stack (Académico)",
        company: "UDIT",
        location: "Madrid, España",
        period: "Oct 2023 – Jun 2024",
        highlights: [
          "Desarrollé portal de reserva de recursos/aulas universitarias para prevenir conflictos de horarios y gestionar recursos usando ASP.NET, Bootstrap, SQL, Visual Studio y Git",
          "Propuse flujos de trabajo asistidos por IA para acelerar iteraciones y mejorar controles de calidad durante ciclos de desarrollo",
        ],
      },
      job2: {
        title: "Operador Postal",
        company: "bpost",
        location: "Bélgica",
        period: "Jun 2024 – Sep 2024",
        highlights: [
          "Operaciones logísticas de ritmo rápido con requisitos estrictos de precisión",
          "Demostrada fiabilidad y disciplina de procesos en entorno de alta presión",
        ],
      },
      job3: {
        title: "Operador Logístico",
        company: "Nike / Maersk",
        location: "Bélgica",
        period: "2023",
        highlights: [
          "Gestión de operaciones en entorno logístico global",
          "Mantuve altos estándares de precisión y eficiencia en operaciones de ritmo rápido",
        ],
      },
    },
    education: {
      title: "Educación",
      degree1: {
        title: "Grado en Informática (Top-Up)",
        institution: "UCAM + IBES",
        location: "Online (Inglés)",
        period: "Oct 2025 – Jun 2026",
        description:
          "Programa avanzado de informática impartido en inglés, enfocado en prácticas modernas de desarrollo de software.",
      },
      degree2: {
        title: "Grado Superior (DAM)",
        institution: "Desarrollo de Aplicaciones Multiplataforma",
        location: "España",
        period: "2022 – 2024",
        description:
          "Programa completo que cubre Java, bases de datos, desarrollo web, aplicaciones móviles e ingeniería de software.",
      },
      degree3: {
        title: "Bachillerato Ciencia y Tecnología + Empresa",
        institution: "Instituto",
        location: "España",
        period: "2020 – 2022",
        description: "Currículo combinado de ciencia, tecnología y empresa.",
      },
      languages: {
        title: "Idiomas",
        spanish: "Español",
        spLevel: "Nativo",
        english: "Inglés",
        enLevel: "B2 Avanzado — C1 en progreso",
        french: "Francés",
        frLevel: "Básico",
        dutch: "Holandés",
        nlLevel: "Básico",
      },
    },
    contact: {
      title: "Contacto",
      subtitle: "Abierto a posiciones junior en Bélgica (inglés-friendly) y oportunidades remotas.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!",
      error: "Error al enviar mensaje. Por favor, inténtalo de nuevo.",
    },
    footer: {
      tagline: "Construir. Automatizar. Mejorar.",
      rights: "Todos los derechos reservados.",
    },
  },
  nl: {
    nav: {
      home: "Home",
      about: "Over Mij",
      projects: "Projecten",
      skills: "Vaardigheden",
      experience: "Ervaring",
      education: "Opleiding",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    hero: {
      headline: "Junior Developer met een security mindset.",
      subheadline:
        "Ik bouw moderne webapplicaties, praktische automatiseringen en AI-gedreven oplossingen voor echte bedrijven.",
      location: "Momenteel gevestigd in Sint-Niklaas, België",
      proofBullets: [
        "Hogere Technische Graad in Softwareontwikkeling (DAM)",
        "Full-stack academische ervaring (ASP.NET + SQL) + moderne web (React/Next)",
        "Automatisering + AI tools om levering te versnellen en workflows te verbeteren",
      ],
      viewProjects: "Bekijk Projecten",
      contactMe: "Contacteer Mij",
    },
    about: {
      title: "Over Mij",
      description:
        "DAM afgestudeerde (Hogere Technische Graad in Softwareontwikkeling), momenteel bezig met een Engelse Computer Science top-up (online). Ik focus op ontwikkeling, automatisering, toegepaste AI en cybersecurity fundamenten om bedrijfsgerichte oplossingen te leveren.",
      highlight1Title: "Security Mindset",
      highlight1Desc: "OWASP basics, veiligere input handling, least-privilege denken",
      highlight2Title: "Snel Leren & Aanpassingsvermogen",
      highlight2Desc: "Lever MVPs snel en itereer met feedback",
      highlight3Title: "Bedrijfsgerichte Oplossingen",
      highlight3Desc: "Conversie-gerichte UI + automatisering om tijd te besparen",
      whatIDoTitle: "Wat Ik Doe",
      whatIDo: [
        {
          title: "Webontwikkeling",
          items: ["React/Next.js responsive UI", "Schone, herbruikbare componenten"],
        },
        {
          title: "Backend & Databases",
          items: ["SQL, REST APIs, JPA/Hibernate", "ASP.NET academische ervaring"],
        },
        {
          title: "Automatisering & Toegepaste AI",
          items: ["Make/n8n concepten, chatbots", "AI-ondersteunde workflows & integraties"],
        },
      ],
    },
    projects: {
      title: "Uitgelichte Projecten",
      viewCase: "Bekijk Case Study",
      liveDemo: "Live Demo",
      github: "GitHub",
      inProgress: "In Uitvoering",
      live: "Live",
      demo: "Demo",
      problem: "Probleem",
      solution: "Oplossing",
      outcome: "Resultaat",
      techStack: "Tech Stack",
      keyFeatures: "Belangrijkste Functies",
      project1: {
        name: "Altaira Labs",
        tagline: "AI & Automatisering Oplossingen Bureau",
        status: "Live",
        description:
          "Kleine bedrijven helpen digitaliseren en opschalen door automatisering, chatbots en AI workflows.",
        problem:
          "Kleine bedrijven worstelen met het adopteren van AI en automatiseringstechnologieën vanwege complexiteits- en kostenbarrières.",
        solution:
          "Bouwde een uitgebreid platform met automatiseringsdiensten, AI chatbots en workflowoplossingen met duidelijke, toegankelijke waardeproposities voor niet-technische bedrijfseigenaren.",
        outcome:
          "Ontworpen om te dienen als schaalbare bureaubasis met lead capture, service showcases en toekomstige case study integratie.",
        highlights: [
          "Dienstencatalogus voor automatisering/chatbots/weboplossingen",
          "Lead capture & contactflow",
          "Schaalbare structuur voor toekomstige case studies en onboarding",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel", "Automatisering (Concept)"],
        liveUrl: "https://v0-altaira-labs-homepage.vercel.app/",
        githubUrl: "https://github.com/Adnanne-Bourhayal/Altaira-Labs",
      },
      project2: {
        name: "Nova Detailing",
        tagline: "Boekingswebsite",
        status: "Live",
        description: "Conversie-gerichte website met diensten, prijzen en gestroomlijnde boekingsverzoeken.",
        problem:
          "Lokaal detailing bedrijf had een professionele online aanwezigheid nodig om klanten aan te trekken en afspraakverzoeken te stroomlijnen.",
        solution:
          "Creëerde een elegante, mobiel-geoptimaliseerde website met dienstencatalogus, transparante prijzen en wrijvingsloze boekingsflow om klanttwijfel te verminderen.",
        outcome:
          "Schone UX ontworpen om boekingswrijving te verminderen en vertrouwen op te bouwen via FAQ, servicegebied en voor/na placeholders.",
        highlights: [
          "Diensten + prijsoverzicht",
          "Afspraakverzoek/contactflow",
          "Vertrouwenselementen: FAQ, servicegebied, voor/na placeholders",
        ],
        tech: ["Next.js", "React", "Tailwind", "Vercel"],
        liveUrl: "https://novadetail.vercel.app/",
        githubUrl: "https://github.com/Adnanne-Bourhayal/Nova-Detailing",
      },
      project3: {
        name: "Import Your Dream",
        tagline: "Voertuig Import/Export",
        status: "In Uitvoering",
        description: "Landing + offerteflow concept voor voertuig import/export diensten (Spanje-gericht).",
        problem:
          "Voertuig importproces is complex en klanten hebben duidelijke informatie en eenvoudige offerte-aanvragen nodig om geïnformeerde beslissingen te nemen.",
        solution:
          "Ontwerpen van een gestroomlijnde landingspagina met lead capture, multi-step offerte-aanvraag systeem en SEO-vriendelijke contentstructuur.",
        outcome:
          "Gepland om het voertuig import/export proces te vereenvoudigen met toekomstige automatisering voor bevestigingen en CRM sync.",
        highlights: [
          "Offerte-aanvraag formulier concept",
          "SEO-vriendelijke structuur gepland",
          "Toekomstige automatisering: bevestigingen + CRM sync",
        ],
        tech: ["Next.js", "TypeScript", "Tailwind", "Automatisering (Gepland)"],
        liveUrl: undefined,
        githubUrl: undefined,
      },
    },
    skills: {
      title: "Vaardigheden & Technologieën",
      strong: "Sterk",
      familiar: "Bekend",
      learning: "Aan het Leren",
      aiTools: "AI Tools",
      strongSkills: [
        "Java",
        "SQL (PostgreSQL/MySQL)",
        "HTML/CSS",
        "JavaScript",
        "Git/GitHub",
        "Bootstrap",
        "JUnit",
        "JPA/Hibernate",
      ],
      familiarSkills: ["React", "Next.js", "MongoDB", "Tailwind", "Vercel", "WordPress"],
      learningSkills: ["Spring Boot", "TypeScript", "Docker", "CI/CD (GitHub Actions)", "Cypress/Selenium", "Linux"],
      aiToolsList: ["ChatGPT", "GitHub Copilot", "Gemini"],
      note: "Ik leer snel en pas me gemakkelijk aan aan nieuwe stacks.",
    },
    experience: {
      title: "Ervaring",
      job1: {
        title: "Full Stack Developer (Academisch)",
        company: "UDIT",
        location: "Madrid, Spanje",
        period: "Oct 2023 – Jun 2024",
        highlights: [
          "Ontwikkelde universiteit resource/klaslokaal boekingsportaal om planningsconflicten te voorkomen en resources te beheren met ASP.NET, Bootstrap, SQL, Visual Studio en Git",
          "Stelde AI-ondersteunde workflows voor om iteratie te versnellen en kwaliteitscontroles tijdens ontwikkelingscycli te verbeteren",
        ],
      },
      job2: {
        title: "Postale Operator",
        company: "bpost",
        location: "België",
        period: "Jun 2024 – Sep 2024",
        highlights: [
          "Snelle logistieke operaties met strikte nauwkeurigheidseisen",
          "Aangetoonde betrouwbaarheid en procesdiscipline in hoge druk omgeving",
        ],
      },
      job3: {
        title: "Logistiek Operator",
        company: "Nike / Maersk",
        location: "België",
        period: "2023",
        highlights: [
          "Operationeel management in wereldwijde logistieke omgeving",
          "Hoge standaarden gehandhaafd voor nauwkeurigheid en efficiëntie in snelle operaties",
        ],
      },
    },
    education: {
      title: "Opleiding",
      degree1: {
        title: "Computer Science Top-Up",
        institution: "UCAM + IBES",
        location: "Online (Engels)",
        period: "Oct 2025 – Jun 2026",
        description:
          "Geavanceerd computer science programma gegeven in het Engels, gericht op moderne softwareontwikkelingspraktijken.",
      },
      degree2: {
        title: "Hogere Technische Graad (DAM)",
        institution: "Multiplatform Applicatieontwikkeling",
        location: "Spanje",
        period: "2022 – 2024",
        description:
          "Uitgebreid programma over Java, databases, webontwikkeling, mobiele apps en software-engineering.",
      },
      degree3: {
        title: "Wetenschap & Technologie + Bedrijfskunde Baccalaureaat",
        institution: "Middelbare School",
        location: "Spanje",
        period: "2020 – 2022",
        description: "Gecombineerd curriculum van wetenschap, technologie en bedrijfskunde.",
      },
      languages: {
        title: "Talen",
        spanish: "Spaans",
        spLevel: "Moedertaal",
        english: "Engels",
        enLevel: "B2 Gevorderd — C1 bezig",
        french: "Frans",
        frLevel: "Basis",
        dutch: "Nederlands",
        nlLevel: "Basis",
      },
    },
    contact: {
      title: "Neem Contact Op",
      subtitle: "Open voor junior rollen in België (Engels-vriendelijk) en remote mogelijkheden.",
      name: "Naam",
      email: "Email",
      message: "Bericht",
      send: "Verstuur Bericht",
      sending: "Verzenden...",
      success: "Bericht succesvol verzonden!",
      error: "Verzenden mislukt. Probeer het opnieuw.",
    },
    footer: {
      tagline: "Bouwen. Automatiseren. Verbeteren.",
      rights: "Alle rechten voorbehouden.",
    },
  },
}

export function getTranslation(lang: Language) {
  return translations[lang]
}
