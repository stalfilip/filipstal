import Link from "next/link";

export function Nav() {
  return (
    <nav className="border-b border-rule">
      <div className="mx-auto flex max-w-[1100px] items-center px-5 py-4 sm:px-8 sm:py-5">
        <Link
          href="/"
          className="text-[11px] uppercase tracking-[0.22em] text-ink hover:text-brand"
        >
          Recipes
        </Link>
      </div>
    </nav>
  );
}
