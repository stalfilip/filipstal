import type { Recipe } from "./types";

export const breadedFish: Recipe = {
  slug: "breaded-fish",
  title: "Breaded Fish with Dill Sauce & Boiled Potatoes",
  author: "Filip",
  headnote:
    "A weeknight Swedish staple. Thin white fish gets a panko coat and bakes in the oven until golden and crisp, while a cold dill sauce comes together in a bowl and the potatoes boil away. Everything lands on the plate at the same time with almost no active work.",
  totalTimeMinutes: 45,
  baseServings: 4,
  image: { src: "/recipes/breaded-fish.jpg", alt: "Breaded fish fillet on a grey patterned plate with dill sauce, green peas, boiled potatoes and a lemon wedge" },
  ingredients: [
    { amount: 600, note: "g", item: "White fish fillets (cod, haddock, pollock)" },
    { amount: 0.5, unit: "cup", densityGPerMl: 0.55, item: "All-purpose flour" },
    { amount: 2, item: "Eggs, beaten" },
    { amount: 1, unit: "cup", densityGPerMl: 0.42, item: "Panko or plain bread crumbs" },
    { amount: 2, unit: "tbsp", item: "Neutral oil (for the breadcrumbs and the tray)" },
    { item: "Grated parmesan or spices for the crumbs (optional)" },
    { item: "Salt and black pepper" },
    { amount: 200, note: "g", item: "Crème fraîche or Turkish/Greek yoghurt" },
    { amount: 2, unit: "tbsp", item: "Mayonnaise" },
    { amount: 1, item: "Lemon (zest and juice)" },
    { amount: 1, unit: "tsp", item: "Dijon mustard" },
    { amount: 1, item: "Garlic clove, grated (or pinch of garlic powder)" },
    { item: "Fresh dill, finely chopped (a generous handful)" },
    { amount: 1, note: "kg", item: "Potatoes, peeled" },
    { amount: 1, unit: "tbsp", item: "Butter (for the potatoes)" },
  ],
  steps: [
    "Set the oven to 225°C. Cover a tray with baking paper and drizzle a little neutral oil on the paper.",
    "Pat the fish dry with kitchen paper. Season lightly on both sides.",
    "Set up three deep plates: flour in one, beaten egg in another, panko mixed with a little neutral oil (and optional parmesan/spices) in the third.",
    "Bread each piece: flour first (shake off), then egg, then panko — pressing gently so the crust adheres. Transfer to the tray.",
    "Bake in the middle of the oven 12–15 minutes (depending on thickness), until golden and just cooked through but still juicy. Rest 3–5 minutes on the tray or a rack so the crisp sets.",
    "For the dill sauce: mix crème fraîche (or yoghurt) with a little mayo. Grate in lemon zest, squeeze in juice. Add a little Dijon and grated garlic. Stir in a generous amount of finely chopped dill. Taste, then chill at least 20–30 minutes.",
    "For the potatoes: peel, rinse, cut larger ones so all pieces are roughly the same size. Cover with cold water in a pot, bring to a boil with the lid on, lower to a gentle simmer until soft through. Drain immediately and let steam off with the lid ajar.",
    "Optionally toss the potatoes with a small knob of butter and a little dill or parsley just before serving.",
  ],
};
