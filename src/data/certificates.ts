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

    image: "/images/certificates/Linux_Certificate-TWS.png",

    credentialUrl:
      "https://github.com/hemantpawar14/linux-for-devops/blob/main/13-Licenses%20%26%20Certification/Linux_Certificate-TWS.png",

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