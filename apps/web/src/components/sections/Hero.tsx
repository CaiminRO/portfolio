"use client";
import { heroStyles } from "@/styles/components";
import { Personal, Socials } from "@/config";

import { GAUtil } from "@/utils/googleAnalytics";
import Link from "next/link";

export default function Hero() {
  const jumps = [
    ["Projects", "/#portfolio"],
    ["Resume", "/resume"],
    ["LinkedIn", Socials.LinkedIn],
    ["GitHub", Socials.GitHub],
  ];

  return (
    <section id="hero" aria-label="Hero" className={heroStyles.mainContainer}>
      <div className="text-center">
        <h1 className={heroStyles.title}>{Personal.FullName}</h1>
        <p className={heroStyles.blurb}>
          Full-Stack Developer | Backend Developer | Database Administrator |
          Application Developer | Video Game Mod Developer
        </p>

        <div className={heroStyles.quickJumpContainer}>
          {jumps.map(([text, href], idx) => (
            <Link
              key={idx}
              href={href as string}
              className={heroStyles.quickJump}
              onClick={()=> GAUtil.sendEvent('button_Hero', text)}
            >
              View {text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
