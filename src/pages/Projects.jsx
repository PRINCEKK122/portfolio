import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import PageHeading from "../components/PageHeading.jsx";

export default function Projects() {
  // Controlled input: state holds the value, the change handler updates it.
  const [query, setQuery] = useState("");

  // Derived during render: no second copy in state and no Effect needed.
  const normalized = query.trim().toLowerCase();
  const visible = projects.filter((p) =>
    `${p.title} ${p.category} ${p.technologies.join(" ")}`.toLowerCase().includes(normalized)
  );

  return (
    <section>
      <PageHeading title="Projects" />
      <div className="filter">
        <label htmlFor="project-search">Filter by title, category, or skill</label>
        <div className="filter-row">
          <input
            id="project-search"
            type="search"
            value={query}
            placeholder="e.g. React, Security, Python"
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <button type="button" onClick={() => setQuery("")}>
              Clear
            </button>
          )}
        </div>
      </div>
      <p role="status" className="muted">
        {visible.length} project(s) found
      </p>
      {visible.length ? (
        <div className="grid">
          {visible.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <p className="empty">No projects match “{query.trim()}”. Try another search.</p>
      )}
    </section>
  );
}
