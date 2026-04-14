"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ClassNames from "embla-carousel-class-names";

import { DeckControls } from "./controls";
import { PresenterInfo } from "./components/presenter-info";
import { SLIDES } from "./slides";
export function Deck() {
  const total = SLIDES.length;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      duration: 28,
      align: "start",
      containScroll: false,

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

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const newIndex = emblaApi.selectedScrollSnap();
      setIndex(newIndex);

      const hash = `#${newIndex + 1}`;
      if (window.location.hash !== hash) {
        window.history.replaceState(null, "", hash);
      }
    };

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
        <div className="embla__container flex h-dvh w-full touch-pan-y">
          {SLIDES.map(({ component: Slide }, i) => (
            <div
              key={i}
              className="embla__slide relative flex h-dvh min-w-0 flex-[0_0_100%] flex-col"
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
