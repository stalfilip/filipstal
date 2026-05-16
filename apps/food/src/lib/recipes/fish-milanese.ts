export type Ingredient = { qty?: string; item: string };
export type Recipe = {
  slug: string;
  title: string;
  author: string;
  headnote: string;
  totalTimeMinutes: number;
  servings: string;
  image: { src: string; alt: string; credit?: string };
  ingredients: Ingredient[];
  steps: string[];
};

export const fishMilanese: Recipe = {
  slug: "fish-milanese",
  title: "Fish Milanese",
  author: "Kay Chun",
  headnote:
    "A fast weeknight dinner: quick-cooking flounder, lightly breaded and pan-fried until golden and crisp outside, tender within. A lemony brown-butter pan sauce with capers comes together in minutes for a tangy, briny finish, and a wedge of avocado on the side balances peppery arugula.",
  totalTimeMinutes: 30,
  servings: "4 servings",
  image: {
    src: "https://static01.nyt.com/images/2022/04/19/dining/kc-fish-milanese/kc-fish-milanese-threeByTwoLargeAt2X.jpg",
    alt: "Fish Milanese",
    credit: "Dane Tashima for The New York Times. Food Stylist: Monica Pierini.",
  },
  ingredients: [
    { qty: "1/4 cup", item: "all-purpose flour" },
    { qty: "2", item: "large eggs, beaten" },
    { qty: "1 cup", item: "plain bread crumbs" },
    { item: "Salt and black pepper" },
    { qty: "1/2 tsp", item: "dried oregano" },
    { qty: "4", item: "(5- to 6-oz) flounder fillets, or other thin white fish" },
    { qty: "6 tbsp", item: "unsalted butter" },
    { qty: "5 tbsp", item: "neutral oil, such as safflower or canola" },
    { qty: "2 tbsp", item: "minced shallot" },
    { qty: "1/4 tsp", item: "minced garlic" },
    { qty: "2 tbsp", item: "lemon juice, plus wedges for serving" },
    { qty: "2 tbsp", item: "chopped fresh parsley" },
    { qty: "1 tbsp", item: "capers, plus 1 tbsp caper brine" },
    { qty: "1 (5-oz)", item: "package baby arugula" },
    { qty: "1", item: "avocado, peeled and cut into wedges (optional)" },
  ],
  steps: [
    "Set up three shallow bowls: flour in one, beaten eggs in another, bread crumbs in the third. Season each with salt and pepper. Crumble the oregano between your fingertips into the crumbs and mix.",
    "Season the fish with salt. Working one piece at a time, dredge in flour (shake off excess), dip in egg, then press into the crumbs to adhere. Transfer to a plate.",
    "In a 12-inch nonstick skillet, melt 1 tablespoon butter in 1 tablespoon oil over medium heat. Cook 2 fillets until golden underneath, about 3 minutes. Flip and cook 2 minutes more, until golden and cooked through. Drain on a paper-towel-lined plate and season with salt. Wipe the skillet and repeat with another tablespoon each of butter and oil and the remaining fish.",
    "Wipe out the skillet and melt the remaining 4 tablespoons butter over medium-low heat. Add shallot and cook, stirring, until softened and the butter is golden brown, about 2 minutes. Stir in garlic until fragrant, 30 seconds. Off heat, add the remaining 3 tablespoons oil, the lemon juice, parsley, capers and caper brine; season with salt and pepper.",
    "Divide the fish, arugula and avocado among plates. Drizzle generously with the brown-butter vinaigrette. Serve with lemon wedges.",
  ],
};
