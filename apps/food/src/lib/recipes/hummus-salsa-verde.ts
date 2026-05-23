import type { Recipe } from "./types";

export const hummusSalsaVerde: Recipe = {
  slug: "hummus-salsa-verde",
  title: "Hummus with Anchovy Salsa Verde, Kohlrabi & Pickled Onion",
  author: "Filip",
  headnote:
    "A summer lunch built in layers of contrast: cool, creamy hummus underneath; a bright, briny anchovy salsa verde on top; and shaved kohlrabi, radish and red onion in between for crunch. Olives and capers carry the salt. Serve with torn sourdough — this is a tear-and-scoop dish, no forks required (though one is allowed).",
  totalTimeMinutes: 30,
  baseServings: 4,
  tags: ["Summer", "Lunch", "Mezze"],
  images: [
    {
      src: "/recipes/hummus-salsa-verde.jpg",
      alt: "Hummus topped with salsa verde, shaved kohlrabi, radish, red onion and olives, served with sourdough on a vintage plate",
    },
    {
      src: "/recipes/hummus-salsa-verde-eaten.jpg",
      alt: "The same dish half-eaten, with green olives and capers visible through the salsa verde",
    },
  ],
  ingredients: [
    { amount: 1, note: "can (400g)", item: "Chickpeas, drained and rinsed", group: "Hummus" },
    { amount: 3, unit: "tbsp", item: "Tahini", group: "Hummus" },
    { amount: 1, item: "Lemon, juiced", group: "Hummus" },
    { amount: 1, item: "Garlic clove, grated", group: "Hummus" },
    { amount: 4, unit: "tbsp", item: "Ice water", group: "Hummus", pantry: true, shoppingItem: "Water" },
    { amount: 2, unit: "tbsp", item: "Olive oil", group: "Hummus", pantry: true, shoppingItem: "Olive oil" },
    { amount: 0.5, unit: "tsp", item: "Ground cumin", group: "Hummus", pantry: true, shoppingItem: "Ground cumin" },
    { item: "Salt", group: "Hummus", pantry: true, shoppingItem: "Salt" },

    { item: "Flat-leaf parsley, leaves and tender stems (a generous bunch)", group: "Anchovy salsa verde" },
    { item: "Fresh dill (a small handful)", group: "Anchovy salsa verde" },
    { item: "Fresh chives (a small handful, plus more to garnish)", group: "Anchovy salsa verde" },
    { amount: 3, item: "Anchovy fillets in oil", group: "Anchovy salsa verde" },
    { amount: 2, unit: "tbsp", item: "Capers, drained", group: "Anchovy salsa verde" },
    { amount: 1, item: "Garlic clove", group: "Anchovy salsa verde" },
    { amount: 1, unit: "tsp", item: "Dijon mustard", group: "Anchovy salsa verde" },
    { amount: 1, unit: "tbsp", item: "Red wine vinegar (or lemon juice)", group: "Anchovy salsa verde" },
    { amount: 6, unit: "tbsp", item: "Olive oil", group: "Anchovy salsa verde", pantry: true, shoppingItem: "Olive oil" },
    { item: "Black pepper", group: "Anchovy salsa verde", pantry: true, shoppingItem: "Black pepper" },

    { amount: 1, item: "Small kohlrabi, peeled", group: "To finish" },
    { amount: 6, item: "Red radishes", group: "To finish" },
    { amount: 0.5, item: "Red onion, very thinly sliced", group: "To finish" },
    { item: "Handful of green olives (Castelvetrano or similar), torn", group: "To finish" },
    { amount: 1, unit: "tbsp", item: "Capers, drained", group: "To finish" },
    { item: "Chive flowers, if you have them", group: "To finish" },
    { item: "Olive oil, to finish", group: "To finish", pantry: true, shoppingItem: "Olive oil" },
    { item: "Flake salt", group: "To finish", pantry: true, shoppingItem: "Flake salt" },

    { item: "Good sourdough or rye bread, torn into pieces", group: "To serve" },
  ],
  steps: [
    "Make the hummus: blend chickpeas, tahini, lemon juice, grated garlic, ice water, olive oil, cumin and salt until very smooth — at least 2–3 minutes in a strong blender or food processor. Loosen with more ice water if needed. Taste and adjust salt and lemon. Spread onto plates with the back of a spoon, leaving a shallow well in the middle.",
    "Make the salsa verde: finely chop the parsley, dill, chives, anchovies, capers and garlic together on a board until you have a coarse paste. Scrape into a bowl, stir in the Dijon, vinegar and olive oil. Season with pepper — anchovies and capers usually carry the salt. Loose, spoonable consistency.",
    "Soak the sliced red onion in cold water for 10 minutes to take the bite off, then drain and pat dry.",
    "Shave the kohlrabi and radishes on a mandoline into very thin rounds. If you don't have a mandoline, use a sharp knife and your patience.",
    "Build the plates: spoon salsa verde generously over the hummus. Pile shaved kohlrabi, radish and red onion on top. Scatter olives and capers. Finish with snipped chives, chive flowers if you have them, a final drizzle of olive oil and a pinch of flake salt.",
    "Serve immediately with torn sourdough.",
  ],
};
