import Image from "next/image";
import styles from "@/app/styles/Techstack.module.scss";
import { techStack } from "@/app/data/portfolio";

export default function TechStack() {
  return (
    <section className={`${styles.layout}`} id="tech-stack">
      <p className={styles.textoverlay}>TECH STACK TECH STACK TECH STACK</p>

      <div className={`${styles.heading}`}>
        <h2>Tech Stack</h2>
      </div>

      <div className={styles.marquee}>
        <div className={styles.scroller}>
          {[...techStack, ...techStack].map((item, index) => (
            <div className={styles.techitem} key={`${item.name}-${index}`}>
              <Image alt={item.name} height={64} width={64} src={item.image} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.credentials}>
        <h3>
          My <span>Credentials</span>
        </h3>
        <p>
          Acquired proficiency through{" "}
          <a href="https://zuitt.co/" rel="noreferrer" target="_blank">
            Zuitt&apos;s
          </a>{" "}
          comprehensive coding bootcamp, demonstrating expertise in{" "}
          <span>
            React.js, Next.js, JavaScript, TypeScript, Node.js, Express.js,
            Laravel, REST APIs, MongoDB, MySQL, Git, AWS, and Postman
          </span>{" "}
          for Full-stack Web Development, with additional experience in{" "}
          <span>UI/UX, Figma, Docker support, and Nginx,</span> plus{" "}
          <span> troubleshooting production web applications.</span>
        </p>
        <a
          className={`button ${styles.button}`}
          href="https://share.zertify.zuitt.co/certificate/fb7133f2-6e6d-4f3d-827f-9ecb33da4d97/"
          rel="noreferrer"
          target="_blank"
        >
          View Certificate
        </a>
      </div>
    </section>
  );
}
