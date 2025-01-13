import { headerStyles } from "@/styles/components";
import { Personal } from "@/config";

export default function Header() {
  const links = [
    ["Portfolio", "/#portfolio"],
    ["Resume", "/resume"],
  ];

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.navbar}>
        <div className={headerStyles.linkHome}>
          <a href="/">{Personal.FullName}</a>
        </div>

        {links.map(([text, href], idx) => (
          <div key={idx} className={headerStyles.link} >
            <a href={href}>{text}</a>
          </div>
        ))}
      </nav>
    </header>
  );
}
