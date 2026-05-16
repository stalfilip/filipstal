import type { Recipe } from "./types";

export const nyBagels: Recipe = {
  slug: "ny-bagels",
  title: "NY Bagels",
  author: "Filip",
  headnote:
    "A simple one-day recipe (well, plus an overnight cold proof). Eight chewy, well-blistered bagels at about 128g each. The cold rest in the fridge is where the flavor and crust come from — don't skip it.",
  totalTimeMinutes: 90,
  baseServings: 8,
  image: { src: "/recipes/ny-bagels.jpg", alt: "Everything bagels and plain bagels on a parchment-lined tray" },
  ingredients: [
    { amount: 600, note: "g", item: "Bread flour" },
    { amount: 360, note: "ml", item: "Water (32°C)" },
    { amount: 3, note: "g", item: "Dry yeast" },
    { amount: 18, note: "g", item: "Barley malt syrup (or 13g sugar)" },
    { amount: 16, note: "g", item: "Fine sea salt" },
    { item: "Polenta / cornmeal, for the tray" },
    { amount: 2.8, note: "L", item: "Water, for boiling" },
    { amount: 23, note: "ml", item: "Barley malt syrup, for boiling water" },
    { item: "Pinch of salt, for boiling water" },
    { amount: 27, note: "g", item: "Sesame seeds (everything topping)" },
    { amount: 20, note: "g", item: "Poppy seeds (everything topping)" },
    { amount: 9, note: "g", item: "Onion flakes (everything topping)" },
    { amount: 4, note: "g", item: "Dried garlic (everything topping)" },
    { amount: 12, note: "g", item: "Flake salt (everything topping)" },
  ],
  steps: [
    "Dissolve the yeast and malt syrup in the warm water. Mix with flour and salt. Knead 15–20 min, until it passes the windowpane test — at least that long.",
    "Rest covered 30–45 min at room temperature.",
    "Divide into 8 pieces (~128g). Shape into bagels.",
    "Place on a cornmeal-dusted tray. Cover with oiled plastic wrap, rest 5–10 min, then into the fridge overnight.",
    "The next day, bring the boiling water with malt syrup and a pinch of salt to a boil. Boil each bagel 30 sec/side, then top immediately while wet.",
    "Bake at 230°C for 15–18 min until golden brown. Cool on a rack.",
    "For everything topping: combine sesame seeds, poppy seeds, onion flakes, dried garlic and flake salt.",
  ],
};
