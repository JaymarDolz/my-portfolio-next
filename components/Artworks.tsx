import Image from "next/image";
import styles from "@/app/styles/Artworks.module.scss";
import { artwork } from "@/app/data/portfolio";

type ArtworkSectionProps = {
  onSelectArtwork: (src: string) => void;
};

export default function Artworks({ onSelectArtwork }: ArtworkSectionProps) {
  return (
    <section className={styles.layout} id="artwork">
      <div className={styles.glow} aria-hidden="true" />
      <p className={styles.textoverlay} aria-hidden="true">
        DIGITAL ART DIGITAL ART DIGITAL ART
      </p>
      <div className={styles.top} aria-hidden="true" />
      <div className={styles.bottom} aria-hidden="true" />

      <div className={styles.heading}>
        <h2> Artwork </h2>
        <p className={styles.intro}>
          A selected collection of brand explorations, illustrations, and visual
          studies.
        </p>
      </div>

      <div className={styles.meta} aria-hidden="true">
        <span>Selected work</span>
        <span>{String(artwork.length).padStart(2, "0")} pieces</span>
      </div>

      <div className={styles.grid} role="list">
        {artwork.map((piece, index) => (
          <button
            className={styles.tile}
            key={piece.src}
            onClick={() => onSelectArtwork(piece.src)}
            role="listitem"
            type="button"
          >
            <Image
              alt={piece.alt}
              className={styles.image}
              height={1200}
              width={900}
              src={piece.src}
            />

            <span className={styles["tile-label"]}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {piece.alt}
              <i aria-hidden="true">↗</i>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
