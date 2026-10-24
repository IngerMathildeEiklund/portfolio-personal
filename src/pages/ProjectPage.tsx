import { useState } from "react";
import { Link, useParams } from "react-router";
import { projects } from "../data/allProjects";
import { slugify } from "../utils/slugify";
import "../css/ProjectPage.css";

const techPills: Record<string, string> = {
    React: "bg-sky-500 text-white font-medium",
    TypeScript: "bg-blue-700 text-white font-medium",
    JavaScript: "bg-yellow-400 text-black font-medium",
    CSS: "bg-purple-500 text-white font-medium",
    HTML: "bg-orange-500 text-white font-medium",
    Tailwind: "bg-teal-500 text-white font-medium",
    API: "bg-emerald-600 text-white font-medium",
    Vite: "bg-fuchsia-950 text-white font-medium"
}
const noTech = "bg-gray text-white";

export default function ProjectPage() {
  const { slug } = useParams();
  const [selected, setSelected] = useState(0);

  const project = projects.find((p) => slugify(p.title) === slug);

  if (!project) {
    return (
      <main>
        <h1> No project found. </h1>
        <Link to="/"> Return to projects overview </Link>
      </main>
    );
  }

  const images = project.images ?? [];
  const current = images[selected];

  const prev = () =>
    setSelected((s) => (s - 1 + images.length) % images.length);
  const next = () => setSelected((s) => (s + 1) % images.length);

  return (
    <main className="project">
      <Link to="/">← Back to projects</Link>

      <header className="project-header">
        <h1>{project.title}</h1>
        <p className="project-meta">
          {project.year} · {project.status}
        </p>
        <p>{project.description}</p>
        <ul className="pbs-10 flex flex-row justify-between px-20">
          {project.techStack?.map((tech) => (
            <li key={tech} className={`rounded-full px-3 py-1 text-sm ${techPills[tech] ?? noTech}`}>{tech}</li>
          ))}
        </ul>
      </header>

      {current && (
        <section className="gallery">
          <div className="gallery-main">
            <img src={current.srcUrl} alt={current.alt} />

            {images.length > 1 && (
              <>
                <button
                  className="gallery-nav gallery-nav--prev"
                  onClick={prev}
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M5 12l4 4" />
                    <path d="M5 12l4 -4" />
                  </svg>
                </button>
                <button
                  className="gallery-nav gallery-nav--next"
                  onClick={next}
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M15 16l4 -4" />
                    <path d="M15 8l4 4" />
                  </svg>
                </button>
              </>
            )}
          </div>

          <ul className="gallery-thumbs">
            {images.map((img, i) => (
              <li key={img.srcUrl}>
                <button
                  className={i === selected ? "is-active" : ""}
                  onClick={() => setSelected(i)}
                  aria-label={`Show image ${i + 1}`}
                  aria-current={i === selected}
                >
                  <img src={img.srcUrl} alt={img.alt} />
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
