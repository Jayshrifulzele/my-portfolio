import { FaCode, FaRocket, FaReact, FaServer, FaDatabase, FaTools, FaUsers, FaUtensils } from "react-icons/fa";

export const aboutInfo = [
  {
    icon: FaCode,
    title: "Frontend Developer",
    description:
      "Creating responsive, scalable, and user-friendly web applications.",
    color: "text-purple",
  },
  {
    icon: FaServer,
    title: "Growing Full Stack",
    description:
      "Strong in React frontend, and learning Node.js and databases to build complete apps.",
    color: "text-pink",
  },
  {
    icon: FaRocket,
    title: "Continuous Learning",
    description:
      "Dedicated to improving skills through projects and modern technologies.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Developing responsive, interactive, and modern web applications.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Programming",
    icon: FaCode,
    description:
      "Developing efficient, maintainable, and problem-solving oriented applications.",
    tags: ["Python", "JavaScript"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Creating RESTful APIs and server-side applications.",
    tags: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    description:
      "Designing and managing databases for web applications.",
    tags: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools & Workflow",
    icon: FaTools,
    description:
      "Using modern development tools for efficient collaboration and version control.",
    tags: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export const projects = [
  {
    title: "Employee Management System",
    description:
      "A frontend task management app for companies. Admins create and assign tasks to employees, and employees log in to track and update their own work. Data is saved in the browser with localStorage.",
    features: [
      "Admin: create & assign tasks (title, date, category, description)",
      "Admin: task table with employee/status filters and delete",
      "Admin: live counts of new, in-progress, completed & failed tasks",
      "Employee: email login, sees only own tasks",
      "Employee: Accept, Done, Failed and Reopen actions",
      "Overdue tasks highlighted separately",
    ],
    tech: ["React 19", "Vite", "Tailwind CSS", "JavaScript (JSX)", "Context API", "localStorage"],
    icon: FaUsers,
    gradient: "from-purple to-blue",
    demo: "https://ems-eight-gamma.vercel.app/",
    code: "https://github.com/Jayshrifulzele/EMS", 
  },
  {
    title: "Food Delivery Web Application",
    description:
      "A modern food ordering website with menu browsing, a shopping cart and a smooth, responsive experience on mobile and desktop.",
    features: ["Menu browsing", "Shopping cart", "Responsive design"],
    tech: ["React", "JavaScript", "Node.js", "CSS"],
    icon: FaUtensils,
    gradient: "from-pink to-purple",
    demo: "https://food-delivery-website-five-ashy.vercel.app/", 
    code: "https://github.com/Jayshrifulzele/Food-Delivery-Website", 
  },
];

// ============================================================
// YOUR LINKS (Contact section + Hero resume button)
// ============================================================
export const socialLinks = {
  github: "https://github.com/jayshrifulzele",
  linkedin: "https://www.linkedin.com/in/jayshri-fulzele-563154250/",
  resume: "/jaya_resume_29.pdf",
  email: "jayshrifulzele71@gmail.com",
  formEndpoint: "",
};

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    college: "Priyadarshini Bhagwati College of Engineering, Nagpur",
    year: "2025",
  },
];
