import type { Recipe } from "./types";

export const swedishFlagPavlova: Recipe = {
  slug: "swedish-flag-pavlova",
  title: "Swedish Flag Pavlova",
  author: "Filip",
  headnote:
    "One big sheet pavlova dressed up as the Swedish flag — a glossy yellow lemon-curd cross over fields of blueberries on softly whipped cream. The meringue is baked thick and high (3–4 cm) so the inside stays marshmallowy under a crisp shell. Nothing goes to waste: the six yolks left from the meringue become the lemon curd. The curd does double duty — a thin layer under the cream for sharpness, and a piped cross on top for the flag. Assemble it just before serving so the colours stay clean and the meringue stays crisp.",
  totalTimeMinutes: 210,
  baseServings: 14,
  tags: ["Summer", "Dessert", "Celebration"],
  images: [
    {
      src: "/recipes/swedish-flag-pavlova.jpg",
      alt: "Sheet pavlova decorated as the Swedish flag — a yellow lemon-curd cross over fields of blueberries on whipped cream",
    },
  ],
  ingredients: [
    { amount: 6, item: "Egg whites, room temperature", group: "Meringue base" },
    { amount: 350, note: "g", item: "Caster sugar", group: "Meringue base" },
    { amount: 1, unit: "tbsp", item: "Cornstarch", group: "Meringue base" },
    { amount: 1, unit: "tsp", item: "White wine vinegar (or lemon juice)", group: "Meringue base" },
    { amount: 1, unit: "tsp", item: "Vanilla sugar (optional)", group: "Meringue base" },

    { amount: 6, item: "Egg yolks", group: "Lemon curd" },
    { amount: 225, note: "g", item: "Caster sugar", group: "Lemon curd" },
    { amount: 150, note: "ml", item: "Fresh lemon juice (about 3–4 lemons)", group: "Lemon curd" },
    { amount: 2, item: "Lemons, zested", group: "Lemon curd" },
    { amount: 110, note: "g", item: "Butter (or firm plant-based block butter)", group: "Lemon curd" },

    { amount: 450, note: "ml", item: "Heavy cream (or coconut cream)", group: "To finish" },
    { amount: 250, note: "g", item: "Blueberries", group: "To finish" },
    { item: "Icing sugar, for dusting", group: "To finish", pantry: true, shoppingItem: "Icing sugar" },
    { item: "Lemon zest, to finish", group: "To finish" },
  ],
  steps: [
    "Heat the oven to 125°C (top/bottom heat, not fan). Line a large baking tray (about 40×37 cm) with parchment.",
    "Whisk the egg whites to firm peaks. Add the sugar one tablespoon at a time, whisking continuously, until the meringue is glossy, stiff and no longer feels gritty between your fingers (5–8 min).",
    "Gently fold in the cornstarch, vinegar and vanilla sugar with a spatula.",
    "Spread the meringue over the whole tray in an even layer about 3–4 cm thick, pulling up small peaks across the surface.",
    "Bake in the middle of the oven for 75–90 min. The surface should be dry and lift cleanly from the paper; the inside should stay soft.",
    "Turn off the oven, crack the door open and let the meringue cool completely inside (1–2 hours). This prevents cracking.",
    "Make the lemon curd: whisk yolks, sugar, lemon juice and zest together in a bowl set over a pan of simmering water (bain-marie).",
    "Stir constantly until thickened enough to coat the back of a spoon (8–10 min) — don't let it boil. Off the heat, stir in the butter piece by piece until smooth. Strain for a perfectly silky curd.",
    "Cover the curd with cling film pressed directly onto the surface and chill until cold.",
    "Whip the cream to soft peaks.",
    "Assemble just before serving: meringue, then a thin layer of lemon curd, then the whipped cream spread over the whole surface.",
    "Pipe a yellow cross of lemon curd — one vertical and one horizontal line — to make the flag. Fill the four fields densely with blueberries.",
    "Dust lightly with icing sugar and grate fresh lemon zest over the cross. Serve at once — pavlova is at its best in the first 20 minutes after topping.",
  ],
};
