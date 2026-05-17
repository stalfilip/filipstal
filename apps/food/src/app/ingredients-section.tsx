"use client";

import { Fragment, useState, useEffect } from "react";
import type { Ingredient, Unit } from "@/lib/recipes/types";
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

type QtySegment = {
  amount: number;
  unit?: Unit;
  note?: string;
  densityGPerMl?: number;
};

type ShoppingLine = {
  key: string;
  displayName: string;
  pantry: boolean;
  quantities: QtySegment[];
};

function segmentsCompatible(a: QtySegment, b: QtySegment): boolean {
  if (a.unit && b.unit) return a.unit === b.unit;
  if (!a.unit && !b.unit) return a.note === b.note;
  return false;
}

function buildShoppingLines(
  ingredients: Ingredient[],
  servings: number,
  baseServings: number
): { main: ShoppingLine[]; pantry: ShoppingLine[] } {
  const map = new Map<string, ShoppingLine>();

  for (const ing of ingredients) {
    const key = ing.shoppingItem ?? ing.item;
    const pantry = ing.pantry ?? false;

    const seg: QtySegment | null =
      ing.amount !== undefined
        ? {
            amount: ing.amount * (servings / baseServings),
            unit: ing.unit,
            note: ing.note,
            densityGPerMl: ing.densityGPerMl,
          }
        : null;

    if (map.has(key)) {
      const line = map.get(key)!;
      if (seg) {
        const existing = line.quantities.find((q) => segmentsCompatible(q, seg));
        if (existing) {
          existing.amount += seg.amount;
        } else {
          line.quantities.push(seg);
        }
      }
    } else {
      map.set(key, {
        key,
        displayName: ing.shoppingItem ?? ing.item,
        pantry,
        quantities: seg ? [seg] : [],
      });
    }
  }

  const all = Array.from(map.values());
  return {
    main: all.filter((l) => !l.pantry),
    pantry: all.filter((l) => l.pantry),
  };
}

function formatSegmentQty(seg: QtySegment, system: System): string {
  const fakeIng: Ingredient = {
    amount: seg.amount,
    unit: seg.unit,
    note: seg.note,
    densityGPerMl: seg.densityGPerMl,
    item: "",
  };
  return formatQty(fakeIng, 1, 1, system);
}

function formatShoppingQty(line: ShoppingLine, system: System): string {
  if (line.quantities.length === 0) return "";
  return line.quantities.map((seg) => formatSegmentQty(seg, system)).join(" + ");
}

function getGroupedIngredients(ingredients: Ingredient[]) {
  const order: string[] = [];
  const map = new Map<string, Ingredient[]>();
  for (const ing of ingredients) {
    const g = ing.group ?? "";
    if (!map.has(g)) {
      order.push(g);
      map.set(g, []);
    }
    map.get(g)!.push(ing);
  }
  return order.map((g) => ({ group: g, items: map.get(g)! }));
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}

export function IngredientsSection({ ingredients, baseServings, slug }: Props) {
  const [tab, setTab] = useState<"ingredients" | "shopping">("ingredients");
  const system: System = "metric";
  const [servingsInput, setServingsInput] = useState<string>(String(baseServings));
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [settingsOpen, setSettingsOpen] = useState(false);

  const storageKey = `shopping-v2-${slug}`;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setChecked(new Set(JSON.parse(raw)));
    } catch {}
  }, [storageKey]);

  function toggleItem(key: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      localStorage.setItem(storageKey, JSON.stringify([...next]));
      return next;
    });
  }

  function clearAll() {
    setChecked(new Set());
    localStorage.removeItem(storageKey);
  }

  const parsed = Number(servingsInput);
  const servings = Number.isFinite(parsed) && parsed > 0 ? parsed : baseServings;
  const showShopping = tab === "shopping";

  const grouped = getGroupedIngredients(ingredients);
  const hasGroups = ingredients.some((ing) => ing.group);

  const { main: shoppingMain, pantry: shoppingPantry } = buildShoppingLines(
    ingredients,
    servings,
    baseServings
  );

  function renderShoppingLines(lines: ShoppingLine[]) {
    return lines.map((line) => {
      const qty = formatShoppingQty(line, system);
      const done = checked.has(line.key);
      return (
        <li
          key={line.key}
          className="flex cursor-pointer items-start gap-3 py-2 sm:gap-4 md:relative"
          onClick={() => toggleItem(line.key)}
        >
          <span
            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border transition md:absolute md:-left-9 md:top-3 md:mt-0 ${
              done ? "border-brand bg-brand" : "border-ink-muted bg-transparent"
            }`}
          >
            {done && (
              <svg viewBox="0 0 10 8" className="h-2.5 w-2.5 fill-none stroke-cream stroke-[1.8]">
                <polyline points="1,4 4,7 9,1" />
              </svg>
            )}
          </span>
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
            {line.displayName}
          </span>
        </li>
      );
    });
  }

  return (
    <section className="md:col-span-5">
      <div className="flex items-center justify-between">
        <ToggleGroup
          value={[tab]}
          onValueChange={(vals) => {
            if (vals.length > 0) setTab(vals[0] as typeof tab);
          }}
        >
          <ToggleGroupItem value="ingredients">Ingredients</ToggleGroupItem>
          <ToggleGroupItem value="shopping">Shopping list</ToggleGroupItem>
        </ToggleGroup>

        <button
          onClick={() => setSettingsOpen((o) => !o)}
          aria-label="Settings"
          className={`rounded p-1 transition ${
            settingsOpen ? "text-ink" : "text-ink-muted hover:text-ink"
          }`}
        >
          <SettingsIcon className="h-4 w-4" />
        </button>
      </div>

      {settingsOpen && (
        <div className="mt-3 flex items-center gap-2 text-[11px] uppercase tracking-wider text-ink-muted">
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
        </div>
      )}

      {showShopping ? (
        <div>
          <ul className="mt-5">
            {renderShoppingLines(shoppingMain)}
          </ul>
          {shoppingPantry.length > 0 && (
            <div className="mt-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-muted">
                Pantry staples
              </p>
              <ul className="mt-3">
                {renderShoppingLines(shoppingPantry)}
              </ul>
            </div>
          )}
          {checked.size > 0 && (
            <button
              onClick={clearAll}
              className="mt-4 text-[11px] uppercase tracking-[0.16em] text-ink-muted underline-offset-2 hover:underline"
            >
              Clear all
            </button>
          )}
        </div>
      ) : (
        <ul className="mt-5">
          {grouped.map(({ group, items }) => (
            <Fragment key={group || "__ungrouped__"}>
              {hasGroups && group && (
                <li className="pb-1 pt-5 first:pt-0">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-muted">
                    {group}
                  </p>
                </li>
              )}
              {items.map((ing) => {
                const idx = ingredients.indexOf(ing);
                const qty = formatQty(ing, servings, baseServings, system);
                return (
                  <li key={idx} className="flex items-start gap-3 py-2 sm:gap-4">
                    <span className="min-w-[3.5rem] font-display text-[14px] tabular-nums text-ink-muted sm:min-w-[5.5rem]">
                      {qty}
                    </span>
                    <span className="flex-1 font-display text-[15px] leading-snug text-ink sm:text-[16px]">
                      {ing.item}
                    </span>
                  </li>
                );
              })}
            </Fragment>
          ))}
        </ul>
      )}
    </section>
  );
}
