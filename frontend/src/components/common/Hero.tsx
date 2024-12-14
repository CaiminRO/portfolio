import { heroStyles } from "@/styles/components";
import { Personal } from "@/config";

export default function Hero() {
  return (
    <section id="hero" aria-label="Hero" className={heroStyles.mainContainer}>
      <div className="text-center">
        <h1 className={heroStyles.title}>{Personal.FullName}</h1>
        <p className={heroStyles.blurb}>
          Full-Stack Developer | Backend Developer | Database Developer |
          Application Developer | Video Game Mod Developer
        </p>

        <div className={heroStyles.quickJumpContainer}>
          <a href="#" className={heroStyles.quickJump}>
            View Projects
          </a>
          <a href="#" className={heroStyles.quickJump}>
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
