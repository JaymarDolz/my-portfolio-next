import Image from "next/image";
import styles from "@/app/styles/Aboutme.module.scss";
import { handlePortfolioNavigation } from "@/components/portfolioNavigation";

export default function AboutMe() {
  return (
    <section className={styles.section} id="about-me">
      <div className={styles.layers}>
        <div className={styles.container}>
          <div className={`${styles.layer} ${styles.textoverlay}`}>
            ABOUT ME ABOUT ME ABOUT ME
          </div>
        </div>
        <div className={styles.container}>
          <div className={`${styles.layer} ${styles.backdrop}`} />
        </div>
        <div className={styles.container}>
          <div className={`${styles.layer} ${styles.shadows}`} />
        </div>
        <div className={styles.container}>
          <div className={`${styles.layer} ${styles.glow}`} />
        </div>
        <div className={styles.container}>
          <div className={`${styles.layer} ${styles.fade}`} />
        </div>
      </div>

      <div className={styles.layout}>
        <div className={styles.mobileStage}>
          <div className={styles.visual}>
            <Image
              alt="Coding animation"
              className={styles.gif}
              height={1100}
              width={1100}
              src="/portfolio/images/codinganim2.gif"
              unoptimized
            />
          </div>
          <div className={styles.intro}>
            <h2>About Me</h2>
            <p>
              Full-stack developer with nearly 2 years of experience building
              and maintaining production business systems, including booking
              platforms, dynamic pricing tools, guest automation workflows, and
              API integrations. My technical background spans Laravel, React,
              Next.js, Node.js, MySQL, MongoDB, and modern web technologies used
              in real operational environments.
            </p>
            <p>
              Before transitioning into software development, I spent my early
              years as a Registered Electrical Engineer leading projects,
              coordinating teams, and delivering technical solutions in
              high-pressure environments. I also spent severak years as a
              freelance graphic artist, which strengthened my design sensibility
              and user-focused approach to digital products.
            </p>
            <p>
              This combination of engineering discipline, creative
              problem-solving, and hands-on development experience allows me to
              approach software from both technical and user perspectives,
              building solutions that are not only functional, but intuitive and
              impactful.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.finalCta}>
            I&apos;m driven by building software that solves real business
            problems creating reliable systems that improve operations,
            streamline workflows, and deliver measurable impact. Whether
            through automation, backend architecture, or user-focused
            solutions, I aim to build products people depend on.
          </p>
          <div className={`${styles.actions} actions`}>
            <a
              className="button button-primary"
              href="#contact"
              onClick={handlePortfolioNavigation}
            >
              Let&apos;s Work Together
            </a>
            <a
              className="button button-secondary"
              href="mailto:dolzjaymar@gmail.com?subject=Portfolio%20Inquiry"
            >
              Request Resume
            </a>
          </div>
          <div className={styles.scrollspacer} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
