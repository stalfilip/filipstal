"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { RecipeImage } from "@/lib/recipes/types";

interface Props {
  images: RecipeImage[];
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <polyline points="13,4 7,10 13,16" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <polyline points="7,4 13,10 7,16" />
    </svg>
  );
}

export function RecipeCarousel({ images }: Props) {
  const [idx, setIdx] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const single = images.length <= 1;

  const advance = useCallback(
    () => setIdx((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (single) return;
    const t = setInterval(advance, 3000);
    return () => clearInterval(t);
  }, [single, advance, resetKey]);

  function go(next: number) {
    setIdx((next + images.length) % images.length);
    setResetKey((k) => k + 1);
  }

  const current = images[idx];

  return (
    <figure>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-rule sm:aspect-[3/2]">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === idx ? 1 : 0 }}
          >
            {img.src ? (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                No photo yet
              </div>
            )}
          </div>
        ))}

        {!single && (
          <>
            <button
              onClick={() => go(idx - 1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/45"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => go(idx + 1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/45"
            >
              <ChevronRight />
            </button>

            <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === idx ? "w-4 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {current.credit && (
        <figcaption className="mt-1.5 text-right text-[10px] uppercase tracking-wider text-ink-muted">
          {current.credit}
        </figcaption>
      )}
    </figure>
  );
}
