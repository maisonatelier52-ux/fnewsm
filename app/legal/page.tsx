import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notices | Domain Name",
  description: "Corporate legal notices, intellectual property declarations, and legal contact desk.",
};

export default function LegalPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Corporate Notices & Regulatory Disclosures
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Legal Notices
        </h1>
        <p className="text-xs font-sans text-ink/60 mt-3">
          Domain Name Inc. • Legal & Compliance Division
        </p>
      </div>

      <div className="space-y-8 font-serif text-ink/90 leading-relaxed max-w-4xl mx-auto">
        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Notice 1
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Corporate Entity Declaration
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Domain Name is published by Domain Name Inc., an independent digital news corporation. All global publishing operations, domain registrations, and news syndication licenses are owned and maintained by the parent corporation.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Notice 2
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Trademarks & Brand Assets
          </h2>
          <p className="text-sm sm:text-base text-justify">
            &ldquo;Domain Name&rdquo;, the Domain Name crest logo, and &ldquo;The Daily News Dispatch&rdquo; are registered trademarks. Any unauthorized use of our name, logo, or brand elements in commercial marketing without explicit written consent is strictly prohibited.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Notice 3
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            DMCA & Copyright Infringement Claims
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Domain Name respects the intellectual property rights of others. If you believe your copyrighted work has been republished on our site in a manner that constitutes infringement, please submit a formal notice to our legal counsel at <span className="font-semibold text-blue-950 font-sans">legal@domainname.com</span>.
          </p>
        </section>

        <section className="pb-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Notice 4
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Legal Inquiries & Subpoena Policy
          </h2>
          <p className="text-sm sm:text-base text-justify">
            All legal service documents, court orders, or official subpoenas regarding newsroom records must be served electronically via our legal team at <span className="font-semibold text-blue-950 font-sans">legal@domainname.com</span>.
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
