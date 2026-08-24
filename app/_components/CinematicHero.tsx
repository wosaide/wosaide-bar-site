"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { DemoControls, DemoItem } from "../_lib/site-copy";

type CinematicHeroProps = {
  badge: string;
  basePath: string;
  bird: string;
  button: string;
  controls: DemoControls;
  directDownloadLabel: string;
  directDownloadMeta: string;
  directDownloadUrl: string;
  headline: string;
  items: DemoItem[];
  productName: string;
  storeLabel: string;
  storeAvailability: string;
  storeUrl: string;
  subline: string;
};

export function CinematicHero({
  badge,
  basePath,
  bird,
  button,
  controls,
  directDownloadLabel,
  directDownloadMeta,
  directDownloadUrl,
  headline,
  items,
  productName,
  storeLabel,
  storeAvailability,
  storeUrl,
  subline,
}: CinematicHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<"checking" | "intro" | "flying" | "product">(
    "checking",
  );
  const [playing, setPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const active = items[activeIndex];

  useEffect(() => {
    const skipIntro =
      window.location.hash === "#features" ||
      new URLSearchParams(window.location.search).get("skipIntro") === "1";
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let flightTimer: number | undefined;
    let productTimer: number | undefined;
    const setupTimer = window.setTimeout(() => {
      if (skipIntro) {
        setPhase("product");
        return;
      }

      if (motion.matches) {
        setReduceMotion(true);
        setPhase("product");
        return;
      }

      setPhase("intro");
      flightTimer = window.setTimeout(() => setPhase("flying"), 2050);
      productTimer = window.setTimeout(() => setPhase("product"), 3250);
    }, 0);

    return () => {
      window.clearTimeout(setupTimer);
      if (flightTimer !== undefined) window.clearTimeout(flightTimer);
      if (productTimer !== undefined) window.clearTimeout(productTimer);
    };
  }, []);

  useEffect(() => {
    const media = videoRef.current;

    if (!media || phase !== "product" || reduceMotion) {
      return;
    }

    void media.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [activeIndex, phase, reduceMotion]);

  const toggleVideo = () => {
    const media = videoRef.current;
    if (!media) return;

    if (media.paused) {
      void media.play().then(() => setPlaying(true));
    } else {
      media.pause();
      setPlaying(false);
    }
  };

  const selectVideo = (index: number) => {
    setActiveIndex(index);
    setPlaying(false);
  };

  return (
    <section className={`cinematic-hero is-${phase}`}>
      <img
        alt=""
        aria-hidden="true"
        className="cinematic-bird"
        height="340"
        src={bird}
        width="340"
      />

      <div className="wrap cinematic-wrap">
        <div className="cinematic-copy">
          <p className="cinematic-kicker">{badge}</p>
          <h1>
            <span className="cinematic-product-name">{productName}</span>
            <span className="cinematic-promise">{headline}</span>
          </h1>
          <p>{subline}</p>
          <div className="cinematic-actions">
            <a
              aria-label={`${directDownloadLabel} — WOS Aide Bar`}
              className="direct-download-button"
              download
              href={directDownloadUrl}
            >
              <span aria-hidden="true">↓</span>
              <span>
                <strong>{directDownloadLabel}</strong>
                <small>{directDownloadMeta}</small>
              </span>
            </a>
            <a
              aria-label={`${storeLabel} — WOS Aide Bar`}
              className="app-store-button"
              href={storeUrl}
            >
              <span aria-hidden="true"></span>
              <strong>{storeLabel}</strong>
            </a>
            <Link className="cinematic-text-link" href="/support">
              {button} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="store-availability">
            <span aria-hidden="true" />
            {storeAvailability}
          </p>
        </div>

        <div className="cinematic-product">
          <div className="cinematic-stage">
            <video
              aria-label={active.ariaLabel}
              disablePictureInPicture
              disableRemotePlayback
              key={active.video}
              muted
              onEnded={() => selectVideo((activeIndex + 1) % items.length)}
              playsInline
              poster={`${basePath}${active.poster}`}
              preload="auto"
              ref={videoRef}
            >
              <source src={`${basePath}${active.video}`} type="video/mp4" />
            </video>

            <div className="cinematic-shade" aria-hidden="true" />

            <div className="cinematic-video-label">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <strong>{active.badge}</strong>
            </div>

            <button
              aria-label={playing ? controls.pause : controls.play}
              className="cinematic-play"
              onClick={toggleVideo}
              type="button"
            >
              {playing ? controls.pause : controls.play}
            </button>
          </div>

          <div
            aria-label={controls.carouselLabel}
            className="cinematic-demo-tabs"
            role="tablist"
          >
            {items.map((item, index) => (
              <button
                aria-selected={activeIndex === index}
                className={activeIndex === index ? "is-active" : ""}
                key={item.badge}
                onClick={() => selectVideo(index)}
                role="tab"
                type="button"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.badge}</strong>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
