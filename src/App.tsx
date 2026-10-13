import "./App.css";
import projectsJson from "./data/projects.json";
import type { Project } from "./types";

function App() {
  const projects: Project[] = projectsJson;
  return (
    <>
    <h1 className="p-4 text-3xl font-bold">My Projects</h1>
      <section id="center">
        <pre> 
        <code>{JSON.stringify(projects[0], null, 2)}</code></pre>
      </section>
    </>
  );
}

export default App;
