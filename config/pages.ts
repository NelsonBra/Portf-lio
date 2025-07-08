import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Nelson Bravo's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "The Skill Set That Powers My Work and Growth.",
    metadata: {
      title: "Skills",
      description:
        "Nelson Bravo's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "Nelson Bravo's experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Nelson Bravo.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Nelson Bravo's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Nelson Bravo's resume.",
    metadata: {
      title: "Resume",
      description: "Nelson Bravo's resume.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "Nelson Bravo's professional journey and career timeline.",
    },
  },
};
