import { siteConfig } from "@/data/site-config";

// The /impressum route exists but is not linked here: its legal content
// (name/address/contact) is still TODO, so it must not be promoted as a
// finished page. Re-add a link once that content is filled in.
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border pt-6 pb-16 font-mono text-xs text-muted-dim">
      <p>
        © {year} {siteConfig.name}
      </p>
    </footer>
  );
}
