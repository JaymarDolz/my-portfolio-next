import styles from "@/app/styles/Navbar.module.scss";
import Image from "next/image";
import type { MouseEvent } from "react";
import { handlePortfolioNavigation } from "@/components/portfolioNavigation";

const navLinks = [
  ["About Me", "#about-me"],
  ["Tech Stack", "#tech-stack"],
  ["Projects", "#projects"],
  ["Digital Art", "#artwork"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const handleHomeNavigate = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.pushState(null, "", "#hero");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header className={styles["navbar"]}>
      <a
        className={styles["brand"]}
        key="hero"
        href="hero"
        onClick={handleHomeNavigate}
      >
        <Image
          alt="Jaymar Dolz Logo"
          height={96}
          width={96}
          src="/portfolio/images/navbarlogo.png"
        />
        <span>Jaymar Dolz</span>
      </a>

      <nav className={styles["navlinks"]}>
        {navLinks.map(([label, href]) => (
          <a key={href} href={href} onClick={handlePortfolioNavigation}>
            {label}
          </a>
        ))}
        <a></a>
      </nav>
    </header>
  );
}
