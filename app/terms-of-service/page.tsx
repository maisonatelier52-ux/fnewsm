import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Domain Name",
  description: "Digital publication terms of service, syndication rights, and intellectual property agreement.",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Legal Agreement & Publisher Conditions
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs font-sans text-ink/60 mt-3">
          Effective Date: August 1, 2026 • Domain Name Inc.
        </p>
      </div>

      <div className="space-y-8 font-serif text-ink/90 leading-relaxed max-w-4xl mx-auto">
        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Article 1
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Acceptance of Terms & Scope
          </h2>
          <p className="text-sm sm:text-base text-justify">
            By accessing, reading, subscribing to, or syndicating content from Domain Name (including mobile applications, RSS feeds, and email newsletters), you agree to be legally bound by these Terms of Service. If you do not agree with any provision contained herein, you must cease using our digital services immediately.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Article 2
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Intellectual Property & Content Republication
          </h2>
          <p className="text-sm sm:text-base text-justify">
            All news articles, investigative analysis, photographs, infographics, typography layout designs, and audio broadcasts published by Domain Name are protected under international copyright law. Uncontrolled scraping, automated AI training harvesting, or unauthorized commercial republication is strictly prohibited without explicit written syndication licensing.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Article 3
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            User Submissions & Reader Commentary
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Where interactive reader feedback or comment forums are enabled, users agree not to post defamatory, obscene, harassing, or trademark-infringing content. Domain Name reserves full editorial discretion to remove, edit, or reject reader comments that violate community standards.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Article 4
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Limitation of Liability & Warranties
          </h2>
          <p className="text-sm sm:text-base text-justify">
            While Domain Name exercises rigorous fact-checking and editorial review, all services and articles are provided on an &ldquo;as is&rdquo; basis. Domain Name assumes no liability for external hyperlinks, third-party press release claims, or market investment decisions made in reliance upon opinion content.
          </p>
        </section>

        <section className="pb-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Article 5
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Governing Law & Dispute Resolution
          </h2>
          <p className="text-sm sm:text-base text-justify">
            These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction of publication, without regard to conflict of law principles. Any legal proceedings arising hereunder shall be submitted exclusively to competent courts.
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
