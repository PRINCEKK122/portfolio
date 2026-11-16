import { Link, useParams } from "react-router";
import { projects } from "../data/projects.js";
import PageHeading from "../components/PageHeading.jsx";
import TagList from "../components/TagList.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // The route matched, but no project has this slug.
  if (!project) {
    return (
      <section>
        <PageHeading title="Project not found" />
        <p>No project matches “{slug}”.</p>
        <Link to="/projects">Browse all projects</Link>
      </section>
    );
  }

  return (
    <article className="detail">
      <p className="eyebrow">{project.category}</p>
      <PageHeading title={project.title} />
      <TagList items={project.technologies} label="Technologies" />
      <h2>Problem</h2>
      <p>{project.problem}</p>
      <h2>My contribution</h2>
      <p>{project.role}</p>
      <h2>Implementation</h2>
      <p>{project.approach}</p>
      <h2>Result or lesson</h2>
      <p>{project.outcome}</p>
      <p>
        <Link to="/projects">← Back to projects</Link>
      </p>
    </article>
  );
}
