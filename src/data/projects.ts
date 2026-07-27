import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,

    title: "Linux for DevOps",

    description:
      "Comprehensive Linux learning repository featuring commands, shell scripting, networking, permissions, process management, LVM, and mini DevOps projects.",

    image: "/images/projects/linux-devops.png",

    github: "https://github.com/hemantpawar14/linux-for-devops",

    live: "",

    featured: true,

    category: "Linux",

    technologies: [
      "Linux",
      "Bash",
      "Shell",
      "Git",
      "GitHub"
    ]
  },

  {
    id: 2,

    title: "Computer Networking",

    description:
      "Professional networking notes for DevOps engineers covering TCP/IP, OSI, DNS, SSH, HTTP, Subnetting and related networking concepts.",

    image: "/images/projects/networking.png",

    github:
      "https://github.com/hemantpawar14/Computer_Networking",

    featured: true,

    category: "Networking",

    technologies: [
      "Networking",
      "TCP/IP",
      "DNS",
      "SSH",
      "Git"
    ]
  },

  {
    id: 3,

    title: "Server Health Monitor",

    description:
      "Shell automation project that monitors CPU, RAM and Disk utilization while generating system reports.",

    image: "/images/projects/server-monitor.png",

    github:
      "https://github.com/hemantpawar14/linux-for-devops",

    featured: true,

    category: "Automation",

    technologies: [
      "Linux",
      "Shell",
      "Automation"
    ]
  }
];