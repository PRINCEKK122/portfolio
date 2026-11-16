import { useEffect } from "react";

// Renders the page's <h1> and keeps the browser tab title in sync with it.
export default function PageHeading({ title }) {
  useEffect(() => {
    const previousTitle = document.title;
    const name = "Prince Awuah Karikari";
    document.title = title === name ? `${name} | Software Engineer` : `${title} | ${name}`;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return <h1>{title}</h1>;
}
