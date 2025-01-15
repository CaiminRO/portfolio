"use client";
import { headerStyles } from "@/styles/components";
import { Personal } from "@/config";
import { GAUtil } from "@/utils/googleAnalytics";
import Link from "next/link";

export default function Header() {
  const links = [
    ["Portfolio", "/#portfolio"],
    ["Resume", "/resume"],
  ];

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.navbar}>
        <div className={headerStyles.linkHome}>
          <Link href="/">{Personal.FullName}</Link>
        </div>

        {links.map(([text, href], idx) => (
          <div key={idx} className={headerStyles.link} >
            <Link
              href={href as string}
              onClick={() => GAUtil.sendEvent('button_Header', text)}
            >
              {text}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
}
