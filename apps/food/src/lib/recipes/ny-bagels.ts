import type { Recipe } from "./types";

export const nyBagels: Recipe = {
  slug: "ny-bagels",
  title: "NY Bagels",
  author: "Filip",
  headnote:
    "A simple one-day recipe (well, plus an overnight cold proof). Eight chewy, well-blistered bagels at about 128g each. The cold rest in the fridge is where the flavor and crust come from — don't skip it.",
  totalTimeMinutes: 90,
  baseServings: 8,
  images: [
    { src: "/recipes/ny-bagels.jpg", alt: "Three everything bagels piled on a striped linen cloth" },
    { src: "/recipes/ny-bagels-shaped.jpg", alt: "Eight shaped bagels on a cornmeal-dusted tray under plastic wrap, ready to proof" },
    { src: "/recipes/ny-bagels-baked.jpg", alt: "Fresh-baked everything and plain bagels cooling on a wire rack" },
  ],
  ingredients: [
    { amount: 600, note: "g", item: "Bread flour", group: "Dough" },
    { amount: 360, note: "ml", item: "Water (32°C)", group: "Dough", pantry: true, shoppingItem: "Water" },
    { amount: 3, note: "g", item: "Dry yeast", group: "Dough" },
    { amount: 18, note: "g", item: "Barley malt syrup (or 13g sugar)", group: "Dough", shoppingItem: "Barley malt syrup" },
    { amount: 16, note: "g", item: "Fine sea salt", group: "Dough", pantry: true, shoppingItem: "Salt" },
    { item: "Polenta / cornmeal, for the tray", group: "Dough" },
    { amount: 2.8, note: "L", item: "Water, for boiling", group: "Boiling water", pantry: true, shoppingItem: "Water" },
    { amount: 23, note: "g", item: "Barley malt syrup, for boiling water", group: "Boiling water", shoppingItem: "Barley malt syrup" },
    { item: "Pinch of salt, for boiling water", group: "Boiling water", pantry: true, shoppingItem: "Salt" },
    { amount: 27, note: "g", item: "Sesame seeds", group: "Everything topping" },
    { amount: 20, note: "g", item: "Poppy seeds", group: "Everything topping" },
    { amount: 9, note: "g", item: "Onion flakes", group: "Everything topping" },
    { amount: 4, note: "g", item: "Dried garlic", group: "Everything topping" },
    { amount: 12, note: "g", item: "Flake salt", group: "Everything topping" },
  ],
  steps: [
    "Dissolve the yeast and malt syrup in the warm water. Mix with flour and salt. Knead 10 min, then let the dough rest 5 min — this gives the gluten a chance to relax. Then knead another 5–10 min until it passes the windowpane test.",
    "Rest covered 30–45 min at room temperature.",
    "Divide into 8 pieces (~128g). Shape into bagels.",
    "Place on a cornmeal-dusted tray. Cover with oiled plastic wrap and leave at room temperature until they look visibly puffier — they shouldn't be fully proofed, but they should have some life in them. Then refrigerate overnight.",
    "The next day, check they've proofed enough with a water test: drop one in a bowl of cold water — it should float freely. If it sinks straight to the bottom, leave them at room temperature a little longer and try again. Once they pass, bring the boiling water with malt syrup and a pinch of salt to a boil. Boil each bagel upside down first — the flat bottom from proofing faces up in the bath, which evens out the shape. 30 sec/side, then top immediately while wet.",
    "Bake at 230°C for 15–18 min until golden brown. Cool on a rack.",
    "For everything topping: combine sesame seeds, poppy seeds, onion flakes, dried garlic and flake salt.",
  ],
};
