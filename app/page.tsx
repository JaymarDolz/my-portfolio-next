"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Artworks from "@/components/Artworks";
import TechStack from "@/components/TechStack";
import WorksHero from "@/components/WorksHero";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import ArtworkLightBox from "@/components/ArtworkLightbox";
import "@/app/styles/_layout.scss";

export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      <main className="portfolio-page">
        <div className="w-full layer-one">
          <Hero />
        </div>

        <div className="w-full layer-seven">
          <ContactMe />
        </div>

        <div className="w-full layer-two">
          <AboutMe />
        </div>

        <div className="w-full layer-three">
          <div className="layer-three-wrapper">
            <TechStack />
          </div>
        </div>

        <div className="w-full layer-fourfivesix">
          <div className="works-parallax" aria-hidden="true">
            <div className="works-bg-slider works-bg-slider-small works-bg-slider-small-a" />
            <div className="works-bg-slider works-bg-slider-small works-bg-slider-small-b" />
            <div className="works-bg-slider works-bg-slider-large works-bg-slider-large-a" />
            <div className="works-bg-slider works-bg-slider-large works-bg-slider-large-b" />
          </div>
          <div className="layer-four">
            <WorksHero />
          </div>
          <div className="layer-five">
            <Projects />
          </div>
          <div className="layer-six">
            <Artworks onSelectArtwork={setSelectedArtwork} />
          </div>
        </div>
      </main>

      <ArtworkLightBox
        selectedArtwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </>
  );
}
