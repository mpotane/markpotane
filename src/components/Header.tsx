import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "https://blog.mpotane.com", external: true },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-700 bg-background/80 backdrop-blur-sm">
      <nav className="container max-w-screen-md mx-auto px-5 py-3 flex items-center gap-6">
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
