import type { Project } from "../types.ts";
import { Link } from "react-router";
import { slugify } from "../utils/slugify.ts";

type Props = {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    const coverImage = project.images?.[0];

    return (
   <Link to={`/projects/${slugify(project.title)}`}>
        <div>
            {coverImage && <img src={coverImage.srcUrl} alt={coverImage.alt} />}
            <h2> {project.title}</h2>
            <p> {project.year} - {project.status} </p>
            <p> {project.description}</p>
            <ul>
        {project.techStack?.map((tech) => (
          <li key={tech}>
            {tech}
          </li>
        ))}
      </ul>
        </div>
        </Link>
    );
}