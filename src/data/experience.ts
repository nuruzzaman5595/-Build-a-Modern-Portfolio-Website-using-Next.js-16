export type Experience = {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Your Company",
    role: "Frontend Developer",
    period: "2023 - Present",
    location: "Remote",
    description: [
      "Built and maintained responsive web interfaces using Next.js and React.",
      "Collaborated with designers and backend developers to deliver polished user experiences.",
      "Improved performance, accessibility, and component reusability across the product.",
    ],
  },
  {
    id: 2,
    company: "Previous Company",
    role: "Web Developer",
    period: "2021 - 2023",
    location: "Hybrid",
    description: [
      "Developed landing pages and internal tools for business operations.",
      "Worked with reusable UI patterns to speed up delivery and maintain consistency.",
      "Handled API integrations and data-driven front-end features.",
    ],
  },
];
