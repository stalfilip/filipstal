import type { Ingredient, Unit } from "@/lib/recipes/types";

export type System = "us" | "metric";

const ML_PER: Partial<Record<Unit, number>> = {
  cup: 240,
  tbsp: 15,
  tsp: 5,
};

const G_PER: Partial<Record<Unit, number>> = {
  oz: 28.3495,
  lb: 453.592,
};

const FRACTIONS: ReadonlyArray<readonly [number, string]> = [
  [1 / 8, "⅛"],
  [1 / 4, "¼"],
  [1 / 3, "⅓"],
  [3 / 8, "⅜"],
  [1 / 2, "½"],
  [5 / 8, "⅝"],
  [2 / 3, "⅔"],
  [3 / 4, "¾"],
  [7 / 8, "⅞"],
];

const METRIC_FRACTIONS: ReadonlyArray<readonly [number, string]> = [
  [1 / 4, "¼"],
  [1 / 2, "½"],
  [3 / 4, "¾"],
];

function formatFraction(
  n: number,
  fractions: ReadonlyArray<readonly [number, string]>,
): string {
  const tol = 0.04;
  if (n < tol) return "0";
  const whole = Math.floor(n + 1e-9);
  const frac = n - whole;
  if (frac < tol) return String(whole);
  if (1 - frac < tol) return String(whole + 1);
  for (const [val, glyph] of fractions) {
    if (Math.abs(frac - val) < tol) {
      return whole > 0 ? `${whole} ${glyph}` : glyph;
    }
  }
  return parseFloat(n.toFixed(2)).toString();
}

function formatUSNumber(n: number): string {
  return formatFraction(n, FRACTIONS);
}

function formatMetricNumber(n: number): string {
  return formatFraction(n, METRIC_FRACTIONS);
}

function roundMass(g: number): number {
  if (g >= 1000) return Math.round(g / 50) * 50;
  if (g >= 200) return Math.round(g / 10) * 10;
  if (g >= 50) return Math.round(g / 5) * 5;
  if (g >= 5) return Math.round(g);
  return parseFloat(g.toFixed(1));
}

function formatMass(g: number): string {
  if (g >= 1000) return `${formatMetricNumber(g / 1000)} kg`;
  return `${roundMass(g)} g`;
}

function formatVolume(ml: number): string {
  // Below ½ tsk (2.5 mL): use krm (1 mL = 1 krm)
  if (ml < 2.5) {
    const krm = Math.max(1, Math.round(ml));
    return `${krm} krm`;
  }
  // 2.5–14 mL: use tsk (1 tsk = 5 mL)
  if (ml < 14) {
    return `${formatMetricNumber(ml / 5)} tsk`;
  }
  // 15–90 mL: use msk (1 msk = 15 mL)
  if (ml < 95) {
    return `${formatMetricNumber(ml / 15)} msk`;
  }
  // 100 mL–1 L: use dl (1 dl = 100 mL)
  if (ml < 1000) {
    return `${formatMetricNumber(ml / 100)} dl`;
  }
  // ≥ 1 L
  return `${formatMetricNumber(ml / 1000)} L`;
}

export function formatQty(
  ing: Ingredient,
  servings: number,
  baseServings: number,
  system: System,
): string {
  if (ing.amount === undefined) return "";
  const scaled = ing.amount * (servings / baseServings);

  let body: string;
  if (!ing.unit) {
    body = formatUSNumber(scaled);
  } else if (system === "metric") {
    if (ing.unit in ML_PER) {
      const ml = scaled * ML_PER[ing.unit]!;
      body = ing.densityGPerMl
        ? formatMass(ml * ing.densityGPerMl)
        : formatVolume(ml);
    } else if (ing.unit in G_PER) {
      body = formatMass(scaled * G_PER[ing.unit]!);
    } else {
      body = `${formatUSNumber(scaled)} ${ing.unit}`;
    }
  } else {
    body = `${formatUSNumber(scaled)} ${ing.unit}`;
  }

  return ing.note ? `${body} ${ing.note}` : body;
}
