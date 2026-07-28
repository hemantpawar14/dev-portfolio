export interface JourneyStep {
  id: number;
  title: string;
  icon: string;
  status: "completed" | "current" | "planned";
  description: string;
  topics: string[];
}

export const journey: JourneyStep[] = [
  {
    id: 1,
    title: "Linux",
    icon: "🐧",
    status: "completed",
    description: "Built a strong Linux foundation through hands-on practice.",

    topics: [
      "Linux Basics",
      "File System",
      "File Permissions",
      "User & Group Management",
      "SSH & SCP",
      "Networking",
      "Text Processing",
      "LVM",
      "Server Health Monitor",
    ],
  },

  {
    id: 2,
    title: "Computer Networking",
    icon: "🌐",
    status: "completed",
    description: "Learned networking concepts essential for DevOps.",

    topics: [
      "OSI Model",
      "TCP/IP",
      "DNS",
      "HTTP / HTTPS",
      "Subnetting",
      "Routing",
      "Switching",
    ],
  },

  {
    id: 3,
    title: "Git & GitHub",
    icon: "📦",
    status: "completed",
    description: "Version control and collaboration.",

    topics: [
      "Git",
      "GitHub",
      "Branches",
      "Pull Requests",
      "GitHub Pages",
    ],
  },

  {
    id: 4,
    title: "Docker",
    icon: "🐳",
    status: "planned",
    description: "Containerization and Docker ecosystem.",

    topics: [
      "Images",
      "Containers",
      "Dockerfile",
      "Volumes",
      "Docker Compose",
    ],
  },

  {
    id: 5,
    title: "AWS",
    icon: "☁️",
    status: "planned",
    description: "Cloud infrastructure and services.",

    topics: [
      "IAM",
      "EC2",
      "S3",
      "VPC",
      "CloudWatch",
    ],
  },

  {
    id: 6,
    title: "Terraform",
    icon: "🏗️",
    status: "planned",
    description: "Infrastructure as Code.",

    topics: [
      "Providers",
      "Resources",
      "Modules",
      "Variables",
    ],
  },

  {
    id: 7,
    title: "Kubernetes",
    icon: "☸️",
    status: "planned",
    description: "Container orchestration.",

    topics: [
      "Pods",
      "Deployments",
      "Services",
      "Ingress",
    ],
  },

  {
    id: 8,
    title: "CI/CD",
    icon: "🚀",
    status: "planned",
    description: "Automated software delivery pipelines.",

    topics: [
      "GitHub Actions",
      "Jenkins",
      "Pipelines",
      "Automation",
    ],
  },

  {
    id: 9,
    title: "DevOps Engineer",
    icon: "🎯",
    status: "planned",
    description: "My career goal.",

    topics: [
      "Continuous Learning",
      "Real Projects",
      "Open Source",
      "Professional Growth",
    ],
  },
];