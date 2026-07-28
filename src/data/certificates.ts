export interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  image: string;
  credentialUrl: string;
  featured: boolean;
}

export const certificates: Certificate[] = [
  {
    title: "Linux for DevOps",

    issuer: "TrainWithShubham",

    issueDate: "July 2026",

    image: "/images/certificates/linux-devops-certificate.jpg",

    credentialUrl:
      "https://www.linkedin.com/in/hemantpawar-cloud-devops",

    featured: true,
  },

  {
    title: "More Certifications Coming Soon",

    issuer: "Cloud & DevOps",

    issueDate: "2026",

    image: "/images/certificates/coming-soon.jpg",

    credentialUrl: "#",

    featured: false,
  },
];