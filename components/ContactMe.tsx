import Image from "next/image";
import styles from "@/app/styles/Contactme.module.scss";

export default function ContactMe() {
  return (
    <section className={styles.layout} id="contact">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Open to opportunities</p>
        <h1>Like what you see?</h1>
        <h2>Let&apos;s get in touch.</h2>
        <p className={styles.summary}>
          Have a project in mind, a role to discuss, or an idea you&apos;d like
          to bring to life? I&apos;d love to hear about it.
        </p>
        <div className="actions">
          <a
            className="button button-primary"
            href="mailto:dolzjaymar@gmail.com?subject=Portfolio%20Inquiry"
          >
            Send me an email <span aria-hidden="true">{"\u2197"}</span>
          </a>
        </div>
      </div>

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
            src="/portfolio/images/myprofile.webp"
            width={1100}
          />
        </picture>
      </div>
    </section>
  );
}
