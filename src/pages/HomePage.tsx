
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/allProjects"

export default function HomePage() {
  return (
    <>
    <h1 className="p-4 text-3xl font-bold">My Projects</h1>
      <section className="grid-cols-2 grid-rows-2" id="center" >
       {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </>
  );
}

