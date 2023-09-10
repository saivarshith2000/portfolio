import Link from "next/link";
import GradientText from "./components/GradientText";
import ExperienceCard from "./components/ExperienceCard";
import SkillBadge from "./components/SkillBadge";

export default function Home() {
  return (
    <div className="flex flex-col w-4/5 mx-auto">
      <div
        id="nav"
        className="text-gray-300 flex flex-row py-8 space-x-4 justify-between sticky top-0 bg-black bg-opacity-80 backdrop-blur-lg"
      >
        <Link href="/">
          <GradientText text="SV" className="font-extrabold text-2xl" />
        </Link>
        <div className="flex flex-row items-center justify-between space-x-8">
          <Link href="#experience" className="hover:text-white">
            Experience
          </Link>
          <Link href="#skills" className="hover:text-white">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="#education" className="hover:text-white">
            Education
          </Link>
        </div>
        <p className="text-green-500 animate-pulse duration-1000">
          Open to Work!
        </p>
      </div>

      <div className="flex flex-col justify-center h-[50vh] items-center space-y-16">
        <div id="main-content" className="text-center space-y-2">
          <Link href="/">
            <GradientText
              text="Sai Varshith"
              className="text-8xl font-extrabold"
            />
          </Link>
          <p className="text-xl text-gray-200">Software Engineer @ Honeywell</p>
          <p className="text-md text-gray-400">
            I'm a full-stack software engineer interested in blah blah blah
          </p>
        </div>

        <div
          id="contact"
          className="text-gray-400 font-semibold space-x-4 flex flex-row items-center"
        >
          <Link
            className="hover:text-red-500"
            href="https://github.com/saivarshith2000"
            target="_blank"
          >
            Github
          </Link>
          <Link
            className="hover:text-red-500"
            href="mailto:hosvarshith@gmail.com"
            target="_blank"
          >
            Mail
          </Link>
          <Link
            className="hover:text-red-500"
            href="https://www.linkedin.com/in/sai-varshith-hariyala-a21422192/"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            href="https://drive.google.com/file/d/1IqHjaFzC7lRqCaLFoP8y_SKS7WRoD_f4/view?usp=drive_link"
            className="hover:text-gray-200 text-red-500 font-bold"
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </div>

      <div className="text-gray-300 flex-1 space-y-4">
        <div id="experience" className="space-y-2 scroll-with-offset">
          <p className="text-xl font-bold text-gray-200 px-4">Experience</p>
          <ExperienceCard
            titleLeft="Software Engineer @ Honeywell"
            titleRight="Since July 2022"
            intro="Member of Edge-Cloud Services team, responsible for optimizing and maintaining customer to cloud data flow for Honeywell Industrial and Warehouse IoT SaaS offerings"
            bullets={[
              "Designed and developed full-stack web app (React, Redux, NodeJS,DotNet Core) for monitoring, alerting and troubleshooting globally distributed Honeywell Forge IoT devices",
              "Reduced MTTR from hours to minutes using automation scripts and increased error budget savings",
              "Built terraform CI/CD pipelines for automating cloud Infrastructure management",
              "Migrated 50+ workloads from OpenShift to Azure Kubernetes Service (AKS) with zero downtime",
              "Improved observability with Grafana dashboards using Prometheus, Postgres and Azure resources",
              "Responsible for incident response, triage, resolution, root cause analysis and corrective actions",
              "Managed releases and deployments for Honeywell Forge and Niagara Cloud offerings",
            ]}
            skills={[
              "React",
              "NodeJS",
              "DotNet",
              "Postdres",
              "Azure",
              "Kubernetes",
              "Grafana",
            ]}
          />
          <ExperienceCard
            titleLeft="Software Engineering Intern @ Honeywell"
            titleRight="May 2021 - July 2021"
            intro="Member of engineering team for internal end-to-end testing platform"
            bullets={[
              "Implemented RBAC using Azure AD for Honeywell’s internal application testing platform",
              "Designed and implemented an interactive Microsoft Teams chatbot to quickly run end-to-end tests",
              "Improved workflows to notify (email and Teams) on test progress and test results",
              "Triaged and fixed various frontend/backend defects to improve performance and user experience",
            ]}
            skills={[
              "React",
              "Django",
              "Postdres",
              "Celery",
              "NodeJS",
              "Azure",
            ]}
          />
        </div>
        <div
          id="skills"
          className="space-y-2 text-gray-200 p-4 hover:bg-gray-500 hover:bg-opacity-20"
        >
          <p className="text-xl font-bold text-gray-200">Skills</p>
          <div className="flex flex-row justify-between">
            <p className="font-semibold">Languages</p>
            <div className="flex flex-row space-x-2">
              <SkillBadge name="Python" />
              <SkillBadge name="Java" />
              <SkillBadge name="Typescript" />
              <SkillBadge name="C#" />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-semibold">Frameworks</p>
            <div className="flex flex-row space-x-2">
              <SkillBadge name="React" />
              <SkillBadge name="Spring Boot" />
              <SkillBadge name="NodeJS" />
              <SkillBadge name="Redux" />
              <SkillBadge name="FastAPI" />
              <SkillBadge name="DotNet Core" />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-semibold">Technologies</p>
            <div className="flex flex-row space-x-2">
              <SkillBadge name="Azure" />
              <SkillBadge name="Kubernetes" />
              <SkillBadge name="Docker" />
              <SkillBadge name="Postgres" />
              <SkillBadge name="Linux" />
              <SkillBadge name="KONG" />
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="p-4 hover:bg-gray-500 hover:bg-opacity-20 text-md font-gray-200 space-y-2"
        >
          <p className="text-xl font-bold">Projects</p>
          <div className="animate-pulse duration-500">Coming Soon...</div>
        </div>

        <div
          id="education"
          className="p-4 hover:bg-gray-500 hover:bg-opacity-20 text-md font-gray-200 space-y-2"
        >
          <p className="text-xl font-bold">Education</p>
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold">
              Indian Institute of Technology Kharagpur
            </p>
            <p>2017 - 2022</p>
          </div>
          <p>
            Master's and Bachelor's Degree in Computer Science and Engineering.
            Published research on Linux Access Control at{" "}
            <Link
              href="https://dl.acm.org/doi/10.1145/3488932.3527293"
              className="text-red-400 hover:underline"
              target="_blank"
            >
              ACM
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.computer.org/csdl/journal/tq/5555/01/10196039/1P7Vnq7ate8"
              className="text-red-400 hover:underline"
              target="_blank"
            >
              IEEE
            </Link>
          </p>
        </div>
      </div>
      <section
        id="footer"
        className="text-center p-8 text-gray-500 text-sm space-y-2"
      >
        Built with <strong>NextJS</strong> and <strong>TailwindCSS</strong>
        {", "}
        deployed with <strong>Cloudflare</strong> | Last updated on{" "}
        {new Date().toDateString()} <br></br>
        &copy; {new Date().getFullYear()} saivarshith.com
      </section>
    </div>
  );
}
