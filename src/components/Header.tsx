import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "https://blog.mpotane.com", external: true },
];

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-6 px-5 py-2.5 rounded-full border border-gray-700 bg-background/80 backdrop-blur-sm shadow-lg">
        {navLinks.map(({ label, href, external }) =>
          external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}
