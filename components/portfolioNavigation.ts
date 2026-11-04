import type { MouseEvent } from "react";

export function handlePortfolioNavigation(
  event: MouseEvent<HTMLAnchorElement>,
) {
  const destination = event.currentTarget.getAttribute("href");

  if (destination !== "#contact" && destination !== "#tech-stack") {
    return;
  }

  event.preventDefault();
  window.history.pushState(null, "", destination);

  if (destination === "#contact") {
    window.scrollTo({
      top: document.documentElement.scrollHeight - window.innerHeight,
      behavior: "smooth",
    });
    return;
  }

  const worksLayer = document.querySelector<HTMLElement>(".layer-fourfivesix");

  if (!worksLayer) return;

  const target =
    window.scrollY + worksLayer.getBoundingClientRect().top - window.innerHeight;

  window.scrollTo({ top: target, behavior: "smooth" });
}
