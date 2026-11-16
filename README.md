# Prince Awuah Karikari — Portfolio

A personal portfolio built with React, Vite, and React Router 7 for CSCI 5360 Web Technologies (Fall 2026), deployed to GitHub Pages.

- **Live site:** https://YOUR-GITHUB-USERNAME.github.io/portfolio/
- **Repository:** https://github.com/YOUR-GITHUB-USERNAME/portfolio

## Run locally

```bash
npm install
npm run dev       # development server with hot reload
npm run lint      # oxlint
npm run build     # production build into dist/
npm run preview   # serve dist/ locally; open the URL with /portfolio/ at the end
```

## Structure

```
src/
  main.jsx              mounts React inside HashRouter
  App.jsx               route table
  components/
    Layout.jsx          shared header, nav (NavLink), Outlet, footer, skip button
    ThemeToggle.jsx     extension B: persistent dark theme
    ProjectCard.jsx     one card per project (props)
    ExperienceCard.jsx  one card per job (props)
    TagList.jsx         reusable list of technology/skill tags
    PageHeading.jsx     page <h1> + browser tab title (useEffect)
  pages/
    BasicPages.jsx      Home, Experience, Contact, NotFound
    Projects.jsx        controlled filter + data-driven cards
    ProjectDetail.jsx   /projects/:slug via useParams
  data/
    profile.js          name and contact links
    experience.js       education, skills, jobs, certification
    projects.js         project entries (unique slugs)
```

## Routes

| URL | View |
| --- | --- |
| `#/` | Home |
| `#/experience` | Experience |
| `#/projects` | Projects with filter |
| `#/projects/:slug` | Project detail |
| `#/contact` | Contact |
| `#/anything-else` | Page not found (wildcard route) |
| `#/projects/no-such-project` | Project not found (handled inside ProjectDetail) |

## Extension: persistent theme (B)

`ThemeToggle` stores the choice in `useState`, initialized lazily from `localStorage`. A `useEffect` with `[dark]` as its dependency writes the theme to `document.documentElement.dataset.theme` and saves it to `localStorage`. CSS custom properties under `[data-theme="dark"]` change the page, card, link, tag, and input colors. The toggle lives in `Layout`, outside `<Outlet />`, so it stays mounted while routes change. `aria-pressed` tells assistive technology whether dark mode is on. Storage access is wrapped in `try/catch`, so the toggle still works when storage is blocked. The preference is per browser and origin, not shared across devices.

## Deployment notes

- `vite.config.js` sets `base: "/portfolio/"` so built asset URLs point inside the project site.
- `HashRouter` keeps routes after `#`, so refreshing a detail page still requests `/portfolio/` from GitHub Pages.
- `.github/workflows/deploy.yml` runs `npm ci`, lint, and build, then deploys `dist/` with GitHub Pages actions.

## Verification checklist

| Check | Result |
| --- | --- |
| `npm run lint` passes | [X] |
| `npm run build` succeeds | [X] |
| `npm run preview` works at `/portfolio/` | [X] |
| All nav links work; active link is highlighted | [X] |
| Each project card opens its detail page | [X] |
| `#/no-such-page` shows "Page not found" | [X] |
| `#/projects/no-such-project` shows "Project not found" | [X] |
| Filter: mixed case, extra spaces, empty, no match | [X] |
| Refreshing a detail page on the live site works | [X] |
| Dark theme persists after refresh and navigation | [X] |
| Keyboard: Tab shows focus; skip button focuses main | [X] |
| Mobile width (DevTools device mode) is readable | [X] |
| Live site tested in a private window; no Console errors | [X] |
