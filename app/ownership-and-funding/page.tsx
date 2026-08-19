import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ownership & Funding | Domain Name",
  description: "Transparency disclosure regarding ownership structure, revenue sources, and newsroom financial independence.",
};

export default function OwnershipAndFundingPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Financial Transparency & Governance
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Ownership & Funding
        </h1>
        <p className="text-xs font-sans text-ink/60 mt-3">
          Annual Public Transparency Disclosure • Domain Name
        </p>
      </div>

      <div className="space-y-8 font-serif text-ink/90 leading-relaxed max-w-4xl mx-auto">
        <section className="border-2 border-ink p-6 md:p-8 bg-stone-50 text-center mb-8">
          <p className="font-serif text-base md:text-lg italic text-ink/90 leading-relaxed">
            &ldquo;We maintain complete transparency regarding our ownership structure and financial backing to guarantee total trust with our readers.&rdquo;
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Disclosure 1
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Ownership Structure
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Domain Name is owned by Domain Name Inc., an independent private news publishing entity. No government entity, political party, sovereign wealth fund, or foreign state holds an equity stake or voting rights in our organization.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Disclosure 2
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Primary Revenue Streams
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Our newsroom operations are funded through a diversified revenue model to ensure economic resilience:
          </p>
          <ul className="list-disc list-inside mt-3 text-xs sm:text-sm font-sans space-y-2 text-ink/80">
            <li><strong>Digital Subscriptions & Memberships:</strong> Reader contributions and paid archives.</li>
            <li><strong>Display Advertising & Sponsorships:</strong> Clearly labeled, non-intrusive brand placements.</li>
            <li><strong>Syndication & Content Licensing:</strong> Licensing investigative articles to international media.</li>
          </ul>
        </section>

        <section className="pb-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Disclosure 3
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Editorial Firewall Guarantee
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Our advertisers, financial supporters, and commercial partners exert zero influence over story selection, investigative reporting, or editorial commentary. Newsroom staff operate behind a strict firewall isolated from sales operations.
          </p>
        </section>
      </div>

      {/* Return Link */}
      <div className="mt-14 pt-8 border-t-2 border-ink text-center">
        <Link href="/" className="inline-block text-xs font-sans font-bold uppercase tracking-widest text-ink hover:underline border-b border-ink">
          ← Return to Front Page
        </Link>
      </div>
    </div>
  );
}
