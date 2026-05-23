export type Unit = "cup" | "tsp" | "tbsp" | "oz" | "lb";

export type Ingredient = {
  amount?: number;
  unit?: Unit;
  densityGPerMl?: number;
  note?: string;
  item: string;
  group?: string;
  shoppingItem?: string;
  pantry?: boolean;
};

export type RecipeImage = { src: string; alt: string; credit?: string };

export type Recipe = {
  slug: string;
  title: string;
  author: string;
  headnote: string;
  totalTimeMinutes: number;
  baseServings: number;
  images: RecipeImage[];
  ingredients: Ingredient[];
  steps: string[];
  tags?: string[];
};
