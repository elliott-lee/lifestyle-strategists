import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Mark } from "./Mark";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
];


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-border/70 bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2.5">
          <Mark />
          <span className="font-serif text-[1.05rem] tracking-tight text-ink">
            Lifestyle Strategists
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm text-ink/70 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-colors hover:text-clinical"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/#contact"
          className="hidden items-center text-sm font-semibold text-clinical transition-colors hover:text-ink md:inline-flex"
        >
          Get in touch →
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink transition-colors hover:bg-muted md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border/70 bg-paper md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm text-ink/80">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="py-2 transition-colors hover:text-clinical"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className="py-2 font-semibold text-clinical transition-colors hover:text-ink"
            >
              Get in touch →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
