import Image from "next/image";
import styles from "@/app/styles/Workshero.module.scss";

export default function WorksHero() {
  return (
    <section className={styles.layout}>
      <div className={`${styles.glow} ${styles.a}`} />
      <div className={`${styles.glow} ${styles.b}`} />
      <div className={`${styles["edge-overlay"]} ${styles.top}`} />
      <div className={`${styles["edge-overlay"]} ${styles.bottom}`} />

      <div className={styles.header}>
        <h1> Explore My Work </h1>
      </div>

      <div className={styles.stage}>
        <Image
          className={`${styles["main-art"]}`}
          alt="Hello Artwork"
          height={1200}
          width={1200}
          src="/portfolio/images/hellome.webp"
        />
        <Image
          className={`${styles["floating-card"]} ${styles.a}`}
          alt="Floating Project Preview"
          height={700}
          width={700}
          src="/portfolio/images/floating-project1-anim.gif"
        />
        <Image
          className={`${styles["floating-card"]} ${styles.b}`}
          alt="Floating Project Preview"
          height={700}
          width={700}
          src="/portfolio/images/floating-project2-anim.gif"
        />
        <div className={styles.typewriter}>
          <p>Hello World.</p>
        </div>
      </div>
    </section>
  );
}
