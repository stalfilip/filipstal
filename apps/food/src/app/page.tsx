import Image from "next/image";
import Link from "next/link";
import { allRecipes } from "@/lib/recipes";

function formatTime(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}

export default function Page() {
  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 sm:px-8 sm:py-14">
      <header className="mb-8 sm:mb-14">
        <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-brand sm:mb-3">
          Recipes
        </p>
        <h1 className="font-display text-[2rem] leading-[1.1] tracking-tight text-ink sm:text-5xl">
          All recipes
        </h1>
      </header>

      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
        {allRecipes.map((recipe) => (
          <li key={recipe.slug}>
            <Link
              href={`/recipes/${recipe.slug}`}
              className="group block focus:outline-none"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm bg-rule">
                {recipe.image.src ? (
                  <Image
                    src={recipe.image.src}
                    alt={recipe.image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                    No photo yet
                  </div>
                )}
              </div>
              {recipe.tags && recipe.tags.length > 0 && (
                <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-brand">
                  {recipe.tags.join(" · ")}
                </p>
              )}
              <h2 className={`${recipe.tags && recipe.tags.length > 0 ? "mt-1.5" : "mt-4"} font-display text-[22px] leading-tight tracking-tight text-ink group-hover:text-brand`}>
                {recipe.title}
              </h2>
              <p className="mt-1.5 font-display text-[14px] italic text-ink-muted">
                By {recipe.author}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                {formatTime(recipe.totalTimeMinutes)} · {recipe.baseServings} servings
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
