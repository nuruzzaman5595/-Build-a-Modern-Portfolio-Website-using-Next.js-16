export type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with Next.js and Tailwind CSS to showcase projects, skills, and experience.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Business Dashboard",
    description:
      "A responsive admin dashboard for viewing metrics, managing records, and monitoring analytics in real time.",
    stack: ["React", "Node.js", "Charting"],
    link: "#",
    github: "#",
  },
];
