import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border pt-6 pb-16 font-mono text-xs text-muted-dim">
      <p>
        © {year} {siteConfig.name}
      </p>
      <Link href="/impressum" className="focus-ring mt-2 inline-block hover:text-muted">
        Impressum
      </Link>
    </footer>
  );
}
