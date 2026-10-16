import "./App.css";
import projectsJson from "./data/projects.json";
import type { Project } from "./types";
import ProjectCard from "./components/ProjectCard";

function App() {
  const projects: Project[] = projectsJson;
  return (
    <>
    <h1 className="p-4 text-3xl font-bold">My Projects</h1>
      <section id="center">
       {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </>
  );
}

export default App;
