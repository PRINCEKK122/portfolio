export default function ExperienceCard({ job }) {
  return (
    <article className="card experience-card">
      <div className="experience-head">
        <h3>
          {job.role} <span className="muted">· {job.company}</span>
        </h3>
        <p className="muted">
          {job.dates} · {job.location}
        </p>
      </div>
      <ul>
        {job.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
