import Image from "next/image";
import styles from "@/app/styles/ArtworkLightbox.module.scss";

type ArtworkLightBoxProps = {
  selectedArtwork: string | null;
  onClose: () => void;
};

export default function ArtworkLightBox({
  selectedArtwork,
  onClose,
}: ArtworkLightBoxProps) {
  if (!selectedArtwork) return null;
  return (
    <div
      aria-modal="true"
      className={styles.layout}
      onClick={onClose}
      role="dialog"
    >
      <button
        aria-label="Close enalarged artwork"
        className={styles.close}
        onClick={onClose}
        type="button"
      >
        &times;
      </button>
      <Image
        alt="Artwork Preview"
        className={styles.image}
        height={1400}
        width={1100}
        src={selectedArtwork}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}
