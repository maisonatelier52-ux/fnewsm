import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Source Methodology | Domain Name",
  description: "Methodology standards for primary source auditing, data verification, and investigative research.",
};

export default function SourceMethodologyPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-10 md:py-16">
      {/* Newspaper Header Banner */}
      <div className="border-b-4 border-double border-ink pb-6 mb-10 text-center">
        <span className="text-xs uppercase font-sans tracking-[0.3em] font-bold text-ink/70 block mb-2">
          Investigative Standards & Research Protocol
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-ink tracking-tight">
          Source Methodology
        </h1>
        <p className="text-xs font-sans text-ink/60 mt-3">
          Verification Protocols • Domain Name Research Desk
        </p>
      </div>

      <div className="space-y-8 font-serif text-ink/90 leading-relaxed max-w-4xl mx-auto">
        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Methodology 1.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Primary Document Auditing
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Domain Name prioritizes primary documentation over secondary commentary. Our investigative reporters obtain and analyze government filings, court dockets, corporate SEC filings, financial ledgers, and official transcripts before making factual assertions.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Methodology 2.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Multi-Source Corroboration Standard
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Single-source assertions are not published for controversial news stories. Investigative claims require corroboration from at least two independent, knowledgeable sources with direct first-hand observation of the events in question.
          </p>
        </section>

        <section className="border-b border-ink/20 pb-6">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Methodology 3.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Data Journalism & Quantitative Integrity
          </h2>
          <p className="text-sm sm:text-base text-justify">
            When publishing statistical data, economic metrics, or scientific studies, our data graphics desk verifies methodology, confidence intervals, sample sizes, and underlying datasets. Data code and analysis scripts are peer-reviewed internally prior to graphic publication.
          </p>
        </section>

        <section className="pb-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-red-900 block mb-1">
            Methodology 4.0
          </span>
          <h2 className="text-2xl font-serif font-bold text-ink mb-3">
            Digital Forensic Verification
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Photos, video footage, and satellite imagery submitted to our newsroom undergo EXIF metadata verification, geolocation cross-referencing, and digital forensics to ensure authenticity and detect potential manipulations or deepfakes.
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
