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
        Angaben gemäß § 5 TMG
      </p>

      <div className="mt-8 space-y-6 text-muted">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Name / Verantwortlich</h2>
          {/* TODO: add full legal name as required for the Impressum. */}
          <p className="mt-1">TODO — name</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Anschrift</h2>
          {/* TODO: add postal address (street, postal code, city, country). */}
          <p className="mt-1">TODO — address</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Kontakt</h2>
          {/* TODO: add contact email and/or phone number for legal correspondence. */}
          <p className="mt-1">TODO — contact</p>
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
