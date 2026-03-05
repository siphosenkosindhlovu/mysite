import { Badge } from "@/components/ui/badge";

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
  description?: string;
};

type ExperienceItem = {
  position: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
};

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science (Honours), Civil Engineering",
    institution: "University of Zimbabwe",
    year: "Expected Graduation: 2026",
  },
];

const experienceData: ExperienceItem[] = [
  {
    position: "Freelance Full Stack Developer (Front End Focus)",
    company: "Complete3d.co.uk",
    duration: "February 2018 - Present",
    description:
      "Built a fully functional e-commerce website using React, integrating Stripe payments and Swell Ecommerce. Implemented product filtering, search functionality, user authentication, and blog functionality with a headless CMS. Optimized performance and improved load times.",
    skills: ["Next.js", "GraphQL", "Swell Ecommerce", "Stripe"],
  },
  {
    position: "Full Stack Developer",
    company: "Vendmae (Private Beta, launching 2026)",
    duration: "2023 - Present",
    description:
      "Modified UI library to build accessible custom components. Led migration to latest Next.js with App router. Utilized AWS Services (Lambda, AppSync, Cognito, DynamoDB) through AWS Amplify. Interfaced with third-party APIs (Stripe, Mailchimp). Later migrated to Supabase with Next.js RSC and API routes.",
    skills: ["NextJS", "TypeScript", "AWS", "Supabase", "PostgreSQL", "Stripe"],
  },
  {
    position: "Full Stack Developer",
    company: "Structural Design AI Web Application",
    duration: "In Development",
    description:
      "Developing a next-generation engineering tool combining structural analysis with AI assistance. Integrated PyNite for finite element analysis. Built AI copilot for calculations and LaTeX documentation. Designed React front-end with Redux and Dexie, backed by Python FastAPI service.",
    skills: ["Next.js", "TypeScript", "Python", "FastAPI", "PyNite", "Vercel AI SDK", "Redux"],
  },
];

export default function EducationExperience() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Education & Experience</h2>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Education</h3>
        <ul className="space-y-4">
          {educationData.map((item, index) => (
            <li key={index} className="border-b pb-4 last:border-b-0">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{item.degree}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.institution}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {item.year}
                </span>
              </div>
              {item.description && (
                <p className="mt-2 text-sm">{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Experience</h3>
        <ul className="space-y-6">
          {experienceData.map((item, index) => (
            <li key={index} className="border-b pb-4 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{item.position}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.company}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {item.duration}
                </span>
              </div>
              <p className="text-sm mb-2">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
