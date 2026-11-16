export const education = [
  {
    id: "slu-ms",
    degree: "Master of Science, Software Engineering",
    school: "Saint Louis University",
    dates: "08/2024 – 12/2026",
    detail:
      "Coursework: Algorithms, Data Structures, Database Systems, Distributed Systems, Software Architecture.",
  },
  {
    id: "umat-bs",
    degree: "Bachelor of Science, Mathematics",
    school: "University of Mines and Technology",
    dates: "08/2010 – 06/2015",
    detail: "",
  },
];

export const skillGroups = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS", "SCSS"],
  },
  { name: "Frameworks & Libraries", skills: ["React", "Node.js", "NestJS", "Flask"] },
  {
    name: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "VS Code", "IntelliJ", "Figma", "Linux", "Bash"],
  },
  { name: "Testing & DevOps", skills: ["Pytest", "Jest", "CI/CD", "GitHub Actions"] },
];

export const jobs = [
  {
    id: "slu-gta",
    role: "Graduate Teaching Assistant",
    company: "Saint Louis University",
    location: "St. Louis, USA",
    dates: "01/2025 – Present",
    points: [
      "Lead weekly hands-on labs and code walkthroughs supporting 50+ graduate student projects in Python.",
      "Review student code and give actionable feedback on time and space complexity, clean code, and maintainable design.",
    ],
  },
  {
    id: "turntabl",
    role: "Software Engineer",
    company: "Turntabl",
    location: "Accra, Ghana",
    dates: "05/2024 – 07/2024",
    points: [
      "Led the implementation of secure authentication for a financial trading engine with Java Spring Boot, building JWT and role-based access control (RBAC).",
      "Worked through the full delivery lifecycle in an Agile team, including sprint ceremonies and peer code reviews.",
    ],
  },
  {
    id: "really-great-tech",
    role: "Software Engineer",
    company: "Really Great Tech",
    location: "Accra, Ghana",
    dates: "02/2024 – 06/2024",
    points: [
      "Built key features for MediBoard, a patient–doctor appointment platform serving 200+ users, with NestJS, PostgreSQL, React, and TypeScript.",
      "Owned the frontend migration, turning Figma prototypes into a responsive, type-safe app with reusable components.",
      "Improved backend performance through query optimization and rate limiting.",
    ],
  },
  {
    id: "morgan-stanley",
    role: "Junior Software Engineer",
    company: "Morgan Stanley",
    location: "London, UK",
    dates: "01/2022 – 02/2023",
    points: [
      "Built and deployed internal developer tools in Flask and Click CLI that automated deployment validation, health checks, and log retrieval, replacing a third-party tool and cutting manual workload by 40% for an 8-developer international team.",
      "Wrote a pytest suite with 90%+ coverage, reducing bugs in staging by over 50%.",
      "Expanded adoption across global teams as the primary technical contact.",
    ],
  },
];

export const certification = {
  name: "ALX-T Udacity Full Stack Web Developer Nanodegree",
  detail:
    "A competitive 10-week scholarship program building and deploying full-stack apps with React, Flask, Python, PostgreSQL, and AWS.",
};
