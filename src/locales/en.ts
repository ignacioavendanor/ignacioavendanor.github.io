const en = {
  translation: {
    menu: {
      title: 'Menu',
      close: 'Close',
      copyright: 'Developed by Ignacio Avendaño',
    },
    hero: {
      title: 'Home',
      role: 'Software Engineer',
      description:
        'I bridge <highlight>technology, processes, and business</highlight> with tailored solutions, turning complex operational bottlenecks into <highlight>practical, high-impact outcomes</highlight>.',
      cta: 'View projects',
      secondarycta: 'Get in touch',
      cv: 'Download CV',
      cvUnavailable: 'CV unavailable',
      download: 'Downloading...',
    },
    about: {
      title: 'About Me',
      description:
        'Full-Stack Software Engineer specialized in <highlight>software architecture and infrastructure</highlight>. I build solutions from definition through their evolution, <highlight>connecting technology and business</highlight> to turn needs into <highlight>outcomes that make a difference</highlight>.',
      technologies: 'Stack',
      education: {
        title: 'Education',
        degree: 'B.S. in Computer Science and Informatics',
        institution: 'Universidad Católica del Norte',
      },
      languages: {
        title: 'Languages',
        native: {
          name: 'Spanish',
          level: 'Native',
        },
        secondary: {
          name: 'English',
          level: 'Intermediate (B1 Cambridge)',
        },
      },
    },
    projects: {
      title: 'Projects',
      eyebrow: 'Featured',
      accent: 'Projects.',
      viewProject: 'View project',
      portfolio: {
        title: 'Personal Portfolio',
        description:
          'Interactive portfolio designed as a dynamic resume to showcase my professional background, featured projects, and technical skills.',
        techs: ['Vite', 'React', 'Motion'],
      },
      sgp: {
        title: 'Management Consulting System',
        description:
          'Corporate platform for managing the project lifecycle of consultants at Vantaz Group, centralizing planning, budgets, and financial control.',
        techs: ['Next.js', '.NET Core', 'SQL Server', 'Azure', 'Redis'],
      },
    },
    experience: {
      title: 'Experience',
      eyebrow: 'Professional',
      accent: 'Experience.',
      vantaz: {
        company: 'Vantaz Group',
        role: 'Technology Consultant',
        period: 'May 2026 - Present',
        location: 'Antofagasta, Chile',
        description:
          'I lead the creation of a project management system and integrate tech solutions using <highlight>.NET Core</highlight>, <highlight>Next.js</highlight>, and <highlight>Azure</highlight> to optimize <highlight>corporate processes</highlight> and ensure <highlight>operational continuity</highlight>.',
        techs: ['.NET Core', 'Next.js', 'Azure', 'SQL Server'],
      },
      nortrans: {
        company: 'Nortrans',
        role: 'IT Supervisor',
        period: 'January 2026 - April 2026',
        location: 'Antofagasta, Chile',
        description:
          'Implemented a <highlight>corporate platform</highlight> using Next.js, .NET Core and PostgreSQL to unify cross-functional company operations into a single <highlight>centralized ecosystem</highlight>.',
        techs: ['.NET Core', 'Next.js', 'PostgreSQL'],
      },
      metric: {
        company: 'Metric Studio',
        role: 'Capstone Project (Software Engineer)',
        period: 'August 2025 - December 2025',
        location: 'Antofagasta, Chile',
        description:
          'Developed an intranet with Next.js, Supabase and PostgreSQL to <highlight>centralize HR operations</highlight>.',
        techs: ['Next.js', 'Supabase', 'PostgreSQL'],
      },
      bhp: {
        company: 'BHP Group Limited',
        role: 'Data Engineer Intern (Data & Digital)',
        period: 'January 2025 - March 2025',
        location: 'Santiago de Chile, Chile',
        description:
          'Designed a <highlight>centralized project dashboard</highlight> in Power BI for the <highlight>Data & Digital</highlight> organization to reduce operational redundancies and maximize the visibility of <highlight>operational and financial impact</highlight>.',
        techs: ['Power BI', 'SQL', 'Excel', 'Star Schema', 'Data Modeling'],
      },
    },
    contact: {
      title: 'Contact',
      reference: 'Architecture is about the things that are hard to change later.',
      author: ' Martin Fowler (Patterns of Enterprise Application Architecture).',
      socials: 'Socials',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
} as const

export default en
