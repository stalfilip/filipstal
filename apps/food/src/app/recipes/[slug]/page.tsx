import Image from "next/image";
import { notFound } from "next/navigation";
import { allRecipes, getRecipeBySlug } from "@/lib/recipes";
import { IngredientsSection } from "@/app/ingredients-section";

export function generateStaticParams() {
  return allRecipes.map((r) => ({ slug: r.slug }));
}

function formatTime(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  return (
    <main className="mx-auto max-w-[1100px] px-5 py-8 sm:px-8 sm:py-14">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col justify-center">
          {recipe.tags && recipe.tags.length > 0 && (
            <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-brand sm:mb-3">
              {recipe.tags.join(" · ")}
            </p>
          )}
          <h1 className="font-display text-[2rem] leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {recipe.title}
          </h1>
          <p className="mt-2 font-display text-[15px] italic text-ink-muted sm:mt-3">
            By {recipe.author}
          </p>

          <hr className="my-4 border-rule sm:my-5" />

          <dl className="space-y-2">
            <MetaRow label="Total time" value={formatTime(recipe.totalTimeMinutes)} />
            <MetaRow label="Yield" value={`${recipe.baseServings} servings`} />
          </dl>
        </div>

        <div>
          <figure>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-rule sm:aspect-[3/2]">
              {recipe.image.src ? (
                <Image
                  src={recipe.image.src}
                  alt={recipe.image.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[11px] uppercase tracking-[0.22em] text-ink-muted">
                  No photo yet
                </div>
              )}
            </div>
            {recipe.image.credit && (
              <figcaption className="mt-1.5 text-right text-[10px] uppercase tracking-wider text-ink-muted">
                {recipe.image.credit}
              </figcaption>
            )}
          </figure>

          <p className="mt-4 font-display text-[16px] leading-[1.6] text-ink/85 sm:mt-5 sm:text-[17px]">
            {recipe.headnote}
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 md:grid-cols-12 md:gap-16">
        <IngredientsSection
          ingredients={recipe.ingredients}
          baseServings={recipe.baseServings}
          slug={recipe.slug}
        />

        <section className="md:col-span-7">
          <h2 className="font-display text-xl tracking-tight text-ink sm:text-2xl">
            Preparation
          </h2>
          <ol className="mt-4 space-y-6 sm:mt-5 sm:space-y-8">
            {recipe.steps.map((step, i) => (
              <li key={i} className="grid grid-cols-[2rem_1fr] gap-3 sm:grid-cols-[2.5rem_1fr] sm:gap-4">
                <span className="font-display text-xl leading-none text-brand sm:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-[16px] leading-[1.6] text-ink sm:text-[17px] sm:leading-[1.65]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-muted">
        {label}
      </dt>
      <dd className="font-display text-[15px] text-ink">{value}</dd>
    </div>
  );
}
