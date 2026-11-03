import type { Project } from "../types.ts";
import { Link } from "react-router";
import { slugify } from "../utils/slugify.ts";

type Props = {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    const coverImage = project.images?.[0];

    return (
   <Link className="flex rounded-2xl bg-secondary p-4" to={`/projects/${slugify(project.title)}`}>
   
      <article className="flex grow flex-col gap-2"> 
            {coverImage && <img className="rounded-2xl w-full aspect-video object-cover" src={coverImage.srcUrl} alt={coverImage.alt} />}
            <h2> {project.title}</h2>
            <p> {project.year} - {project.status} </p>
            <p className="grow line-clamp-3"> {project.description}</p>
            <ul className="flex flex-row gap-2 mt-auto">
        {project.techStack?.map((tech) => (
          <li key={tech}>
            {tech}
          </li>
        ))}
      </ul>
        </article>
        </Link>
    );
}