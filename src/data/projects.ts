import type { Project } from "../types/project";

export const featuredProjects: Project[] = [
  {
    title: "Linux for DevOps",

    category: "Linux",

    description:
      "A comprehensive Linux learning repository covering Linux commands, shell scripting, networking, file permissions, process management, LVM, and hands-on DevOps mini projects.",

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

    category: "Networking",

    description:
      "Complete networking notes and practical implementations covering OSI Model, TCP/IP, DNS, HTTP, HTTPS, SSH, subnetting, routing, switching, and networking fundamentals for DevOps Engineers.",

    image: "/images/projects/networking.png",

    github: "https://github.com/hemantpawar14/Computer_Networking",

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

    category: "Automation",

    description:
      "A Bash automation project that monitors CPU usage, RAM usage, disk utilization, system uptime, and generates a health report for Linux servers.",

    image: "/images/projects/server-monitor.png",

    github: "https://github.com/hemantpawar14/linux-for-devops",

    live: "",

    technologies: [
      "Linux",
      "Bash",
      "Automation",
    ],

    featured: true,
  },
];