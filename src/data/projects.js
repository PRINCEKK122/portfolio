// Each slug must be unique: lowercase words separated by hyphens.
export const projects = [
  {
    slug: "mediboard",
    title: "MediBoard",
    category: "Full-Stack",
    technologies: ["NestJS", "PostgreSQL", "React", "TypeScript"],
    summary: "A patient–doctor appointment platform serving 200+ users.",
    problem:
      "Patients and doctors needed a reliable way to book and manage appointments, and the platform had to stay responsive during peak traffic.",
    role:
      "I built key backend and frontend features and owned the frontend migration from Figma prototypes to a production React app.",
    approach:
      "A NestJS and PostgreSQL backend with query optimization and rate limiting, and a React and TypeScript frontend built from reusable components. The team shipped weekly through Git and code reviews.",
    outcome:
      "The platform served 200+ users with a smooth experience during peak traffic, and I learned how reusable component libraries speed up delivery.",
  },
  {
    slug: "deployment-cli",
    title: "Deployment Validation CLI",
    category: "Developer Tools",
    technologies: ["Python", "Flask", "Click", "pytest"],
    summary: "Internal tools that automated deployment checks and replaced a third-party tool.",
    problem:
      "Developers relied on a third-party tool and manual steps to validate deployments, check system health, and retrieve logs.",
    role:
      "I designed and deployed the tools and was the primary technical contact for teams adopting them.",
    approach:
      "A Flask service and Click command-line interface automating deployment validation, health checks, and log retrieval, backed by a pytest suite with 90%+ coverage.",
    outcome:
      "Manual workload dropped by 40% for an 8-developer international team, bugs in staging fell by over 50%, and adoption spread across multiple global teams.",
  },
  {
    slug: "trading-auth",
    title: "Trading Engine Authentication",
    category: "Security",
    technologies: ["Java", "Spring Boot", "JWT", "RBAC"],
    summary: "Secure authentication and access control for a financial trading engine.",
    problem:
      "A financial trading engine needed to protect user accounts and restrict trading activity to the right users.",
    role: "I led the authentication implementation within an Agile team.",
    approach:
      "JWT-based authentication and role-based access control in Java Spring Boot, delivered through sprints and peer code review.",
    outcome:
      "Lesson: designing access control for high-stakes financial systems, where security mistakes directly affect users' money.",
  },
];
