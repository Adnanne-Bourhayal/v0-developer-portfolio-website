export type Language = "en" | "es" | "nl"

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About me",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    hero: {
      headline: "Junior Software Engineer (Java/.NET) — security-aware",
      subheadline:
        "I build web and backend systems with clean code, automation, and reliable APIs.\nComputer Science degree (English-taught). Based in Antwerp, Belgium.",
      viewProjects: "View Projects",
      contactMe: "Contact",
    },
    about: {
      title: "About Me",
      description:
        "I enjoy building modern software that's simple to use and solid under the hood. I'm curious by nature and I learn fast by shipping real projects. I'm finishing a Computer Science degree taught in English. I'm especially interested in clean architecture, automation, and security-aware development habits. I work well both independently and in teams.",
      highlight1Title: "Security Mindset",
      highlight1Desc: "Secure coding habits, careful input handling, and auth basics.",
      highlight2Title: "Fast Learning & Adaptability",
      highlight2Desc: "Quick ramp-up, iterate fast, and improve with feedback.",
      highlight3Title: "Business-Oriented Solutions",
      highlight3Desc: "Build practical features that save time and deliver measurable value.",
      whatIDoTitle: "What I Do",
      whatIDo: [
        {
          title: "Web Development",
          description: "Build responsive web apps and UI that feel fast and clean.",
          items: [],
        },
        {
          title: "Backend Development",
          description: "Design reliable APIs, data models, and integrations.",
          items: [],
        },
        {
          title: "Automation",
          description: "Automate workflows to reduce manual work and speed up delivery.",
          items: [],
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
      featured: "Featured",
      project0: {
        name: "CorpWallet",
        tagline: "Enterprise Transaction Security",
        status: "Demo",
        description: "Secure enterprise transaction approval system with runtime trust evaluation.",
        problem:
          "Enterprise finance teams need secure, verifiable transaction approval workflows that can detect compromised devices.",
        solution:
          "Built a mobile-first POC with runtime integrity checks, risk scoring, and multi-layer approval policies.",
        outcome:
          "Demonstrates secure transaction control for enterprise finance with real-time trust verification.",
        highlights: [
          "Runtime trust scoring (100 = verified secure)",
          "Risk-based transaction flagging",
          "Multi-layer approval policies",
        ],
        tech: ["Kotlin", "FastAPI", "Android", "Security"],
        liveUrl: undefined,
        githubUrl: "https://github.com/Adnanne-Bourhayal/corpwallet-mobile-poc",
      },
      project1: {
        name: "Altaira Labs",
        tagline: "AI & Automation Solutions Agency",
        status: "Live",
        description: "AI & automation services site focused on lead capture and scalable workflows.",
        problem:
          "Small businesses struggle to adopt AI and automation technologies due to complexity and cost barriers.",
        solution:
          "Includes structured pages, clear CTAs, and automation-ready architecture.",
        outcome:
          "Designed to serve as a scalable agency foundation with lead capture and service showcases.",
        highlights: [
          "Structured pages with clear CTAs",
          "Lead capture & contact flow",
          "Automation-ready architecture",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
        liveUrl: "https://altairalabs.vercel.app/",
        githubUrl: "https://github.com/Adnanne-Bourhayal/Altaira-Labs",
      },
      project2: {
        name: "Nova Detailing",
        tagline: "Booking Website",
        status: "Live",
        description: "Booking website concept to streamline service requests and pricing.",
        problem:
          "Local detailing business needed a professional online presence to attract customers and simplify appointment requests.",
        solution:
          "Built for conversion and fast UX with transparent pricing and frictionless booking flow.",
        outcome:
          "Clean UX designed to reduce booking friction and build trust.",
        highlights: [
          "Services + pricing breakdown",
          "Frictionless booking flow",
          "Built for conversion and fast UX",
        ],
        tech: ["Next.js", "React", "Tailwind", "Vercel"],
        liveUrl: "https://nvdetail.vercel.app/",
        githubUrl: "https://github.com/Adnanne-Bourhayal/Nova-Detailing",
      },
      project3: {
        name: "Import Your Dream",
        tagline: "Vehicle Import/Export",
        status: "Live",
        description: "Landing + quote workflow concept for vehicle import/export services.",
        problem:
          "Vehicle import process is complex and customers need clear information and easy quote requests.",
        solution:
          "SEO-friendly structure and clear form-driven flow for lead capture and quote requests.",
        outcome:
          "Live platform simplifying the vehicle import/export process between Belgium and Spain.",
        highlights: [
          "Multi-step quote request form",
          "SEO-friendly structure",
          "Clear form-driven flow",
        ],
        tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
        liveUrl: "https://import-your-dream-website.vercel.app",
        githubUrl: "https://github.com/Adnanne-Bourhayal/Import-Your-Dream",
      },
    },
    skills: {
      title: "Skills & Technologies",
      strong: "Core",
      familiar: "Working Knowledge",
      learning: "Currently Learning",
      aiTools: "AI Tools",
      strongSkills: [
        "Java",
        "C# / .NET",
        "SQL (PostgreSQL / MySQL)",
        "ASP.NET Core",
        "Spring Boot",
        "REST APIs",
        "Git / GitHub",
        "HTML / CSS",
        "JavaScript",
        "Hibernate / JPA",
      ],
      familiarSkills: ["TypeScript", "React", "Next.js", "Angular", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      learningSkills: ["Docker", "CI/CD (GitHub Actions)", "Cypress", "Linux", "Azure (Basics)", "AWS (Basics)"],
      aiToolsList: ["ChatGPT", "GitHub Copilot", "Gemini"],
      note: "I learn fast and adapt to new stacks quickly.",
    },
    experience: {
      title: "Experience",
      job1: {
        title: "Full Stack Developer",
        company: "UDIT",
        location: "Madrid, Spain",
        period: "Oct 2024 – Jun 2025",
        highlights: [
          "Built a university booking portal (ASP.NET, SQL, Bootstrap) to manage resources and prevent scheduling conflicts.",
          "Improved delivery speed with structured workflows and automated checks.",
        ],
      },
      job2: {
        title: "Postal Operator",
        company: "bpost",
        location: "Belgium",
        period: "Jun 2024 – Sep 2024",
        highlights: [
          "High-accuracy work in a fast-paced environment; strong reliability and discipline.",
        ],
      },
      job3: {
        title: "Logistics Operator",
        company: "Nike / Maersk",
        location: "Belgium",
        period: "2023",
        highlights: [
          "High-accuracy work in a fast-paced environment; strong reliability and discipline.",
        ],
      },
    },
    education: {
      title: "Education",
      degree1: {
        title: "BSc Computer Science (English-taught)",
        institution: "UCAM + IBES",
        location: "English-taught",
        period: "Oct 2023 – Jun 2026",
        description:
          "Computer science program taught in English, focused on modern software development.",
      },
      degree2: {
        title: "Higher Technical Degree (DAM)",
        institution: "Multiplatform Application Development",
        location: "Spain",
        period: "2022 – 2024",
        description:
          "Java, databases, web development, mobile apps, and software engineering.",
      },
      degree3: {
        title: "Science & Technology + Business Baccalaureate",
        institution: "High School",
        location: "Spain",
        period: "2020 – 2022",
        description: "Combined science, technology, and business curriculum.",
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
      subtitle: "Open to junior roles in Belgium (English-friendly) and hybrid/remote opportunities.",
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
      headline: "Junior Software Engineer (Java/.NET) — security-aware",
      subheadline:
        "Desarrollo sistemas web y backend con codigo limpio, automatizacion y APIs fiables.\nGrado en Informatica (impartido en ingles). Basado en Amberes, Belgica.",
      viewProjects: "Ver Proyectos",
      contactMe: "Contacto",
    },
    about: {
      title: "Sobre Mi",
      description:
        "Disfruto construyendo software moderno que es simple de usar y solido por dentro. Soy curioso por naturaleza y aprendo rapido lanzando proyectos reales. Estoy terminando un grado en Informatica impartido en ingles. Me interesa especialmente la arquitectura limpia, la automatizacion y los habitos de desarrollo seguros. Trabajo bien tanto de forma independiente como en equipo.",
      highlight1Title: "Mentalidad de Seguridad",
      highlight1Desc: "Habitos de codigo seguro, manejo cuidadoso de entradas y fundamentos de autenticacion.",
      highlight2Title: "Aprendizaje Rapido y Adaptabilidad",
      highlight2Desc: "Incorporacion rapida, iteracion agil y mejora con feedback.",
      highlight3Title: "Soluciones Orientadas al Negocio",
      highlight3Desc: "Construyo funcionalidades practicas que ahorran tiempo y generan valor medible.",
      whatIDoTitle: "Lo Que Hago",
      whatIDo: [
        {
          title: "Desarrollo Web",
          description: "Construyo aplicaciones web responsivas y UI que se sienten rapidas y limpias.",
          items: [],
        },
        {
          title: "Desarrollo Backend",
          description: "Diseno APIs fiables, modelos de datos e integraciones.",
          items: [],
        },
        {
          title: "Automatizacion",
          description: "Automatizo flujos de trabajo para reducir trabajo manual y acelerar entregas.",
          items: [],
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
      featured: "Destacado",
      project0: {
        name: "CorpWallet",
        tagline: "Seguridad de Transacciones Empresariales",
        status: "Demo",
        description: "Sistema seguro de aprobacion de transacciones empresariales con evaluacion de confianza en tiempo real.",
        problem:
          "Los equipos de finanzas empresariales necesitan flujos de aprobacion de transacciones seguros y verificables.",
        solution:
          "Construi un POC mobile-first con verificaciones de integridad en tiempo real, puntuacion de riesgo y politicas de aprobacion multicapa.",
        outcome:
          "Demuestra control seguro de transacciones para finanzas empresariales con verificacion de confianza en tiempo real.",
        highlights: [
          "Puntuacion de confianza en tiempo real (100 = seguro verificado)",
          "Marcado de transacciones basado en riesgo",
          "Politicas de aprobacion multicapa",
        ],
        tech: ["Kotlin", "FastAPI", "Android", "Security"],
        liveUrl: undefined,
        githubUrl: "https://github.com/Adnanne-Bourhayal/corpwallet-mobile-poc",
      },
      project1: {
        name: "Altaira Labs",
        tagline: "Agencia de Soluciones de IA y Automatizacion",
        status: "En Vivo",
        description:
          "Sitio de servicios de IA y automatizacion enfocado en captura de leads y flujos escalables.",
        problem:
          "Las pequenas empresas tienen dificultades para adoptar tecnologias de IA y automatizacion.",
        solution:
          "Paginas estructuradas, CTAs claros y arquitectura lista para automatizacion.",
        outcome:
          "Base de agencia escalable con captura de leads y presentacion de servicios.",
        highlights: [
          "Paginas estructuradas con CTAs claros",
          "Captura de leads y flujo de contacto",
          "Arquitectura lista para automatizacion",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
        liveUrl: "https://altairalabs.vercel.app/",
        githubUrl: "https://github.com/Adnanne-Bourhayal/Altaira-Labs",
      },
      project2: {
        name: "Nova Detailing",
        tagline: "Sitio Web de Reservas",
        status: "En Vivo",
        description: "Web de reservas para agilizar solicitudes de servicio y precios.",
        problem:
          "Negocio local de detailing necesitaba presencia online profesional para atraer clientes.",
        solution:
          "Construido para conversion y UX rapida con precios transparentes y flujo de reserva sin friccion.",
        outcome:
          "UX limpia disenada para reducir la friccion en las reservas y generar confianza.",
        highlights: [
          "Servicios + desglose de precios",
          "Flujo de reserva sin friccion",
          "Construido para conversion y UX rapida",
        ],
        tech: ["Next.js", "React", "Tailwind", "Vercel"],
        liveUrl: "https://nvdetail.vercel.app/",
        githubUrl: "https://github.com/Adnanne-Bourhayal/Nova-Detailing",
      },
      project3: {
        name: "Import Your Dream",
        tagline: "Importacion/Exportacion de Vehiculos",
        status: "En Vivo",
        description:
          "Landing + flujo de cotizacion para servicios de importacion/exportacion de vehiculos.",
        problem:
          "El proceso de importacion de vehiculos es complejo y los clientes necesitan informacion clara.",
        solution:
          "Estructura SEO-friendly y flujo basado en formularios claros para captura de leads y cotizaciones.",
        outcome:
          "Plataforma en produccion que simplifica la importacion/exportacion de vehiculos entre Belgica y Espana.",
        highlights: [
          "Formulario de cotizacion multipaso",
          "Estructura SEO-friendly",
          "Flujo basado en formularios claros",
        ],
        tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
        liveUrl: "https://import-your-dream-website.vercel.app",
        githubUrl: "https://github.com/Adnanne-Bourhayal/Import-Your-Dream",
      },
    },
    skills: {
      title: "Habilidades y Tecnologias",
      strong: "Principal",
      familiar: "Conocimiento Practico",
      learning: "Aprendiendo Actualmente",
      aiTools: "Herramientas IA",
      strongSkills: [
        "Java",
        "C# / .NET",
        "SQL (PostgreSQL / MySQL)",
        "ASP.NET Core",
        "Spring Boot",
        "REST APIs",
        "Git / GitHub",
        "HTML / CSS",
        "JavaScript",
        "Hibernate / JPA",
      ],
      familiarSkills: ["TypeScript", "React", "Next.js", "Angular", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      learningSkills: ["Docker", "CI/CD (GitHub Actions)", "Cypress", "Linux", "Azure (Basico)", "AWS (Basico)"],
      aiToolsList: ["ChatGPT", "GitHub Copilot", "Gemini"],
      note: "Aprendo rapido y me adapto a nuevas tecnologias facilmente.",
    },
    experience: {
      title: "Experiencia",
      job1: {
        title: "Desarrollador Full Stack",
        company: "UDIT",
        location: "Madrid, Espana",
        period: "Oct 2024 – Jun 2025",
        highlights: [
          "Construi un portal de reservas universitario (ASP.NET, SQL, Bootstrap) para gestionar recursos y prevenir conflictos de horarios.",
          "Mejore la velocidad de entrega con flujos de trabajo estructurados y verificaciones automatizadas.",
        ],
      },
      job2: {
        title: "Operador Postal",
        company: "bpost",
        location: "Belgica",
        period: "Jun 2024 – Sep 2024",
        highlights: [
          "Trabajo de alta precision en un entorno de ritmo rapido; fuerte fiabilidad y disciplina.",
        ],
      },
      job3: {
        title: "Operador Logistico",
        company: "Nike / Maersk",
        location: "Belgica",
        period: "2023",
        highlights: [
          "Trabajo de alta precision en un entorno de ritmo rapido; fuerte fiabilidad y disciplina.",
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
        "Ik ben gespecialiseerd in het ontwikkelen van schaalbare webapplicaties, intelligente automatiseringssystemen en AI-gestuurde oplossingen die meetbare bedrijfswaarde leveren.",
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
      featured: "Uitgelicht",
      project0: {
        name: "CorpWallet",
        tagline: "Enterprise Transactiebeveiliging",
        status: "Demo",
        description: "Veilig enterprise transactie-goedkeuringssysteem met runtime vertrouwensevaluatie.",
        problem:
          "Enterprise financeteams hebben veilige, verifieerbare transactie-goedkeuringsworkflows nodig.",
        solution:
          "Bouwde een mobile-first POC met runtime integriteitscontroles, risicoscoring en meerlaagse goedkeuringsbeleid.",
        outcome:
          "Demonstreert veilige transactiecontrole voor enterprise finance met realtime vertrouwensverificatie.",
        highlights: [
          "Runtime vertrouwensscore (100 = geverifieerd veilig)",
          "Risico-gebaseerde transactiemarkering",
          "Meerlaags goedkeuringsbeleid",
        ],
        tech: ["Kotlin", "FastAPI", "Android", "Security"],
        liveUrl: undefined,
        githubUrl: "https://github.com/Adnanne-Bourhayal/corpwallet-mobile-poc",
      },
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
        tech: ["Next.js", "React", "TypeScript", "Tailwind", "Vercel"],
        liveUrl: "https://altairalabs.vercel.app/",
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
        liveUrl: "https://nvdetail.vercel.app/",
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
        liveUrl: "https://import-your-dream-website.vercel.app",
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
        title: "Full Stack Developer",
        company: "UDIT",
        location: "Madrid, Spanje",
        period: "Oct 2024 – Jun 2025",
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
