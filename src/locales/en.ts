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
        'Software Engineer focused on <highlight>platform architecture and systems integration</highlight>. Through software design and development, I deliver technical solutions and orchestrate <highlight>infrastructure</highlight> to ensure <highlight>operational continuity</highlight> and business scalability.',
      technologies: 'Stack',
      education: {
        title: 'Education',
        degree: 'B.S. in Computer Science & Informatics Engineering',
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
          'Design, develop, and integrate <highlight>technological solutions</highlight> across .NET Core, Next.js, Azure, and Power Platform to represent <highlight>corporate processes</highlight> and ensure <highlight>operational continuity</highlight>.',
        techs: ['.NET Core', 'Next.js', 'Azure', 'Power Platform', 'SQL Server'],
      },
      nortrans: {
        company: 'Nortrans',
        role: 'IT Supervisor',
        period: 'January 2026 - April 2026',
        location: 'Antofagasta, Chile',
        description:
          'Implemented a <highlight>corporate platform</highlight> using .NET Core and Next.js to unify cross-functional company operations into a single <highlight>centralized ecosystem</highlight>.',
        techs: ['.NET Core', 'Next.js', 'PostgreSQL'],
      },
      metric: {
        company: 'Metric Studio',
        role: 'Capstone Project (Software Engineer)',
        period: 'August 2025 - December 2025',
        location: 'Antofagasta, Chile',
        description:
          'Developed a <highlight>corporate intranet</highlight> with Next.js and Supabase to streamline <highlight>recruitment and personnel management workflows</highlight> for SmartPOS, eliminating information silos and manual tasks.',
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
      author: '— Martin Fowler (Patterns of Enterprise Application Architecture)',
      socials: 'Socials',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
} as const

export default en
