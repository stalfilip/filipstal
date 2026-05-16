import type { Recipe } from "./types";

export const venisonWithCeleriacPuree: Recipe = {
  slug: "venison-with-celeriac-puree",
  title: "Fallow Deer Loin with Celeriac Purée, Butter-Glazed Carrots & Juniper Cream Sauce",
  author: "Filip",
  headnote:
    "A proper Sunday plate. Loin seared hard then finished low and slow to medium-rare, a silky celeriac purée under everything, butter-glazed carrots with toasted hazelnuts on top, and a reduced cream-and-juniper sauce with lingonberries. Time the puree to land hot, just as the meat comes out of the oven to rest.",
  totalTimeMinutes: 90,
  baseServings: 4,
  image: {
    src: "/recipes/venison-with-celeriac-puree.jpg",
    alt: "Roasted venison loin with chestnut purée, chard and a dark sauce",
    credit: "Photo by Lou Stejskal, via Wikimedia Commons (CC BY 2.0)",
  },
  tags: ["Fancy Pancy"],
  ingredients: [
    { item: "Fallow deer loin (~600–800g)" },
    { item: "Butter (plenty — for searing, glazing, finishing)" },
    { item: "Neutral oil" },
    { item: "Salt and black pepper" },
    { amount: 400, note: "g", item: "Celeriac" },
    { item: "1 small shallot (for the purée)" },
    { amount: 200, note: "ml", item: "Mild vegetable stock or water (1.5–2 dl)" },
    { item: "White pepper" },
    { item: "Carrots" },
    { item: "Hazelnuts, toasted and roughly chopped" },
    { item: "Fresh parsley, chopped" },
    { item: "1 shallot (for the sauce)" },
    { item: "Game stock (viltfond)" },
    { item: "Heavy cream" },
    { item: "Juniper berries, crushed" },
    { item: "Lingonberries" },
  ],
  steps: [
    "Start the celeriac purée. Peel and dice the celeriac in even ~2cm cubes. Finely chop the shallot. Sweat the shallot in a little butter on low heat — no color. Add the celeriac, pour stock to just cover.",
    "Simmer gently under a lid ~25 min until completely soft. Lift out the celeriac and shallot, save the cooking liquid. Blend totally smooth. Thin with cooking liquid until the purée is creamy but holds its shape. Blend in the remaining butter (20–30g). Season with salt and a little white pepper.",
    "Carrots: blanch until al dente, then shock in cold water. Just before serving, finish in butter with chopped parsley. Top with toasted hazelnuts.",
    "Juniper cream sauce: brown the shallot in butter. Pour in the game stock, reduce. Add cream, crushed juniper berries and lingonberries. Reduce until it coats a spoon.",
    "Venison: sear hard in butter and oil on all sides. Transfer to a 125°C oven until the internal temp is 58°C. Rest 10 min under foil.",
    "Plate: sweep of purée, vegetables on top, sliced venison alongside, sauce over and around the meat. Serve hot — the purée especially shouldn't sit.",
  ],
};
