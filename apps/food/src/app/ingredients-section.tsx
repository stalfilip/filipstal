"use client";

import { useState, useEffect } from "react";
import type { Ingredient } from "@/lib/recipes/fish-milanese";

interface Props {
  ingredients: Ingredient[];
  servings: string;
  slug: string;
}

export function IngredientsSection({ ingredients, servings, slug }: Props) {
  const [tab, setTab] = useState<"ingredients" | "shopping">("ingredients");
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const storageKey = `shopping-${slug}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setChecked(new Set(JSON.parse(raw)));
    } catch {}
  }, [storageKey]);

  function toggle(i: number) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      localStorage.setItem(storageKey, JSON.stringify([...next]));
      return next;
    });
  }

  function clearAll() {
    setChecked(new Set());
    localStorage.removeItem(storageKey);
  }

  return (
    <section className="md:col-span-5">
      {/* Toggle header */}
      <div className="flex items-baseline gap-5">
        <button
          onClick={() => setTab("ingredients")}
          className={`font-display text-2xl tracking-tight transition ${
            tab === "ingredients"
              ? "text-ink"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          Ingredients
        </button>
        <span className="text-rule select-none">|</span>
        <button
          onClick={() => setTab("shopping")}
          className={`font-display text-2xl tracking-tight transition ${
            tab === "shopping"
              ? "text-ink"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          Shopping list
        </button>
      </div>

      <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-muted">
        {servings}
      </p>

      {tab === "ingredients" ? (
        <ul className="mt-5 divide-y divide-rule">
          {ingredients.map((ing, i) => (
            <li key={i} className="flex gap-4 py-3">
              <span className="min-w-[5.5rem] font-display text-[14px] tabular-nums text-ink-muted">
                {ing.qty ?? ""}
              </span>
              <span className="font-display text-[16px] leading-snug text-ink">
                {ing.item}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <ul className="mt-5 divide-y divide-rule">
            {ingredients.map((ing, i) => {
              const done = checked.has(i);
              return (
                <li
                  key={i}
                  className="flex cursor-pointer items-start gap-3 py-3"
                  onClick={() => toggle(i)}
                >
                  <span
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border transition ${
                      done
                        ? "border-accent bg-accent"
                        : "border-ink-muted bg-transparent"
                    }`}
                  >
                    {done && (
                      <svg
                        viewBox="0 0 10 8"
                        className="h-2.5 w-2.5 fill-none stroke-cream stroke-[1.8]"
                      >
                        <polyline points="1,4 4,7 9,1" />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`font-display text-[16px] leading-snug transition ${
                      done ? "text-ink-muted line-through" : "text-ink"
                    }`}
                  >
                    {ing.qty && (
                      <span className="tabular-nums">{ing.qty} </span>
                    )}
                    {ing.item}
                  </span>
                </li>
              );
            })}
          </ul>

          {checked.size > 0 && (
            <button
              onClick={clearAll}
              className="mt-4 text-[11px] uppercase tracking-[0.16em] text-ink-muted underline-offset-2 hover:underline"
            >
              Clear all
            </button>
          )}
        </>
      )}
    </section>
  );
}
