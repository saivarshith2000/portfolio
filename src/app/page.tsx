import Link from "next/link";
import GradientText from "./components/GradientText";
import ExperienceCard from "./components/ExperienceCard";
import SkillBadge from "./components/SkillBadge";

export default function Home() {
  return (
    <div className="mx-4 flex flex-col space-y-4 md:mx-auto md:w-4/5">
      <div
        id="nav"
        className="sticky top-0 flex flex-row justify-between space-x-4 bg-black bg-opacity-80 py-8 text-gray-300 backdrop-blur-lg"
      >
        <Link href="/">
          <GradientText text="SV" className="text-2xl font-extrabold" />
        </Link>
        <div className="hidden flex-row items-center justify-between space-x-8 md:flex">
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
        <p className="animate-pulse font-bold text-green-500 duration-1000">
          Open to Work!
        </p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-16">
        <div id="main-content" className="space-y-2 text-center">
          <Link href="/">
            <GradientText
              text="Sai Varshith"
              className="text-4xl font-extrabold md:text-8xl"
            />
          </Link>
          <p className="text-xl text-gray-200">Software Engineer @ Honeywell</p>
          <p className="text-md text-gray-400">
            I build scalable, reliable and user-friendly applications
          </p>
        </div>

        <div
          id="contact"
          className="flex flex-row items-center space-x-4 font-semibold text-gray-400"
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
            className="font-bold text-red-500 hover:text-gray-200"
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </div>

      <div className="flex-1 space-y-4 text-gray-300">
        <div id="experience" className="scroll-with-offset space-y-2">
          <p className="px-4 text-xl font-bold text-gray-200">Experience</p>
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
              "Postgres",
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
              "Postgres",
              "Celery",
              "NodeJS",
              "Azure",
            ]}
          />
        </div>
        <div
          id="skills"
          className="space-y-2 p-4 text-gray-200 hover:bg-gray-500 hover:bg-opacity-20"
        >
          <p className="text-xl font-bold text-gray-200">Skills</p>
          <div className="flex flex-col justify-between gap-y-2 md:flex-row">
            <p className="font-semibold">Languages</p>
            <div className="flex flex-row flex-wrap gap-2">
              <SkillBadge name="Python" />
              <SkillBadge name="Java" />
              <SkillBadge name="Typescript" />
              <SkillBadge name="C#" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-2 md:flex-row">
            <p className="font-semibold">Frameworks</p>
            <div className="flex flex-row flex-wrap gap-2">
              <SkillBadge name="React" />
              <SkillBadge name="Spring Boot" />
              <SkillBadge name="NodeJS" />
              <SkillBadge name="Redux" />
              <SkillBadge name="FastAPI" />
              <SkillBadge name="DotNet Core" />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-y-2 md:flex-row">
            <p className="font-semibold">Technologies</p>
            <div className="flex flex-row flex-wrap gap-2">
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
          className="text-md font-gray-200 space-y-2 p-4 hover:bg-gray-500 hover:bg-opacity-20"
        >
          <p className="text-xl font-bold">Projects</p>
          <div className="animate-pulse duration-500">Coming Soon...</div>
        </div>

        <div
          id="education"
          className="text-md font-gray-200 space-y-2 p-4 hover:bg-gray-500 hover:bg-opacity-20"
        >
          <p className="text-xl font-bold">Education</p>
          <div className="flex flex-col justify-start md:flex-row md:items-center md:justify-between">
            <p className="font-semibold">
              Indian Institute of Technology Kharagpur
            </p>
            <p>2017 - 2022</p>
          </div>
          <p>
            Master&apos;s and Bachelor&apos;s Degree in Computer Science and
            Engineering. Published research on Linux Access Control at{" "}
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
        className="space-y-2 p-8 text-center text-sm text-gray-500"
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
