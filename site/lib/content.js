// Content management for easy editing
export const siteConfig = {
  name: "James Shrestha",
  title: "Applied Researcher & Builder — Creating data products for civic impact",
  description: "I'm James Shrestha — an applied researcher and builder focused on designing data-driven systems and civic technologies that make public information more accessible and actionable.",
  url: "https://james-shrestha.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/Jaymes_Stha",
    github: "https://github.com/Zaymes",
    linkedin: "https://www.linkedin.com/in/james-shrestha-25549a189",
    email: "zaymesshrestha@gmail.com"
  }
}

export const heroContent = {
  headline: "Building, advocating, and experimenting at the intersection of technology, data, and design",
  // Ensure explicit <br/> for line breaking in rendering with HTML/JSX tags
  subtext: `I’m James Shrestha — an engineer turned applied researcher and builder, exploring how technology, data, and design shape our collective future. Currently pursuing experiments in emerging tech, community building, advocacy, and hands-on tinkering.`,
  ctaButtons: [
    { text: "View My Work", href: "#projects" },
    { text: "Explore My Writings", href: "#blog" }
  ]
}

export const aboutContent = {
  title: "About Me",
  description: "My background in Electronics and Communication Engineering gradually evolved into a practice of designing data and digital products for civic and public use. Over the years, I've led initiatives and experiments that bring together open data, user-centered design, and digital collaboration — aiming to make governance more transparent and communities more informed.",
  currentRole: "Currently, I work as the COO at Open Knowledge Nepal (OKN), where I lead operations, partnerships, and technology projects that strengthen Nepal's open data ecosystem. I also serve as a General Member at Open Internet Nepal (OIN), contributing to advocacy for an open and inclusive digital space. Previously, I've coordinated and led data-focused fellowship programs and community events under OKN.",
  mission: "I operate at the intersection of research, implementation, and impact — bridging technology, data, and social systems through applied experimentation and collaborative development.",
  highlights: [
    "COO, Open Knowledge Nepal — leading civic-tech and data innovation",
    "General Member, Open Internet Nepal — advocating open internet and digital rights",
    "Builder of data platforms and public digital products",
    "Background in Electronics and Communication Engineering"
  ],
  technologies: [
    "JavaScript (ES6+)",
    "Python",
    "React.js",
    "Next.js",
    "Django",
    "Node.js",
    "PostgreSQL",
    "Data Visualization"
  ],
  // Journey Visualization Data
  // Edit this section to update the visual representation of your multidisciplinary journey
  // Structure: education, organizations, domains (work areas), and connections between them
  journey: {
    center: {
      title: "James Shrestha",
      subtitle: "Civic Tech Engineer"
    },
    education: [
      {
        title: "Electronics & Communication Engineering",
        year: "2021",
        icon: "🎓"
      }
    ],
    organizations: [
      {
        name: "Open Knowledge Nepal",
        role: "Chief Operating Officer",
        period: "2021 - Present",
        focus: ["Open Data", "Civic Tech", "Technology Projects"],
        icon: "🌐"
      },
      {
        name: "Open Internet Nepal",
        role: "General Member",
        period: "Present",
        focus: ["Digital Rights", "Internet Advocacy"],
        icon: "🔗"
      }
    ],
    domains: [
      {
        name: "Technology",
        skills: ["Full-Stack Development", "API Design", "Data Systems"],
        color: "blue"
      },
      {
        name: "Innovation",
        skills: ["Product Design", "Open Data Platforms", "Digital Solutions"],
        color: "purple"
      },
      {
        name: "Social Impact",
        skills: ["Civic Engagement", "Transparency", "Public Good"],
        color: "green"
      },
      {
        name: "Community",
        skills: ["Fellowship Programs", "Events", "Collaboration"],
        color: "orange"
      }
    ],
    connections: [
      { from: "education", to: "Technology", type: "foundation" },
      { from: "Open Knowledge Nepal", to: "Technology", type: "direct" },
      { from: "Open Knowledge Nepal", to: "Innovation", type: "direct" },
      { from: "Open Knowledge Nepal", to: "Social Impact", type: "direct" },
      { from: "Open Internet Nepal", to: "Social Impact", type: "direct" },
      { from: "Technology", to: "Innovation", type: "enables" },
      { from: "Innovation", to: "Social Impact", type: "enables" },
      { from: "Social Impact", to: "Community", type: "nurtures" }
    ]
  }
}

