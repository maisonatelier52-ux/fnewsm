import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms And Conditions | Domain Name",
  description: "Terms and conditions governing the use of Domain Name website, mobile apps, and subscriptions.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Legal Agreement & Conditions of Access
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Terms And Conditions
        </h1>
        <p className="text-xs font-sans text-ink/60 mt-3">
          Last Revised: August 2026 • Domain Name Media Group
        </p>
      </div>

      <div className="space-y-8 font-serif text-ink/90 leading-relaxed max-w-4xl mx-auto">
        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Section 1.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            User Binding Agreement
          </h2>
          <p className="text-sm sm:text-base text-justify">
            By browsing, accessing, or subscribing to Domain Name, you agree to comply with all terms and conditions set forth herein. These terms apply to all visitors, registered subscribers, and automated feeds accessing our services.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Section 2.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Copyright & Digital Property Rights
          </h2>
          <p className="text-sm sm:text-base text-justify">
            All news articles, investigative columns, photography, charts, graphics, and layout assets published by Domain Name are protected under international copyright treaties. Unauthorized syndication, commercial scraping, or automated scraping for AI model training without licensing is strictly prohibited.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Section 3.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Account Security & Newsletter Subscriptions
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Subscribers are responsible for maintaining the confidentiality of their digital credentials. Domain Name reserves the right to suspend or terminate accounts that breach security policies or engage in unauthorized access distribution.
          </p>
        </section>

        <section className="pb-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Section 4.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Disclaimer & Limitations of Liability
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Content published by Domain Name is intended for informational and journalistic purposes. Opinion columns do not constitute formal financial, legal, or investment advice. Domain Name disclaims liability for actions taken based upon news reporting.
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
