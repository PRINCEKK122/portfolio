import { NavLink, Outlet } from "react-router";
import ThemeToggle from "./ThemeToggle.jsx";
import { profile } from "../data/profile.js";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  return (
    <>
      {/* A button, not a #fragment link, because hash routing owns the URL fragment. */}
      <button
        type="button"
        className="skip-link"
        onClick={() => document.getElementById("main-content")?.focus()}
      >
        Skip to content
      </button>
      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" className="brand" end>
            <span className="brand-mark" aria-hidden="true">PK</span>
            <span>
              {profile.name}
              <span className="brand-title"> | Software Engineer</span>
            </span>
          </NavLink>
          <nav aria-label="Main navigation" className="main-nav">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          {/* Outside <Outlet /> so the toggle stays mounted across routes. */}
          <ThemeToggle />
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        © 2026 {profile.name} · Built with React + Vite
      </footer>
    </>
  );
}
