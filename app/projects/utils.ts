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
      slug: "structural-design-ai",
      date: "In Development",
      project: {
        name: "Structural Design AI Web Application",
        description:
          "A next-generation engineering tool combining structural analysis with AI assistance. Integrated PyNite for finite element analysis enabling users to model, analyze, and design steel and concrete members. Built an AI copilot to generate calculations (Eurocode 3, EC2, etc.), run checks, and produce LaTeX-based documentation. Features a React front-end with Redux state management and Dexie persistence, backed by a Python FastAPI service.",
        technologies: [
          "Next.js",
          "TypeScript",
          "Python",
          "FastAPI",
          "PyNite",
          "Vercel AI SDK",
          "Redux",
          "Dexie",
        ],
        cost: "Custom",
        duration: "Ongoing",
        link: "",
      },
    },
    {
      slug: "vendmae",
      date: "2023 - Present",
      project: {
        name: "Vendmae",
        description:
          "An events platform connecting hosts and vendors. Currently in private beta with expected launch in 2026. Modified UI library to build accessible custom components aligned with brand. Led migration to latest Next.js with App router. Utilized AWS Services (Lambda, AppSync, Cognito, DynamoDB) through AWS Amplify, later migrated to Supabase with Next.js RSC and API routes. Integrated with third-party APIs including Stripe and Mailchimp.",
        technologies: [
          "NextJS",
          "TypeScript",
          "AWS",
          "Supabase",
          "PostgreSQL",
          "Stripe",
          "Mailchimp",
        ],
        cost: "N/A",
        duration: "Ongoing",
        link: "https://www.vendmae.com",
      },
    },
    {
      slug: "complete-3d",
      date: "February 2018 - Present",
      project: {
        name: "Complete 3D E-Commerce Store",
        description:
          "A fully functional e-commerce website built with React and Next.js. Features integrated Stripe payments through Swell Ecommerce for seamless checkout. Implemented advanced product filtering and search functionality alongside comprehensive user authentication. Added blog functionality with headless CMS integration. Optimized performance and improved load times for enhanced user experience.",
        technologies: [
          "React",
          "Next.js",
          "GraphQL",
          "Swell Ecommerce",
          "Stripe",
          "DatoCMS",
        ],
        cost: "Custom",
        duration: "Ongoing",
        link: "https://www.complete3d.co.uk",
      },
    },
  ];
}
