import Image from "next/image";
import styles from "@/app/styles/Hero.module.scss";
import { roles } from "@/app/data/portfolio";
import "@/app/styles/_button.scss";

export default function Hero() {
  return (
    <section className={styles.layout} id="hero">
      <div className={styles.content}>
        {/*         CONTENT           */}
        <p className={`${styles.eyebrow}`}>Hello I&apos;m </p>
        <h2>Jaymar Dolz</h2>
        <div className={styles.role} aria-label="Professional roles">
          <div className={styles.track}>
            {[...roles, roles[0]].map((role, index) => (
              <span key={`${role}-${index}`} className={styles.line}>
                {role}
              </span>
            ))}
          </div>
        </div>
        <p className={styles.summary}>
          Electrical engineer turned developer, blending problem-solving, design
          thinking, and product-minded execution.
        </p>
        {/*         BUTTONS           */}
        <div className={`actions`}>
          <a className={`button button-primary`} href="#projects">
            View Projects
          </a>
          <a
            className={`button button-secondary`}
            href="mailto:dolzjaymar@gmail.com"
          >
            Email Me
          </a>
        </div>
      </div>

      {/*         IMAGE           */}
      <div className={styles.visual}>
        <picture className={styles.picture}>
          <source
            media="(max-width: 700px)"
            srcSet="/portfolio/images/hellome.webp"
          />
          <Image
            alt="Portrait of Jaymar Dolz"
            className={styles.image}
            height={1400}
            width={1100}
            priority
            src="/portfolio/images/myprofile.webp"
          />
        </picture>
      </div>
    </section>
  );
}
