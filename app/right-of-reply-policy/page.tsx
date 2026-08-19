import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Right of Reply Policy | Domain Name",
  description: "Protocol and standards for individuals or entities seeking to submit a formal response to news coverage.",
};

export default function RightOfReplyPolicyPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Fairness & Editorial Response Standards
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Right of Reply Policy
        </h1>
        <p className="text-xs font-sans text-ink/60 mt-3">
          Editorial Governance • Domain Name Standards Bureau
        </p>
      </div>

      <div className="space-y-8 font-serif text-ink/90 leading-relaxed max-w-4xl mx-auto">
        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Standard 1.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Core Fairness Commitment
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Domain Name believes in fundamental journalistic fairness. Any individual, corporation, or public entity that is the subject of critical investigative reporting, serious allegations, or controversial coverage has a right of reply prior to or immediately following publication.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Standard 2.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Pre-Publication Contact Protocol
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Reporters are required to provide targets of critical reports reasonable time (typically 24 to 48 hours depending on news urgency) to review specific claims and submit a detailed written response before the story is finalized.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Standard 3.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Post-Publication Reply Submissions
          </h2>
          <p className="text-sm sm:text-base text-justify">
            If new information emerges or an affected party believes a published story lacks fair representation, a formal Right of Reply statement may be submitted to our Standards Editor. Where warranted, replies are published alongside or linked directly within the original report.
          </p>
        </section>

        <section className="pb-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Standard 4.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Submission Contact Desk
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Formal Right of Reply statements should be emailed directly to: <span className="font-semibold text-blue-950 font-sans">reply@domainname.com</span>. Please include the story URL, headline, date of publication, and your full contact details.
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
