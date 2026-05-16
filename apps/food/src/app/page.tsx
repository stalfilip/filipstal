import Image from "next/image";
import { fishMilanese as recipe } from "@/lib/recipes/fish-milanese";
import { IngredientsSection } from "./ingredients-section";

function formatTime(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}

export default function Page() {
  return (
    <main className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8 sm:py-14">
      {/* Hero: 2-col grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        {/* Left: title, byline, meta, actions */}
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-accent">
            Weeknight · Fish
          </p>
          <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {recipe.title}
          </h1>
          <p className="mt-3 font-display text-[15px] italic text-ink-muted">
            By {recipe.author}
          </p>

          <hr className="my-5 border-rule" />

          <dl className="space-y-2">
            <MetaRow label="Total time" value={formatTime(recipe.totalTimeMinutes)} />
            <MetaRow label="Yield" value={recipe.servings} />
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-accent px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-cream transition hover:opacity-80"
            >
              Add to shopping list
            </button>
          </div>
        </div>

        {/* Right: image + headnote */}
        <div>
          <figure>
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm bg-rule">
              <Image
                src={recipe.image.src}
                alt={recipe.image.alt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {recipe.image.credit && (
              <figcaption className="mt-1.5 text-right text-[10px] uppercase tracking-wider text-ink-muted">
                {recipe.image.credit}
              </figcaption>
            )}
          </figure>

          <p className="mt-5 font-display text-[17px] leading-[1.6] text-ink/85">
            {recipe.headnote}
          </p>
        </div>
      </div>

      {/* Ingredients + Steps */}
      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <IngredientsSection
          ingredients={recipe.ingredients}
          servings={recipe.servings}
          slug={recipe.slug}
        />

        <section className="md:col-span-7">
          <h2 className="font-display text-2xl tracking-tight text-ink">
            Preparation
          </h2>
          <ol className="mt-5 space-y-8">
            {recipe.steps.map((step, i) => (
              <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="font-display text-2xl leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-[17px] leading-[1.65] text-ink">
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
