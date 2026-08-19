import nexoedu from "../assets/videos/nexoedu.mp4"
import mana from "../assets/videos/mana.mp4"
import venus from "../assets/videos/venus.mp4"

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  video: string;
  github: string;

}

export const projects: Project[] = [
  {
    id: 1,
    title: "Mana Food",
    description:
      "A restaurant management system for managing menus, orders, sales, and daily statistics through a centralized interface.",
    technologies: ["HTML", "Tailwind css", "Javascript","SQL", "Node.js + Espress"],
    video: mana,
    github: "https://github.com/ronyrdl/proyect-mana.git",
   
  },
  {
    id: 2,
    title: "Venus",
    description:
      "A static website showcasing the Venus Accessories collection, featuring exclusive jewelry and accessories available for immediate delivery.",
    technologies: ["HTML", "JavaScript", "CSS"],
    video: venus,
    github: "https://github.com/ronyrdl/venus.git",
  
  },
  {
    id: 3,
    title: "NexoEdu",
    description:
      "A web platform for managing and updating student and graduate information across educational institutions, with centralized data and administrator-driven update campaigns. Built by RIWI coders in partnership with the Alcaldía de Barranquilla.",
    technologies: ["Vanilla JavaScript (ES Modules)", "Vite", "WTailwind CSS v4", "custom SPA router", "TypeScript"],
    video: nexoedu,
    github: "https://github.com/NexoEDU-Capstone-Project/NexoEdu.git",

  },
];