import styles from "@/app/styles/Projects.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "@/app/data/portfolio";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const selectedProject = projects[activeProject];

  const renderProjectRow = (project: (typeof projects)[number], index: number) => {
    const isActive = index === activeProject;
    return (
      <button
        aria-current={isActive ? "true" : "false"}
        className={`${styles["table-row"]} ${isActive ? styles["is-active"] : ""}`}
        onClick={() => setActiveProject(index)}
        onFocus={() => setActiveProject(index)}
        onMouseEnter={() => setActiveProject(index)}
        type="button"
      >
        <span className={styles["table-row-title"]}>{project.title}</span>
        <span className={styles["table-row-description"]}>{project.description}</span>
        <span className={styles["table-row-stack"]}>
          {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
        </span>
        <span className={styles["table-row-year"]}>{project.year}</span>
      </button>
    );
  };

  const renderPreview = () => (
    <aside className={styles.preview} aria-live="polite">
      <div className={styles["preview-image-wrap"]}>
        <Image
          alt={`${selectedProject.title} preview`}
          className={styles["preview-image"]}
          height={900}
          priority
          src={selectedProject.image}
          width={1440}
        />
        <span className={styles["preview-index"]}>
          0{activeProject + 1} / 0{projects.length}
        </span>
      </div>
      <div className={styles["preview-content"]}>
        <h3>{selectedProject.title}</h3>
        <p>{selectedProject.description}</p>
        {selectedProject.href ? (
          <a href={selectedProject.href} rel="noreferrer" target="_blank">
            Visit project <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className={styles["preview-status"]}>Let&apos;s build together</span>
        )}
      </div>
    </aside>
  );

  useEffect(() => {
    let frame = 0;
    const updateActiveProject = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const visibleRows = Array.from(
          document.querySelectorAll<HTMLElement>(
            "#projects [data-project-index]",
          ),
        ).filter((row) => {
          const bounds = row.getBoundingClientRect();
          return bounds.bottom > 0 && bounds.top < window.innerHeight;
        });
        const viewportCenter = window.innerHeight / 2;
        const centeredRow = visibleRows.reduce<HTMLElement | null>(
          (closest, row) => {
            if (!closest) return row;

            const rowCenter =
              row.getBoundingClientRect().top +
              row.getBoundingClientRect().height / 2;
            const closestCenter =
              closest.getBoundingClientRect().top +
              closest.getBoundingClientRect().height / 2;

            return Math.abs(rowCenter - viewportCenter) <
              Math.abs(closestCenter - viewportCenter)
              ? row
              : closest;
          },
          null,
        );

        if (centeredRow) {
          setActiveProject(Number(centeredRow.dataset.projectIndex));
        }
      });
    };

    updateActiveProject();
    window.addEventListener("scroll", updateActiveProject, { passive: true });
    window.addEventListener("resize", updateActiveProject);
    document.addEventListener("scroll", updateActiveProject, true);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveProject);
      window.removeEventListener("resize", updateActiveProject);
      document.removeEventListener("scroll", updateActiveProject, true);
    };
  }, []);

  return (
    <section className={styles.layout} id="projects">
      <div className={styles.glow} aria-hidden="true" />
      <p className={styles.textoverlay} aria-hidden="true">
        PROJECTS PROJECTS PROJECTS
      </p>
      <div className={styles.top} aria-hidden="true" />
      <div className={styles.bottom} aria-hidden="true" />

      <div className={styles.heading}>
        <h2> Projects </h2>
      </div>

      <div className={styles.showcase}>
        <div className={styles.table}>
          <div className={styles["table-head"]} aria-hidden="true">
            <span>Project</span>
            <span>Description</span>
            <span>Stack</span>
            <span>Year</span>
          </div>

          <ul className={styles["table-body"]} aria-label="Project List">
            {projects.map((project, index) => {
              return (
                <li data-project-index={index} key={project.title}>
                  {renderProjectRow(project, index)}
                </li>
              );
            })}
          </ul>
        </div>

        <aside className={styles.preview} aria-live="polite">
          <div className={styles["preview-image-wrap"]}>
            <Image
              alt={`${selectedProject.title} preview`}
              className={styles["preview-image"]}
              height={900}
              priority
              src={selectedProject.image}
              width={1440}
            />
            <span className={styles["preview-index"]}>
              0{activeProject + 1} / 0{projects.length}
            </span>
          </div>

          <div className={styles["preview-content"]}>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            {selectedProject.href ? (
              <a href={selectedProject.href} rel="noreferrer" target="_blank">
                Visit project <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className={styles["preview-status"]}>
                Let&apos;s build together
              </span>
            )}
          </div>
        </aside>
      </div>

      <div className={styles.mobileShowcase}>
        <div className={styles.mobileStickyStage}>
          {renderPreview()}
          <ul className={styles["table-body"]} aria-label="Earlier projects">
            {projects.slice(0, -1).map((project, index) => (
              <li data-project-index={index} key={project.title}>
                {renderProjectRow(project, index)}
              </li>
            ))}
          </ul>
        </div>
        {projects.length > 0 && (
          <div
            className={styles.mobileLastProject}
            data-project-index={projects.length - 1}
          >
            {renderProjectRow(projects[projects.length - 1], projects.length - 1)}
          </div>
        )}
      </div>
    </section>
  );
}
