import { FiFileText, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { contact } from "@/lib/data";

const links = [
  { label: "LinkedIn", href: contact.linkedin, Icon: FiLinkedin, external: true },
  { label: "GitHub", href: contact.github, Icon: FiGithub, external: true },
  { label: "Email", href: `mailto:${contact.email}`, Icon: FiMail, external: false },
  { label: "Resume (PDF)", href: contact.resumePdf, Icon: FiFileText, external: true },
];

export default function SocialLinks({ include }: { include?: string[] }) {
  return <div className="social-links">
    {links.filter(link => !include || include.includes(link.label)).map(({ label, href, Icon, external }) => <a
      key={label}
      className="icon-button"
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Icon size={17} aria-hidden="true" />
    </a>)}
  </div>;
}