export const projectsContent = {
  title: "Selected Projects",
  projects: [
    {
      title: "Integrated Data Management System",
      quickContext: "A comprehensive, interoperable digital system facilitating seamless inter-governmental data sharing under FAIR principles.",
      description: "IDMS enables secure and transparent data management across government agencies, ensuring findability, accessibility, interoperability, and reusability of public data. The platform supports data discovery, sharing workflows, and public dissemination.",
      role: "Involved in product design and data architecture; developed the frontend interface and API integrations; coordinated with stakeholders for requirements gathering and system deployment.",
      technologies: ["CKAN", "GraphQL", "PostgreSQL", "Docker", "Next.js", "Tailwind CSS", "TypeScript"],
      outcome: "Deployed across five local governments in Nepal; processed 500+ datasets; recognized as Civic Tech Product under Goverance Track by UNDP 2025 and nominated for ICT Awards 2025.",
      github: "",
      live: "https://idms.oknp.org/"
    },
    {
      title: "Climate Data Portal",
      quickContext: "Nepal's climate data portal redesigned as an accessible, API-first platform for public climate information.",
      description: "Transformed complex climate datasets into an accessible public resource. The platform provides API access, interactive visualizations, and data downloads to support research, policy-making, and public awareness around climate change in Nepal.",
      role: "Designed and developed the frontend architecture; built API integration layer; created data visualization components; led user experience improvements.",
      technologies: ["Next.js", "CKAN", "REST API", "Data Visualization", "Mapbox"],
      outcome: "Improved access to climate and environmental datasets and supported their use by researchers and policy groups in Nepal.",
      github: "https://github.com/openknowledgenp/climate",
      live: "https://climate.oknp.org/"
    },
    {
      title: "Open Data Nepal Portal",
      quickContext: "API-based access layers for Nepal’s open data ecosystem, enabling scalable data delivery, visualization, and interactive insights.",
      description: "Prototyped and developed core components of Nepal’s open data portal, including frontend interfaces, data discovery features, and interactive visualizations. Conceived and led the design of the Data Stories feature to make datasets more meaningful and accessible for users. Contributed to backend API development and collaborated on data pipeline optimization to ensure smooth delivery of open datasets.",
      role: "Led the design and implementation of key frontend components for data access, visualization, and discovery, while contributing to backend API endpoints and integrations. I also conceptualized and drove the development of the Data Stories feature, working closely with the team to ensure a seamless user experience and effective data presentation.",
      technologies: ["Python", "FastAPI", "CKAN", "Next.js", "Docker", "Tailwind CSS", "TypeScript", "Solr", "tRPC"],
      outcome: "The portal enhanced access to open datasets and improved usability for researchers, civic groups, and other users, providing a foundation for continued experimentation and engagement with Nepal’s open data ecosystem",
      github: "https://github.com/openknowledgenp/opendatanepal",
      live: "https://opendatanepal.com"
    },
    {
      title: "LG Profile Viewer",
      quickContext: "Interactive data visualization dashboard for Tulsipur Sub-Metropolitan City, designed to make local government data more accessible, understandable, and actionable for stakeholders.",
      description: "Developed a dashboard that aggregates, visualizes, and presents key municipal datasets for Tulsipur Sub-Metropolitan City. The platform allows city officials, researchers, and citizens to explore demographic, environmental, and service-related data through interactive charts, maps, and insights, fostering transparency and evidence-based decision-making.",
      role: "Led the design and development of the frontend dashboard, implementing interactive visualizations and user-friendly interfaces to make complex datasets accessible. I collaborated with local government teams to understand data requirements, customized backend integration where necessary, and ensured smooth functionality of data pipelines.",
      technologies: ["react", "Leaflet", "GIS", "HighCharts.js"],
      outcome: "The dashboard provides city officials, researchers, and citizens with an accessible view of municipal data, enabling better planning and data-driven decision-making at the local level. It serves as a scalable model for future data visualization initiatives in other municipalities.",
      github: "",
      live: "https://data.tulsipurmun.gov.np/profile"
    }
  ]
}

export const blogContent = {
  title: "Writings & Reflections",
  description: "Explorations, learnings, and reflections from building, thinking and doing, contains lot of opioniated content at writing time that may not be aligned with my current views.",
  posts: [
    {
      title: "Rethinking Data Products for Public Use",
      excerpt: "How civic data tools can evolve from prototypes into products that drive measurable impact.",
      date: "2025-02-10",
      slug: "rethinking-data-products",
      readTime: "6 min read"
    },
    {
      title: "Building Civic-Tech Tools That Actually Get Used",
      excerpt: "Practical insights from iterating open data platforms and understanding user adoption challenges.",
      date: "2024-12-18",
      slug: "building-civic-tech-tools",
      readTime: "7 min read"
    },
    {
      title: "Experimentation as a Pathway to Innovation",
      excerpt: "Why continuous experimentation and learning cycles are crucial in civic and data-driven product development.",
      date: "2024-11-05",
      slug: "experimentation-pathway-to-innovation",
      readTime: "5 min read"
    }
  ]
}

export const contactContent = {
  title: "Connect or Collaborate",
  description: "Open to collaborations and conversations around civic technology, data products, and digital public infrastructure. If you're building or researching something aligned — I’d love to connect.",
  email: "zaymesshrestha@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/james-shrestha-25549a189",
    twitter: "https://twitter.com/Jaymes_Stha",
    github: "https://github.com/Zaymes"
  }
}
