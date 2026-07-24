"use client";

import Image from "next/image";
import { useState } from "react";
import type { ShowcaseItem } from "../_lib/site-copy";

export function ProductShowcase({
  basePath,
  intro,
  items,
  kicker,
  title,
}: {
  basePath: string;
  intro: string;
  items: ShowcaseItem[];
  kicker: string;
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <section className="product-showcase" aria-labelledby="showcase-title">
      <div className="wrap">
        <div className="showcase-heading">
          <div>
            <p className="kicker kicker-light">{kicker}</p>
            <h2 id="showcase-title">{title}</h2>
          </div>
          <p>{intro}</p>
        </div>

        <div className="showcase-stage">
          <div className="showcase-tabs" role="tablist" aria-label={kicker}>
            {items.map((item, index) => (
              <button
                aria-controls={`feature-panel-${index}`}
                aria-selected={activeIndex === index}
                className={activeIndex === index ? "is-active" : ""}
                id={`feature-tab-${index}`}
                key={item.badge}
                onClick={() => setActiveIndex(index)}
                role="tab"
                type="button"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.badge}</strong>
                <small>{item.title}</small>
              </button>
            ))}
          </div>

          <article
            aria-labelledby={`feature-tab-${activeIndex}`}
            className="showcase-panel"
            id={`feature-panel-${activeIndex}`}
            key={active.image}
            role="tabpanel"
          >
            <div className="showcase-panel-copy">
              <p className="showcase-stat">{active.stat}</p>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
            </div>
            <figure className="showcase-screenshot">
              <Image
                alt={active.imageAlt}
                height={active.imageHeight}
                src={`${basePath}${active.image}`}
                width={active.imageWidth}
              />
              <figcaption>Real WOS Aide Bar interface · macOS</figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
}
