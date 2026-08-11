import { Mark } from "./Mark";

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-ink/60 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <Mark />
          <span className="font-serif text-ink">Lifestyle Strategists</span>
        </div>
        <p>© {new Date().getFullYear()} Lifestyle Strategists. Made in Canada.</p>
      </div>
    </footer>
  );
}
