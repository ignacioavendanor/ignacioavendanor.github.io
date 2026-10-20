const es = {
  translation: {
    menu: {
      title: 'Menú',
      close: 'Cerrar',
      copyright: 'Desarrollado por Ignacio Avendaño',
    },
    hero: {
      title: 'Inicio',
      role: 'Ingeniero de Software',
      description:
        'Conecto <highlight>tecnología, procesos y negocio</highlight> mediante soluciones a medida, transformando problemas operativos en <highlight>resultados prácticos y de alto impacto</highlight>.',
      cta: 'Ver proyectos',
      secondarycta: 'Conversemos',
      cv: 'Descargar CV',
      download: 'Descargando...',
    },
    about: {
      title: 'Acerca de mí',
      description:
        'Ingeniero de Software enfocado en <highlight>arquitectura e integración de plataformas</highlight>. A través del diseño y el desarrollo de software, implemento soluciones tecnológicas y orquesto <highlight>infraestructura</highlight> para asegurar la escalabilidad y <highlight>continuidad operacional.</highlight>',
      technologies: 'Tecnologías',
      education: {
        title: 'Educación',
        degree: 'Ingeniero Civil en Computación e Informática',
        institution: 'Universidad Católica del Norte',
      },
      languages: {
        title: 'Idiomas',
        native: {
          name: 'Español',
          level: 'Nativo',
        },
        secondary: {
          name: 'Inglés',
          level: 'Intermedio (B1 Cambridge)',
        },
      },
    },
    projects: { title: 'Proyectos' },
    experience: {
      title: 'Experiencia',
      eyebrow: 'Experiencia',
      accent: 'Profesional.',
      vantaz: {
        company: 'Vantaz Group',
        role: 'Consultor de Tecnología',
        period: 'Mayo 2026 - Presente',
        location: 'Antofagasta, Chile',
        description:
          'Diseño, desarrollo e integro <highlight>soluciones tecnológicas</highlight> en .NET Core, Next.js, Azure y Power Platform para representar <highlight>procesos corporativos</highlight> y garantizar la <highlight>continuidad operacional</highlight>.',
        techs: ['.NET Core', 'Next.js', 'Azure', 'Power Platform', 'SQL Server'],
      },
      nortrans: {
        company: 'Nortrans',
        role: 'Supervisor TI',
        period: 'Enero 2026 - Abril 2026',
        location: 'Antofagasta, Chile',
        description:
          'Implementé una <highlight>plataforma corporativa</highlight> en .NET Core y Next.js para unificar la operación transversal de la compañía en una única <highlight>plataforma centralizada</highlight>.',
        techs: ['.NET Core', 'Next.js', 'PostgreSQL'],
      },
      metric: {
        company: 'Metric Studio',
        role: 'Capstone Project (Ingeniero de Software)',
        period: 'Agosto 2025 - Diciembre 2025',
        location: 'Antofagasta, Chile',
        description:
          'Desarrollé una <highlight>intranet corporativa</highlight> con Next.js, Supabase para gestionar los procesos de <highlight>reclutamiento y gestión del personal</highlight> de SmartPOS, eliminando la dispersión de información y tareas manuales.',
        techs: ['Next.js', 'Supabase', 'PostgreSQL'],
      },
      bhp: {
        company: 'BHP Group Limited',
        role: 'Práctica (Ingeniero de Datos)',
        period: 'Enero 2025 - Marzo 2025',
        location: 'Santiago de Chile, Chile',
        description:
          'Diseñé un <highlight>dashboard de centralización</highlight> de proyectos tecnológicos en Power BI para el área de <highlight>Data & Digital</highlight> con el fin de reducir redundancias operativas y maximizar la visibilidad del <highlight>impacto operativo y financiero</highlight>.',
        techs: ['Power BI', 'SQL', 'Excel', 'Star Schema', 'Data Modeling'],
      },
    },
    contact: {
      title: 'Contacto',
      reference: 'La arquitectura es lo que resulta difícil de cambiar después.',
      author: '— Martin Fowler (Patterns of Enterprise Application Architecture)',
      socials: 'Redes sociales',
      email: 'Correo electrónico',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
  },
} as const

export default es
