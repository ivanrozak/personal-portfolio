import Link from "next/link";
import { contact } from "@/lib/data";

export default function SiteFooter() {
  return <footer className="site-footer">
    <p className="mono">© {new Date().getFullYear()} Ivan Rozak</p>
    <nav aria-label="Footer">
      <Link href="/projects">Projects</Link>
      <Link href="/resume">Resume</Link>
      <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </nav>
  </footer>;
}
