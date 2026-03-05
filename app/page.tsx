import { Projects } from "./components/projects";
import EducationExperience from "./components/education-experience";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Siphosenkosi Ndhlovu
      </h1>
      <p className="mb-4">
        Full-stack developer with 7+ years building web applications and multiple shipped client projects for international clients. I specialise in React, Next.js, and TypeScript with backend experience across Node.js, Python, and AWS. I also hold domain expertise in structural engineering, where I'm building AI-powered analysis and design tools.
      </p>
      <p className="mb-4">
        Seeking a full-time remote development role.
      </p>
      <p>
        You can find my contact details in{" "}
        <a
          href="/doc/Siphosenkosi Ndhlovu - Front End Developer CV.pdf"
          download="Siphosenkosi_Ndhlovu_Front_End_Developer_CV.pdf"
          className="border-b inline-block"
        >
          my resume
        </a>{" "}
        or{" "}
        <a href="#" className="border-b inline-block">
          linkedin
        </a>
      </p>
      <div className="my-8">
        <Projects />
      </div>
      <div className="my-8">
        <EducationExperience />
      </div>
    </section>
  );
}
