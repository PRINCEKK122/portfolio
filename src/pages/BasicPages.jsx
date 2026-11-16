import { Link } from "react-router";
import PageHeading from "../components/PageHeading.jsx";
import ExperienceCard from "../components/ExperienceCard.jsx";
import TagList from "../components/TagList.jsx";
import { profile } from "../data/profile.js";
import { education, skillGroups, jobs, certification } from "../data/experience.js";

const highlights = [
  { value: "40%", text: "less manual work for a global team, through internal automation tools" },
  { value: "90%+", text: "test coverage, cutting bugs in staging by over 50%" },
  { value: "50+", text: "graduate students mentored in algorithms and software design" },
];

export function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">{profile.title}</p>
      <PageHeading title={profile.name} />
      <p className="lead">
        I build secure, reliable software end to end, from backend APIs in NestJS, Flask,
        and Spring Boot to responsive frontends in React and TypeScript. I&apos;m completing a
        Master&apos;s in Software Engineering at Saint Louis University (December 2026), and
        I&apos;m looking for full-time software engineering roles.
      </p>
      <ul className="highlights" aria-label="Highlights">
        {highlights.map((h) => (
          <li key={h.value} className="highlight">
            <span className="highlight-value">{h.value}</span>
            <span>{h.text}</span>
          </li>
        ))}
      </ul>
      <p>
        <Link to="/projects" className="button">
          Explore my projects →
        </Link>
      </p>
    </section>
  );
}

export function Experience() {
  return (
    <section>
      <PageHeading title="Experience" />

      <h2>Work experience</h2>
      <div className="stack">
        {jobs.map((job) => (
          <ExperienceCard key={job.id} job={job} />
        ))}
      </div>

      <h2>Skills</h2>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <div key={group.name} className="card">
            <h3>{group.name}</h3>
            <TagList items={group.skills} label={group.name} />
          </div>
        ))}
      </div>

      <h2>Education</h2>
      <div className="stack">
        {education.map((item) => (
          <article key={item.id} className="card">
            <h3>{item.degree}</h3>
            <p className="muted">
              {item.school} · {item.dates}
            </p>
            {item.detail && <p>{item.detail}</p>}
          </article>
        ))}
      </div>

      <h2>Certification</h2>
      <article className="card">
        <h3>{certification.name}</h3>
        <p>{certification.detail}</p>
      </article>
    </section>
  );
}

export function Contact() {
  return (
    <section>
      <PageHeading title="Let's Connect" />
      <p className="lead">
        I&apos;m open to full-time software engineering roles. The best way to reach me is on
        LinkedIn, and you can see my code on GitHub.
      </p>
      <ul className="contact-links">
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span className="visually-hidden">(opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <span className="visually-hidden">(opens in a new tab)</span>
          </a>
        </li>
        {profile.email && (
          <li>
            <a href={`mailto:${profile.email}`}>Email me</a>
          </li>
        )}
      </ul>
    </section>
  );
}

export function NotFound() {
  return (
    <section>
      <PageHeading title="Page not found" />
      <p>That page doesn&apos;t exist. It may have moved, or the link may have a typo.</p>
      <Link to="/">Return home</Link>
    </section>
  );
}
