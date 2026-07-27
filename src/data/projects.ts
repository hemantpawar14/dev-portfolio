import type { Project } from "../types/project";

export const featuredProjects: Project[] = [
  {
    title: "Linux for DevOps",

    description:
      "A comprehensive Linux learning repository covering commands, shell scripting, networking, permissions, process management, LVM, and mini DevOps projects.",

    image: "/images/projects/linux-devops.png",

    github: "https://github.com/hemantpawar14/linux-for-devops",

    live: "",

    technologies: [
      "Linux",
      "Bash",
      "Shell",
      "Git",
      "GitHub",
    ],

    featured: true,
  },

  {
    title: "Computer Networking",

    description:
      "Complete networking notes for DevOps engineers covering TCP/IP, OSI Model, DNS, HTTP, SSH, subnetting, and networking fundamentals.",

    image: "/images/projects/networking.png",

    github:
      "https://github.com/hemantpawar14/Computer_Networking",

    live: "",

    technologies: [
      "Networking",
      "TCP/IP",
      "DNS",
      "SSH",
      "Git",
    ],

    featured: true,
  },

  {
    title: "Server Health Monitor",

    description:
      "A Bash automation project that monitors CPU, RAM, disk usage, uptime, and generates system health reports.",

    image: "/images/projects/server-monitor.png",

    github:
      "https://github.com/hemantpawar14/linux-for-devops",

    live: "",

    technologies: [
      "Linux",
      "Bash",
      "Automation",
    ],

    featured: true,
  },
];