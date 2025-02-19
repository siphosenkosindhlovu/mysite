import { Projects } from "./components/projects";
import EducationExperience from "./components/education-experience";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Siphosenkosi Ndhlovu
      </h1>
      <p className="mb-4">
        {` Enthusiastic and detail-oriented web developer with 5 years of freelance experience including 3 years working with React and NextJS. Proficient in building responsive and user-friendly web applications using modern technologies. Passionate about creating elegant and efficient solutions
 that enhance user experiences. `}
      </p>
      <p className="mb-4">
        Currently seeking an opportunity to contribute my skills and grow as
        part of a collaborative development team.
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
