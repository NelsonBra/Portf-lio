import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  // {
  //   id: "built-design",
  //   companyName: "Builtdesign",
  //   type: "Professional",
  //   category: ["Web Dev", "Full Stack", "UI/UX"],
  //   shortDescription:
  //     "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
  //   websiteLink: "https://builtdesign.in",
  //   techStack: [
  //     "Next.js",
  //     "React",
  //     "Node.js",
  //     "MongoDB",
  //     "GraphQL",
  //     "Nest.js",
  //     "Typescript",
  //   ],
  //   startDate: new Date("2021-07-01"),
  //   endDate: new Date("2022-07-01"),
  //   companyLogoImg: "/experience/builtdesign/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Landing Page",
  //       description:
  //         "Modern and responsive landing page showcasing company services and portfolio",
  //       imgArr: [
  //         "/experience/builtdesign/landing_1.webp",
  //         "/experience/builtdesign/landing_3.webp",
  //         "/experience/builtdesign/landing_5.webp",
  //         "/experience/builtdesign/landing_6.webp",
  //         "/experience/builtdesign/landing_2.webp",
  //         "/experience/builtdesign/landing_4.webp",
  //       ],
  //     },
  //     {
  //       title: "Custom PDF Reader and optimizer",
  //       description:
  //         "Specialized PDF viewer with optimization features for improved performance and user experience",
  //       imgArr: ["/experience/builtdesign/pdf_opt.webp"],
  //     },
  //     {
  //       title: "Clients Dashboard",
  //       description:
  //         "Comprehensive client portal with project tracking, document management, and communication tools",
  //       imgArr: [
  //         "/experience/builtdesign/cli_dashboard_1.webp",
  //         "/experience/builtdesign/cli_dashboard_2.webp",
  //         "/experience/builtdesign/cli_dashboard_3.webp",
  //       ],
  //     },
  //     {
  //       title: "Admin Dashboard",
  //       description:
  //         "Powerful administrative interface for managing users, projects, and system settings",
  //       imgArr: ["/experience/builtdesign/logo.png"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "During my time at Builtdesign, I had the opportunity to work on a dynamic and user-focused project that involved designing and optimizing a website catering to a user base of over 4000 individuals. My role as a full-stack web developer was to ensure a seamless experience for users by creating an efficient and maintainable platform.",
  //       "I collaborated closely with the product team to integrate cutting-edge features, employing technologies like Next.js and React with TypeScript for captivating front-end experiences. Additionally, I contributed significantly to the backend by utilizing Node.js, MongoDB, and GraphQL to design robust APIs and ensure smooth system functionality.",
  //       "This experience allowed me to enhance my skills in various areas of web development and deliver a high-quality product. I gained proficiency in front-end technologies such as Material UI and Tailwind CSS, as well as backend technologies including Nest.js and MySQL. The project's success in catering to a large user base and providing an intuitive user interface has further motivated me to pursue excellence in web development.",
  //     ],
  //     bullets: [
  //       "Developed and optimized a high-performing website catering to over 4000 users.",
  //       "Collaborated closely with the product team to implement cutting-edge features.",
  //       "Created an intuitive admin dashboard to efficiently manage and announce contest winners.",
  //       "Leveraged Next.js, React with TypeScript for captivating front-end experiences.",
  //       "Utilized Node.js, MongoDB, and GraphQL to design and manage databases.",
  //     ],
  //   },
  // },
  {
    id: "the-super-quotes",
    companyName: "The Super Quotes",
    type: "Professional",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Elevated The Super Quotes app with JavaScript, React Native, APIs, Redux magic, and Google Play Store debut.",
    websiteLink:
      "https://play.google.com/store/apps/details?id=com.thesuperlife",
    techStack: ["React Native", "Node.js", "MongoDB", "Javascript"],
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/experience/lagran/logo.png",
    pagesInfoArr: [
      {
        title: "Quotes View Page",
        description:
          "Elegantly designed quotes display with customizable themes and sharing options",
        imgArr: ["/experience/lagran/logo.png"],
        
      },
      {
        title: "Quotes Download Component",
        description:
          "Feature allowing users to download quotes as beautiful images for social media sharing",
        imgArr: [
          "/experience/lagran/front3.png",
          // "/experience/superquotes/app_7.webp",
        ],
      },
      {
        title: "Account Management",
        description:
          "User profile management with favorites, history, and personalization settings",
        imgArr: ["/experience/lagran/front4.png"],
      },
      // {
      //   title: "Interest Selection and Update Page",
      //   description:
      //     "Interactive interface for users to select and update their quote preferences and interests",
      //   imgArr: [
      //     "/experience/superquotes/app_1.webp",
      //     "/experience/superquotes/app_3.webp",
      //   ],
      // },
      // {
      //   title: "Responsiveness",
      //   description:
      //     "Adaptive design ensuring optimal user experience across various device sizes and orientations",
      //   imgArr: ["/experience/superquotes/app_5.webp"],
      // },
    ],
    descriptionDetails: {
      paragraphs: [
        `Venturing into the world of creativity at The Super Quotes was an exhilarating journey. As a passionate developer, I led the charge in crafting a compelling application from inception to completion, using the dynamic duo of JavaScript and React Native.`,
        `The heart of my achievement lay in the seamless integration of APIs, threading a tapestry of data flow that propelled the application's functionality to new heights.`,
        `With the wizardry of Redux, I choreographed a symphony of state management and performance optimization, orchestrating a ballet of responsiveness that wowed users with every interaction.`,
        `A crescendo awaited as I unveiled the culmination of my work on the grand stage of the Google Play Store. The app's debut marked an epoch, opening doors to an expansive audience eager to embrace the charm of The Super Quotes.`,
      ],
      bullets: [
        "Led the end-to-end development of a captivating application using JavaScript and React Native.",
        "Championed the integration of APIs, harmonizing data flow and enhancing application functionality.",
        "Conducted Redux magic to ensure state management and optimize performance, delivering a mesmerizing user experience.",
        "Premiered the application on the Google Play Store, capturing hearts and expanding its user base.",
      ],
    },
  },
  // {
  //   id: "apex-shopping",
  //   companyName: "Apex Shopping App",
  //   type: "Personal Project",
  //   category: ["Mobile Dev", "Full Stack", "UI/UX"],
  //   shortDescription:
  //     "Developed a feature-rich mobile shopping application with admin panel, user authentication, and seamless product management using React Native and Firebase.",
  //   githubLink: "https://github.com/namanbarkiya/apex-shopping-app",
  //   techStack: ["React Native", "Javascript", "Redux", "Node.js", "express.js"],
  //   startDate: new Date("2021-07-14"),
  //   endDate: new Date("2022-07-01"),
  //   companyLogoImg: "/experience/apex/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Splash Screen",
  //       description: "Custom animated splash screen with app branding",
  //       imgArr: ["/experience/apex/app_7.webp"],
  //     },
  //     {
  //       title: "Login/Signup Authentication",
  //       description: "Secure user authentication system with Firebase",
  //       imgArr: ["/experience/apex/app_1.webp"],
  //     },
  //     {
  //       title: "All Products Explore Screen",
  //       description: "Interactive product browsing with categories and filters",
  //       imgArr: ["/experience/apex/app_3.webp"],
  //     },
  //     {
  //       title: "Admin Panel",
  //       description:
  //         "Comprehensive admin dashboard for product and order management",
  //       imgArr: ["/experience/apex/app_4.webp", "/experience/apex/app_6.webp"],
  //     },
  //     {
  //       title: "Sidenav Navigation",
  //       description: "Intuitive side navigation for easy app navigation",
  //       imgArr: ["/experience/apex/app_5.webp"],
  //     },
  //     {
  //       title: "Firebase Database",
  //       description:
  //         "Real-time database structure for efficient data management",
  //       imgArr: ["/experience/apex/db.webp"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "The Apex Shopping App represents a comprehensive mobile e-commerce solution that I developed from the ground up using React Native and Firebase. This project showcases my ability to create a full-featured shopping application with both user and admin functionalities.",
  //       "The application features a robust authentication system, allowing users to securely sign up and log in. The product exploration interface is designed with user experience in mind, incorporating smooth navigation and intuitive filtering options.",
  //       "One of the key highlights is the admin panel, which provides complete control over product management, order processing, and inventory tracking. The integration with Firebase ensures real-time data synchronization and reliable data persistence.",
  //       "The app's architecture emphasizes scalability and performance, utilizing Redux for state management and following best practices for mobile app development. The UI/UX design focuses on providing a seamless shopping experience across different device sizes.",
  //     ],
  //     bullets: [
  //       "Implemented secure user authentication and authorization using Firebase",
  //       "Designed and developed an intuitive product browsing and shopping cart system",
  //       "Created a comprehensive admin panel for product and order management",
  //       "Integrated real-time data synchronization using Firebase Database",
  //       "Implemented state management using Redux for optimal performance",
  //       "Designed responsive UI components following mobile-first principles",
  //       "Incorporated smooth animations and transitions for enhanced user experience",
  //     ],
  //   },
  // },
  
  // {
  //   id: "portfolio-card",
  //   companyName: "Portfolio Card",
  //   type: "Personal Project",
  //   category: ["Web Dev", "Frontend", "3D Modeling"],
  //   shortDescription:
  //     "Forged an immersive 3D Portfolio Card utilizing the prowess of Three.js and Blender, where art and technology converge in an interactive masterpiece.",
  //   websiteLink: "https://card.namanbarkiya.xyz/",
  //   githubLink: "https://github.com/namanbarkiya/3d-portfolio-card",
  //   techStack: ["React", "Javascript", "HTML 5", "CSS 3"],
  //   startDate: new Date("2022-03-01"),
  //   endDate: new Date("2022-07-01"),
  //   companyLogoImg: "/experience/card/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Card Views",
  //       description: "Front and back views of the interactive 3D card",
  //       imgArr: [
  //         "/experience/card/card_2.webp",
  //         "/experience/card/card_3.webp",
  //       ],
  //     },
  //     {
  //       title: "Interactive Elements",
  //       description:
  //         "Custom links embedded in the 3D model with interactive animations",
  //       imgArr: ["/experience/card/card_1.webp"],
  //     },
  //     {
  //       title: "3D Model Development",
  //       description: "Blender project showcasing the model creation process",
  //       imgArr: ["/experience/card/card_4.webp"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "In my personal project, I've ventured into the world of creativity, fashioning a distinctive portfolio card through the utilization of Three.js.",
  //       "This portfolio card transcends convention; it emerges as a captivating 3D model, adorned with meticulous lighting arrangements that conjure a spellbinding visual journey.",
  //       "To materialize this concept, I've harnessed the combined potential of Three.js and Blender, orchestrating a meticulous crafting of the central 3D model that serves as the cornerstone of the card's allure.",
  //       "Yet, the allure extends beyond aesthetics. I've ingeniously interwoven custom links directly into the fabric of Three.js components. Through the creation and seamless integration of novel components, these additions elegantly rest upon the card's surface, mirroring its rotations and delivering an interactive dimension to my portfolio.",
  //       "The portfolio card itself is an opus of motion, perpetually swaying in an auto-rotational dance that unfurls its multifaceted essence. As an enhancement, I've introduced an instinctive user interaction element. A simple, intuitive drag of the card in specific directions grants viewers a comprehensive vantage, enabling exploration from every conceivable angle.",
  //       "At its core, my personal project epitomizes technical finesse, artistic expression, and interactive design. The amalgamation of Three.js, Blender's prowess, and the innovation of component integration has birthed not only a portfolio card, but a dynamic encounter leaving an indelible imprint on all who partake.",
  //     ],
  //     bullets: [
  //       "Conceptualized and realized a distinct portfolio card using Three.js, highlighting creative exploration.",
  //       "Crafted a mesmerizing 3D model enhanced by thoughtful lighting arrangements, resulting in a captivating visual voyage.",
  //       "Leveraged the synergy of Three.js and Blender to meticulously sculpt and refine the central 3D model, embodying meticulous attention to detail.",
  //       "Innovatively integrated custom links within Three.js components, introducing an interactive layer via seamlessly incorporated new elements.",
  //       "Enabled an auto-rotating feature for the portfolio card, perpetually showcasing its various facets to observers.",
  //       "Introduced an instinctual user interaction mechanism, allowing viewers to comprehensively explore the card's dimensions through simple, intuitive dragging motions.",
  //       "Represented a fusion of technical prowess, artistic ingenuity, and interactive design in a project that reshapes the boundaries of conventional portfolio representation.",
  //     ],
  //   },
  // },
  
  
];

export const featuredExperiences = Experiences.slice(0, 3);
