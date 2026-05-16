import type { Recipe } from "./types";
import { breadedFish } from "./breaded-fish";
import { danishRyeBread } from "./danish-rye-bread";
import { nyBagels } from "./ny-bagels";
import { creamyBeefSweetPotatoMisoBroccoli } from "./creamy-beef-sweet-potato-miso-broccoli";
import { venisonWithCeleriacPuree } from "./venison-with-celeriac-puree";
import { pommesDarphin } from "./pommes-darphin";

export const allRecipes: Recipe[] = [
  breadedFish,
  danishRyeBread,
  nyBagels,
  creamyBeefSweetPotatoMisoBroccoli,
  venisonWithCeleriacPuree,
  pommesDarphin,
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find((r) => r.slug === slug);
}
