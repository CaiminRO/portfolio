import { headerStyles } from "@/styles/components";
import { Personal } from "@/config";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.navbar}>
        <div className={headerStyles.linkHome}>{Personal.FullName}</div>

        <div className={headerStyles.link}>
          <a href="#">Temp Link</a>
        </div>

        <div className={headerStyles.link}>
          <a href="#">Temp Link 2</a>
        </div>
      </nav>
    </header>
  );
}
