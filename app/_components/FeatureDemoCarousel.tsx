"use client";

import { useEffect, useRef, useState } from "react";
import type { DemoControls, DemoItem } from "../_lib/site-copy";

export function FeatureDemoCarousel({
  basePath,
  controls,
  items,
}: {
  basePath: string;
  controls: DemoControls;
  items: DemoItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const active = items[activeIndex];

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setReduceMotion(motionQuery.matches);
      setIsPaused(motionQuery.matches);
    };

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    return () => {
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isPaused || reduceMotion) {
      video.pause();
      return;
    }

    void video.play().catch(() => setIsPaused(true));
  }, [activeIndex, isPaused, reduceMotion]);

  const selectDemo = (index: number) => {
    setActiveIndex(index);
    setIsPaused(reduceMotion);
  };

  const move = (offset: number) => {
    selectDemo((activeIndex + offset + items.length) % items.length);
  };

  return (
    <div
      className="feature-demo-carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
      }}
    >
      <div className="demo-document-row">
        <span>{controls.carouselLabel}</span>
        <b>
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(items.length).padStart(2, "0")}
        </b>
      </div>

      <div className="demo-stage">
        <div className="demo-copy" aria-live="polite">
          <p className="demo-badge">{active.badge}</p>
          <h2>{active.title}</h2>
          <p className="demo-description">{active.description}</p>
          <p className="demo-stat">{active.stat}</p>

          <div className="demo-controls">
            <button
              aria-label={controls.previous}
              onClick={() => move(-1)}
              type="button"
            >
              ←
            </button>
            <button
              aria-label={isPaused ? controls.play : controls.pause}
              className="demo-play-control"
              onClick={() => setIsPaused((paused) => !paused)}
              type="button"
            >
              {isPaused ? controls.play : controls.pause}
            </button>
            <button
              aria-label={controls.next}
              onClick={() => move(1)}
              type="button"
            >
              →
            </button>
          </div>
        </div>

        <div
          aria-labelledby={`demo-tab-${activeIndex}`}
          className="demo-media"
          id={`demo-panel-${activeIndex}`}
          key={active.video}
          role="tabpanel"
        >
          <div className="demo-media-label">
            <span>Figure {String(activeIndex + 1).padStart(2, "0")}</span>
            <b>{active.badge}</b>
          </div>
          <video
            aria-label={active.ariaLabel}
            autoPlay={!isPaused && !reduceMotion}
            disablePictureInPicture
            disableRemotePlayback
            muted
            onEnded={() => {
              if (!isPaused && !reduceMotion) {
                move(1);
              }
            }}
            playsInline
            poster={`${basePath}${active.poster}`}
            preload="auto"
            ref={videoRef}
          >
            <source src={`${basePath}${active.video}`} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        aria-label={controls.carouselLabel}
        className="demo-tabs"
        role="tablist"
      >
        {items.map((item, index) => (
          <button
            aria-controls={`demo-panel-${index}`}
            aria-selected={index === activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            id={`demo-tab-${index}`}
            key={item.badge}
            onClick={() => selectDemo(index)}
            role="tab"
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.badge}</strong>
          </button>
        ))}
      </div>
    </div>
  );
}
