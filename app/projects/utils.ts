import path from "path";
import { getMDXData } from "../blog/utils";

type Project = {
  slug: string;
  date: string;
  project: {
    name: string;
    description: string;
    technologies: string[];
    cost: string;
    duration: string;
    link: string;
  };
};

export function getProjects(): Project[] {
  return [
    {
      slug: "vendmae",
      date: "November 2023",
      project: {
        name: "Vendmae",
        description:
          "An events platform connecting hosts and vendors. Built with Next.js, Chakra UI, AWS Amplify (later migrated to Supabase), and Stripe for payments. Overcame AWS Amplify’s limitations by integrating additional AWS services. The result is a scalable, fast, and user-friendly platform with seamless payments.",
        technologies: [
          "AWS Amplify",
          "Chakra UI",
          "NextJS",
          "PostgreSQL",
          "TypeScript",
        ],
        cost: "$1500 - $2500",
        duration: "1 - 3 months",
        link: "https://www.vendmae.com",
      },
    },
    {
      slug: "complete 3d",
      date: "November 2022",
      project: {
        name: "Complete 3D",
        description: "",
        technologies: ["Swell Ecommerce", "NextJS", "DatoCMS"],
        cost: "$500 - $1500",
        duration: "1 - 3 months",
        link: "https://www.complete3d.co.uk",
      },
    },
    {
      slug: "pamobtech",
      date: "February 2021",
      project: {
        name: "Paymbtech Wordpress Theme",
        description: "",
        technologies: ["Wordpress", "React", "Bootstrap"],
        cost: "$2000 - $3000",
        duration: "1 - 3 months",
        link: "https://github.com/siphosenkosindhlovu/paymob-theme",
      },
    },
  ];
}
