
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/allProjects"

export default function HomePage() {
  return (
    <>
    <h1 className="p-4 text-3xl font-bold">My Projects</h1>
      <main className="container mx-auto p-4"> 
        <section className="grid grid-cols-2 gap-8"> 
       {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        </section>
      </main>
    </>
  );
}

