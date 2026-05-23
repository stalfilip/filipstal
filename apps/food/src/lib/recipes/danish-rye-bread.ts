import type { Recipe } from "./types";

export const danishRyeBread: Recipe = {
  slug: "danish-rye-bread",
  title: "Danish Rye Bread",
  author: "Filip",
  headnote:
    "Two dense, seed-heavy loaves, the kind that hold up a thick slice of cheese. Long ferment, lots of cracked rye and sunflower seeds, a little dark syrup. Plan ahead: starter feed in the morning, mix in the afternoon, proof overnight, bake the next morning.",
  totalTimeMinutes: 1500,
  baseServings: 2,
  images: [{ src: "/recipes/danish-rye-bread.jpg", alt: "Sliced loaf of dark, seed-packed Danish rye bread on a cutting board" }],
  ingredients: [
    { amount: 200, note: "g", item: "Sourdough starter", group: "Pre-dough" },
    { amount: 200, note: "g", item: "Finely milled rye flour", group: "Pre-dough" },
    { amount: 300, note: "g", item: "Wheat flour", group: "Pre-dough" },
    { amount: 1000, note: "g", item: "Water (500g pre-dough + 500g seed mix)", group: "Pre-dough", pantry: true, shoppingItem: "Water" },
    { amount: 200, note: "g", item: "Cracked rye", group: "Seed mix" },
    { amount: 50, note: "g", item: "Flaxseeds", group: "Seed mix" },
    { amount: 200, note: "g", item: "Sunflower seeds", group: "Seed mix" },
    { amount: 25, note: "g", item: "Flake salt", group: "Seed mix" },
    { amount: 1, note: "tsp", item: "Fennel seeds", group: "Seed mix" },
    { amount: 2, note: "tsp", item: "Caraway (optional — good if you want it extra spiced)", group: "Seed mix" },
    { amount: 1, note: "tsp", item: "Oregano (optional — good if you want it extra spiced)", group: "Seed mix" },
    { item: "Ground clove (1 pinch)", group: "Seed mix" },
    { amount: 500, note: "g", item: "Coarsely milled rye flour", group: "Dough" },
    { amount: 100, note: "g", item: "Dark syrup", group: "Dough" },
  ],
  steps: [
    "Feed the starter (2–4h before): mix 60g sourdough starter, 100g finely milled rye flour, 100g water (add a bit more if it feels too stiff). Leave at room temperature until active, bubbly and domed — about 4–8h.",
    "Pre-dough (made in parallel with the seed mix, 2–4h): combine 200g active starter, 400g wheat flour, 500g water. Run in stand mixer 5 min. Stop halfway and scrape the flour down from the sides — it sticks easily and won't mix in otherwise.",
    "Seed mix: combine 200g cracked rye, 50g flaxseeds, 200g sunflower seeds, 25g flake salt, 1 tsp fennel seeds, 2 tsp caraway, 1 tsp oregano, 1 pinch ground clove, and 500g boiling water. Stir, cover. The seeds absorb the water and soften — this gives texture and moisture. Let both pre-dough and seed mix rest until the pre-dough is active and bubbly. Not time-controlled.",
    "Dough: combine the whole pre-dough, the whole seed mix, 500g coarsely milled rye flour and 100g dark syrup. Run in stand mixer on lowest speed for 25 min. Rye dough never gets smooth like wheat dough — that's right.",
    "Shape & proof (18–20h): oil and dust 2 tins (13×29cm). Distribute the dough, flatten with wet hands, dust rye flour on top. Proof until the dough reaches the rim of the tin — go by feel, not the clock.",
    "Bake: 250°C for 10 min, then drop to 200°C for 50–60 min until internal temp is 96°C. High starting temp gives crust; the lower temp bakes it through without burning.",
    "Notes (2026-03-20): Don't let the pre-dough get too bubbly — it tastes a bit too sour then.",
    "Notes (2026-04-16): 100g finely milled rye flour + 300g wheat in the pre-dough also works, for a slightly darker bread.",
  ],
};
