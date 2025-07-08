import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  // achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "ubs",
    position: "Front-End developer",
    company: "New-Data Soluctions",
    location: "Luanda, Angola",
    startDate: new Date("2022-03-01"),
    endDate: "Present",
    description: [
      "Led the full frontend development of both Frontoffice and Backoffice web applications for a booking system.",
      "Built authentication screens, interactive dashboards, and dynamic reservation forms with a focus on usability and performance.",
      "Implemented full CRUD functionality for managing rooms, guests, and reservations, integrating seamlessly with backend APIs.",
      "Developed analytical dashboards and admin interfaces for real-time monitoring and management of bookings.",
      "Responsible for the architecture, structure, and organization of both applications, ensuring scalability and maintainability of the codebase.",
    ],

   
    skills: ["Typescript", "React", "Next.js", "Refine", "Tailwind.css"],
    // companyUrl: "https://www.ubs.com",
    logo: "/logo.png",
  },
  // {
  //   id: "agentprod",
  //   position: "Software Development Intern",
  //   company: "Agentprod LLP",
  //   location: "Bengaluru, India",
  //   startDate: new Date("2023-10-01"),
  //   endDate: new Date("2024-03-01"),
  //   description: [
  //     "Built backend for AI-driven chatbots using LLMs (GPT-4, Llama-2).",
  //     "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations.",
  //     "Deployed ML models on AWS SageMaker instead of Replicate.",
  //   ],
  //   achievements: [
  //     "Built backend for AI-driven chatbots using LLMs (GPT-4, Llama-2), improving function call accuracy by 40%.",
  //     "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
  //     "Deployed ML models on AWS SageMaker instead of Replicate, cutting load times by 30%.",
  //     "Created a Next.js dashboard for user analytics.",
  //   ],
  //   skills: ["Next.js", "React", "Node.js", "AWS", "MongoDB", "Typescript"],
  //   companyUrl: "https://agentprod.com",
  //   logo: "/career/agentprod-logo.png",
  // },
  // {
  //   id: "builtdesign",
  //   position: "Web Developer Intern",
  //   company: "Builtdesign",
  //   location: "Nagpur, India",
  //   startDate: new Date("2021-07-01"),
  //   endDate: new Date("2022-07-01"),
  //   description: [
  //     "Developed websites using React, Angular, and GraphQL.",
  //     "Set up AWS servers and CI/CD pipelines.",
  //     "Built a multi-page PDF reader for large files (>300MB).",
  //   ],
  //   achievements: [
  //     "Developed websites using React, Angular, and GraphQL; reduced API load time by 30%.",
  //     "Set up AWS servers and CI/CD pipelines, scaling traffic to 3,000+ users/day.",
  //     "Built a multi-page PDF reader for large files (>300MB) to boost user engagement.",
  //   ],
  //   skills: [
  //     "React",
  //     "Angular",
  //     "GraphQL",
  //     "AWS",
  //     "HTML 5",
  //     "CSS 3",
  //     "Javascript",
  //   ],
  //   companyUrl: "https://builtdesign.in",
  //   logo: "/career/builtdesign-logo.png",
  // },
];
