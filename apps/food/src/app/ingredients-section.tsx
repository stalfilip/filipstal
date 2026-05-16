"use client";

import { useState, useEffect } from "react";
import type { Ingredient } from "@/lib/recipes/types";
import { formatQty, type System } from "@/lib/units";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

interface Props {
  ingredients: Ingredient[];
  baseServings: number;
  slug: string;
}

export function IngredientsSection({ ingredients, baseServings, slug }: Props) {
  const [tab, setTab] = useState<"ingredients" | "shopping">("ingredients");
  const [system, setSystem] = useState<System>("metric");
  const [servingsInput, setServingsInput] = useState<string>(String(baseServings));
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const storageKey = `shopping-${slug}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setChecked(new Set(JSON.parse(raw)));
    } catch {}
  }, [storageKey]);

  function toggleItem(i: number) {
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

  const parsed = Number(servingsInput);
  const servings =
    Number.isFinite(parsed) && parsed > 0 ? parsed : baseServings;
  const showShopping = tab === "shopping";

  return (
    <section className="md:col-span-5">
      <ToggleGroup
        value={[tab]}
        onValueChange={(vals) => {
          if (vals.length > 0) setTab(vals[0] as typeof tab);
        }}
      >
        <ToggleGroupItem value="ingredients">Ingredients</ToggleGroupItem>
        <ToggleGroupItem value="shopping">Shopping list</ToggleGroupItem>
      </ToggleGroup>

      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-wider text-ink-muted">
        <label className="flex items-center gap-2">
          <span>Servings</span>
          <input
            type="number"
            min={1}
            inputMode="numeric"
            value={servingsInput}
            onChange={(e) => setServingsInput(e.target.value)}
            onBlur={() => {
              if (!(Number(servingsInput) > 0)) setServingsInput(String(baseServings));
            }}
            className="w-14 rounded-md border border-rule bg-transparent px-2 py-0.5 font-display text-[14px] normal-case tracking-normal text-ink tabular-nums focus:border-brand focus:outline-none"
          />
        </label>
        <ToggleGroup
          value={[system]}
          onValueChange={(vals) => {
            if (vals.length > 0) setSystem(vals[0] as System);
          }}
        >
          <ToggleGroupItem value="metric">Metric</ToggleGroupItem>
          <ToggleGroupItem value="us">US</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <ul className="mt-5 divide-y divide-rule">
        {ingredients.map((ing, i) => {
          const qty = formatQty(ing, servings, baseServings, system);
          const done = showShopping && checked.has(i);
          return (
            <li
              key={i}
              className={`flex items-start gap-3 py-3 sm:gap-4 ${
                showShopping ? "cursor-pointer md:relative" : ""
              }`}
              onClick={showShopping ? () => toggleItem(i) : undefined}
            >
              {showShopping && (
                <span
                  className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border transition md:absolute md:-left-9 md:top-3.5 md:mt-0 ${
                    done
                      ? "border-brand bg-brand"
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
              )}
              <span
                className={`min-w-[3.5rem] font-display text-[14px] tabular-nums text-ink-muted sm:min-w-[5.5rem] ${
                  done ? "line-through" : ""
                }`}
              >
                {qty}
              </span>
              <span
                className={`flex-1 font-display text-[15px] leading-snug transition sm:text-[16px] ${
                  done ? "text-ink-muted line-through" : "text-ink"
                }`}
              >
                {ing.item}
              </span>
            </li>
          );
        })}
      </ul>

      {showShopping && checked.size > 0 && (
        <button
          onClick={clearAll}
          className="mt-4 text-[11px] uppercase tracking-[0.16em] text-ink-muted underline-offset-2 hover:underline"
        >
          Clear all
        </button>
      )}
    </section>
  );
}
