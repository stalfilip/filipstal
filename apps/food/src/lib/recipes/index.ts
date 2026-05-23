import type { Recipe } from "./types";
import { breadedFish } from "./breaded-fish";
import { danishRyeBread } from "./danish-rye-bread";
import { nyBagels } from "./ny-bagels";
import { creamyBeefSweetPotatoMisoBroccoli } from "./creamy-beef-sweet-potato-miso-broccoli";
import { venisonWithCeleriacPuree } from "./venison-with-celeriac-puree";
import { pommesDarphin } from "./pommes-darphin";
import { grilledSalmonChiliMayo } from "./grilled-salmon-chili-mayo";
import { hummusSalsaVerde } from "./hummus-salsa-verde";

export const allRecipes: Recipe[] = [
  breadedFish,
  danishRyeBread,
  nyBagels,
  creamyBeefSweetPotatoMisoBroccoli,
  venisonWithCeleriacPuree,
  pommesDarphin,
  grilledSalmonChiliMayo,
  hummusSalsaVerde,
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return allRecipes.find((r) => r.slug === slug);
}
