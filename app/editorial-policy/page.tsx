import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy | Domain Name",
  description: "Newsroom principles of accuracy, independence, fact-checking, and corrections.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Journalistic Guidelines & Code of Ethics
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Editorial Policy
        </h1>
        <p className="text-xs font-sans text-ink/60 mt-3">
          Adopted by Domain Name Editorial Board • August 2026
        </p>
      </div>

      <div className="space-y-8 font-serif text-ink/90 leading-relaxed max-w-4xl mx-auto">
        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Principle 1
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Accuracy & Verification Standard
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Domain Name holds every published line to rigorous standards of accuracy. Reporters must verify facts with primary sources, official records, or trusted eyewitnesses. Unverified claims, speculation, or viral social media rumors are not published without rigorous copy desk auditing.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Principle 2
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Corrections & Clarifications Policy
          </h2>
          <p className="text-sm sm:text-base text-justify">
            When errors occur, we correct them rapidly and transparently. Corrections are appended to the affected report with a clear explanation of what was changed and why, ensuring full historical accountability.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Principle 3
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Anonymous Sourcing Rules
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Anonymity is granted sparingly and only when revealing a source&apos;s identity poses serious personal or professional risks. All anonymous sourcing must be vetted by a Department Desk Chief and corroborated by independent evidence.
          </p>
        </section>

        <section className="pb-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Principle 4
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Opinion & Editorial Separation
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Analysis and opinion columns are clearly demarcated from news reporting. Opinion pieces reflect the view of the author or Editorial Board, whereas news reporting remains strictly factual, neutral, and balanced.
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
