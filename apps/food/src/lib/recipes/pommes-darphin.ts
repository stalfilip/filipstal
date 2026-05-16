import type { Recipe } from "./types";

export const pommesDarphin: Recipe = {
  slug: "pommes-darphin",
  title: "Pommes Darphin",
  author: "Filip",
  headnote:
    "A grated-potato cake fried in plenty of butter — crisp and golden outside, tender within. Goes with everything roasted or seared.",
  totalTimeMinutes: 25,
  baseServings: 4,
  image: { src: "/recipes/pommes-darphin.jpg", alt: "Two crisp, golden-brown pommes darphin potato cakes" },
  tags: ["Side", "Fancy Pancy"],
  ingredients: [
    { item: "Potatoes (starchy, like russets), peeled" },
    { item: "Butter (plenty — don't skimp)" },
    { item: "Salt and black pepper" },
  ],
  steps: [
    "Grate the raw potatoes coarsely. Squeeze the liquid out hard with your hands or in a clean towel.",
    "Season with salt and pepper.",
    "Generous amount of butter in a pan on medium heat.",
    "Press the potatoes into a cake. Cook about 5 min per side until deep golden brown.",
  ],
};
