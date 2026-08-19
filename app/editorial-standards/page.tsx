import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Standards & Code of Ethics | Domain Name",
  description: "Our standards of accuracy, independence, fact-checking, and journalistic ethics.",
};

export default function EditorialStandardsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Journalistic Governance & Guidelines
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Editorial Standards & Ethics
        </h1>
        <p className="text-xs font-sans text-ink/60 mt-3">
          Adopted by the Editorial Directorate • Last Revised August 2026
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Table of Contents / Summary Card */}
        <div className="lg:col-span-4">
          <div className="border-2 border-ink p-6 bg-stone-50/60 sticky top-24">
            <h2 className="text-sm font-serif font-bold uppercase tracking-wider text-ink border-b border-ink/30 pb-2 mb-4">
              Core Principles
            </h2>
            <ol className="space-y-2.5 text-xs font-sans font-medium text-ink/80 list-decimal list-inside">
              <li>Accuracy & Fact-Verification</li>
              <li>Independence & Conflicts</li>
              <li>Anonymous Sourcing Protocol</li>
              <li>Fairness & Right of Reply</li>
              <li>Corrections & Clarifications</li>
              <li>Generative AI & Tech Policy</li>
            </ol>

            <div className="mt-6 pt-4 border-t border-ink/20 text-[11px] font-sans text-ink/70 leading-relaxed">
              Questions regarding our editorial compliance or code of conduct can be directed to the Standards Editor.
            </div>
          </div>
        </div>

        {/* Right Columns: Policy Clauses */}
        <div className="lg:col-span-8 space-y-8 font-serif text-ink/90 leading-relaxed">
          
          <section className="border-b border-ink/20 pb-6">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
              Section 1.0
            </span>
            <h2 className="text-2xl font-serif font-bold text-ink mb-3">
              Accuracy & Rigorous Verification
            </h2>
            <p className="text-sm sm:text-base text-justify">
              Domain Name strives for meticulous accuracy in every dispatch we publish. Reporters and editors must verify all factual assertions with authoritative primary sources. Direct quotes must reflect the speaker&apos;s exact words without context alteration, and statistical claims must undergo multi-tiered copy-desk validation prior to publication.
            </p>
          </section>

          <section className="border-b border-ink/20 pb-6">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
              Section 2.0
            </span>
            <h2 className="text-2xl font-serif font-bold text-ink mb-3">
              Editorial Independence & Financial Integrity
            </h2>
            <p className="text-sm sm:text-base text-justify">
              Our newsroom operates with total autonomy from commercial sponsors, corporate advertisers, and political organizations. Journalists are strictly prohibited from holding financial investments in companies within their direct reporting beat or accepting gifts, sponsored travel, or honoraria that could compromise impartiality.
            </p>
          </section>

          <section className="border-b border-ink/20 pb-6">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
              Section 3.0
            </span>
            <h2 className="text-2xl font-serif font-bold text-ink mb-3">
              Use of Anonymous Sources
            </h2>
            <p className="text-sm sm:text-base text-justify">
              Anonymity is granted solely when information is vital to public interest and cannot be obtained through open records, or when disclosing identity poses severe personal, legal, or professional risk to the source. All confidential sourcing requires explicit clearance from the Department Desk Chief.
            </p>
          </section>

          <section className="border-b border-ink/20 pb-6">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
              Section 4.0
            </span>
            <h2 className="text-2xl font-serif font-bold text-ink mb-3">
              Fairness, Right of Reply & Corrections
            </h2>
            <p className="text-sm sm:text-base text-justify">
              Subjects of investigative reports or critical coverage must be provided reasonable advance opportunity to respond before publication. When errors of fact occur, Domain Name issues prompt, public corrections marked clearly at the top or bottom of the affected report.
            </p>
          </section>

          <section className="pb-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
              Section 5.0
            </span>
            <h2 className="text-2xl font-serif font-bold text-ink mb-3">
              Policy on Artificial Intelligence & Media Verification
            </h2>
            <p className="text-sm sm:text-base text-justify">
              No news article, headline, or investigative analysis published by Domain Name is generated by automated AI writing tools without human editorial oversight. Synthetic images or deepfake media are strictly prohibited unless featured as the explicit subject of news coverage with clear labeling.
            </p>
          </section>

        </div>
      </div>

      {/* Footer Return Link */}
      <div className="mt-14 pt-8 border-t-2 border-ink text-center">
        <Link href="/" className="inline-block text-xs font-sans font-bold uppercase tracking-widest text-ink hover:underline border-b border-ink">
          ← Return to Front Page
        </Link>
      </div>
    </div>
  );
}
