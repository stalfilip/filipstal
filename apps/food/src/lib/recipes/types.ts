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

export type Recipe = {
  slug: string;
  title: string;
  author: string;
  headnote: string;
  totalTimeMinutes: number;
  baseServings: number;
  image: { src: string; alt: string; credit?: string };
  ingredients: Ingredient[];
  steps: string[];
  tags?: string[];
};
