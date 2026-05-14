export const portfolioData = {
  personalInfo: {
    name: 'Vishal Gupta',
    title: 'Full Stack MERN Developer',
    tagline: 'Building exceptional digital experiences',
    email: 'developer.vishaal@gmail.com',
    phone: '+91 93202065989',
    location: 'Mumbai, India',
    profileImage: '/images/vishalGupta.png',
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/vishal2210/',
    github: 'https://github.com/developervishalgupta',
    hackerrank: 'https://www.hackerrank.com/profile/developer_visha6',
  },

  hero: {
    intro: "Hi, I'm Vishal Gupta",
    title: 'Full Stack MERN Developer',
    description:
      "I'm a passionate full stack developer with 4+ years of experience building modern web applications. I specialize in React, Node.js, and MongoDB, creating performant, scalable solutions that solve real problems.",
    experience: '4+ Years Experience',
    availability: 'Available for Projects',
    ctaButtons: [
      {
        label: 'View Projects',
        href: '#projects',
        variant: 'primary',
      },
      {
        label: 'Download Resume',
        href: '/resume.pdf',
        variant: 'secondary',
      },
      {
        label: 'Contact Me',
        href: '#contact',
        variant: 'ghost',
      },
    ],
  },

  techStack: {
    frontend: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'ant Design',
      'Bootstrap',
      'Redux',
      'Zustand',
    ],
    backend: ['Node.js', 'Express.js', 'REST APIs'],
    database: ['MongoDB'],
    tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'AWS', 'Figma'],
  },

  experience: [
    {
      id: 3,
      role: 'Associate Software Developer',
      company: 'CodeAngle Technologies Private Limited',
      duration: 'Dec 2025 - Feb 2026',
      description:
        'Worked as an Associate Software Developer, primarily focusing on frontend development and contributing to the development of modern, responsive, and user-friendly web applications. Collaborated closely with senior developers to implement scalable UI components, integrate APIs, and enhance overall application performance. Also gained hands-on experience in backend development by assisting with server-side functionality and API-related tasks under senior developer guidance.',
        keyResponsibilities:[
          'Developed responsive and interactive frontend interfaces using modern web technologies.',
          'Worked on API integration and dynamic data handling.',
          'Collaborated with senior developers on backend functionality and feature implementation.',
          'Maintained clean, reusable, and scalable code practices.',
          'Participated in debugging, testing, and improving application performance.',
          'Contributed to UI/UX improvements and cross-device compatibility.',
        ],
        technologiesUsed:[
          'React.js',
          'typeScript',
          'Ant Design',
          'Node.js',
          'Express.js',
          'REST APIs',
          'MongoDB',
          'Git & GitHub'
        
        ],
      achievements: [
        'Improved performance by 40% through code optimization',
        'Built reusable component library with 35+ components',
        ,
      ],
    },
    {
      id: 2,
      role: 'Frontend Ninja',
      company: 'Flow Learning',
      duration: ' Mar 2023 - Oct 2025',
      description:
        'Tailwnd Company is an ed-tech organization focused on building modern digital learning platforms for schools and educational institutions. The platform helps students learn concepts interactively while providing complete school management solutions for teachers, coordinators, principals, vice principals, and administrators through role-based access systems.',
        keyResponsibilities:[
          'Developed and maintained responsive web and mobile applications using React.js, Next.js, and React Native.',
          'Led frontend development across 3 web applications and 1 mobile application.',
          'Built reusable and scalable UI components to improve code maintainability and reduce development time.',
          'Managed application state using Redux for efficient and centralized data handling.',
          'Integrated REST APIs using Axios and implemented dynamic data rendering.',
          'Collaborated with backend developers, designers, and team members to deliver production-ready features.',
          'Optimized application performance, responsiveness, and cross-browser compatibility.',
          'Resolved frontend bugs and improved overall UI/UX across multiple projects.',
          'Implemented clean and modular frontend architecture for scalable application development.',
          'Worked on component-based development approaches to simplify complex frontend workflows.',
          'Maintained responsive design standards for desktop, tablet, and mobile devices.',
        ],
        technologiesUsed:[
          'React.js',
          'Next.js',
          'React Native',
          'Tailwind CSS',
          'Bootstrap',
          'javaScript',
          'Redux',
          'Axios',
          'bitbucket',
        ],
      achievements: [
        'Successfully managed frontend development across multiple production-level projects.',
        'Created reusable component structures that improved development speed and maintainability.',
        'Reduced frontend complexity by implementing scalable architecture and organized state management.',
        'Delivered responsive and optimized applications for both web and mobile platforms.',
        'Played a key role in improving application stability through issue resolution and performance optimization.',
      ],
    },
    {
      id: 1,
      role: 'Web Developer',
      company: 'Goldberries Technologies & beyond',
      duration: 'Aug 2021 - Feb 2023',
      description: 'Gold Berries Technology and Beyond is a software and web solutions company that develops customized digital products and web applications for businesses based on their specific requirements. The company focuses on delivering responsive websites, frontend solutions, and business-oriented web platforms for clients across different industries.',
        keyResponsibilities:[
          'Started as a Junior Web Developer and later promoted to Web Developer based on performance and contribution.',
          'Developed reusable frontend templates and static web components used across multiple client projects.',
          'Managed frontend development tasks and handled client-based UI requirements.',
          'Collaborated with clients to understand project needs and implement responsive web solutions.',
          'Built responsive and user-friendly interfaces using HTML, CSS, JavaScript, and Bootstrap.',
          'Maintained and enhanced existing frontend projects to improve usability and performance.',
          'Contributed to delivering customized web solutions for different business requirements.',
        ],
        technologiesUsed:['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git & GitHub'],
      achievements: [
        'Delivered 15+ projects on time',
        'Implemented responsive design for mobile-first approach',
        'Led migration from REST to GraphQL',
      ],
    },
   
  ],

  projects: [
     {
      id: 1,
      title: 'Identity Tracker System',
      description:
        'Identity Tracker System is a secure full-stack web application designed to manage and verify user identities efficiently. The system enables administrators to upload and manage large volumes of user records, generate secure digital ID cards, and perform identity verification using Aadhaar XML authentication.',
      keyFeatures: [
        {title:'Bulk user upload through Excel sheets with automated validation',},
        {title:'Generates downloadable error Excel reports highlighting failed records and upload reasons',},
        {title:'Complete CRUD operations for managing user data in an organized dashboard',},
        {title:'Secure digital ID card generation with encrypted QR codes that can only be decoded within the admin system',},
        {title:'Aadhaar XML-based identity verification to validate real user identities securely',},
        {title:'QR code scanning system to instantly fetch and display verified user details',},
        {title:'Auto-filled dynamic forms based on uploaded user information to reduce manual entry and improve efficiency',},
        {title:'Responsive admin dashboard for managing users, IDs, and verification workflows',}
      ],
      image: '',
      technologies: ['Next.js', 'Node.js','tailwind css' ,'Express.js','MongoDB'],
      liveUrl: 'https://identity-tracker-orpin.vercel.app',
      githubUrl: 'https://github.com/DeveloperVishalGupta/identity-tracker',
   projectImpact:'This system streamlines identity management, improves verification security, reduces manual data handling, and provides a scalable solution for organizations handling large user databases and secure ID management.'
    },
     {
      id: 2,
      title: 'IQRA Fashions – E-Commerce',
      description:
        'IQRA Fashions is a full-stack e-commerce web application developed for a jewelry and fashion accessories business specializing in bangles and necklaces. The platform was created to help expand the business digitally, improve customer reach, and streamline product and order management.',
      keyFeatures: [
        {title:'User-friendly e-commerce website with multiple product categories and category-based product listings.',},
        {title:'Complete shopping experience including:',
          items:[
            'Add to Cart',
            'Wishlist / Favorites',
            'Product Sharing',
            'Secure Checkout',
            'Online Payments using Razorpay integration'
          ]
         },
        {title:'Responsive and modern UI optimized for desktop and mobile users.',},
        {title:'Admin dashboard for managing the complete store operations.',},
        {title:'Full CRUD operations for products and categories.',},
        {title:'Order management system with tracking for all orders and canceled orders.',},
        {title:'Revenue analytics and sales charts for business insights.',},
        {title:'Product stock monitoring with low-stock alert notifications.',},
        {title:'Product status management to activate or deactivate products instantly.',},
        {title:'Customer data management and order history maintenance.',
        },
        {title:'Integration with Razorpay for secure and seamless online payment processing.',},
      ],
      image: '',
      technologies: ['Next.js', 'Node.js','tailwind css' ,'Express.js','MongoDB', 'Razorpay'],
      liveUrl: 'https://www.iqrafashions.com/',
      githubUrl: 'https://github.com/DeveloperVishalGupta/iqra-fashion',
   projectImpact:'IQRA Fashions helped the business establish a strong online presence, simplify inventory and order management, and provide customers with a smooth online shopping experience. The platform improved operational efficiency while enabling the business to scale digitally and reach a wider audience.'
    },
    {
      id: 3,
      title: 'MTrax Digital Media',
      description:
        'MTrax Digital Media is a modern music company website developed to help artists and singers publish, promote, and distribute their music across multiple digital platforms. The platform was created to expand the company’s digital presence and help independent singers reach a larger audience globally.',
logo:'/images/MTDM.png',
      image: '/images/mTraxMedia.png',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      liveUrl: 'https://mtraxdigitalmedia.vercel.app/',
      githubUrl: 'https://github.com/DeveloperVishalGupta/mtraxdigitalmedia',
      keyFeatures: [
  {
    title: "Professional music company website with a modern and responsive design."
  },
  {
    title: "Artists and singers can connect with the company for music publishing and promotion services."
  },
  {
    title: "Supports publishing and promotion of:",
    items: [
      "Single Songs",
      "Music Videos",
      "YouTube Releases"
    ]
  },
  {
    title: "Music distribution support for multiple platforms including:",
    items: [
      "Spotify",
      "YouTube Music",
      "Amazon Music",
      "JioSaavn",
      "Other major streaming platforms"
    ]
  },
  {
    title: "Dedicated sections for showcasing latest releases, artists, and company services."
  },
  {
    title: "Contact and inquiry system for singers and music creators to collaborate with the company."
  },
  {
    title: "Light and Dark theme support based on user preference for improved user experience."
  },
  {
    title: "SEO-friendly and responsive UI for better reach and accessibility across devices."
  }
],
    },
    {
      id: 4,
      title: 'UPSC Labs – Learning Platform',
      description: 'UPSC Labs is an educational platform developed for UPSC aspirants to help them prepare effectively for competitive government examinations. The website provides course information, study resources, previous year question papers, and student inquiry management to support aspirants throughout their preparation journey.',
      logo:'/images/upsc-labs-logo.png',
      image: '/images/upsc-labs.png',
      technologies: ['PHP', 'HTML', 'Bootstrap', 'owl-carousel', 'sheet-DB'],
      liveUrl: 'https://upsclabs.lovestoblog.com/',
      githubUrl: 'https://github.com/DeveloperVishalGupta/UpscLabs',
      keyFeatures: [
        {
          title: "Modern and responsive educational website designed for UPSC aspirants."
        },
        {
          title: "Free Demo Class request system where students can submit inquiry forms and receive responses from the admin team."
        },
        {
          title: "Personal student interaction and manual counseling support from the institute team."
        },
        {
          title: "Dedicated sections for popular UPSC preparation courses including:",
          items: ['Sambhav', 'Dhronacharya', 'Vidvaan']
        },
        {
          title: "NCERT study resources available for Classes 5 to 12 across all subjects."
        },
        {
          title: "Previous year question papers provided for practice from 2014 to 2022."
        },
        {
          title: "Question paper resources available for multiple competitive streams including:",
          items: [
            "UPSC Civil Services",
            "NDA",
            "Combined Defence Services (CDS)"
          ]
        },
        {
          title: "Contact and inquiry management system for student communication and follow-up."
        },
        {
          title: "SEO-friendly and responsive UI for accessibility across desktop and mobile devices."
        }
      ],
      projectImpact:'UPSC Labs simplifies access to educational resources and helps aspirants prepare more efficiently through organized study materials, previous year papers, and direct communication with mentors and institute administrators.'
    },
    {
      id: 5,
      title: 'Spatika – Spa & Salon',
      description:
        'Spatika is a modern spa and salon website developed to showcase salon services, staff expertise, and simplify appointment booking for customers. The platform helps the business strengthen its online presence while providing users with a smooth and professional booking experience.',
        logo:'/images/spatika-logo.png',
      image: '/images/spatika.png',
      technologies: ['Next.js', 'Tailwind CSS', 'framer-motion'],
      liveUrl: 'https://spatika.vercel.app/',
      githubUrl: 'https://github.com/developervishalgupta/spatika',
      keyFeatures: [
        {
          title: "Modern and responsive spa & salon website with an elegant UI/UX design."
        },
        {
          title: "Showcase section for salon details, staff members, and professional workers."
        },
        {
          title: "Categorized service menu displaying:",
          items: [
            "Service names",
            "Pricing details",
            "Approximate service duration"
          ]
        },
        {
          title: "Online appointment booking system for customers."
        },
        {
          title: "Appointment requests supported through:",
          items: [
            "Phone calls",
            "Email",
            "WhatsApp"
          ],
        },
        {
          title: "Automated appointment confirmation sent through email."
        },
        {title:'Dedicated sections for showcasing beauty, spa, and salon services.'},
        {title:'Mobile-friendly and SEO-optimized design for better accessibility and reach.'},
        {title:'Contact and inquiry system for customer communication.'}
      ],
      projectImpact:'Spatika helps streamline salon appointment management while improving customer engagement through an easy-to-use online booking system. The platform enhances business visibility, simplifies customer communication, and provides a professional digital experience for salon clients.'
    },
  ],

  services: [
    {
      id: 1,
      title: 'Full Stack Development',
      description:
        'End-to-end web application development using modern MERN stack technologies',
      icon: 'code',
    },
    {
      id: 2,
      title: 'Frontend Development',
      description:
        'Beautiful, responsive UI components and interfaces with cutting-edge React techniques',
      icon: 'palette',
    },
    {
      id: 3,
      title: 'REST API Development',
      description:
        'Robust and scalable backend APIs with Node.js and Express for seamless integration',
      icon: 'server',
    },
    {
      id: 4,
      title: 'Admin Dashboard',
      description:
        'Custom admin systems for data management, analytics, and user control',
      icon: 'layout',
    },
    {
      id: 5,
      title: 'Responsive Design',
      description:
        'Pixel-perfect, mobile-first designs that work flawlessly across all devices',
      icon: 'smartphone',
    },
    {
      id: 6,
      title: 'E-Commerce Solutions',
      description:
        'Complete e-commerce platforms with product management, payments, and inventory',
      icon: 'shopping-cart',
    },
  ],

  stats: [
    { icon: '📦', label: 'Years Experience', value: 4, suffix: '+' },
    { icon: '✅', label: 'Projects Completed', value: 10, suffix: '+' },
    { icon: '👥', label: 'Users Served', value: 100, suffix: '+' },
    { icon: '📱', label: 'Responsive Websites', value: 100, suffix: '%' },
  ],

  testimonials: [
    {
      id: 1,
      text: 'Got my admin dashboard developed from Vishal. The UI is clean, fast, and easy to use. Really liked his frontend skills and communication.',
      author: 'Identity Tracker',
      image: '/images/Identity-Tracker.png',
    },
    {
      id: 2,
      text: 'We needed guidance on what kind of website would be best for our business. ARKA helped us understand everything clearly and suggested the right approach',
      author: 'TAHJIBA KHAN',
      image: '/images/TAHJIBA-KHAN.png',
    },
    {
      id: 3,
      text: 'His quotation was a little high for my budget, but after seeing his work quality and the way he communicates professionally, I could understand the value behind it. Very polite, knowledgeable, and easy to discuss project ideas with.',
      author: 'NIDHI SHARMA',
      image: '/images/NIDHI-SHARMA.png',
    },
  ],

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
}
