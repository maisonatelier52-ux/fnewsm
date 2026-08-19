import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertising & Sponsored Policy | Domain Name",
  description: "Standards governing commercial advertisements, sponsored content labeling, and newsroom independence.",
};

export default function AdvertisingPolicyPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Commercial Standards & Sponsor Disclosure
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Advertising & Sponsored Policy
        </h1>
        <p className="text-xs font-sans text-ink/60 mt-3">
          Commercial Operations Guidelines • Domain Name
        </p>
      </div>

      <div className="space-y-8 font-serif text-ink/90 leading-relaxed max-w-4xl mx-auto">
        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Policy Clause 1
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Separation of News & Advertising
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Domain Name maintains a strict and impenetrable firewall between commercial advertising sales and newsroom editorial operations. Advertisers have no prior review rights, influence over headline coverage, or control over reporter assignments.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Policy Clause 2
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Clear Labeling of Sponsored Content
          </h2>
          <p className="text-sm sm:text-base text-justify">
            All paid content, native advertising, or brand partnerships are clearly labeled with terms such as &ldquo;Sponsored Content&rdquo; or &ldquo;Paid Advertisement&rdquo;. Sponsored content is designed in visual styles that clearly distinguish it from news reporting.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Policy Clause 3
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Prohibited Advertising Categories
          </h2>
          <p className="text-sm sm:text-base text-justify">
            To preserve reader trust and publishing integrity, Domain Name rejects advertising that contains deceptive claims, malicious software links, illegal products, hate speech, unverified financial scams, or predatory lending schemes.
          </p>
        </section>

        <section className="pb-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Policy Clause 4
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Advertising Desk Inquiries
          </h2>
          <p className="text-sm sm:text-base text-justify">
            For brand partnerships, media kit requests, or ethical sponsorship placements, contact our advertising team at <span className="font-semibold text-blue-950 font-sans">advertising@domainname.com</span>.
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
