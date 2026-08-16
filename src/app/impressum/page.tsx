import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Legal notice / Impressum.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 sm:px-10">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">Impressum</h1>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-dim">
        Angaben gemäß § 5 DDG
      </p>

      <div className="mt-8 space-y-6 text-muted">
        <div>
          <p>Aryan Barakzai</p>
          <p>Syltring 12</p>
          <p>22926 Ahrensburg</p>
          <p>Deutschland</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Kontakt</h2>
          <p className="mt-1">
            E-Mail:{" "}
            <a
              href="mailto:aryan@barakzai.cloud"
              className="focus-ring text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
            >
              aryan@barakzai.cloud
            </a>
          </p>
        </div>
      </div>

      <Link
        href="/"
        className="focus-ring mt-12 inline-block font-mono text-xs uppercase tracking-widest text-accent hover:underline"
      >
        ← Back to portfolio
      </Link>
    </div>
  );
}
