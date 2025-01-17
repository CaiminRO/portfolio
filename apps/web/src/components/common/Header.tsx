"use client";

import { headerStyles } from "@/styles/components";
import { Personal } from "@/config";
import Link from "next/link";
import { AnalyticsUtil } from "@/utils";

export default function Header() {
  const links = [
    ["Portfolio", "/#portfolio"],
    ["Resume", "/resume"],
  ];

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.navbar}>
        <div className={headerStyles.linkHome}>
          <Link
            href="/"
            onClick={() => AnalyticsUtil.buttonHeader("Homepage")}
          >
            {Personal.FullName}
          </Link>
        </div>

        {links.map(([text, href], idx) => (
          <div key={idx} className={headerStyles.link} >
            <Link
              href={href as string}
              onClick={() => AnalyticsUtil.buttonHeader(text as string)}
            >
              {text}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
}
