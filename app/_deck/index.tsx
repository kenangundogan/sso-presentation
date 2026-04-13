"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ClassNames from "embla-carousel-class-names";

import { DeckControls } from "./controls";
import { PresenterInfo } from "./components/presenter-info";
import { SLIDES } from "./slides";

/**
 * Deck — orchestrates the presentation:
 *  - Embla carousel viewport (fade transition + wheel gestures + drag)
 *  - Keyboard navigation (← / → / Space / Home / End)
 *  - Bottom controls (prev/next/dots/counter)
 *
 * Slides are defined in ./slides — adding one is a one-line registry change there.
 */
export function Deck() {
  const total = SLIDES.length;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      duration: 28,
      align: "start",
      containScroll: false,
      // Skip slide-drag when the gesture starts inside a child that opted out
      // with `data-embla-no-drag`. Lets inner scrollable areas (e.g. horizontal
      // step flows, tables) handle their own touch / pointer gestures natively.
      watchDrag: (_api, event) => {
        const target = event.target as Element | null;
        return !target?.closest("[data-embla-no-drag]");
      },
    },
    [Fade(), WheelGesturesPlugin(), ClassNames()],
  );

  const [index, setIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  // Sync React index with Embla state & Update URL Hash
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const newIndex = emblaApi.selectedScrollSnap();
      setIndex(newIndex);

      // Update URL hash (1-based for users)
      const hash = `#${newIndex + 1}`;
      if (window.location.hash !== hash) {
        window.history.replaceState(null, "", hash);
      }
    };

    // Initial sync from URL hash
    const initialHash = window.location.hash;
    if (initialHash) {
      const initialIndex = parseInt(initialHash.substring(1), 10) - 1;
      if (!isNaN(initialIndex) && initialIndex >= 0 && initialIndex < total) {
        emblaApi.scrollTo(initialIndex, true); // true = jump without animation
      }
    }

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Sync when back/forward or manual hash change happens
    const onHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetIndex = parseInt(hash.substring(1), 10) - 1;
        if (!isNaN(targetIndex) && targetIndex !== emblaApi.selectedScrollSnap()) {
          emblaApi.scrollTo(targetIndex);
        }
      } else {
        emblaApi.scrollTo(0);
      }
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [emblaApi, total]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          scrollNext();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          scrollPrev();
          break;
        case "Home":
          e.preventDefault();
          scrollTo(0);
          break;
        case "End":
          e.preventDefault();
          scrollTo(total - 1);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scrollNext, scrollPrev, scrollTo, total]);

  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="embla relative flex flex-1 overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full w-full touch-pan-y">
          {SLIDES.map(({ component: Slide }, i) => (
            <div
              key={i}
              className="embla__slide relative flex h-full min-w-0 flex-[0_0_100%] flex-col overflow-y-auto"
            >
              <Slide index={i} total={total} />
            </div>
          ))}
        </div>
      </div>

      <div className="fixed left-0 bottom-0 w-full">
        <PresenterInfo />

        <DeckControls
          index={index}
          total={total}
          onPrev={scrollPrev}
          onNext={scrollNext}
          onJump={scrollTo}
        />
      </div>
    </div>
  );
}

export default Deck;
