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
    degree: "Bachelor of Science in Civil Engineering",
    institution: "University of Zimbabwe",
    year: "2018-2025",
  },
];

const experienceData: ExperienceItem[] = [
  {
    position: "Contract Front End Developer",
    company: "Vendmae",
    duration: "2023 - Present",
    description:
      "Lead developer for the front end experience on Vendmae, focusing on performance optimization and user experience. Occasionally work on the backend to improve front end intehration.",
    skills: ["React", "TypeScript", "Next.js", "ChakraUI"],
  },
  {
    position: "Freelance Web Developer",
    company: "Various Companies",
    duration: "2019 - Present",
    description:
      "Developed and maintained webites, WordPress themes and full-stack applications, collaborating with cross-functional teams to deliver robust solutions.",
    skills: [
      "JavaScript",
      "Node.js",
      "Express",
      "NextJS",
      "React",
      "SQL",
      "WordPress",
    ],
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
