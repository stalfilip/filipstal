import type { Recipe } from "./types";

export const grilledSalmonChiliMayo: Recipe = {
  slug: "grilled-salmon-chili-mayo",
  title: "Grilled Salmon with Sriracha-Lime Mayo",
  author: "Filip",
  headnote:
    "A summer plate that leans on contrast: rich, fatty salmon against a hot-sour mayo, briny capers and red onion cutting through warm new potatoes, and charred fennel and asparagus to round it out. Grilling the salmon on lemon slices keeps it from sticking and perfumes the fish from below. Skip the marinade — the chili mayo and lemon vinaigrette already carry the flavour.",
  totalTimeMinutes: 45,
  baseServings: 4,
  tags: ["Summer", "Grill", "Fish"],
  images: [
    {
      src: "/recipes/grilled-salmon-chili-mayo.jpg",
      alt: "Grilled salmon fillets with lemon slices and fresh herbs on a white platter",
    },
  ],
  ingredients: [
    { amount: 4, item: "Salmon fillets with skin", group: "Salmon" },
    { amount: 2, item: "Lemons, sliced", group: "Salmon" },
    { amount: 1, unit: "tbsp", item: "Olive oil", group: "Salmon", pantry: true, shoppingItem: "Olive oil" },
    { item: "Salt and black pepper", group: "Salmon", pantry: true, shoppingItem: "Salt and pepper" },

    { amount: 0.75, unit: "cup", item: "Mayonnaise", group: "Sriracha-lime mayo" },
    { amount: 2, unit: "tbsp", item: "Sriracha (Skånsk Chili rekommenderas)", group: "Sriracha-lime mayo" },
    { amount: 1, item: "Lime, juiced", group: "Sriracha-lime mayo" },
    { item: "Fresh coriander, finely chopped (plus whole leaves to garnish)", group: "Sriracha-lime mayo" },

    { amount: 800, note: "g", item: "New potatoes", group: "Potato salad" },
    { amount: 2, unit: "tbsp", item: "Capers, drained", group: "Potato salad" },
    { amount: 0.5, item: "Red onion, finely sliced", group: "Potato salad" },
    { amount: 3, unit: "tbsp", item: "Olive oil", group: "Potato salad", pantry: true, shoppingItem: "Olive oil" },
    { amount: 0.5, item: "Lemon, juiced", group: "Potato salad" },
    { amount: 1, unit: "tsp", item: "Dijon mustard", group: "Potato salad" },

    { amount: 1, item: "Fennel bulb, halved lengthwise", group: "Grilled vegetables" },
    { amount: 1, item: "Bunch of asparagus, trimmed", group: "Grilled vegetables" },
    { amount: 1, unit: "tbsp", item: "Olive oil", group: "Grilled vegetables", pantry: true, shoppingItem: "Olive oil" },
  ],
  steps: [
    "Mix the chili mayo: stir mayonnaise, sriracha and lime juice together. Taste — it should read hot, sour and round. Chill until serving.",
    "Boil the potatoes in well-salted water until tender. Drain, slice while still warm, and toss immediately with capers, sliced red onion and a vinaigrette of olive oil, lemon juice, Dijon, salt and pepper. The warm potatoes will drink the dressing.",
    "Heat the grill to high. Brush fennel and asparagus with olive oil and season. Grill the fennel 8–10 minutes until tender with good colour, and the asparagus 4–5 minutes.",
    "Halve a lemon and lay cut-side down on the grill for 2–3 minutes until caramelised.",
    "Brush the salmon with olive oil and season with salt and pepper. Lay lemon slices on the grill bars and place the salmon skin-side down on top of the lemons. Grill 6–8 minutes without moving, until the internal temperature reads 52–54°C.",
    "Plate the salmon with a generous spoon of chili mayo, the warm potato salad and the grilled vegetables. Garnish with whole coriander leaves and the grilled lemon alongside.",
  ],
};
